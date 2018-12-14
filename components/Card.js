import React, { Component } from 'react';
import {Text} from 'react-native';
import {Content, Card, CardItem, Body} from 'native-base';


/* { Yeah, I know, not the best practice all this copied code, it was just a demo ¯\_(ツ)_/¯ } */
class Card extends Component {
    componentDidMount(){
        alert("hello");
    }

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
    card: {
        paddingBottom: 10,
        backgroundColor: "#f9f9f9",
    },
    inner: {
        backgroundColor: "#001F54",
    },
    image: {
        height: undefined,
        maxHeight: 200
    },
    title: {
        fontSize: 20,
        color: "#000",
        textAlign: "center",
        paddingTop: 10,
        paddingBottom: 5,
        backgroundColor: "#C0C0C0",
        fontWeight: "bold"
    },
    excerpt: {
        fontSize: 16,
        color: "#000",
        paddingTop: 5,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        backgroundColor: "#D3D3D3"
    },
    footer: {
        flexDirection: "row",
        height: 35,
        backgroundColor: "#034078",
        paddingTop: 10
    },
    favorite: {
        flex: 1,
        color: "#FEFCFB",
        justifyContent: "center",
        alignItems: "center"
    },
    bookmarks: {
        flex: 1,
        color: "#FEFCFB",
        justifyContent: "center",
        alignItems: "center"
    },
    share: {
        flex: 1,
        color: "#FEFCFB",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Card;

AppRegistry.registerComponent('Card', () => Card);
