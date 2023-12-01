import userAvatars from 'constants/userAvatars';

const getRandomAvatar = () => {
  const randomNumber = Math.random() * userAvatars.length;
  const avatarIndex = Math.round(randomNumber);

  return userAvatars[avatarIndex];
};

export default getRandomAvatar;
