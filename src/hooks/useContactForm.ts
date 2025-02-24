import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from "react-hot-toast";
import * as yup from 'yup';

import { sendContactUs } from "@/actions/sendContactUs";
import { SendContactFormDto } from "@/types/SendContactFormDto";

const schema = yup
  .object({
    firstName: yup.string().required('Ad daxil edilməlidir').min(2, 'Ad ən azı 2 simvoldan ibarət olmalıdır').max(50, 'Ad 50 simvoldan çox ola bilməz'),
    lastName: yup.string().required('Soyad daxil edilməlidir').min(2, 'Soyad ən azı 2 simvoldan ibarət olmalıdır').max(50, 'Soyad 50 simvoldan çox ola bilməz'),
    email: yup.string().email('Email formatı düzgün deyil').required('Email daxil edilməlidir'),
    phoneNumber: yup
      .string()
      .matches(/^\+994 \(\d{2}\) \d{3}-\d{2}-\d{2}$/, 'Telefon nömrəsi tam olmalıdır')
      .required('Telefon nömrəsi daxil edilməlidir'),
    message: yup.string().required('Mesaj daxil edilməlidir').max(250, 'Mesaj 250 simvoldan çox ola bilməz'),
  })
  .required();

const useContactForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<SendContactFormDto>({
    resolver: yupResolver(schema),
    mode: 'all',
    reValidateMode: 'onChange',
  });

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<SendContactFormDto> = async (data: SendContactFormDto) => {
    setLoading(() => true);
    const numbers = '0123456789';
    const newFormattedData = {
      ...data,
      phoneNumber: data.phoneNumber
        .split('')
        .map((ch) => {
          if (numbers.includes(ch)) {
            return ch;
          }
          return '';
        })
        .join(''),
    };

    console.log(newFormattedData);
    try {
      await sendContactUs(data);
      toast.success('Mesajınız göndərildi! Ən qısa zamanda sizinlə əlaqə saxlanılacaq');
      reset();
    } catch(_error:unknown) {
      console.error(_error);
      toast.error('Xəta baş verdi. Zəhmət olmasa biraz sonra yenidən cəhd edin');
    }

    return newFormattedData;
  };

  return { register, getValues, onSubmit, loading, errors, handleSubmit };
};

export { useContactForm };
