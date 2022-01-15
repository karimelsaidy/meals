import React, {useEffect} from 'react';
import {
  ScrollView,
  Image,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import Colors from '../constants/Colors';
import toggleFav from '../store/actions/toggleFav';
import { useSelector } from 'react-redux';
const MealDetailScreen = props => {
  const {height} = useWindowDimensions();
  const _meal = props.navigation.getParam('meal');

  const _isFav = useSelector(state =>
    state.favMeals.some(meal => meal.id === _meal.id),
  );

  useEffect(() => {
    props.navigation.setParams({isFav: _isFav});
  }, [_isFav]);

  return (
    <ScrollView>
      <View style={{width: '100%', height: 0.25 * height}}>
        <Image
          style={{width: '100%', height: '100%', resizeMode: 'stretch'}}
          source={{uri: _meal.imageUrl}}
        />
      </View>
      <View style={styles.pref}>
        <Text>{_meal.duration} M </Text>

        <Text>{_meal.complexity.toUpperCase()} </Text>

        <Text>{_meal.affordability.toUpperCase()}</Text>
      </View>

      <View>
        <Text style={styles.title}>Ingredients</Text>
        {_meal.ingredients.map((ingred, index) => {
          return (
            <View key={index} style={styles.details}>
              <Text> {ingred}</Text>
            </View>
          );
        })}
      </View>
      <View>
        <Text style={styles.title}>Steps</Text>
        {_meal.steps.map((step, index) => {
          return (
            <View key={index} style={styles.details}>
              <Text> {step}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};
MealDetailScreen.navigationOptions = navigationData => {
  const mealTitle = navigationData.navigation.getParam('meal').title;
  const mealId = navigationData.navigation.getParam('meal').id;
  const isFav = navigationData.navigation.getParam('isFav');
  console.log(isFav, 'favourita');
  const dispatch = navigationData.navigation.getParam('dispatchHandler');

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="favorite"
          iconName={isFav ? 'ios-star' : 'ios-star-outline'}
          onPress={() => dispatch(toggleFav(mealId))}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  pref: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-around',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Merriweather-Italic',
  },
  details: {
    borderWidth: 2,
    borderColor: Colors.third,
    borderRadius: 10,
    padding: 5,
    margin: 5,
  },
});

export default MealDetailScreen;
