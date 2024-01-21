import { View, ImageBackground, Text, StyleSheet, Pressable, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const screenHeight = Dimensions.get('window').height;
    const cellSize = screenHeight / 5; 

export default function Splash() {
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={require('../assets/images/splash.png')}
            style={styles.backgroundImage}
        >
            {/* Add your other components here */}
            <View style={styles.container}>
                {/* button position */}
                <Pressable style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
                    <Text style={styles.textTitle}>START</Text>
                </Pressable>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch' for different image resizing options
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    button: {
        backgroundColor: '#ff3131',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 15,
        marginTop: cellSize * 3.5
    },
    textTitle: {
        fontSize: 20,
        color: 'black',
        fontFamily: 'serif',
        fontWeight: '700',

    }
});
