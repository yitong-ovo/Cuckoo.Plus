import baseColor from '../basecolor'
import stylePattern from '../stylepattern'

const colorSet = Object.assign(baseColor, {
  '@primaryColor': '#db4437',
  '@secondaryColor': '#2b90d9',
  '@trackColor': '#bdbdbd',

  '@textColor': 'rgba(0,0,0,.87)',
  '@secondaryTextColor': 'rgba(0,0,0,.54)',
  '@disabledColor': 'rgba(0,0,0,.38)',

  '@backgroundColor': '#f1f1f1',
  '@dialogBackgroundColor': '#fff'
})

export default {
  source: stylePattern(colorSet),
  colorSet,
  toFavIconPath: 'google_plus'
}