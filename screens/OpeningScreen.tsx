import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import StyleGuide from '../constants/StyleGuide';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Categories from '../components/Categories';

const OpeningScreen = () => {
  return (
    <SafeAreaProvider
      style={{
        flex: 1,
        backgroundColor: '#E5E5E5',
        padding: hp(2),
        paddingTop: hp(3),
      }}>
      {/* Footer */}
      <View style={StyleGuide.frjb}>
        <Image
          style={{height: 40, width: 40, borderRadius: 20}}
          source={require('../assets/images/logo.png')}
        />
        <Image
          style={{height: 18, width: 24}}
          source={require('../assets/images/icons/Menu.png')}
        />
      </View>
      <Text
        style={{
          color: StyleGuide.colors.darkText,
          fontSize: 20,
          marginTop: hp(3),
        }}>
        Food
      </Text>
      <Text style={StyleGuide.textHeadingPrimary}>Delivery</Text>
      <View style={[StyleGuide.frjb,{alignItems: 'center'}]}>
        <Image
          style={{height: 16, width: 10}}
          source={require('../assets/images/icons/VectorR.png')}
        />
        <TextInput
          style={{borderColor: StyleGuide.colors.text, color: StyleGuide.colors.darkText, borderBottomWidth: 2, padding: 0, width: wp(86), fontSize: 14,}}
          placeholder="Search..."
          placeholderTextColor={StyleGuide.colors.darkText}
        />
      </View>
      <Text style={[StyleGuide.textHeadingSecondary, {marginTop: hp(2),marginBottom: hp(1)}]}>Categories</Text>
      <Categories/>
    </SafeAreaProvider>
  );
};

export default OpeningScreen;
