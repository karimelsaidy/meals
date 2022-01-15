import React from 'react';
import {Switch, View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

const SwitchFilter = props => {
  return (
    <View style={styles.switchCon}>
      <Text style={styles.label}>{props.label}</Text>
      <Switch
        value={props.state}
        onValueChange={props.valueChange}
        trackColor={{true: Colors.accentColor}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  switchCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    margin: 10,
  },
  label: {
    fontSize: 18,
    fontFamily:'Merriweather-Italic'
  },
});

export default SwitchFilter;
