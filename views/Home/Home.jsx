import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, View, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import style from './HomeStyles';
import PackList from '../../components/PackList';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: (
      <TouchableOpacity style={style.icon}>
        <Ionicons
          onPress={() => navigation.navigate('Settings')}
          name="settings-sharp"
          size={22}
          color="#fff"
        />
      </TouchableOpacity>
    )
  });

  showSettings = () => {
    this.props.navigation.navigate('Settings');
  }

  render() {
    return (
      <View style={style.container}>
        <ImageBackground
          style={style.background}
          source={require('../../assets/background-boat.jpg')}
        >
        <StatusBar style="dark-content"/>
        <View style={style.content}>
          <PackList/>
        </View>
        </ImageBackground>
      </View>
    );
  }
}
