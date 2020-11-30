import React, {useState} from 'react';
import {Image} from 'react-native';
import {Header} from 'react-native-elements';
import {Link} from 'react-router-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const restaurant = require('../assets/images/restaurant.png');

export default () => {
  AsyncStorage.getItem('username', (err, results) => {
    setUsername(results);
  });

  const [username, setUsername] = useState('');
  console.log(username);

  return (
    <Header
      backgroundColor="#F1E8D5"
      leftComponent={{icon: 'menu', color: 'black'}}
      centerComponent={{
        text: !Boolean(username) ? 'Login Now!!' : username,
        style: {color: 'black', letterSpacing: 2, textTransform: 'uppercase'},
      }}
      rightComponent={
        Boolean(username) ? (
          <Link to="/profile">
            <Image
              source={restaurant}
              style={{borderRadius: 90, width: 40, height: 40}}
            />
          </Link>
        ) : (
          <Link to="/">
            <Image
              source={restaurant}
              style={{borderRadius: 90, width: 40, height: 40}}
            />
          </Link>
        )
      }
    />
  );
};
