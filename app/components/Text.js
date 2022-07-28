import React from 'react';
import {
  Text,
  StyleSheet,TouchableOpacity
} from 'react-native';
import themes from '../theme';

export const Heading=(props)=> {
  return (
    <Text style={[styles.heading, props.style]}>
      {props.children}
    </Text>
  );
};

export const SubHeading=(props)=> {
  return (
    <Text style={[styles.defaultText, props.style]}>
      {props.children}
    </Text>
  );
};

export const LinkText=(props)=> {
  return (
    <TouchableOpacity activeOpacity={0.9}  onPress={props.onPress}>
    <Text style={[styles.linkText, props.style]}>
      {props.children}
    </Text>
    </TouchableOpacity>
  );
};

export const Label=(props)=> {
  return (
    <Text style={[styles.LabelText, props.style]}>
      {props.children}
    </Text>
  );
};


const styles = StyleSheet.create({
heading:{
	fontSize: 20,
	color: themes.primaryText,
	fontFamily: 'inter',
  lineHeight:30
},
defaultText:{
  fontSize: 16,
  color: themes.primaryText,
  fontFamily: 'inter',
  lineHeight:30
},
LabelText:{
   fontSize: 10,
  color: themes.primaryText,
  fontFamily: 'inter',
  lineHeight:30
},
linkText:{
  fontSize: 10,
  color: themes.linkTextGray,
  fontFamily: 'inter',
  lineHeight:30
},
grayText:{
  fontSize: 14,
  color: themes.linkTextGray,
  fontFamily: 'inter',
  lineHeight:30
}
});
export default Text;