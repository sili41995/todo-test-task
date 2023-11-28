import defaultUserAvatar from 'images/default-user-avatar.jpg';

const getUserAvatar = (avatar: string | undefined): string =>
  avatar ? avatar : defaultUserAvatar;

export default getUserAvatar;
