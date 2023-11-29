import { FC } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { HiOutlinePhone } from 'react-icons/hi';
import { SlLocationPin } from 'react-icons/sl';
import {
  UserInfo,
  Email,
  FullName,
  Image,
  Name,
  TodoInfo,
  UserData,
  TodoInfoIconWrap,
  UserProfileContainer,
} from './UserProfile.styled';
import { getUserAvatar } from 'utils';
import { useAppSelector } from 'hooks/redux';
import { selectUser } from 'redux/auth/selectors';

const UserProfile: FC = () => {
  const { name, avatar, lastName, email, dateOfBirth, phoneNumber, location } =
    useAppSelector(selectUser);
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
      <UserInfo>
        {dateOfBirth && (
          <TodoInfo>
            <TodoInfoIconWrap>
              <AiOutlineCalendar />
            </TodoInfoIconWrap>
            {dateOfBirth}
          </TodoInfo>
        )}
        {phoneNumber && (
          <TodoInfo>
            <TodoInfoIconWrap>
              <HiOutlinePhone />
            </TodoInfoIconWrap>
            {phoneNumber}
          </TodoInfo>
        )}
        {location && (
          <TodoInfo>
            <TodoInfoIconWrap>
              <SlLocationPin />
            </TodoInfoIconWrap>
            {location}
          </TodoInfo>
        )}
      </UserInfo>
    </UserProfileContainer>
  );
};

export default UserProfile;
