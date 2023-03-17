import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {Ingredients} from '../data';
import StyleGuide from '../constants/StyleGuide';
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';

interface Props {
  ingradients: Ingredients;
}

const IngredientsList: React.FC<Props> = ({ingradients}) => {
  console.log(ingradients);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {ingradients.map((item: Ingredients) => (
        <View
          style={{
            width: 100,
            height: 80,
            backgroundColor: '#FFFFFF',
            marginRight: wp(4),
            borderRadius:15,
          }}>
          <Image style={{width: 80, height: 80, resizeMode: 'contain'}} source={(item.image)} />
        </View>
      ))}
    </ScrollView>
  );
};

export default IngredientsList;
