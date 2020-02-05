// ******** STYLE VARS FOR STYLED-COMPONENTS ******** //
// ************************************************* //

const theme= {
  // *** THEME COLORS ***
  black: '#000',
  white: '#eee',
  gray: '#999',
  lightGray: '#aaa',
  orange: 'darkGoldenRod',
  blue: 'cornflowerBlue',
  green: '#219653',
  brown: 'darkKhaki',

  // translucent
  transBlack: 'rgba(0, 0, 0, 0.8)',
  transWhite: 'rgba(255, 255, 255, 0.8)',
} //end theme

const fontStyles= {
  // **** FONT COLORS ****
  pColor: theme.gray,
  linkColor: theme.orange,
  h1Color: theme.gray,
  h2Color: theme.gray,
  h3Color: theme.gray,
  h4Color: theme.gray,
  h5Color: theme.gray,

// **** FONT SIZES ****
  extraSmallPSize: '0.8rem',
  smallPSize: '1rem',
  pSize: '1.4rem',
  linkSize: '1.4rem',
  h1Size: '2.4rem',
  h2Size: '1.9rem',
  h3Size: '1.8rem',
  h4Size: '1.1rem',
  h5Size: '1.6rem',
}//end fontStyles

const btnStyles= {
  bgColor: theme.green,
  fontColor: fontStyles.pColor,
  fontSize: fontStyles.pSize
}//end btnStyles

const cardStyles= {
  backgroundColor: theme.gray
}//end cardStyles

const headerStyles= {
  backgroundColor: theme.black
}//end footerStyles

const footerStyles= {
  backgroundColor: theme.gray
}//end footerStyles

const formStyles= {
  color: theme.black,
  bgColor: theme.gray
}//end formStyles

export {
  theme, 
  fontStyles,
  btnStyles,
  cardStyles,
  headerStyles,
  footerStyles,
  formStyles
};