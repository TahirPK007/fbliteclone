import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 50,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View>
        <Text style={{color: 'white', fontWeight: '800', fontSize: 30}}>
          facebook
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            backgroundColor: 'grey',
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            marginRight: 10,
          }}>
          <Image
            source={require('../images/search.png')}
            style={{height: 24, width: 24, tintColor: 'white'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'grey',
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
          }}
          onPress={() => {}}>
          <Image
            source={require('../images/menu.png')}
            style={{height: 24, width: 24, tintColor: 'white'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
