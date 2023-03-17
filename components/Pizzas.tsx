import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {products} from '../data';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import StyleGuide from '../constants/StyleGuide';
const Pizzas = () => {
  return (
    <View>
      {products.map((item, index) => (
        <View
          style={[
            StyleGuide.frjb,
            {
              width: wp(92),
              //   height: hp(19),
              backgroundColor: '#FFFFFF',
              marginBottom: hp(1),
              borderRadius: 25,
            },
          ]}>
          <View style={{paddingTop: hp(3)}}>
            <View
              style={[
                StyleGuide.fr,
                {alignItems: 'center', paddingLeft: wp(4)},
              ]}>
              <Image
                style={{width: 12, height: 9}}
                source={require('../assets/images/icons/crown.png')}
              />
              <Text style={StyleGuide.text}>top of the week</Text>
            </View>
            <Text
              style={[StyleGuide.text, {marginTop: hp(1), paddingLeft: wp(4)}]}>
              {item.name}
            </Text>
            <Text
              style={{
                color: StyleGuide.colors.gray,
                paddingLeft: wp(4),
                fontSize: 14,
              }}>
              Weight 540 gr
            </Text>
            <View
              style={[
                StyleGuide.fr,
                {
                  marginTop: hp(2),
                  alignItems: 'center',
                  justifyContent: 'space-between',
                },
              ]}>
              <View
                style={[
                  StyleGuide.acjc,
                  {
                    height: hp(5.5),
                    width: wp(22),
                    backgroundColor: StyleGuide.colors.primary,
                    borderBottomLeftRadius: 25,
                    borderTopRightRadius: 25,
                  },
                ]}>
                <Image
                  style={StyleGuide.iconSize}
                  source={require('../assets/images/icons/plus.png')}
                />
              </View>
              <View style={StyleGuide.fr}>
                <Image
                  style={StyleGuide.iconSize}
                  source={require('../assets/images/icons/star.png')}
                />
                <Text
                  style={{
                    color: StyleGuide.colors.gray,
                    paddingLeft: wp(4),
                    fontSize: 14,
                  }}>
                  {item.rating}
                </Text>
              </View>
            </View>
          </View>
          {/* <Image source={item.image}/> */}
        </View>
      ))}
    </View>
  );
};

export default Pizzas;
