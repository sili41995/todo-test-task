import { useEffect, useState, FC } from 'react';
import { FaUser } from 'react-icons/fa';
import { GiCheckMark } from 'react-icons/gi';
import { useParams } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { Buttons, Form, Title, InputContainer } from './EditForm.styled';
import IconButton from 'components/IconButton';
import Input from 'components/Input';
import TodoModalForm from 'components/TodoModalForm';
import GoBackLink from 'components/GoBackLink';
import { toasts } from 'utils';
import { useTargetTodo } from 'hooks';
import { updateTodo } from 'redux/todos/operations';
import { selectIsLoading } from 'redux/todos/selectors';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { ITodo } from 'types/types';
import { BtnType } from 'constants/btnType';
import { PagesPath } from 'constants/pagesPath';
import { IconBtnType } from 'constants/iconBtnType';
import { Messages } from 'constants/messages';

const EditForm: FC = () => {
  const isLoading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();
  const id = useParams()[PagesPath.dynamicParam];
  const { title, completed } = useTargetTodo() as ITodo;
  const [checked, setChecked] = useState(completed);

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<ITodo>();

  useEffect(() => {
    errors.title && toasts.errorToast(Messages.eTitleIsReq);
  }, [errors, isSubmitting]);

  useEffect(() => {
    setChecked(completed);

    return () => {
      reset();
    };
  }, [reset, id, completed]);

  const handleFormSubmit: SubmitHandler<ITodo> = (data) => {
    dispatch(updateTodo({ ...data, id: Number(id) }))
      .unwrap()
      .then(() => {
        toasts.successToast('Todo updated successfully');
      })
      .catch((error) => {
        toasts.errorToast(error);
      });
  };

  const onCheckboxChange = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <TodoModalForm>
      <Title>Todo editing</Title>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputContainer>
          <Input
            settings={{ ...register('completed') }}
            checked={checked}
            type='checkbox'
            onChange={onCheckboxChange}
          />
          <Input
            defaultValue={title}
            settings={{ ...register('title', { required: true }) }}
            type='text'
            placeholder='Title'
            inputWrap
            fieldIcon={<FaUser />}
            fieldIconSize={18}
          />
        </InputContainer>
        <Buttons>
          <IconButton
            disabled={isLoading}
            btnType={IconBtnType.accept}
            width={44}
            height={35}
            type={BtnType.submit}
          >
            <GiCheckMark />
          </IconButton>
          <GoBackLink />
        </Buttons>
      </Form>
    </TodoModalForm>
  );
};

export default EditForm;
