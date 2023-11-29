import { FC } from 'react';
import { BtnType } from 'constants/btnType';
import { Button } from './IconButton.styled';
import { IProps } from './IconButton.types';

const IconButton: FC<IProps> = ({
  children,
  type = BtnType.button,
  onBtnClick,
  ...props
}) => (
  <Button type={type} onClick={onBtnClick} {...props}>
    {children}
  </Button>
);

export default IconButton;
