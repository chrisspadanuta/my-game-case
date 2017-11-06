import { style, media } from 'typestyle';
import { Colors, MediaQueries } from '../styles/StyleConstants.js';

export const gameFeed = style({
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100%'
},
  media(MediaQueries.mobile, { }),
  media(MediaQueries.desktop, { maxWidth: "1000px" }),
);

export const feedItems = style({
  marginBottom: '20px'
});

export const feedItem = style({
  backgroundColor: Colors.bg.darker,
  border: '1px solid #333'
});

export const itemHeader = style({
  borderCollapse: 'separate',
  borderSpacing: '10px',
  width: '100%',
  display: 'table'
  /*display: 'flex'*/
});

export const headerBox = style({
  display: 'table-cell'
});

export const headerPlayerIcon = style({
  width: '50px'
  /*flex: 'none'*/
});

export const headerPlayerIconImage = style({
  border: '1px solid #999',
  backgroundImage: 'url("/images/u_logo.png")',
  backgroundSize: '50px 50px',
  backgroundRepeat: 'no-repeat',
  width: '50px',
  height: '50px'
});

export const headerInfo = style({
  verticalAlign: 'top'
  /*flex: 'auto'*/
});

// timestamp should be its own flex box, with flex: 'none'

export const playerName = style({
  fontSize: '1.7em',
  color: Colors.text.lightgray,
  letterSpacing: '0.1em',
  textDecoration: 'underline'
},
  media(MediaQueries.mobile, { }),
  media(MediaQueries.desktop, { })
);

export const gameName = style({
  fontSize: '1.2em',
  color: Colors.text.gray,
  fontStyle: 'italic'
});

export const headerTimestamp = style({
  float: 'right',
  color: Colors.text.lightgray,
  fontSize: '1.2em',
  verticalAlign: 'top'
});

export const itemPost = style({
  padding: '8px 12px'
});

export const newPost = style({
  border: '1px solid #444',
  backgroundColor: Colors.bg.dark,
  padding: '10px',
  marginBottom: '20px'
});

export const postText = style({
  color: Colors.text.offwhite,
  fontSize: '1.1em',
  marginBottom: '5px'
});

export const postScreenShot = style({
  marginTop: '15px',
  textAlign: 'center'
});
