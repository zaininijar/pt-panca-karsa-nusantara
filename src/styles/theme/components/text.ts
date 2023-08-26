import { defineStyleConfig } from '@chakra-ui/react'

export const Text = defineStyleConfig({
  baseStyle: {
   
  },
  sizes: {
    lg: {
      fontSize: '18px',
      lineHeight: '22px',
      letterSpacing: '-0.02em',
      fontWeight: '300',
    },
    md: {
      fontSize: '16px',
      lineHeight: '20px',
      letterSpacing: '-0.02em',
      fontWeight: '300',
    },
    sm: {
      fontSize: '14px',
      lineHeight: '16px',
      letterSpacing: '-0.02em',
      fontWeight: '300',
    },
    xs: {
      fontSize: '12px',
      lineHeight: '14px',
      letterSpacing: '-0.02em',
      fontWeight: '300',
    },
  },
  variants: {
    // label
    label1: {
      fontSize: '14px',
      lineHeight: '16px',
      letterSpacing: '1.12px',
      fontWeight: '600',
    },
    label2: {
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '1.12px',
      fontWeight: '600',
    },
    label3: {
      fontSize: '10px',
      lineHeight: '10px',
      letterSpacing: '1.12px',
      fontWeight: '600',
    },

    // subhead
    subhead1: {
      fontSize: '22px',
      lineHeight: '26px',
      letterSpacing: '-0.01em',
      fontWeight: '400',
    },
    subhead2: {
      fontSize: '18px',
      lineHeight: '22px',
      letterSpacing: '-0.01em',
      fontWeight: '400',
    },
    subhead3: {
      fontSize: '16px',
      lineHeight: '18px',
      letterSpacing: '-0.01em',
      fontWeight: '400',
    },
    subhead4: {
      fontSize: '14px',
      lineHeight: '18px',
      letterSpacing: '-0.01em',
      fontWeight: '400',
    },
  },
  defaultProps: {
    
  },
})