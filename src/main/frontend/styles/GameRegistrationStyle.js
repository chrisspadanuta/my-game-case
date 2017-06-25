import { style, media } from 'typestyle';

const gameRegistrationStyles = {
  root: style(
    {
      fontSize: '30px'
    },
    media({ maxWidth: '600px'}, {
      padding: '2px'
    }),
    media({ minWidth: '601px'}, {
      padding: '10px'
    })
  )
}

export default gameRegistrationStyles;
