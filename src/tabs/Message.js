import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';

const Message = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'black',
            alignItems: 'center',
            height: 55,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: '700',
              marginLeft: 20,
            }}>
            Messages
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'grey',
              height: 40,
              width: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
              marginRight: 10,
              marginLeft: '55%',
            }}>
            <Image
              source={require('../images/settings.png')}
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
              marginRight: 10,
            }}>
            <Image
              source={require('../images/search.png')}
              style={{height: 24, width: 24, tintColor: 'white'}}
            />
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor: 'black', marginTop: 3}}>
          <FlatList
            data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    height: 100,
                    width: 80,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 10,
                  }}>
                  <Image
                    source={require('../images/myimage.jpg')}
                    style={{
                      height: 70,
                      width: 70,
                      borderRadius: 35,
                      resizeMode: 'cover',
                    }}
                  />
                  <Image
                    source={require('../images/dot.png')}
                    style={{
                      height: 60,
                      width: 60,
                      tintColor: 'lime',
                      position: 'absolute',
                      left: 35,
                      top: 35,
                    }}
                  />
                  <Text style={{color: 'white'}}>Tahir</Text>
                </View>
              );
            }}
          />
        </View>
        <View style={{backgroundColor: 'black', marginTop: 3}}>
          <FlatList
            data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    marginTop: 15,
                    marginLeft: 10,
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image
                    source={require('../images/myimage.jpg')}
                    style={{height: 70, width: 70, borderRadius: 35}}
                  />
                  <View style={{marginLeft: 10, marginTop: 10}}>
                    <Text style={{color: 'white', fontSize: 20}}>
                      Muhammad Saad Awan
                    </Text>
                    <Text style={{color: 'white'}}>
                      How are you doing today?
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Message;
