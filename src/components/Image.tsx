import styled from '@emotion/styled'
import Avatar from '@mui/material/Avatar';

interface ImageProps {
  url: string;
  size?: string;
}

const Image = ({ url, size }: ImageProps) => {
  return (
    <Avatar 
      src={url} 
      sx={{
        height: size ? `${size}px` : '40px',
        width: size ?  `${size}px` : '40px',
      }} 
    />
  )
}

export default Image;