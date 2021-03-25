import React from 'react';
import { connect } from 'react-redux';
import { Container, ListItem } from 'native-base';
import { FlatList, View, Image, Text } from 'react-native';
import { songslist } from '../../store/home';

import styles from './style';


class Home extends React.Component {


    componentDidMount() {
        this.props.songslist()
    }


    onPressSelectedItem = (item) => {
        this.props.navigation.navigate("Details", { item: item })
    }

    renderListItem = ({ item, index }) => {
        return (
            <ListItem onPress={() => this.onPressSelectedItem(item)} key={index}>
                <View style={styles.imageViewStyle}>
                    <Image style={styles.imageStyle} source={{ uri: item?.artworkUrl60 }} />
                </View>
                <View style={{ marginLeft: 12.5 }}>
                    <Text numberOfLines={1}>{item?.collectionName}</Text>
                    <Text numberOfLines={1}>{item?.trackName}</Text>
                </View>
            </ListItem>
        )
    }

    render() {
        const { songs } = this.props

        return (
            <Container style={styles.container}>
                <FlatList
                    contentContainerStyle={{ paddingVertical: 30 }}
                    data={songs?.results}
                    showsVerticalScrollIndicator={false}
                    renderItem={(items) => this.renderListItem(items)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        songs: state.home.songs
    }
}

const mapDispatchToProps = {
    songslist: () => songslist()
}



export default connect(mapStateToProps, mapDispatchToProps)(Home);