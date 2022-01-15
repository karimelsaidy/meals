import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HeaderButton } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';

const CustomHeaderButton = (props) => {
    return (
        <HeaderButton {...props} IconComponent={Ionicons} iconSize={24} color={Colors.fifth} />
    )
}

export default CustomHeaderButton;
