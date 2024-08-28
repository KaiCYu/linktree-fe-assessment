import { useState } from 'react';
import { Box, Button, Drawer } from '@mui/material';

// import { UserProfileContext } from '../context/userProfileContext';

import Profile from './Profile';
import Links from './Links';
import Socials from './Socials';
import ThemeCustomization from './ThemeCustomization';

const Layout = () => {
  const [open, setOpen] = useState(false);
  
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px',
    }}>
      <Profile/>
      <Links />
      <Socials />
      <Button onClick={toggleDrawer(true)}>Customize your look!</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <ThemeCustomization toggleDrawer={toggleDrawer} />
      </Drawer>
    </Box>
  )
}



export default Layout;