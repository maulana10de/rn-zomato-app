import React from 'react';
import {Text, Image, ScrollView} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import {CardItem, Body, ListItem, List} from 'native-base';

export default ({location}) => {
  const {
    name,
    cuisines,
    featured_image,
    establishment,
    timings,
    average_cost_for_two,
    highlights,
  } = location.state.data.restaurant;
  return (
    <Card>
      <ScrollView>
        <CardItem cardBody>
          <Image
            source={{
              uri:
                featured_image == ''
                  ? 'https://via.placeholder.com/500x300'
                  : featured_image,
            }}
            style={{height: 200, width: null, flex: 1}}
          />
        </CardItem>
        <CardItem cardBody style={{marginTop: 10}}>
          <Body>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                letterSpacing: 2,
                marginBottom: 5,
              }}>
              {name}
            </Text>
            <Text style={{fontSize: 10, marginBottom: 5}}>
              {establishment} - {cuisines}
            </Text>
            <Text style={{fontSize: 10, marginBottom: 10}}>
              {location.state.data.restaurant.location.locality}
            </Text>
            <Text style={{fontSize: 10, marginBottom: 5}}>
              Open Now - {timings}
            </Text>
            <Text style={{fontSize: 10}}>
              Cost for two - IDR{average_cost_for_two}.000,-
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginTop: 10,
                marginBottom: 5,
                fontWeight: 'bold',
              }}>
              Other Info :
            </Text>
            {highlights.length > 0 ? (
              highlights.map((e, i) => {
                return (
                  <List key={i}>
                    <Text
                      style={{fontSize: 10, marginLeft: 5, marginBottom: 3}}>
                      # {e}
                    </Text>
                  </List>
                );
              })
            ) : (
              <Text>Ops ... other info not found</Text>
            )}
          </Body>
        </CardItem>
      </ScrollView>
    </Card>
  );
};
