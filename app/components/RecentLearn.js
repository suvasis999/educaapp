import { View, Text } from 'react-native'
import React from 'react';
import { Avatar, Button, Card, ProgressBar, MD3Colors  } from 'react-native-paper';
import {Heading,SubHeading,Label,LinkText} from '../components/Text';
import themes from '../theme';

const RecentLearn = () => {
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Card style={{width:'49%'}}>
      <Card.Cover source={require('../assets/learn.png')} style={{height:83}} />
      <SubHeading style={{fontSize:12,fontWeight:'bold'}}>Mathematics</SubHeading>
      <SubHeading style={{fontSize:12,lineHeight:20}}>High School Algebra I: Help and Review</SubHeading>
      <View style={{flexDirection:'row',paddingHorizontal:3}}>
        <View style={{width:'80%'}}>
      <ProgressBar progress={0.5} color={themes.primaryLightColor} />
      </View>
      <View style={{width:'20%'}}>
      <SubHeading style={{fontSize:10,fontWeight:'bold',marginTop:-15,textAlign:'right'}}>5/10</SubHeading>
      </View>
      </View>
   
  </Card>
  <Card style={{width:'49%'}}>
      <Card.Cover source={require('../assets/learn.png')} style={{height:83}} />
      <SubHeading style={{fontSize:12,fontWeight:'bold'}}>Mathematics</SubHeading>
      <SubHeading style={{fontSize:12,lineHeight:20}}>High School Algebra I: Help and Review</SubHeading>
      <View style={{flexDirection:'row',paddingHorizontal:3}}>
        <View style={{width:'80%'}}>
      <ProgressBar progress={0.5} color={themes.primaryLightColor} />
      </View>
      <View style={{width:'20%'}}>
      <SubHeading style={{fontSize:10,fontWeight:'bold',marginTop:-15,textAlign:'right'}}>5/10</SubHeading>
      </View>
      </View>
   
  </Card>
    </View>
  )
}

export default RecentLearn