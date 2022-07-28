import { View,ScrollView,StyleSheet,StatusBar ,TouchableOpacity,Image} from 'react-native'
import React ,{useState} from 'react'
import {Heading,SubHeading,Label,LinkText} from '../components/Text';
import themes from '../theme';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { RadioButton, Text ,TextInput} from 'react-native-paper';
import Button from '../components/Button';

const Payment = () => {
  const [currentStep, setcurrentStep] = useState(1);
  const [steps, setsteps] = useState( ['Review', 'Payment Method', 'Payment']);
  const [value, setValue] = React.useState('rent');

  return (
    <>
    <ScrollView style={styles.container}>
      
    <View >
    
    <StatusBar backgroundColor={themes.statusBarLight}
     barStyle="light-content"
    />

<View style={{ flex: 1, flexDirection: 'column'}}>
			

				<View style={{alignItems: 'center'}}>
					<View style={{width: '100%', height: 70}}>
						<View style={{alignItems: 'center'}}>
							<View style={{height: 2, backgroundColor: '#51C3FE', width: 200, position: 'absolute', top: 13, zIndex: 10}} />
						</View>
						<View style={{flexDirection: 'row', width: '100%', position: 'absolute', zIndex: 20}}>
							{steps.map((label, i) =>
								<View key={i} style={{alignItems: 'center', width: '33%'}}>
									{i > currentStep && i != currentStep && /* Not selected */
										<View style={{alignItems: 'center', justifyContent: 'center', width: 30, height: 30, borderRadius: 15, marginBottom: 10}}>
											<IonIcon name="md-cash" size={18} color="gray" />
										</View>
									}
									{i < currentStep && /* Checked */
										<View style={{alignItems: 'center', justifyContent: 'center', width: 30, height: 30, borderRadius: 15, marginBottom: 10}}>
											<IonIcon name="md-file-tray-outline" size={18} color="#51C3FE" />
										</View>
									}
									{i == currentStep && /* Selected */
										<View style={{alignItems: 'center', justifyContent: 'center', width: 30, height: 30, marginBottom: 10}}>
											<IonIcon name="file-tray" size={16} color="#51C3FE" />
										</View>
									}
									<Text style={{fontSize: 12}}>{label}</Text>
								</View>
							)}
						</View>
					</View>
				</View>
				

        <View style={{borderWidth:1,borderColor:'#efefef'}}>

        </View>
				
			</View>

      <View style={{padding:15}}>
        <SubHeading style={{fontWeight:'bold'}}>Payment Method</SubHeading>
    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
    <View style={styles.rdBtnCard}>
        <View style={{width:'70%',flexDirection:'row'}}>
      <RadioButton value="ccard" color={themes.primaryLightColor}/>
      <Text style={{paddingTop:7}}>Credit Card</Text>
      </View>
      <View style={{alignItems:'flex-end'}}>
      <Image source={require('../assets/visa.jpg')}/>
      </View>
      </View>
      <View style={styles.rdBtnCard}>
        <View style={{width:'70%',flexDirection:'row'}}>
      <RadioButton value="paypal" color={themes.primaryLightColor}/>
      <Text style={{paddingTop:7}}>Paypal</Text>
      </View>
      <View style={{alignItems:'flex-end'}}>
      <Image source={require('../assets/paypal.jpg')}/>
      </View>
      </View>
      <View style={styles.rdBtnCard}>
        <View style={{width:'70%',flexDirection:'row'}}>
      <RadioButton value="apple" color={themes.primaryLightColor}/>
      <Text style={{paddingTop:7}}>Apple Pay</Text>
      </View>
      <View style={{alignItems:'flex-end'}}>
      <Image source={require('../assets/apple.jpg')}/>
      </View>
      </View>

      
    </RadioButton.Group>

    
    </View>
    
     </View>
     
     </ScrollView>
     <View style={{position:'absolute',minHeight:100,
     width:'100%',bottom:0,paddingHorizontal:10}}>
        <View style={{borderTopWidth:1,borderTopColor:'#d0cfce',borderBottomWidth:1,borderBottomColor:'#d0cfce',}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',
      }}>
          <View>
            <SubHeading style={{fontSize:14}}>Purchase Date</SubHeading>
            <Label style={{fontSize:10}}>01/09/2020</Label>
          </View>
          <View>
            <SubHeading style={{fontSize:14}}>Price</SubHeading>
            <Label style={{fontSize:10}}>$240</Label>
          </View>
          <View>
            <SubHeading style={{fontSize:14}}>Discount</SubHeading>
            <Label style={{fontSize:10}}>-$120<Label style={{fontSize:10,color:'#51C3FE'}}>(50%)</Label></Label>
          </View>
        </View>


        

        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',
        marginVertical:30
      }}>
          <View>
            <SubHeading style={{fontSize:14}}>Total Price</SubHeading>
           
          </View>
          <View>
            <SubHeading style={{fontSize:14,fontWeight:'bold'}}>$240</SubHeading>
            
          </View>
          <View style={{ paddingHorizontal:20,width:150}}>
          <Button
          color={themes.primaryBottomColor}
          borderRadius={6}
          onPress={()=>navigateTo('Home')}
          title={'Checkout'}
          titleColor={themes.whiteText}
          height={50}  
         
          />
          </View>
        </View>
        
       </View>
       </>
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
},
rdBtnCard:{
  paddingVertical:10,
  flexDirection:'row',alignItems:"center",
  borderWidth:1,marginBottom:10,paddingHorizontal:10,
  borderColor:'#efefef'
}
})
export default Payment