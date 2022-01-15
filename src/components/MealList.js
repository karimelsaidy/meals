import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import MealItem from './MealItem';
import {useSelector, useDispatch} from 'react-redux';
const MealList = props => {
  

  const dispatch = useDispatch();
  const dispatchHandler = (props)=> {
    dispatch(props);
  }

  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {meal: itemData.item, dispatchHandler},
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={props.data}
        renderItem={renderMealItem}
        style={styles.list}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    width: '100%',
  },
});

export default MealList;
