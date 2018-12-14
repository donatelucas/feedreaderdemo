import React, { Component } from 'react';
import {Text} from 'react-native';
import {Content, Card, CardItem, Body} from 'native-base';


/* { Yeah, I know, not the best practice all this copied code, it was just a demo ¯\_(ツ)_/¯ } */
export default class Card extends Component {
  render() {
    return (
        <Content>
            <Card>
                <CardItem>
                    <Body>
                        <Text>
                            Feed Reader
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        </Content>
    );
  }
}

const styles = StyleSheet.create ({

});


//AppRegistry.registerComponent('Card', () => Card);
