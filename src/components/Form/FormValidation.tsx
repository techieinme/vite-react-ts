import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import GenericInput from '@components/Html/GenericInput';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('valid email').required('email is required'),
  mobile: yup
    .string()
    .min(10, 'enter valid phoe nu')
    .required('mobile is required'),
  gender: yup.string().required('required'),
});

type FormValues = yup.InferType<typeof schema>;

const BasicFormValidation = () => {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const submit = (FormData: any) => {
    console.log('FormData', FormData);

    console.log(errors);
  };
  return (
    <div>
      {errors.name?.message} <br />
      {errors.email?.message} <br />
      {errors.mobile?.message} <br />
      {errors.gender?.message} <br />
      <form onSubmit={handleSubmit(submit)} noValidate>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <GenericInput
              {...field}
              placeholder="hello name"
              error={errors.email?.message}
            />
          )}
        />

        {/* <input type="text" {...register('name')} /> */}
        <input type="text" {...register('email')} />
        <input type="text" {...register('mobile')} />
        <select {...register('gender')}>
          <option>male</option>
          <option>female</option>
        </select>

        <input type="submit" name="submit" />
      </form>
    </div>
  );
};

export default BasicFormValidation;
