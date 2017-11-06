import { style, media } from 'typestyle';

const mobile_device = "900px";
const desktop_device = "901px";

const playerProfileStyles = {
  root: style(
    {
      display: 'flex'
    },
    media({ minWidth: desktop_device}, {
      justifyContent: 'center'
    })
  ),
  contentArea: style(
    {
      flex: 1
    },
    media({ maxWidth: mobile_device}, {
      margin: '10px 5px'
    }),
    media({ minWidth: desktop_device}, {
      margin: '0px 20px',
      maxWidth: '1000px'
    })
  )
}

export default playerProfileStyles;
