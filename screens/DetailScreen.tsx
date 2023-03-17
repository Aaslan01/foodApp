import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const DetailScreen = () => {
  const params = useRoute().params as any;
  console.log("params",params.item);
  
  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  )
}

export default DetailScreen