import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
    const cellSize = screenHeight / 5; 

export default function Home() {
    
    return (
            <View style={styles.container}>
                {/* button position */}
                <Pressable style={styles.button1} onPress={() => console.log('Button clicked!')}>
                    <Text style={styles.textTitle}>登　録</Text>
                </Pressable>
                
                <Pressable style={styles.button2} onPress={() => console.log('Button clicked!')}>
                    <Text style={styles.textTitle}>ゲスト</Text>
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
    button1:{
        backgroundColor: '#ff3131',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15
    },
    button2:{
        backgroundColor: '#ff3131',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15
    },
    textTitle:{
        fontSize: 20,
        color: 'white',
        fontFamily:'serif',
        fontWeight: '700',

    }
});
