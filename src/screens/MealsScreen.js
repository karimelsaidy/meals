import React from 'react';
import MealList from '../components/MealList';
import { categoriesData } from '../data/data';
import { useSelector } from 'react-redux';

const MealsScreen = props => {
  const _meals = useSelector(state =>state.filterdMeals)
  const catId = props.navigation.getParam('catId');
  const chosenMeals = _meals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
  return (
    <MealList data = {chosenMeals} navigation = {props.navigation} />
  )
};
MealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('catId');
  const selectCategory = categoriesData.find(cat => cat.id === catId);
  return {
    headerTitle: selectCategory.title,
  };
};

export default MealsScreen;
