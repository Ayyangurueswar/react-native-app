import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={styles.container}>
        <LinearGradient colors={['#23416D', '#1F70EB']} style={styles.gradient}
        start={{x: 0, y: 0}} end={{x: 0.5, y: 0.5}}/>
        <View style={styles.box}>
            <View style={styles.wrapper}>
                <View style={styles.card}>
                    <Text style={styles.heading}>Retinoscan</Text>
                    <View style={styles.inputField}>
                        <Text style={styles.cardText}>REM-</Text>
                        <TextInput style={styles.input}/>
                    </View>
                    <Link href='/login' asChild>
                        <Pressable style={styles.button}>
                            <Text style={{color: 'white', textAlign: 'center'}}>Save & continue</Text>
                        </Pressable>
                    </Link>
                </View>
            </View>
        </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop: 10,
    },
    box: {
        width: 270,
        height: 220,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    card: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    heading: {
        color: '#15336C',
        fontSize: 24,
    },
    inputField: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 20,
    },
    input: {
        width: 100,
        height: 30,
        padding: 5,
        borderWidth: 1,
        borderColor: '#7EA7BE'
    },
    button: {
        width: 200,
        padding: 10,
        backgroundColor: '#10254C',
        borderRadius: 10,
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 900,
    },
    cardText: {
        color: '#1D32A1',
        fontSize: 16,
    },
    wrapper: {
        width: 270,
        height: 170,
        marginTop: 'auto',
        marginBottom: 'auto',
    }
})