import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import style from './SettingsStyles';

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <StatusBar style="dark-content"/>
        <Text>Settings Screen</Text>
        <Button
          title="Home"
          color= '#228B22'
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

