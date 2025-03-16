'use client';

import { InputMask } from '@react-input/mask';
import { forwardRef, InputHTMLAttributes } from 'react';
import { Button, Input, TextArea } from 'react-aria-components';

import { useContactForm } from '@/hooks/useContactForm';
import { cn } from '@/lib/utils';

const ContactUsForm = () => {
  const { errors, register, onSubmit, loading, handleSubmit } = useContactForm();

  return (
    <div className="w-full max-w-[704px] rounded-lg bg-white px-8 py-16 shadow-[0px_10px_35px_0px_rgba(0,0,0,0.03)] md:px-16">
      <div className="mb-4 text-center text-2xl font-semibold text-[#000A38] md:mb-6 md:text-[40px]">Bizimlə əlaqə</div>
      <div className="font-regular mb-8 text-center text-sm leading-[2] text-[#000A38] md:text-base md:leading-[2]">
        Əgər köməyimizə ehtiyacınız varsa, platformadan necə istifadə edəcəyinizlə bağlı suallarınız var və ya texniki problemlər yaşayırsınızsa, bizimlə əlaqə saxlamaqdan çəkinməyin.
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormInput
            {...register('firstName')}
            placeholder="Ad"
            disabled={loading}
          />
          <FormInput
            {...register('lastName')}
            placeholder="Soyad"
            disabled={loading}
          />
          <FormInput
            {...register('email')}
            placeholder="Email"
            disabled={loading}
          />
          <InputMask
            {...register('phoneNumber')}
            mask="+994 (__) ___-__-__"
            replacement={{ _: /\d/ }}
            placeholder="+994 ___"
            disabled={loading}
            className="md:font-regular rounded-lg border border-[#EBEBEB] bg-[#FCFCFC] p-[14px] text-base font-medium text-[#000A38] shadow-[0px_4px_15px_-2px_rgba(24,39,75,0.04)] placeholder:text-[#000A38] focus:outline-none"
          />
          {/* add on change of react hook form */}
          <TextArea
            {...register('message')}
            placeholder="Fikirləriniz..."
            rows={6}
            disabled={loading}
            className="md:font-regular rounded-lg border border-[#EBEBEB] bg-[#FCFCFC] p-[14px] text-base font-medium text-[#000A38] shadow-[0px_4px_15px_-2px_rgba(24,39,75,0.04)] placeholder:text-[#C3C8C9] focus:outline-none md:col-span-2"
          />
        </div>
        <div className="mb-10 flex flex-col gap-4">
          {errors.firstName && <div className="rounded-md border border-red-300 bg-red-100 px-3 py-2 text-red-500">{errors.firstName?.message}</div>}
          {errors.lastName && <div className="rounded-md border border-red-300 bg-red-100 px-3 py-2 text-red-500">{errors.lastName?.message}</div>}
          {errors.email && <div className="rounded-md border border-red-300 bg-red-100 px-3 py-2 text-red-500">{errors.email?.message}</div>}
          {errors.phoneNumber && <div className="rounded-md border border-red-300 bg-red-100 px-3 py-2 text-red-500">{errors.phoneNumber?.message}</div>}
          {errors.message && <div className="rounded-md border border-red-300 bg-red-100 px-3 py-2 text-red-500">{errors.message?.message}</div>}
        </div>
        <div className="flex justify-center">
          <FormSubmitButton disabled={loading} />
        </div>
      </form>
    </div>
  );
};

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(function FormInput({ className = '', ...props }: FormInputProps, ref) {
  return (
    <Input
      ref={ref}
      className={cn({
        'md:font-regular rounded-lg border border-[#EBEBEB] bg-[#FCFCFC] p-[14px] text-base font-medium text-[#000A38] shadow-[0px_4px_15px_-2px_rgba(24,39,75,0.04)] placeholder:text-[#000A38] focus:outline-none':
          true,
        [className]: true,
      })}
      {...props}
    />
  );
});

const FormSubmitButton = ({ disabled }: { disabled: boolean }) => {
  return (
    <Button
      type="submit"
      isDisabled={disabled}
      className="w-full rounded-full bg-[hsl(162,71%,38%)] py-3 text-xl font-semibold text-white transition hover:bg-[hsl(162,71%,34%)] md:w-fit md:px-[90px]">
      Göndər
    </Button>
  );
};

export { ContactUsForm };
