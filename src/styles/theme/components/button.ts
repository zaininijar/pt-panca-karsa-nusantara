import { defineStyleConfig } from '@chakra-ui/react'

export const Button = defineStyleConfig({
  baseStyle: {
   
  },
  sizes: {
    md: {
      fontSize: '16px',
      lineHeight: '16px',
      letterSpacing: '-0.03em',
      fontWeight: '600',
    },
    sm: {
      fontSize: '14px',
      lineHeight: '14px',
      letterSpacing: '-0.03em',
      fontWeight: '600',
    },
    xs: {
      fontSize: '12px',
      lineHeight: '12px',
      letterSpacing: '-0.03em',
      fontWeight: '600',
    },
  },
  variants: {
    primary: {
      padding: '10px 24px',
      justifyContent: 'center',
      backgroundColor: 'primary.500',
      color: 'white',
      transition: `all 0.3s ease`,
      _hover:{
        backgroundColor: 'primary.600'
      }
    },
    secondary: {
      padding: '10px 24px',
      justifyContent: 'center',
      backgroundColor: 'secondary.500',
      color: 'white',
      transition: `all 0.3s ease`,
      _hover:{
        backgroundColor: 'secondary.700'
      }
    },
  },
  defaultProps: {
    
  },
})