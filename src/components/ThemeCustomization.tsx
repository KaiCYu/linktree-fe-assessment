import { useContext } from 'react';
import { ThemeContextType, ITheme } from '../@types/theme';
import { ThemeContext } from '../context/ThemeContext';
import { Button, Box } from '@mui/material';

import { HexColorPicker } from "react-colorful";

// const CUSTOMIZATIONS_MAP = {
//   buttonBackgroundColor: '--theme-button-background-color', 
//   buttonTextColor: '--theme-button-text-color', 
//   backgroundColor: '--theme-background-color',
//   buttonBorderColor: '--theme-button-border-color',
// }

const ThemeCustomization = ({ toggleDrawer }: { toggleDrawer: (open: boolean) => void}) => {
  const { theme, changeTheme } = useContext(ThemeContext) as ThemeContextType;
  const handleBackgroundColorChange = (color: string) => {
    document.documentElement.style.setProperty('--theme-background-color', color);
    changeTheme((prev: ITheme) => {
      return {
        ...prev,
        backgroundColor: color,
      }
    })
  }
  
  const handleButtonTextColorChange = (color: string) => {
    document.documentElement.style.setProperty('--theme-button-text-color', color);
    changeTheme((prev: ITheme) => {
      return {
        ...prev,
        buttonTextColor: color,
      }
    })
  }

  const handleButtonBackgroundColorChange = (color: string) => {
    document.documentElement.style.setProperty('--theme-button-background-color', color);
    changeTheme((prev: ITheme) => {
      return {
        ...prev,
        buttonBackgroundColor: color,
      }
    })
  }

  const handleButtonBorderColorChange = (color: string) => {
    document.documentElement.style.setProperty('--theme-button-border-color', color);
    changeTheme((prev: ITheme) => {
      return {
        ...prev,
        buttonBorderColor: color,
      }
    })
  }

  return (
    <Box sx={{ width: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', background: theme.backgroundColor, height: '100vh' }} role="presentation" >
      <div>
        <label>Background Color</label>
        <HexColorPicker color={theme.backgroundColor} onChange=
        {handleBackgroundColorChange} />
      </div>

      <div>
        <label>Button Text Color</label>
        <HexColorPicker color={theme.buttonTextColor} onChange=
        {handleButtonTextColorChange} />
      </div>

      <div>
        <label>Button Background Color</label>
        <HexColorPicker color={theme.buttonBackgroundColor} onChange=
        {handleButtonBackgroundColorChange} />
      </div>

      <div>
        <label>Button Border Color</label>
        <HexColorPicker color={theme.buttonBackgroundColor} onChange=
        {handleButtonBorderColorChange} />
      </div>
      <Button sx={{ marginTop: '20px'}} variant="contained" onClick={toggleDrawer(false)}>Close</Button>

    </Box>
  )
}

export default ThemeCustomization;