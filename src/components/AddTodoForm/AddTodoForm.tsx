import { useEffect, FC } from 'react';
import { FaUser } from 'react-icons/fa';
import { GiCheckMark } from 'react-icons/gi';
import { useForm, SubmitHandler } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import IconButton from 'components/IconButton';
import Input from 'components/Input';
import TodoModalForm from 'components/TodoModalForm';
import GoBackLink from 'components/GoBackLink';
import { Buttons, Form, Title } from './AddTodoForm.styled';
import { getIsTodo, toasts } from 'utils';
import { selectIsLoading, selectTodos } from 'redux/todos/selectors';
import { addTodo } from 'redux/todos/operations';
import { IconBtnType } from 'constants/iconBtnType';
import { BtnType } from 'constants/btnType';
import { ITodo } from 'types/types';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { Messages } from 'constants/messages';
import { selectUser } from 'redux/auth/selectors';

const AddTodoForm: FC = () => {
  const todos = useAppSelector(selectTodos);
  const user = useAppSelector(selectUser);
  const isLoading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<ITodo>();

  useEffect(() => {
    errors.title && toasts.errorToast(Messages.eTitleIsReq);
  }, [errors, isSubmitting]);

  const handleFormSubmit: SubmitHandler<ITodo> = (data) => {
    if (getIsTodo({ todos, newTodo: data })) return;
    const todo = { ...data, completed: false, userId: user.id as number };

    dispatch(addTodo(todo))
      .unwrap()
      .then(() => {
        toasts.successToast('Todo added successfully');
        reset();
      })
      .catch((error) => {
        toasts.errorToast(error);
      });
  };

  return (
    <TodoModalForm>
      <Title>Add todo</Title>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          settings={{ ...register('title', { required: true }) }}
          type='text'
          placeholder='Title'
          autoFocus
          inputWrap
          fieldIcon={<FaUser />}
          fieldIconSize={18}
        />
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

export default AddTodoForm;
