import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import StyleGuide from '../constants/StyleGuide';
import BoxImage from '../components/BoxImage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import Ingredients from '../components/IngredientsList';

const DetailScreen = () => {
  const params = useRoute().params as any;
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: wp(4),
        backgroundColor: StyleGuide.colors.background,
        flex: 1,
      }}>
      <View style={StyleGuide.frjb}>
        <BoxImage
          onPress={() => navigation.goBack()}
          border={true}
          address={require('../assets/images/icons/Vector.png')}
        />
        <BoxImage
          border={false}
          address={require('../assets/images/icons/starWhite.png')}
        />
      </View>
      <View>
        <Text
          style={[
            StyleGuide.textHeadingPrimary,
            {marginTop: hp(4), width: wp(70)},
          ]}>
          {params.item.name}
        </Text>
        <Text
          style={[
            StyleGuide.textHeadingPrimary,
            StyleGuide.price,
            {marginTop: hp(3)},
          ]}>
          ${params.item.price}
        </Text>
        <View style={StyleGuide.fr}>
          <View>
            {space()}
            <Text style={StyleGuide.textSecondar}>size</Text>
            <Text style={[StyleGuide.text]}>{params.item.size}</Text>
            {space()}
            <Text style={StyleGuide.textSecondar}>Crust</Text>
            <Text style={[StyleGuide.text]}>{params.item.crust}</Text>
            {space()}
            <Text style={StyleGuide.textSecondar}>Delivery time</Text>
            <Text style={[StyleGuide.text]}>{params.item.time} min</Text>
          </View>
          <Image
            style={{
              width: 296,
              height: 176,
              resizeMode: 'contain',
              right: -wp(12),
              alignSelf: 'center',
            }}
            source={params.item.image}
          />
        </View>
        <Text style={[StyleGuide.text, {marginTop: hp(7)}]}>Ingredients</Text>
        <Ingredients ingradients={params.item.ingredients} />
        <View style={{marginTop: hp(7)}} />
        <TouchableOpacity
          style={[
            {
              width: wp(92),
              backgroundColor: StyleGuide.colors.primary,
              padding: wp(4),
              borderRadius: 50,
              flexDirection: 'row',
            },
            StyleGuide.acjc,
          ]}>
          <Text style={[StyleGuide.text, {fontSize: 14}]}>Place the order</Text>
          <Image
            style={{width: 5, height: 8, marginLeft: wp(2)}}
            source={require('../assets/images/icons/VectorR.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;

// hp2 space
function space() {
  return <View style={{marginTop: hp(3)}} />;
}
