import { useContext } from 'react';
import { UserProfileContext } from '../context/userProfileContext';

import { Container, Typography } from '@mui/material';

import Image from './Image';

const Profile = () => {
  const { user } = useContext(UserProfileContext);
  return (
    <Container sx={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Image url={user.profileImgUrl} size="80" />
      <Typography variant="h4">{user.username}</Typography>
      {!!user.bio && <Typography variant="h5">{user.bio}</Typography>}
    </Container>
  )
}

export default Profile;