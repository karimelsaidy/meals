import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { useDispatch } from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import SwitchFilter from '../components/SwitchFilter';
import Colors from '../constants/Colors';
import applyFilter from '../store/actions/applyFilter';

const FilterScreen = props => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  const dispatch = useDispatch();
  const filters = useCallback(() => {
    const appliedFilters = {
     isGlutenFree,
       isVegan,
       isVegetarian,
       isLactoseFree,
    };
    dispatch(applyFilter(appliedFilters));
  }, [isGlutenFree, isVegan, isVegetarian, isLactoseFree, dispatch]);

  useEffect(() => {
    props.navigation.setParams({save: filters});
  }, [filters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}> Filters </Text>
      <SwitchFilter
        label=" Gluten Free"
        state={isGlutenFree}
        valueChange={()=>setIsGlutenFree(!isGlutenFree)}
      />
      <SwitchFilter label=" Vegan" state={isVegan} valueChange={()=>setIsVegan(!isVegan)} />
      <SwitchFilter
        label="Vegetarian"
        state={isVegetarian}
        valueChange={()=>setIsVegetarian(!isVegetarian)}
      />
      <SwitchFilter
        label=" Gluten Free"
        state={isLactoseFree}
        valueChange={()=>setIsLactoseFree(!isLactoseFree)}
      />
    </View>
  );
};

FilterScreen.navigationOptions = navigationData => {
  return {
    headerTitle: 'Category of Meals',
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="drawer"
            iconName="ios-menu"
            onPress={navigationData.navigation.toggleDrawer}
          />
        </HeaderButtons>
      );
    },
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="save"
            iconName="ios-save"
            onPress={navigationData.navigation.getParam('save')}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    margin: 10,
    color: Colors.accentColor,
    fontWeight: 'bold',
  },
});
export default FilterScreen;
