
import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  ViewStyle,TouchableOpacity,Text
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';


import themes from '../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 0,
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    width: '100%',
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 0,
    height: 40,
    fontSize: 14,
    color: themes.primaryText,
    fontFamily: 'inter',
   },
});

type Props = {
  onChangeText: () => {},
   keyboardType:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad',
 placeholder: string,
  placeholderTextColor: string,
  inputTextColor: string,
   borderColor: string,
  inputContainerStyle: ViewStyle,
  inputStyle: ViewStyle,
  secureText:boolean,
  toggleVisible: boolean,
   onTogglePress: () => {},
};


const InputText = ({
  onChangeText,
   keyboardType,
  placeholder,
  placeholderTextColor,
  inputTextColor,
   borderColor,
  inputContainerStyle,
onTogglePress,
  inputStyle,secureText,toggleVisible
}: Props) => (
  <View
    style={[
      styles.container,
      borderColor && {borderColor},
      inputContainerStyle && inputContainerStyle,
    ]}>
    <TextInput
       onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      secureTextEntry={secureText}
      style={[
        styles.textInput,
        inputTextColor && {color: inputTextColor},
        inputStyle,
      ]}
    />
    <View style={styles.toggleContainer}>
      {toggleVisible && (
        <TouchableOpacity activeOpacity={0.9} onPress={onTogglePress}>
          <IonIcon name="md-eye-off-outline" size={14} color="gray"/>
        </TouchableOpacity>
      )}
    </View>
  </View>
);

export default InputText;
