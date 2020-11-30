import {Image} from 'react-native';
import React from 'react';
import {
  Body,
  Button,
  Card,
  CardItem,
  Content,
  Left,
  Right,
  Text,
} from 'native-base';
import {Link} from 'react-router-native';
import {Icon} from 'react-native-elements';

const CardRestaurant = ({data}) => {
  return (
    <Content style={{margin: 10}}>
      {Boolean(data.restaurant.featured_image) && (
        <Link to={{pathname: '/detail', state: {data}}}>
          <Card style={{borderRadius: 5}}>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    data.restaurant.featured_image == ''
                      ? 'https://via.placeholder.com/500x300'
                      : data.restaurant.featured_image,
                }}
                style={{height: 200, width: null, flex: 1}}
              />
            </CardItem>
            <CardItem>
              <Left style={{marginLeft: -15}}>
                <Body>
                  <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                    {data.restaurant.name}
                  </Text>
                  <Text style={{fontSize: 11, marginBottom: 7}}>
                    {data.restaurant.cuisines}
                  </Text>
                  <Text note style={{fontSize: 10}}>
                    {data.restaurant.location.address}
                  </Text>
                </Body>
              </Left>

              <Right style={{marginRight: -25}}>
                <Button transparent style={{marginRight: 10, marginBottom: -8}}>
                  <Icon
                    color="white"
                    name="star"
                    size={20}
                    iconStyle={{backgroundColor: 'black'}}
                  />
                  <Text style={{marginLeft: -10, fontSize: 12, color: 'grey'}}>
                    {data.restaurant.user_rating.aggregate_rating}/5
                  </Text>
                </Button>
                <Body>
                  <Text style={{fontSize: 12}}>
                    IDR.{data.restaurant.average_cost_for_two}.000,- for two
                  </Text>
                </Body>
              </Right>
            </CardItem>
          </Card>
        </Link>
      )}
    </Content>
  );
};

export default CardRestaurant;
