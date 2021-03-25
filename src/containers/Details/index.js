import React from 'react';
import { View, Image, Text } from 'react-native';
import { Container, Content, Button } from 'native-base';
import { Images } from '../../themes';
import styles from './style';

const Details = ({ navigation, route }) => {

    const [details, setDatails] = React.useState()

    React.useEffect(() => {
        setDatails(route?.params?.item)
    })

    return (
        <Container style={styles.container}>
            <Button
                style={styles.backButtonStyle}
                onPress={() => navigation.goBack()}>
                <Image resizeMode={"contain"} source={Images.back} />
            </Button>
            <Content>
                <View style={styles.imageViewStyle}>
                    <Image resizeMode={"contain"} style={styles.imageStyle} source={{ uri: details?.artworkUrl100 }} />
                </View>
                <View style={styles.detailViewStyle}>
                    <Text style={styles.textStyle}>Artist Name: {details?.artistName}</Text>
                    <Text style={styles.textStyle}>Collection Name: {details?.collectionName}</Text>
                    <Text style={styles.textStyle}>Collection Censore Name: {details?.collectionCensoredName}</Text>
                    <Text style={styles.textStyle}>Collection Artist Name: {details?.collectionArtistName}</Text>
                </View>
            </Content>
        </Container>
    )
}

export default Details