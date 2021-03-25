import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1
    },
    imageViewStyle: {
        height: 200,
        width: "80%",
        alignSelf: 'center'
    },
    imageStyle: {
        height: "100%",
        width: '100%'
    },
    detailViewStyle: {
        marginHorizontal: 12.5
    },
    textStyle: {
        paddingVertical: 2.5
    },
    backButtonStyle: { 
        paddingHorizontal: 20,
        position: 'absolute', 
        zIndex: 100, 
        left: 5, 
        top: 45
    }
})