import { Container, StyledInput } from './Input.styled';
import IconButton from 'components/IconButton';
import { IProps } from './Input.types';

const Input = ({
  fieldIcon,
  settings,
  inputWrap,
  btnType,
  children,
  action,
  right = 0,
  ...props
}: IProps) => {
  const input = <StyledInput {...settings} {...props} />;
  const inputWithWrap = (
    <Container {...props}>
      {input}
      {fieldIcon}
      {btnType && (
        <IconButton
          position='absolute'
          top='center'
          right={right}
          btnType={btnType}
          width={44}
          height={35}
          onBtnClick={action}
          inputWrap
        >
          {children}
        </IconButton>
      )}
    </Container>
  );

  return inputWrap ? inputWithWrap : input;
};

export default Input;
