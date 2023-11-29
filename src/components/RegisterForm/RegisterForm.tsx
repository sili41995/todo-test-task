import { useEffect, FC } from 'react';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiFillLock } from 'react-icons/ai';
import { SubmitHandler, useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button, Message, Title } from './RegisterForm.styled';
import { toasts } from 'utils';
import AuthFormMessage from 'components/AuthFormMessage';
import Input from 'components/Input';
import { registerUser } from 'redux/auth/operations';
import { selectIsLoading } from 'redux/auth/selectors';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { ICredentials } from 'types/types';
import { PagesPath } from 'constants/pagesPath';
import { FormType } from 'constants/formType';
import { useNavigate } from 'react-router-dom';

const RegisterForm: FC = () => {
  const navigate = useNavigate();
  const isLoading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<ICredentials>();
  const loginPageLink = `/${PagesPath.loginPath}`;

  const onSubmit: SubmitHandler<ICredentials> = (data) => {
    const credentials = {
      avatar:
        'https://www.sailmet.com/Content/Images/news/202111/a2b1176f1dda45cb9000980a8edced6a.jpg',
      ...data,
    };
    dispatch(registerUser(credentials))
      .unwrap()
      .then(() => {
        toasts.successToast('User has been successfully registered');
        navigate(loginPageLink);
      })
      .catch((error) => {
        toasts.errorToast(error);
      });
  };

  useEffect(() => {
    errors.name && toasts.errorToast('Username is required');
    errors.email && toasts.errorToast('Email is required');
    errors.password &&
      toasts.errorToast(
        errors.password.type === 'required'
          ? 'Password is required'
          : 'Password minimum length is 7 characters'
      );
  }, [errors, isSubmitting]);

  return (
    <>
      <Title>sign up</Title>
      <Message>Welcome to Phonebook!</Message>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          settings={{ ...register('name', { required: true }) }}
          type='text'
          placeholder='Username'
          inputType={FormType.authForm}
          autoFocus
          inputWrap
          fieldIcon={<FaUser />}
          fieldIconSize={20}
        />
        <Input
          settings={{ ...register('email', { required: true }) }}
          type='email'
          placeholder='Email'
          inputType={FormType.authForm}
          inputWrap
          fieldIcon={<MdEmail />}
          fieldIconSize={20}
        />
        <Input
          settings={{
            ...register('password', { required: true, minLength: 7 }),
          }}
          type='password'
          placeholder='Password'
          inputType={FormType.authForm}
          inputWrap
          fieldIcon={<AiFillLock />}
          fieldIconSize={20}
        />
        <AuthFormMessage
          action={'Log in'}
          pageLink={loginPageLink}
          message={'if you have an account'}
        />
        <Button disabled={isLoading} type='submit'>
          Enlist
        </Button>
      </Form>
    </>
  );
};

export default RegisterForm;
