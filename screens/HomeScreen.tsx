import { View, Text, StyleSheet, Pressable, Dimensions, Linking  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const screenHeight = Dimensions.get('window').height;
const cellSize = screenHeight / 5;

const openWebsite = () => {
    const url = 'https://newgate-llc.shop/listener/registration';
    Linking.openURL(url)
        .catch((err) => console.error('An error occurred', err));
};

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* button position */}
            <Pressable style={styles.button1} onPress={() => openWebsite()}>
                <Text style={styles.textTitle}>アカウント登録</Text>
            </Pressable>

            <Pressable style={styles.button2} onPress={() => navigation.navigate('loginScreen')}>
                <Text style={styles.textTitle}>  　ログイン　  </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: cellSize * 1,
        alignItems: 'center',
        backgroundColor: 'black'
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
    button1: {
        backgroundColor: '#ff3131',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15
    },
    button2: {
        backgroundColor: '#ff3131',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15,
        marginTop: cellSize * 0.65
    },
    textTitle: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'serif',
        fontWeight: '700',

    }
});
