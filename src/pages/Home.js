import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import CardRestaurant from '../components/CardRestaurant';

const Home = (props) => {
  const [dataRestaurant, setDataRestaurant] = useState([]);

  const getDataRestaurants = async () => {
    try {
      const headers = {
        headers: {
          'user-key': `e94c6a808accef2adc62589026defd48`,
        },
      };
      let getData = await Axios.get(
        `https://developers.zomato.com/api/v2.1/search?start=1&count=100`,
        headers,
      );
      setDataRestaurant(getData.data.restaurants);
    } catch (error) {
      console.log(error);
    }
  };

  const renderRestaurant = () => {
    return dataRestaurant.map((e, index) => {
      return <CardRestaurant key={index} data={e} />;
    });
  };

  useEffect(() => {
    getDataRestaurants();
  }, []);

  return (
    <View>
      <ScrollView>{renderRestaurant()}</ScrollView>
    </View>
  );
};

export default Home;
