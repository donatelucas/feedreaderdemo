import React, { Component } from 'react';
import { AppRegistry, Dimensions, StyleSheet, Text, View, Image, ScrollView, Linking, TouchableHighlight } from 'react-native';

let WIDTH = Dimensions.get('window');


/* { Yeah, I know, not the best practice all this copied code, it was just a demo ¯\_(ツ)_/¯ } */
class Card extends Component {
  render() {
    return (
        <ScrollView>
            <View style = { styles.card } >
            <View style = { styles.image } >
                <Image
                    style = {{ resizeMode: "cover", width: 400, height: 200 }}
                    source = { require('./nbc.jpg') } />
            </View>
                <View style = { styles.inner } >
                    <View>
                        <TouchableHighlight onPress={() =>
                            Linking.openURL('https://www.nbcsports.com/video/extended-highlights-liverpool-1-everton-0')}>
                        <Text style = { styles.title }> Liverpool 1-0 Everton - Origi, the unlikely hero </Text>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <Text style = { styles.excerpt }>
                        Divock Origi dramatic goal in stoppage time gave Liverpool the Merseyside derby win over Everton.</Text>
                    </View>
                    <View style = { styles.footer }>
                        <View style = { styles.favorite }>
                            <Text style = { styles.favorite }> Favorite </Text>
                        </View>
                        <View style = { styles.bookmark }>
                            <Text style = { styles.bookmarks }> Bookmarks </Text>
                        </View>
                        <View style = { styles.share }>
                            <Text style = { styles.share }> Share </Text>
                        </View>
                    </View>
                </View>
            </View>


            <View style = { styles.card } >
            <View style = { styles.image } >
                <Image
                    style = {{ resizeMode: "cover", width: 400, height: 200 }}
                    source = { require('./insight.jpg') } />
            </View>
                <View style = { styles.inner } >
                    <View>
                        <TouchableHighlight onPress={() =>
                            Linking.openURL('https://www.jpl.nasa.gov/news/news.php?feature=7298')}>
                        <Text style = { styles.title }> NASA's Mars InSight Flexes Its Arm </Text>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <Text style = { styles.excerpt }>
                        New images from NASA's Mars InSight lander show its robotic arm is ready to do some lifting.</Text>
                    </View>
                    <View style = { styles.footer }>
                        <View style = { styles.favorite }>
                            <Text style = { styles.favorite }> Favorite </Text>
                        </View>
                        <View style = { styles.bookmark }>
                            <Text style = { styles.bookmarks }> Bookmarks </Text>
                        </View>
                        <View style = { styles.share }>
                            <Text style = { styles.share }> Share </Text>
                        </View>
                    </View>
                </View>
            </View>


            <View style = { styles.card } >
            <View style = { styles.image } >
                <Image
                    style = {{ resizeMode: "cover", width: 400, height: 200 }}
                    source = { require('./google.jpg') } />
            </View>
                <View style = { styles.inner } >
                    <View>
                        <TouchableHighlight onPress={() =>
                            Linking.openURL('https://www.theverge.com/2018/12/6/18125879/search-neutrality-google-bias-seo-rigged-sundar-pichai-congress-eu')}>
                        <Text style = { styles.title }> The long, tortured quest to make google unbiased </Text>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <Text style = { styles.excerpt }>
                        Next week, Sundar Pichai will try to reassure Congress that Google’s search engine isn’t rigged. The Google CEO is testifying before the House Judiciary Committee on Tuesday, answering questions about “potential bias and the need for greater transparency” in Google’s business practices.
                        </Text>
                    </View>
                    <View style = { styles.footer }>
                        <View style = { styles.favorite }>
                            <Text style = { styles.favorite }> Favorite </Text>
                        </View>
                        <View style = { styles.bookmark }>
                            <Text style = { styles.bookmarks }> Bookmarks </Text>
                        </View>
                        <View style = { styles.share }>
                            <Text style = { styles.share }> Share </Text>
                        </View>
                    </View>
                </View>
            </View>


            <View style = { styles.card } >
            <View style = { styles.image } >
                <Image
                    style = {{ resizeMode: "cover", width: 400, height: 200 }}
                    source = { require('./ralph.png') } />
            </View>
                <View style = { styles.inner } >
                    <View>
                        <TouchableHighlight onPress={() =>
                            Linking.openURL('https://www.fandango.com/movie-trailer/ralph-breaks-the-internet-trailer-2-trailer/201129?mpxId=1325045827642&autoplay=true')}>
                        <Text style = { styles.title }> Ralph Breaks The Internet: Sneak Peek </Text>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <Text style = { styles.excerpt }>
                        Ralph and Vanellope embark on an adventure inside the internet to find a spare part for a game.
                        </Text>
                    </View>
                    <View style = { styles.footer }>
                        <View style = { styles.favorite }>
                            <Text style = { styles.favorite }> Favorite </Text>
                        </View>
                        <View style = { styles.bookmark }>
                            <Text style = { styles.bookmarks }> Bookmarks </Text>
                        </View>
                        <View style = { styles.share }>
                            <Text style = { styles.share }> Share </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
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
