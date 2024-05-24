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
                    <TextInput style={styles.input} placeholder='email'/>
                    <TextInput style={styles.input} placeholder='password'/>
                    <View style={{width: 200, height: 30}}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Link href='/signup' asChild>
                                <Pressable>
                                    <Text style={{color: '#1A76B9'}}>Signup</Text>
                                </Pressable>
                            </Link>
                            <Link href='/forgot-password' asChild>
                                <Pressable>
                                    <Text style={{color: '#1A76B9'}}>Forgot password?</Text>
                                </Pressable>
                            </Link>
                        </View>
                    </View>
                    <Link href='/exam' asChild>
                        <Pressable style={styles.button}>
                            <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 18}}>Login</Text>
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
        height: 270,
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
        marginBottom: 10,
        fontWeight: 'bold',
    },
    inputField: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 20,
    },
    input: {
        width: 200,
        height: 30,
        padding: 5,
        borderWidth: 1,
        borderColor: '#7EA7BE'
    },
    button: {
        width: 180,
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
        height: 220,
        marginTop: 'auto',
        marginBottom: 'auto',
    },
})