import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup
  .object({
    firstName: yup.string().required('Ad daxil edilməlidir').min(2, 'Ad ən azı 2 simvoldan ibarət olmalıdır').max(50, 'Ad 50 simvoldan çox ola bilməz'),
    lastName: yup.string().required('Soyad daxil edilməlidir').min(2, 'Soyad ən azı 2 simvoldan ibarət olmalıdır').max(50, 'Soyad 50 simvoldan çox ola bilməz'),
    email: yup.string().email('Email formatı düzgün deyil').required('Email daxil edilməlidir'),
    phoneNumber: yup
      .string()
      .matches(/^\+994 \(\d{2}\) \d{3}-\d{2}-\d{2}$/, 'Telefon nömrəsi tam olmalıdır')
      .required('Telefon nömrəsi daxil edilməlidir'),
    message: yup.string().required('Mesaj daxil edilməlidir').max(500, 'Mesaj 500 simvoldan çox ola bilməz'),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const useContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
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

    return newFormattedData;
  };

  return { register, onSubmit, errors, handleSubmit };
};

export { useContactForm };
