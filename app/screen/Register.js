import React,{useState} from 'react'
import {Image, StyleSheet,View,StatusBar,KeyboardAvoidingView,Platform,
ScrollView} from 'react-native';
import themes from '../theme';
import {Heading,SubHeading,Label,LinkText} from '../components/Text';
import InputText from '../components/InputText';
import Button from '../components/Button';
import { RadioButton } from 'react-native-paper';

const Register = ({navigation}) => {
  const [password, showpassword] = useState(true);
  const [checked, setChecked] = React.useState('');
  const onTogglePress = () => {
     showpassword(!password);
  };

  const navigateTo = (screen) => {
    //const {navigation} = this.props; 
    navigation.navigate(screen);
  };
  return (
    <ScrollView style={styles.container}>
      
    <View >
    
    <StatusBar backgroundColor={themes.statusBarLight}
     barStyle="light-content"
      />
      <View style={styles.logoContainer}>
      	<Image source={require('../assets/Logo.png')}/>
      	<View style={styles.textPunchLine}>
      	 <Heading>Hi, Let’s Make a</Heading>
		     <Heading>Journey with Us</Heading>
		    </View>
      </View>
      <KeyboardAvoidingView
   style={{ flex: 1 }}
   behavior={(Platform.OS === 'ios') ? "padding" : null} enabled
   keyboardVerticalOffset={Platform.select({ios: 80, android: 500})}>
      <View style={styles.registerContainer}>
    <View style={styles.registerForm}>
      <SubHeading>Register</SubHeading>
      <View style={styles.itemContatiner}>
      <InputText
               onChangeText={()=>console.log('hi')}
                keyboardType="email-address"
                placeholder="Email"
                placeholderTextColor={themes.linkTextGray}
                inputTextColor={themes.primaryText}
                borderColor={themes.borderGray}
                focusedBorderColor={themes.primaryText}
                inputContainerStyle={styles.inputContainer}
              />
        </View>

        <View style={styles.itemContatiner}>
      <InputText
                secureText={password}
                onChangeText={()=>console.log('hi')}
                keyboardType="default"
                placeholder="Password"
                placeholderTextColor={themes.linkTextGray}
                inputTextColor={themes.primaryText}
                borderColor={themes.borderGray}
                focusedBorderColor={themes.primaryText}
                inputContainerStyle={styles.inputContainer}
                toggleVisible={true}
                onTogglePress={onTogglePress}
              />
        </View>

        <View style={styles.itemContatiner}>
       <InputText
               onChangeText={()=>console.log('hi')}
                keyboardType="phone-pad"
                placeholder="Phone Number"
                placeholderTextColor={themes.linkTextGray}
                inputTextColor={themes.primaryText}
                borderColor={themes.borderGray}
                focusedBorderColor={themes.primaryText}
                inputContainerStyle={styles.inputContainer}
              />
        </View>

        <View style={styles.itemContatiner}>
        <Label>Register As a?</Label>
        <View style={{flexDirection:'row'}}>
        
        <View style={{flexDirection:'row'}}>
        
        <RadioButton value="student" status={ checked === 'student' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('student')}  color={themes.primaryLightColor}/>
        <Label style={{paddingTop:2}}>Student</Label>
      </View>
      <View style={{flexDirection:'row'}}>
       
        <RadioButton value="teacher" status={ checked === 'teacher' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('teacher')} color={themes.primaryLightColor} />
         <Label style={{paddingTop:2}}>Teacher</Label>
      </View>
      </View>
        </View>
        <View style={styles.ButtomContatiner}>
          
          <Button
          color={themes.primaryBottomColor}
          borderRadius={6}
          onPress={()=>navigateTo('Register')}
          title={'Register'}
          titleColor={themes.whiteText}
          height={50}  
          />
          <View style={{flexDirection:'row'}}>
          <Label>Have an account? </Label>
          <LinkText style={{color:themes.linkTextBlue}}
           onPress={()=>navigateTo('Signin')}
          >Login</LinkText> 
          </View>
          
        </View>
    </View>
  </View>
  
  </KeyboardAvoidingView>
  
  </View>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
   backgroundColor: '#ffffff',
   flex:1
  },
logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 152,
    width: '100%',
    minHeight:188,
    marginTop:40
  },
  textPunchLine:{
  	alignItems: 'center',
  	marginTop:50
  },
  registerContainer:{
   overflow: 'hidden', paddingTop: 30,marginTop: 20
  },
  registerForm: {
    backgroundColor: '#fff',
        width: '100%',
        minHeight: 60,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity:  0.25,
        shadowRadius: 9,
        elevation: 90,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingVertical: 30,
        paddingHorizontal:30
  },
  itemContatiner:{
    paddingVertical:10
  },
  ButtomContatiner:{
    paddingVertical:10,
    paddingHorizontal:20,
    alignItems:'center'
  },
  itemContatinerFpass:{
    paddingVertical:3,alignItems:'flex-end',marginTop:-10
  }
})
export default Register