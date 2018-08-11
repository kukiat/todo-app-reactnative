import { StyleSheet } from 'react-native'

export const GREEN_COLOR = '#53A451'
export const ORANGE_COLOR = '#EC5A65'
export const BACKGROUND_COLOR = '#F3F4F4'

export default StyleSheet.create({
  buttonSuccess: {
    backgroundColor: GREEN_COLOR,
    borderRadius: 15,
    height: 40,
    justifyContent: 'center'
  },
  buttonOriginal: {
    backgroundColor: ORANGE_COLOR,
    borderRadius: 15,
    height: 40,
    justifyContent: 'center'
  },
  textBold: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  textNormal: {
    textAlign: 'center',
    fontSize: 20,
  },
})