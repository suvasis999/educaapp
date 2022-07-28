import * as React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
 
import RootNavigator from './app/navigation/RootNavigator';
const App= () => {
  return (
    <RootNavigator/>
    
  );
};

export default App;
