import { useEffect, useState, FC } from 'react';
import { MdEmail } from 'react-icons/md';
import {
  AiFillLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from 'react-icons/ai';
import { SubmitHandler, useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { Message, Title, Image, Form, Button } from './LoginForm.styled';
import defaultAvatar from 'images/default-signin-avatar.png';
import { toasts } from 'utils';
import AuthFormMessage from 'components/AuthFormMessage';
import Input from 'components/Input';
import { selectIsLoading, selectUser } from 'redux/auth/selectors';
import { loginUser } from 'redux/auth/operations';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { ICredentials } from 'types/types';
import { PagesPath } from 'constants/pagesPath';
import { FormType } from 'constants/formType';
import { IconBtnType } from 'constants/iconBtnType';
import { Messages } from 'constants/messages';

const { greetings, eEmailIsReq, ePassIsReq, ePassMinLength, logIn, signUp } =
  Messages;

const LoginForm: FC = () => {
  const [credentials, setCredentials] = useState<ICredentials | null>(null);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const isLoading = useAppSelector(selectIsLoading);
  const { name, avatar } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    watch,
  } = useForm<ICredentials>();
  const watchPassword = watch('password');
  const registerPageLink = `/${PagesPath.registerPath}`;
  const greetingMessage = `${greetings}${name ? `, ${name}` : ''}!`;
  const passwordBtnIcon = isShowPassword ? (
    <AiOutlineEyeInvisible />
  ) : (
    <AiOutlineEye />
  );

  const toggleIsShowPassword = () => {
    setIsShowPassword((prevState) => !prevState);
  };

  useEffect(() => {
    if (credentials) {
      const promise = dispatch(loginUser(credentials));
      promise.unwrap().catch((error) => {
        toasts.errorToast(error);
      });

      return () => {
        promise.abort();
      };
    }
  }, [credentials, dispatch]);

  useEffect(() => {
    errors.email && toasts.errorToast(eEmailIsReq);
    errors.password &&
      toasts.errorToast(
        errors.password.type === 'required' ? ePassIsReq : ePassMinLength
      );
  }, [isSubmitting, errors]);

  const onSubmit: SubmitHandler<ICredentials> = (data) => {
    setCredentials(data);
  };

  return (
    <>
      <Title>{logIn}</Title>
      <Message>{greetingMessage}</Message>
      <Image src={avatar ?? defaultAvatar} alt='user avatar' />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          settings={{ ...register('email', { required: true }) }}
          type='email'
          placeholder='Email'
          inputType={FormType.authForm}
          autoFocus
          inputWrap
          fieldIcon={<MdEmail />}
          fieldIconSize={20}
        />
        <Input
          settings={{
            ...register('password', { required: true, minLength: 7 }),
          }}
          type={isShowPassword ? 'text' : 'password'}
          placeholder='Password'
          inputType={FormType.authForm}
          btnType={IconBtnType.toggleShowPassword}
          action={toggleIsShowPassword}
          inputWrap
          fieldIcon={<AiFillLock />}
          fieldIconSize={20}
        >
          {watchPassword && passwordBtnIcon}
        </Input>
        <AuthFormMessage
          action={signUp}
          pageLink={registerPageLink}
          message={" if you don't have an account yet"}
        />
        <Button disabled={isLoading} type='submit'>
          {logIn}
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
