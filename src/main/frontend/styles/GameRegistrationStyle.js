import { style, media } from 'typestyle';

const gameRegistrationStyles = {
  root: style(
    {
      width: '100%'
    },
    media({ maxWidth: '600px'}, {
      fontSize: '30px',
      padding: '10px'
    }),
    media({ minWidth: '601px'}, {
      fontSize: '20px',
    })
  )
}

export default gameRegistrationStyles;
