import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import GenericButton from '@components/Html/GenericButton';
import GenericInput from '@components/Html/GenericInput';
import { useState, type ReactNode } from 'react';

const Schema = yup.object({
  name: yup.string().required('name is required'),
});

type formValues = yup.InferType<typeof Schema>;

const Validation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<formValues>({
    resolver: yupResolver(Schema),
  });

  const submitFrom = (FormData: formValues) => {
    console.log(FormData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submitFrom)} noValidate>
        <input type="text" {...register('name')} />
        {errors?.name?.message}
        <Controller
          name="name"
          control={control}
          render={({ field }) => <GenericInput {...field} placeholder="name" />}
        />

        <input type="submit" name="submit" />
      </form>
    </div>
  );
};

export default Validation;
