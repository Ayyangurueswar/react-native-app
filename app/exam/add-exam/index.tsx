import React from 'react'
import { View, StyleSheet, Text, TextInput, ScrollView, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import  FontAwesome6  from '@expo/vector-icons/FontAwesome6'
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const index = () => {
  return (
    <ScrollView style={styles.container}>
        <LinearGradient colors={['#23416D', '#1F70EB']} style={styles.gradient}
        start={{x: 0, y: 0}} end={{x: 0.5, y: 0.5}}/>
        <View style={{height: 100}}>
            <View style={styles.header}>
                <FontAwesome6 name="less-than" size={24} color="white" style={{marginRight: 'auto'}}/>
                <Text style={{color: 'white', fontWeight: '600', fontSize: 20, width: 350, textAlign: 'center'}}>Add Exam</Text>
            </View>
        </View>
        <View style={styles.main}>
            <Text style={{fontWeight: 'bold', marginTop: 10, paddingLeft: 20, fontSize: 16}}>Patient</Text>
            <View style={styles.mrn}>
                <View style={styles.mrnWrapper}>
                    <TextInput style={styles.mrnInput} placeholder='MRN*'/>
                    <Ionicons name="cloud-download" size={24} color="black" />
                </View>
            </View>
            <TextInput placeholder='First Name*' style={styles.input}/>
            <TextInput placeholder='Last Name*' style={styles.input}/>
            <TextInput placeholder='Date Of Birth*' style={styles.input}/>
            <TextInput placeholder='Gender*' style={styles.input}/>
            <Text style={{fontWeight: 'bold', marginTop: 20, paddingLeft: 20, fontSize: 16}}>Exam code</Text>
            <TextInput placeholder='Exam code' style={styles.input}/>
            <Text style={{fontWeight: 'bold', marginTop: 20, paddingLeft: 20, fontSize: 16}}>Prescribing Doctor</Text>
            <View style={styles.textareaWrapper}>
                <View style={styles.textarea}>
                    <TextInput style={{height: 200, width: 290}}/>
                    <FontAwesome6 name='greater-than' size={24} color='black'/>
                </View>
            </View>
            <Link href='/patient' asChild>
                <Pressable style={styles.button}>
                    <Text style={{color: 'white', textAlign: 'center', fontSize: 16, fontWeight: '700'}}>Add</Text>
                </Pressable>
            </Link>
        </View>
    </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        marginTop: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#10254C',
        paddingHorizontal: 10,
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 900,
    },
    main: {
        backgroundColor: 'white',
        height: 800,
    },
    mrn: {
        marginTop: 10,
        marginHorizontal: 'auto',
        borderColor: '#000000A6',
        borderWidth: 1,
        borderRadius: 10,
        width: 330,
        height: 50,   
    },
    mrnInput: {
        width: 280,
        padding: 10,
        paddingRight: 40,
        borderRadius: 10
    },
    mrnWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center' 
    },
    input: {
        width: 330,
        padding: 10,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 10,
        marginHorizontal: 'auto',
        marginTop: 10
    },
    textarea: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textareaWrapper: {
        width: 330,
        height: 200,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 10,
        marginHorizontal: 'auto',
        marginTop: 10,
        overflow: 'hidden'
    },
    button: {
        width: 330,
        backgroundColor: '#10254C',
        paddingVertical: 10,
        marginVertical: 30,
        marginHorizontal: 'auto',
        borderRadius: 10,
    }
})