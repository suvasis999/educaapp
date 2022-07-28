import { View, Text } from 'react-native'
import React from 'react';
import { Avatar, Button, Card, ProgressBar, MD3Colors  } from 'react-native-paper';
import {Heading,SubHeading,Label,LinkText} from './Text';
import themes from '../theme';
import IonIcon from 'react-native-vector-icons/Ionicons';

const News = () => {
  return (
    <View style={{flexDirection:'column',flex:1,paddingVertical:20}}>
      <Card style={{width:'100%',marginBottom:10}}>
      <View style={{flexDirection:'row',paddingHorizontal:3}}>
      <Card.Cover source={require('../assets/news.png')} style={{height:83,width:139}} />
        <View style={{width:'50%',paddingLeft:10,}}>
        <SubHeading style={{fontSize:10,textAlign:'left',}}>Biology</SubHeading>
        <SubHeading style={{fontSize:12,lineHeight:15}}>The Effects of Temperature on Enzyme Activity and Biology</SubHeading>

        <View style={{flexDirection:'row',paddingHorizontal:3,paddingTop:10}}>
        <View style={{width:'50%',flexDirection:'row',}}>
        <IonIcon name="timer-outline" size={14} color="gray"/>
        <SubHeading style={{fontSize:10,textAlign:'left',marginTop:-8}}>1 hour ago</SubHeading>
      </View>
      <View style={{width:'50%',flexDirection:'row',marginTop:-8}}>
      <SubHeading style={{fontSize:10,textAlign:'right'}}>
      <IonIcon name="md-chatbox" size={14} color="gray"/>4795</SubHeading>
      </View>
      </View>
      </View>
      
      </View>
   
  </Card>

  <Card style={{width:'100%',marginBottom:10}}>
      <View style={{flexDirection:'row',paddingHorizontal:3}}>
      <Card.Cover source={require('../assets/news.png')} style={{height:83,width:139}} />
        <View style={{width:'50%',paddingLeft:10,}}>
        <SubHeading style={{fontSize:10,textAlign:'left',}}>Mathematics</SubHeading>
        <SubHeading style={{fontSize:12,lineHeight:15}}>How to Work Out a Percentage Using a Calculator</SubHeading>

        <View style={{flexDirection:'row',paddingHorizontal:3,paddingTop:10}}>
        <View style={{width:'50%',flexDirection:'row',}}>
        <IonIcon name="timer-outline" size={14} color="gray"/>
        <SubHeading style={{fontSize:10,textAlign:'left',marginTop:-8}}>24 August 2020</SubHeading>
      </View>
      <View style={{width:'50%',marginTop:-8}}>
      <SubHeading style={{fontSize:10,textAlign:'right'}}>
      <IonIcon name="md-chatbox" size={14} color="gray"/>4795</SubHeading>
      </View>
      </View>
      </View>
      
      </View>
   
  </Card>
  <Card style={{width:'100%',marginBottom:10}}>
      <View style={{flexDirection:'row',paddingHorizontal:3}}>
      <Card.Cover source={require('../assets/news.png')} style={{height:83,width:139}} />
        <View style={{width:'50%',paddingLeft:10,}}>
        <SubHeading style={{fontSize:10,textAlign:'left',}}>Biology</SubHeading>
        <SubHeading style={{fontSize:12,lineHeight:15}}>The Effects of Temperature on Enzyme Activity and Biology</SubHeading>

        <View style={{flexDirection:'row',paddingHorizontal:3,paddingTop:10}}>
        <View style={{width:'50%',flexDirection:'row',}}>
        <IonIcon name="timer-outline" size={14} color="gray"/>
        <SubHeading style={{fontSize:10,textAlign:'left',marginTop:-8}}>1 hour ago</SubHeading>
      </View>
      <View style={{width:'50%',flexDirection:'row',marginTop:-8}}>
      <SubHeading style={{fontSize:10,textAlign:'right'}}>
      <IonIcon name="md-chatbox" size={14} color="gray"/>4795</SubHeading>
      </View>
      </View>
      </View>
      
      </View>
   
  </Card>
  
  
    </View>
  )
}

export default News