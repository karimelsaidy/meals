import React from 'react';
import {View, StyleSheet, FlatList, StatusBar} from 'react-native';
import CategoryGridItem from '../components/CategoryGridItem';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import Colors from '../constants/Colors';
import {categoriesData} from '../data/data'

const CategoriesScreen = props => {
  const itemList = ({item}) => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor={Colors.primaryColor} />
        <CategoryGridItem
          item={item}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'Meals',
              params: {catId: item.id},
            });
          }}
        />
      </SafeAreaView>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList data={categoriesData} numColumns={2} renderItem={itemList} />
    </View>
  );
};
CategoriesScreen.navigationOptions = navigationData => {
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
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
export default CategoriesScreen;
