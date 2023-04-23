import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import Home from '../tabs/Home';
import Friends from '../tabs/Friends';
import Message from '../tabs/Message';
import Notification from '../tabs/Notification';
import Video from '../tabs/Video';
import Marketplace from '../tabs/Marketplace';
import Header from './Header';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedtab, setselectedtab] = useState(0);
  return (
    <View style={{flex: 1}}>
      {selectedtab == 0 ? <Header /> : null}

      <View
        style={{
          height: 70,
          width: '100%',
          backgroundColor: 'black',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: 'grey',
        }}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '16%',
            height: '100%',
          }}
          onPress={() => {
            setselectedtab(0);
          }}>
          {selectedtab == 0 ? (
            <Image
              source={require('../images/home_fill.png')}
              style={{height: 35, width: 35, tintColor: 'blue'}}
            />
          ) : (
            <Image
              source={require('../images/home.png')}
              style={{height: 35, width: 35, tintColor: 'white'}}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '16%',
            height: '100%',
          }}
          onPress={() => {
            setselectedtab(1);
          }}>
          {selectedtab == 1 ? (
            <Image
              source={require('../images/friends_fill.png')}
              style={{height: 40, width: 40, tintColor: 'blue'}}
            />
          ) : (
            <Image
              source={require('../images/friends.png')}
              style={{height: 40, width: 40, tintColor: 'white'}}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '16%',
            height: '100%',
          }}
          onPress={() => {
            setselectedtab(2);
          }}>
          {selectedtab == 2 ? (
            <Image
              source={require('../images/messenger_fill.png')}
              style={{height: 35, width: 35}}
            />
          ) : (
            <Image
              source={require('../images/messenger.png')}
              style={{height: 35, width: 35, tintColor: 'white'}}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '16%',
            height: '100%',
          }}
          onPress={() => {
            setselectedtab(3);
          }}>
          {selectedtab == 3 ? (
            <Image
              source={require('../images/noti_fill.png')}
              style={{height: 35, width: 35, tintColor: 'blue'}}
            />
          ) : (
            <Image
              source={require('../images/noti.png')}
              style={{height: 35, width: 35, tintColor: 'white'}}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '16%',
            height: '100%',
          }}
          onPress={() => {
            setselectedtab(4);
          }}>
          {selectedtab == 4 ? (
            <Image
              source={require('../images/video_fill.png')}
              style={{height: 35, width: 35}}
            />
          ) : (
            <Image
              source={require('../images/video.png')}
              style={{height: 35, width: 35, tintColor: 'white'}}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '16%',
            height: '100%',
          }}
          onPress={() => {
            setselectedtab(5);
          }}>
          {selectedtab == 5 ? (
            <Image
              source={require('../images/market_fill.png')}
              style={{height: 35, width: 35, tintColor: 'blue'}}
            />
          ) : (
            <Image
              source={require('../images/market.png')}
              style={{height: 35, width: 35, tintColor: 'white'}}
            />
          )}
        </TouchableOpacity>
      </View>
      {selectedtab == 0 ? (
        <Home />
      ) : selectedtab == 1 ? (
        <Friends />
      ) : selectedtab == 2 ? (
        <Message />
      ) : selectedtab == 3 ? (
        <Notification />
      ) : selectedtab == 4 ? (
        <Video />
      ) : (
        <Marketplace />
      )}
    </View>
  );
};

export default HomeScreen;
