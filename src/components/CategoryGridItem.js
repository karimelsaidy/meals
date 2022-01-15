import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

const categoryGridItem = props => {
  const {width, height} = useWindowDimensions();
  return (
    <TouchableOpacity
      style={{
        ...styles.itemList,
        height: height * 0.25,
        backgroundColor: props.item.color,
      }}
      onPress={props.onSelect}>
      <View>
        <Text style={styles.txt} numberOfLines={2}>
          {props.item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  itemList: {
    flex: 1,
    margin: 15,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    // shadowRadius: 4.65,

    elevation: 7,
  },
  txt: {
    fontFamily: 'Merriweather-Italic',
    fontSize: 18,
  },
});
export default categoryGridItem;
