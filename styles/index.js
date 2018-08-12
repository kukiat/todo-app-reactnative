import { StyleSheet } from 'react-native'

export const GREEN_COLOR = '#53A451'
export const ORANGE_COLOR = '#EC5A65'
export const BACKGROUND_COLOR = '#F3F4F4'

export default StyleSheet.create({
  layout: { 
    flex: 1, 
    backgroundColor: BACKGROUND_COLOR 
  },
  buttonSuccess: {
    backgroundColor: GREEN_COLOR,
    borderRadius: 25,
    height: 40,
    justifyContent: 'center',
  },
  buttonOriginal: {
    backgroundColor: ORANGE_COLOR,
    borderRadius: 25,
    height: 40,
    justifyContent: 'center',
  },
  buttonOriginal: {
    backgroundColor: ORANGE_COLOR,
    borderRadius: 25,
    height: 40,
    justifyContent: 'center',
  },
  textDefault: {
    fontSize: 18,
    fontWeight: '400'
  },
  textBold: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  textNormal: {
    textAlign: 'center',
    fontSize: 18,
  },
  textHeader: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '500'
  },
  alertText: {
    color: '#FF0000'
  },
  textInput: {
    fontSize: 18,
    color: '#D2D2D2'
  },
  textArea: {
    fontSize: 18,
    color: '#D2D2D2'
  },
  titleInput: {
    height: 40, 
    borderBottomWidth: 1,
    borderBottomColor: '#D5D5D5',
    fontSize: 20
  }
})