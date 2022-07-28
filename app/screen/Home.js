import { View,ScrollView,StatusBar,StyleSheet } from 'react-native'
import React from 'react'
import themes from '../theme';
import { Searchbar } from 'react-native-paper';
import {Heading,SubHeading,Label,LinkText} from '../components/Text';
import RecentLearn from '../components/RecentLearn';
import Steps from '../components/Steps';
import News from '../components/News';
const Home = () => {
  const [search, setSearch] = React.useState('');
  const [tab, setTab] = React.useState('rec');
  const onChangeSearch = query => setSearch(query);
  const changeTab=(val)=>{
    setTab(val);
  }
  return (
    <ScrollView style={styles.container}>
      
    <View >
    
    <StatusBar backgroundColor={themes.statusBarLight}
     barStyle="light-content"
    />
     <Heading>Hi, Christina</Heading> 
     <Label>What do you want to learn today?</Label>
     <View style={{paddingVertical:20}}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={search}
        style={{ backgroundColor: '#F2F2F2',height:35,borderWidth:1,borderColor:'#E0E0E0' }}
        inputStyle={{ color: 'black',fontSize:12 }}
      />
    </View>
    <View>
      <SubHeading>Recent learning</SubHeading>
      <RecentLearn/>
    </View>
    <View>
      <ScrollView  horizontal={true}>
        
        <View style={{flexDirection:'row',flex:1,alignItems:'center',paddingVertical:10}}>
        <LinkText style={tab=='rec'?styles.stepActive:styles.stepTitle} onPress={()=>changeTab('rec')} >Recommended</LinkText>
        <LinkText style={tab=='alg'?styles.stepActive:styles.stepTitle} onPress={()=>changeTab('alg')}>Algebra</LinkText>
        <LinkText style={tab=='geo'?styles.stepActive:styles.stepTitle} onPress={()=>changeTab('geo')}>Geometry</LinkText>
        </View>
       </ScrollView>
        <View>
        <ScrollView  horizontal={true}>
        <Steps/>
       </ScrollView>
        </View>
     
    </View>

    <View>
      <View style={{flexDirection:'row'}}>
      <View style={{flexDirection:'row',paddingHorizontal:3}}>
        <View style={{width:'50%'}}>
        <SubHeading style={{fontSize:14,fontWeight:'bold',marginTop:10,textAlign:'left'}}>
          Latest News</SubHeading>
      </View>
      <View style={{width:'50%'}}>
      <SubHeading style={{fontSize:12,marginTop:10,textAlign:'right'}}>
        See All</SubHeading>
      </View>
      
      </View>
      </View>
      <News/>
     
    </View>
      </View>
      </ScrollView>
  )
}
const styles = StyleSheet.create({
  container:{
   backgroundColor: '#ffffff',
   flex:1,
   padding:15
  },
stepTitle:{
  paddingHorizontal:20,
  fontWeight:'bold',
  fontSize:14,textAlign:'center'
},
stepActive:{
  paddingHorizontal:20,
  fontWeight:'bold',
  fontSize:14,textAlign:'center',
  borderBottomWidth:1,
  borderBottomColor:themes.primaryLightColor
}
})
export default Home