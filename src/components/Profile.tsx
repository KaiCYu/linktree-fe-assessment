import { useContext } from 'react';
import { UserProfileContext } from '../context/userProfileContext';
import { UserProfileContextType } from '../@types/userProfile';
import { Container, Typography } from '@mui/material';

import Image from './Image';

const Profile = () => {
  const { user } = useContext(UserProfileContext) as UserProfileContextType;
  const { username, profileImgUrl, bio } = user;
  return (
    <Container sx={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Image url={profileImgUrl} size="80" />
      <Typography variant="h4">{username}</Typography>
      {!!bio && <Typography variant="h5">{bio}</Typography>}
    </Container>
  )
}

export default Profile;