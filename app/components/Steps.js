import { View, Text } from 'react-native'
import React from 'react';
import { Avatar, Button, Card, ProgressBar, MD3Colors  } from 'react-native-paper';
import {Heading,SubHeading,Label,LinkText} from './Text';
import themes from '../theme';
import IonIcon from 'react-native-vector-icons/Ionicons';

const Steps = () => {
  return (
    <View style={{flexDirection:'row',flex:1}}>
      <Card style={{width:139,marginRight:10}}>
      <Card.Cover source={require('../assets/step2.png')} style={{height:83,width:139}} />
      <SubHeading style={{fontSize:12,lineHeight:20}}>Bacterial Biology Overview</SubHeading>
      <View style={{flexDirection:'row',paddingHorizontal:3}}>
        <View style={{width:'50%'}}>
        <SubHeading style={{fontSize:10,textAlign:'left'}}>12 Lessons</SubHeading>
      </View>
      <View style={{width:'50%'}}>
      <SubHeading style={{fontSize:10,textAlign:'right'}}>
      <IonIcon name="timer-outline" size={16} color="gray"/>12h 20m</SubHeading>
      </View>
      </View>
   
  </Card>
  <Card style={{width:139,marginRight:10}}>
      <Card.Cover source={require('../assets/step.png')} style={{height:83,width:139}} />
      <SubHeading style={{fontSize:12,lineHeight:20}}>Mendelian Genetics & Mechanisms of Her...</SubHeading>
      <View style={{flexDirection:'row',paddingHorizontal:3}}>
      <View style={{width:'50%'}}>
        <SubHeading style={{fontSize:10,textAlign:'left'}}>14 Lessons</SubHeading>
      </View>
      <View style={{width:'50%'}}>
      <SubHeading style={{fontSize:10,textAlign:'right'}}>
      <IonIcon name="timer-outline" size={16} color="gray"/>18h 20m</SubHeading>
      </View>
      </View>
   
  </Card>
  <Card style={{width:139,marginRight:10}}>
      <Card.Cover source={require('../assets/step2.png')} style={{height:83,width:139}} />
     <SubHeading style={{fontSize:12,lineHeight:20}}>Bacterial Biology Overview</SubHeading>
      <View style={{flexDirection:'row',paddingHorizontal:3}}>
      <View style={{width:'50%'}}>
        <SubHeading style={{fontSize:10,textAlign:'left'}}>12 Lessons</SubHeading>
      </View>
      <View style={{width:'50%'}}>
      <SubHeading style={{fontSize:10,textAlign:'right'}}>
      <IonIcon name="timer-outline" size={16} color="gray"/>12h 20m</SubHeading>
      </View>
      </View>
   
  </Card>
  
    </View>
  )
}

export default Steps