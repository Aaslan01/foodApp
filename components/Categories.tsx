import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {categories} from '../data';
import StyleGuide from '../constants/StyleGuide';


const Categories = () => {
  const [category, setCategory] = useState(0);
  return (
    <View style={StyleGuide.frjb}>
      {categories.map((item, index) => (
        <TouchableOpacity
          onPress={() => setCategory(index)}
          style={[
            {
              height: hp(23),
              width: wp(27),
              borderRadius: 20,
              marginRight: wp(5),
              justifyContent: 'space-evenly',
              alignItems: 'center',
            },
            {
              backgroundColor:
                category == index ? StyleGuide.colors.primary : '#FFFFFF',
            },
          ]}>
          <Image style={{height: 60, width: 60}} source={item.image} />
          <Text style={StyleGuide.text}>{item.name}</Text>
          <View
            style={[
              {
                height: 25,
                width: 25,
                borderRadius: 20,
                backgroundColor: StyleGuide.colors.secondary,
                justifyContent: 'center',
                alignItems: 'center',
              },
              {
                backgroundColor:
                  category == index ? '#FFFFFF' : StyleGuide.colors.secondary,
              },
            ]}>
            <Image
              style={{height: 8, width: 5}}
              source={require('../assets/images/icons/VectorR.png')}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Categories;
