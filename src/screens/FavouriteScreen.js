import React from 'react';
import MealList from '../components/MealList';
import { View, Text,StyleSheet } from 'react-native';
import {useSelector} from 'react-redux';
import Colors from '../constants/Colors';
const FavouriteScreen = props => {
  const favMealsArr = useSelector(state => state.favMeals);
  if (favMealsArr.length > 0) {
    return <MealList data={favMealsArr} navigation={props.navigation} />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.attention}>
          You didn't favourite any meal yet !
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  },
  attention: {
    fontSize: 18,
    fontFamily: "Merriweather-Italic",
    color:Colors.warning
  }
})

export default FavouriteScreen;
