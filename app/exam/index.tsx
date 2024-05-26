import React, {useEffect} from 'react'
import { View, Text, StyleSheet, Pressable, TextInput, BackHandler, Alert } from 'react-native'
import  FontAwesome6  from '@expo/vector-icons/FontAwesome6'
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router';

const index = () => {
    useEffect(() => {
        const backAction = () => {
          Alert.alert('Hold on!', 'Are you sure you want to go back?', [
            {
              text: 'Cancel',
              onPress: () => null,
              style: 'cancel',
            },
            {text: 'YES', onPress: () => BackHandler.exitApp()},
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
        );
    
        return () => backHandler.remove();
      }, []);
  return (
    <View style={styles.container}>
        <LinearGradient colors={['#23416D', '#1F70EB']} style={styles.gradient}
        start={{x: 0, y: 0}} end={{x: 0.5, y: 0.5}}/>
        <View style={{height: 100}}>
            <View style={styles.header}>
                <Text style={{color: 'white', fontWeight: '600', fontSize: 20, width: 300, textAlign: 'center'}}>Exam</Text>
                <Link href='/exam/add-exam' asChild>
                    <FontAwesome6 name="add" size={24} color="white" style={{marginLeft: 'auto'}}/>
                </Link>
            </View>
        </View>
        <View style={styles.main}>
            <View style={styles.search}>
                <View style={styles.searchWrapper}>
                    <FontAwesome5 name="search" size={20} color="black"/>
                    <TextInput style={styles.searchBar}/>
                </View>
            </View>
            <Pressable style={styles.button}>
                <Text>Archived Exams</Text>
            </Pressable>
            <Pressable style={styles.button}>
                <Text>Current Exams</Text>
            </Pressable>
            <View style={styles.exams}>
                <FontAwesome6 name="file-clipboard" size={48} color="black" />
                <Text style={{fontWeight: 'bold', textAlign: 'center'}}>No exam found</Text>
                <Text style={{fontWeight: '300', textAlign: 'center'}}>You don&apos;t have any exams. Use the &quot;+&quot; icon to add an exam.</Text>
            </View>
        </View>
    </View>
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
        height: 700,
    },
    search: {
        marginTop: 20,
        marginHorizontal: 'auto',
        borderColor: '#000000A6',
        borderWidth: 1,
        borderRadius: 10,
        width: 290,
        height: 50,   
    },
    searchBar: {
        width: 250,
        padding: 10,
        paddingRight: 40,
        borderRadius: 10
    },
    button: {
        paddingVertical: 20,
        borderBottomColor: '#000000',
        borderBottomWidth: 1
    },
    exams: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    searchWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center' 
    }
});