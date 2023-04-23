import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../screens/Header';

const Home = () => {
  const [data, setdata] = useState(null);

  const getdata = () => {
    axios
      .get('https://dummyapi.io/data/v1/user?limit=10')
      .then(response => {
        // handle success
        console.log(response.data);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            backgroundColor: 'black',
            height: 70,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={require('../images/myimage.jpg')}
              style={{
                height: 50,
                width: 50,
                borderRadius: 30,
                resizeMode: 'cover',
                // marginLeft: 15,
                marginRight: 15,
              }}
            />
          </TouchableOpacity>
          <Image
            source={require('../images/dot.png')}
            style={{
              height: 60,
              width: 60,
              tintColor: 'green',
              position: 'absolute',
              left: 45,
              top: 20,
            }}
          />
          <TextInput
            style={{
              width: '65%',
              borderRadius: 30,
              backgroundColor: 'grey',
              height: 50,
              paddingLeft: 20,
              fontSize: 15,
            }}
            placeholder="Whats on you mind?"
            placeholderTextColor={'white'}
          />
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              // marginRight: 15,
              marginLeft: 15,
            }}>
            <Image
              source={require('../images/photo.png')}
              style={{width: 30, height: 30, tintColor: 'white'}}
            />
            <Text style={{color: 'white'}}>Photo</Text>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor: 'black', marginTop: 5}}>
          <FlatList
            data={[1, 1, 1, 1, 1, 1, 1, 1]}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    height: 250,
                    width: 150,
                    backgroundColor: 'grey',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../images/myimage.jpg')}
                    style={{
                      width: 140,
                      height: 230,
                      resizeMode: 'cover',
                      borderRadius: 20,
                      marginLeft: 5,
                    }}
                  />
                  <Text
                    style={{
                      color: 'white',
                      position: 'absolute',
                      bottom: 15,
                      left: 15,
                      fontWeight: '700',
                      fontSize: 15,
                    }}>
                    Tahir{'\n'}
                    Mehmood
                  </Text>
                </View>
              );
            }}
          />
        </View>
        <View>
          <FlatList
            data={[1, 1, 1, 1, 1, 1, 1]}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    width: '100%',
                    height: 274,
                  }}>
                  <View
                    style={{
                      marginTop: 5,
                      backgroundColor: 'black',
                      width: '100%',
                      height: 90,
                      flexDirection: 'row',
                      // justifyContent: 'center',
                      // alignItems: 'center',
                    }}>
                    <View style={{marginLeft: 15, marginTop: 15}}>
                      <Image
                        source={require('../images/myimage.jpg')}
                        style={{
                          height: 60,
                          width: 60,
                          resizeMode: 'cover',
                          borderRadius: 30,
                        }}
                      />
                      <Image
                        source={require('../images/fb.png')}
                        style={{
                          height: 35,
                          width: 35,
                          resizeMode: 'cover',
                          borderRadius: 30,
                          position: 'absolute',
                          left: 30,
                          top: 30,
                          borderWidth: 1,
                          borderColor: 'grey',
                        }}
                      />
                    </View>
                    <View
                      style={{
                        marginLeft: 10,
                        marginTop: 25,
                        // backgroundColor: 'black',
                      }}>
                      <Text style={{color: 'white'}}>Pakistani Pc Gamers!</Text>
                      <Text style={{color: 'grey'}}>Hassan Lodhi . 1m .</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 24,
                        marginLeft: 180,
                      }}>
                      <Image
                        source={require('../images/3dot.png')}
                        style={{
                          height: 25,
                          width: 25,
                          resizeMode: 'cover',
                          borderRadius: 30,
                          tintColor: 'grey',
                          marginRight: 20,
                        }}
                      />
                      <Image
                        source={require('../images/cross.png')}
                        style={{
                          height: 25,
                          width: 25,
                          resizeMode: 'cover',
                          borderRadius: 30,
                          tintColor: 'grey',
                        }}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      alignSelf: 'center',
                      height: 120,
                      backgroundColor: 'black',
                      paddingLeft: 10,
                      paddingRight: 10,
                    }}>
                    <Text style={{color: 'white', fontSize: 18}}>
                      WHEN IS A PLAINTIFF ENTITLED TO RECOVER? A. A plaintiff
                      who was injured as as result of some negligent conduct on
                      the part of a defendant is entitled to recover
                      compensation.
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',

                      backgroundColor: 'black',
                      height: 60,
                    }}>
                    <TouchableOpacity
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 40,
                        width: 200,
                        backgroundColor: 'grey',
                        borderRadius: 10,
                      }}>
                      <Image
                        source={require('../images/like.png')}
                        style={{tintColor: 'white', height: 20, width: 20}}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 40,
                        width: 200,
                        backgroundColor: 'grey',
                        borderRadius: 10,
                        flexDirection: 'row',
                      }}>
                      <Image
                        source={require('../images/comment.png')}
                        style={{tintColor: 'white', height: 20, width: 20}}
                      />
                      <Text
                        style={{color: 'white', marginLeft: 5, fontSize: 18}}>
                        6
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
