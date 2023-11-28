import { StyledLink } from './GoBackLink.styled';
import { IProps } from './GoBackLink.types';

const GoBackLink = ({ path }: IProps) => {
  return <StyledLink to={path}>Cancel</StyledLink>;
};

export default GoBackLink;
