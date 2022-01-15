import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import Colors from '../constants/Colors';
const MealItem = props => {
  const { width, height } = useWindowDimensions();
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{ ...styles.card, height: height * 0.35 }}
      onPress ={props.onSelectMeal}>
      <View style={styles.bgContainer}>
        <ImageBackground style={styles.bgImage} source={{ uri: props.image }}>
          <View style={styles.titleCon}>
            <View style={styles.titleTxtCon}>
              <Text style={styles.txtTitle}>{props.title}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.cardFooter}>
        <View>
          <Text>{props.duration} M </Text>
        </View>

        <View>
          <Text>{props.complexity.toUpperCase()} </Text>
        </View>
        <View>
          <Text>{props.affordability.toUpperCase()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: Colors.third,
    margin: 15,
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 7,
  },
  bgContainer: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
  },

  cardFooter: {
    height: '15%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleCon: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  titleTxtCon: {
    backgroundColor: 'rgba(0,0,0,.4)',
    marginHorizontal: 10
  },
  txtTitle: {
    color: '#fff',
    fontFamily: 'Merriweather-Italic',
    textAlign: 'center',
  },
});

export default MealItem;
