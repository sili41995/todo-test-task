import { FC } from 'react';
import { Container, StyledInput, Label } from './Input.styled';
import IconButton from 'components/IconButton';
import { IProps } from './Input.types';

const Input: FC<IProps> = ({
  isCheckedIcon,
  fieldIcon,
  settings,
  inputWrap,
  btnType,
  children,
  action,
  right = 0,
  ...props
}) => {
  const isCheckBox = props.type === 'checkbox';
  const input = (
    <StyledInput
      {...settings}
      {...props}
      className={isCheckBox ? 'isHidden' : ''}
    />
  );

  if (isCheckBox) {
    return (
      <Label checked={props.checked} inputType={props.inputType}>
        {isCheckedIcon}
        {input}
      </Label>
    );
  }
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
