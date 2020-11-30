import React from 'react';
import {View, Image} from 'react-native';
import {Icon, Input, Button} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Redirect} from 'react-router-native';

const restaurant = require('../assets/images/restaurant.png');

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      Password: '',
      redirect: false,
    };
    AsyncStorage.getItem('username', (err, results) => {
      if (Boolean(results) && results.length > 0) {
        this.setState({redirect: true});
      }
    });
  }

  onBtLogin = () => {
    AsyncStorage.setItem('username', this.state.username, async (err) => {
      if ((await (await AsyncStorage.getItem('username')).length) > 0) {
        this.setState({redirect: true});
      }
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    }
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View
          style={{
            flex: 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={restaurant}
            style={{width: '90%', height: '90%', marginTop: 50}}
          />
        </View>
        <View style={{margin: 50, flex: 2}}>
          <Input
            leftIcon={<Icon name="user" size={24} type="feather" />}
            placeholder="Username"
            onChangeText={(e) => this.setState({username: e})}
          />
          <Input
            leftIcon={<Icon name="key" size={24} type="feather" />}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(e) => this.setState({password: e})}
          />
          <Button
            title="Login"
            titleStyle={{
              textTransform: 'uppercase',
              letterSpacing: 2,
              color: 'black',
            }}
            onPress={this.onBtLogin}
            buttonStyle={{backgroundColor: '#F1E8D5'}}
          />
        </View>
      </View>
    );
  }
}

export default Login;
