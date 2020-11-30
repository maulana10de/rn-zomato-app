import React from 'react';
import {View, Image} from 'react-native';
import {Button} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Redirect} from 'react-router-native';

const restaurant = require('../assets/images/restaurant.png');

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  onBtLogout = () => {
    AsyncStorage.removeItem('username', (err) => console.log(err));
    this.setState({redirect: true});
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
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
        <View style={{margin: 50, flex: 1}}>
          <Button
            title="Logout"
            titleStyle={{
              textTransform: 'uppercase',
              letterSpacing: 2,
              color: 'black',
            }}
            onPress={this.onBtLogout}
            buttonStyle={{backgroundColor: '#F1E8D5'}}
          />
        </View>
      </View>
    );
  }
}

export default Profile;
