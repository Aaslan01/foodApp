import {View, Text, TouchableOpacity, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import StyleGuide from '../constants/StyleGuide';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

interface Props {
    address: ImageSourcePropType
    border:boolean
    onPress?: ()=>void
}

const BoxImage: React.FC<Props> = ({border,address,onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={[
        StyleGuide.acjc,
        {
          height: 40,
          width: 40,
          backgroundColor: border ? StyleGuide.colors.background : StyleGuide.colors.primary,
          borderRadius: 10,
          borderWidth:2,
          borderColor: border ? StyleGuide.colors.gray : 'transparent',
        },
      ]}>
      <Image
        style={{width: border? 5: 12, height: border? 8: 12}}
        source={address}
      />
    </TouchableOpacity>
  );
};

export default BoxImage;
