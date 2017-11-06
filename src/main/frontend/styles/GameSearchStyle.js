import { style, media } from 'typestyle';

const gameSearchStyles = {
  root: style(
    {
      backgroundColor: '#222',
      padding: '10px',
      textAlign: 'center',
      verticalAlign: 'top',
      $nest: {
        input: {
          fontSize: '1.5em',
          marginBottom: '3px',
          width: '100%'
        },
        button: {
          fontSize: '1em',
          padding: '10px;'
        }
      }
    },
    media({ minWidth: '601px'}, {
      display: 'inline-block'
      /*width: '400px'*/
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
