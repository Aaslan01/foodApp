/** @format */

const white = '#F9F9FB';
const black = '#000';
const dark = '#313234';
const green = '#89B601';
const gray = '#9A9A9A';
const red = '#F26C68';
const yellow = '#F5CA48';
const orange = '#E4723C';
const graay = '#CDCDCD';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const StyleGuide = {
  colors: {
    primary: yellow,
    secondary: red,
    background: white,
    price: orange,
    darkText: dark,
    text: graay,
    onPrimary: white,
    border: gray,
    borderWithOpacity: 'rgba(154,154,154,0.45)',
    gray: gray,
  },
  price:{color: orange,},
  textHeadingPrimary: {
    color: dark,
    fontFamily: 'Poppins-Bold',
    fontSize: hp(4.2),
  },
  textHeadingSecondary: {
    color: dark,
    fontFamily: 'Poppins-Bold',
    fontSize: hp(2.2),
  },
  text: {
    color: dark,
    fontFamily: 'Poppins-SemiBold',
    fontSize: hp(1.8),
  },
  textSecondar:{
    color: gray,
    fontSize: 14,
    fontWeight: "500",
  },
  fr:{
    flexDirection: 'row',
  },
  frjb: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  acjc: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSize:{height: 10, width: 10}
};

export default StyleGuide;
