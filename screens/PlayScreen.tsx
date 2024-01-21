import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function Play() {
    const screenWidth = Dimensions.get('window').width;
    const cellSize = screenWidth / 5; 

    return (
        <View style={styles.container}>
            <Text style={styles.title}>BINGO</Text>
            <Text style={styles.selected}>98</Text>
            <View style={styles.row}>
                <Text style={[styles.cell, { width: cellSize, height: cellSize }]}>1</Text>
                <Text style={[styles.cell, { width: cellSize, height: cellSize }]}>2</Text>
                <Text style={[styles.cell, { width: cellSize, height: cellSize }]}>3</Text>
                <Text style={[styles.cell, { width: cellSize, height: cellSize }]}>2</Text>
                <Text style={[styles.cell, { width: cellSize, height: cellSize }]}>3</Text>
            </View>
            <View style={styles.row}>
                <Text style={[styles.cell, { width: cellSize, height: cellSize }]}>22</Text>
                <Text style={[styles.cell, { width: cellSize, height: cellSize }]}>44</Text>
                <Text style={[styles.cell, { width: cellSize, height: cellSize }]}>33</Text>
                <Text style={[styles.cell, { width: cellSize, height: cellSize }]}>44</Text>
                <Text style={[styles.cell, { width: cellSize, height: cellSize }]}>77</Text>
            </View>
            <View style={styles.row}>
                <Text style={[styles.cell, { width: cellSize, height: cellSize }]}>22</Text>
                <Text style={[styles.cell, { width: cellSize, height: cellSize }]}>44</Text>
                <Text style={[styles.cell, { width: cellSize, height: cellSize }]}></Text>
                <Text style={[styles.cell, { width: cellSize, height: cellSize }]}>44</Text>
                <Text style={[styles.cell, { width: cellSize, height: cellSize }]}>77</Text>
            </View>
            <View style={styles.row}>
                <Text style={[styles.cell, { width: cellSize, height: cellSize }]}>22</Text>
                <Text style={[styles.cell, { width: cellSize, height: cellSize }]}>44</Text>
                <Text style={[styles.cell, { width: cellSize, height: cellSize }]}>33</Text>
                <Text style={[styles.cell, { width: cellSize, height: cellSize }]}>44</Text>
                <Text style={[styles.cell, { width: cellSize, height: cellSize }]}>77</Text>
            </View>
            <View style={styles.row}>
                <Text style={[styles.cell, { width: cellSize, height: cellSize }]}>22</Text>
                <Text style={[styles.cell, { width: cellSize, height: cellSize }]}>44</Text>
                <Text style={[styles.cell, { width: cellSize, height: cellSize }]}>33</Text>
                <Text style={[styles.cell, { width: cellSize, height: cellSize }]}>44</Text>
                <Text style={[styles.cell, { width: cellSize, height: cellSize }]}>77</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#241e20',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    cell: {
        flex: 1,
        padding: 10,
        borderWidth: 3,
        textAlign: 'center',
        fontSize: 35,
        fontWeight: '700',
        color: 'white',
        borderColor: 'white',
        backgroundColor: '#241e20',
        textAlignVertical: 'center'
    },
    title: {
        color: 'white',
        fontSize: 90,
        fontWeight: "700",
    },
    selected: {
        color: 'white',
        fontSize: 65,
        marginBottom: 20,
        borderColor: 'white',
    }
});