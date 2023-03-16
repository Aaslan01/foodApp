import { View, Text } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { categories } from '../data';
const Categories = () => {

    console.log(categories);
  return (
    <View>
      <Text>Categories</Text>
    </View>
  )
}

export default Categories