
import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  ViewStyle,TouchableOpacity,Text
} from 'react-native';


import themes from '../theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems:'center', justifyContent: 'center',
  },
  
});

type Props = {
  onPress: () => void,
  activeOpacity: number,
  disabled: boolean,
  height: number,
  buttonStyle: ViewStyle,
  borderRadius: number,
  borderColor: string,
  color: string,
  title: string,
  titleColor: string,
  rounded: boolean,
  outlined: boolean,
};


const Button = ({
  onPress,
  activeOpacity = 0.85,
  disabled,
  height,
  buttonStyle,
  borderRadius,
  borderColor,
  color,
  title,
  titleColor,
  rounded,
  outlined,
}: Props) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    activeOpacity={activeOpacity}
    style={[
      styles.container,
      borderRadius && {borderRadius},
      color && {backgroundColor: color},
      styles.defaultContainer,
      height && {height},
      rounded && styles.rounded,
      outlined && styles.outlined,
      height && rounded && {borderRadius: height / 2},
      borderColor && {borderColor},
      disabled && styles.disabled,
      buttonStyle,
    ]}>
    
    <Text
      style={[
       !titleColor&&styles.title,
        outlined && styles.outlinedTitle,
        titleColor && {color: titleColor},
      ]}>
      {title || 'Button'}
    </Text>
  </TouchableOpacity>
);

export default Button;
