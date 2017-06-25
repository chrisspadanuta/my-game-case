import { style, media } from 'typestyle';

const gameSearchStyles = {
  root: style(
    {
      backgroundColor: 'black',
      display: 'inline-block',
      padding: '10px',
      textAlign: 'center',
      verticalAlign: 'top'
    },
    media({ maxWidth: '600px'}, {
      fontSize: '30px',
      width: '100%'
    }),
    media({ minWidth: '601px'}, {
      fontSize: '30px',
      width: '400px'
    })
  ),
  searchBox: style(
    {
      width: '100%'
    }
  ),
  searchButton: style(
    {
      width: '100%'
    }
  )
}

export default gameSearchStyles;
