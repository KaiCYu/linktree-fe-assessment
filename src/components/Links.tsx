import { useContext } from 'react';
import { UserProfileContext } from '../context/userProfileContext';
import { ThemeContext } from '../context/ThemeContext';
import { ThemeContextType } from '../@types/theme';

import { LinkItem, LinkGroup } from '../@types/userProfile';
import { Avatar, Button, Container, Grid, Typography } from '@mui/material';

const Links = () => {
  const { user } = useContext(UserProfileContext);

  return (
    <Container sx={{ 
      display: 'flex',
      flexDirection: 'column', 
      gap: '12px '
    }}>
      {
        user.links.map(({ layout, items }: LinkGroup, index: number) => {
          if (layout === 'grid') {
            return (
              // TODO: fix GridLinks
              <ListLinks key={`grid-links-${layout}-${index}`} links={items} />
            )
          }
          return (
            <ListLinks key={`list-links-${layout}-${index}`} links={items} />
          )
        })
      }
    </Container>
  )
}

export default Links;

// TODO: pull these into separate components
const ListLinks = ({ links }: { links: LinkItem[] }) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    }}>
      {
        links.map(({ title, linkImgUrl }: LinkItem) => {
          return (
            <Container key={`link-${title}`} sx={{
              display: 'flex',
              width: '100%',
              flexDirection: 'row',
            }}>
              <Button
                variant="outlined" 
                sx={{
                  width: '100%',
                  borderRadius: '20px',
                  justifyContent: linkImgUrl ? 'space-between' : 'center',
                  height: '52px',
                  backgroundColor: theme.buttonBackgroundColor,
                  borderColor: theme.buttonBorderColor
                }}
                startIcon={linkImgUrl ? <Avatar src={linkImgUrl} /> : undefined}
                endIcon={linkImgUrl ? true : undefined} // This is a hack to force the startIcon to the left
              >
                
                <Typography variant="body2" sx={{ color: theme.buttonTextColor }}>
                  {title}
                </Typography>
              </Button>
            </Container>
          )
        })
      }
    </Container>
  )
}

// TODO: fix css for grid view
const GridLinks = ({ links }: { links: LinkItem[] }) => {
  // console.log('links::: ', links)
  return (
    <Container>
      <Grid container spacing={1} sx={{
        // display: 'flex',
        // flexDirection: 'row',
        // gap: '8px',
      }}>
        {
          links.map(({ title, linkImgUrl }: LinkItem) => {
            return (
              <Grid size={8}>
                <Button 
                  variant="outlined" 
                  sx={{
                    width: '100%',
                    borderRadius: '20px',
                    justifyContent: 'space-between',
                  }}
                  startIcon={<Avatar src={linkImgUrl} />}
                  endIcon={true} // This is a hack to force the startIcon to the left
                >
                  
                  <span>
                    {title}
                  </span>
                </Button>
              </Grid>
            )
          })
        }
      </Grid>

    </Container>
  )
}