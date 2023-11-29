import { useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { GiCheckMark } from 'react-icons/gi';
import { useForm, SubmitHandler } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import IconButton from 'components/IconButton';
import Input from 'components/Input';
import { Buttons, Form, Title } from './AddTodoForm.styled';
import { toasts } from 'utils';
import { selectIsLoading } from 'redux/todos/selectors';
import { addTodo } from 'redux/todos/operations';
import { IconBtnType } from 'constants/iconBtnType';
import { BtnType } from 'constants/btnType';
import { ITodo } from 'types/types';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { PagesPath } from 'constants/pagesPath';
import TodoModalForm from 'components/TodoModalForm';
import GoBackLink from 'components/GoBackLink';

const AddTodoForm = () => {
  const isLoading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<ITodo>();
  const location = useLocation();
  const goBackLink = location.state?.from || PagesPath.homePath;

  useEffect(() => {
      errors.title && toasts.errorToast('Title is required');
  }, [errors, isSubmitting]);

  const handleFormSubmit: SubmitHandler<ITodo> = (data) => {
    const todo = { ...data, completed: false, userId: 10 };
    dispatch(addTodo(todo))
      .unwrap()
      .then(() => {
        toasts.successToast('Todo added successfully');
        reset();
      })
      .catch(() => {
        toasts.errorToast('Adding a todo failed');
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
          <GoBackLink path={goBackLink} />
        </Buttons>
      </Form>
    </TodoModalForm>
  );
};

export default AddTodoForm;
