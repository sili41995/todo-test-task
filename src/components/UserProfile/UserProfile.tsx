import { FC } from 'react';
import {
  Email,
  FullName,
  Image,
  Name,
  UserData,
  UserProfileContainer,
} from './UserProfile.styled';
import { getUserAvatar } from 'utils';
import { useAppSelector } from 'hooks/redux';
import { selectUser } from 'redux/auth/selectors';

const UserProfile: FC = () => {
  const { name, avatar, lastName, email } = useAppSelector(selectUser);
  const userAvatar = getUserAvatar(avatar);
  const userName = lastName ? `${name} ${lastName}` : name;

  return (
    <UserProfileContainer>
      <Name>{name}</Name>
      <UserData>
        <Image src={userAvatar} alt='user avatar' />
        <FullName>{userName}</FullName>
        <Email>{email}</Email>
      </UserData>
    </UserProfileContainer>
  );
};

export default UserProfile;
