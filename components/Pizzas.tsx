import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {products} from '../data';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import StyleGuide from '../constants/StyleGuide';
import {useNavigation} from '@react-navigation/native';
const Pizzas = () => {
  const navigation = useNavigation();
  return (
    <View>
      {products.map((item, index) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('DetailScreen', {
              item: item,
            })
          }
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
              style={[
                StyleGuide.textSecondar,
                {
                  paddingLeft: wp(4),
                },
              ]}>
              Weight 540 gr
            </Text>
            <View
              style={[
                StyleGuide.fr,
                {
                  marginTop: hp(2),
                  alignItems: 'center',
                },
              ]}>
              <TouchableOpacity
                style={[
                  StyleGuide.acjc,
                  {
                    height: hp(5),
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
              </TouchableOpacity>
              <View
                style={[StyleGuide.fr, StyleGuide.acjc, {marginLeft: wp(4)}]}>
                <Image
                  style={StyleGuide.iconSize}
                  source={require('../assets/images/icons/star.png')}
                />
                <Text
                  style={{
                    color: StyleGuide.colors.darkText,
                    marginLeft: wp(0.5),
                    fontSize: 14,
                  }}>
                  {item.rating}
                </Text>
              </View>
            </View>
          </View>
          <Image
            style={{
              width: wp(60),
              height: hp(20),
              resizeMode: 'contain',
              right: -wp(14),
              alignSelf: 'center',
            }}
            source={item.image}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Pizzas;
