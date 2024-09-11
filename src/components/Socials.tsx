import { useContext } from 'react';
import { UserProfileContext } from '../context/userProfileContext';
import { Container, Icon } from '@mui/material';

import { TSocials, UserProfileContextType } from '../@types/userProfile';

import AppleMusic from '../assets/apple-music.svg';
import Bandcamp from '../assets/bandcamp.svg';
import BandsInTown from '../assets/bandsintown.svg';
import Facebook from '../assets/facebook.svg';
import Instagram from '../assets/instagram.svg';
import Soundcloud from '../assets/soundcloud.svg';
import Spotify from '../assets/spotify.svg';
import Tidal from '../assets/tidal.svg';
import Youtube from '../assets/youtube.svg';

const SOCIALS_MAP = {
  apple: AppleMusic,
  bandcamp: Bandcamp,
  bandsInTown: BandsInTown,
  facebook: Facebook,
  instagram: Instagram,
  soundcloud: Soundcloud,
  spotify: Spotify,
  tidal: Tidal,
  youtube: Youtube,
}

const Socials = () => {
  const { user } = useContext(UserProfileContext) as UserProfileContextType;
  if (!user.socials) return;

  return (
    <Container 
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {
        user.socials.map((social: TSocials) => {
          return (
            <Icon  key={`socials-${social}`} sx={{
              height: '30px',
              width: '30px',
              cursor: 'pointer',
            }}>
              {/* TODO: use an enum to fix the type */}
              <img src={SOCIALS_MAP[social]} />
            </Icon>
          )
        })
      }
    </Container>
  )
}

export default Socials;