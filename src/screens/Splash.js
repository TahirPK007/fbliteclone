import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 2000);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../images/fb.png')}
        style={{height: 100, width: 100, resizeMode: 'center'}}
      />
    </View>
  );
};

export default Splash;
