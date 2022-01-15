import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealsScreen from '../screens/MealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import FavouriteScreen from '../screens/FavouriteScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FilterScreen from '../screens/FilterScreen';

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    Meals: MealsScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: Colors.fifth,
      cardStyle: {backgroundColor: '#fff'},
    },
  },
);
const FavNav = createStackNavigator(
  {
    Favourite: FavouriteScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: Colors.fifth,
      cardStyle: {backgroundColor: '#fff'},
    },
  },
);
const tabNav = createBottomTabNavigator(
  {
    All: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: info => {
          return (
            <Ionicons name="ios-restaurant" size={24} color={info.tintColor} />
          );
        },
      },
    },
    fav: {
      screen: FavNav,
      navigationOptions: {
        tabBarIcon: info => {
          return <Ionicons name="ios-star" size={24} color={info.tintColor} />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.chosen,
      style: {backgroundColor: Colors.primaryColor},
      labelStyle: {fontSize: 15},
    },
  },
);
const filterNav = createStackNavigator(
  {filter: FilterScreen},
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: Colors.fifth,
      cardStyle: {backgroundColor: '#fff'},
    },
  },
);
const drawerNav = createDrawerNavigator({
  main: tabNav,
  filter: filterNav,
});
export default createAppContainer(drawerNav);
