import React, {useEffect, useState} from 'react'
import { View, StyleSheet, Text, Pressable, FlatList, Image, ScrollView } from 'react-native'
import  FontAwesome6  from '@expo/vector-icons/FontAwesome6'
import { LinearGradient } from 'expo-linear-gradient'
import  AntDesign  from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';
import MaterialCommunityIcons  from '@expo/vector-icons/MaterialCommunityIcons';
import ImagePicker from '@/components/ImagePicker';
import {getDownloadURL, listAll, ref} from "firebase/storage";
import { storage } from '@/firebaseConfig';

const index = () => {
  const [show, setShow] = useState(false);
  const [images, setImages] = useState<any[]>();
  const [loading, setLoading] = useState(false);
  const onClose = () => {
    setShow(false);
  }
  useEffect(() => {
    const storageRef = ref(storage, 'images');
    setLoading(true);
    const res = listAll(storageRef);
    res.then((result) => {
      const calls: Promise<string>[] = [];
      result.items.forEach((item) => {
        calls.push(getDownloadURL(item));
      });
      const imgs =  Promise.all(calls);
      imgs.then((result) => {
        setImages(result);
        setLoading(false);
      })
    });
  }, [])
  return (
    <ScrollView>
        <LinearGradient colors={['#23416D', '#1F70EB']} style={styles.gradient}
        start={{x: 0, y: 0}} end={{x: 0.5, y: 0.5}}/>
        <View style={{height: 100}}>
            <View style={styles.header}>
                <Link href='/exam/add-exam' asChild>
                    <Pressable>
                        <FontAwesome6 name="less-than" size={24} color="white" style={{marginRight: 'auto'}}/>
                    </Pressable>
                </Link>
                <Text style={{color: 'white', fontWeight: '600', fontSize: 20, textAlign: 'center'}}>Himanik Arora</Text>
                <AntDesign name='delete' size={24} color='white'/>
            </View>
        </View>
        <View style={styles.main}>
            <View style={{height: 90, width: 330, marginHorizontal: 'auto'}}>
                <View style={{flex: 1, height: 100, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', gap: 15}}>
                        <AntDesign name='user' size={24} color='black'/>
                        <Text style={{fontWeight: 'bold'}}>Himanik Arora</Text>
                    </View>
                    <Text>13/Male</Text>
                </View>
            </View>
            <View style={{height: 25, width: 330, marginHorizontal: 'auto'}}>
                <View style={{flex: 1, height: 50, flexDirection: 'row',paddingBottom: 4, justifyContent: 'space-between',
                    borderBottomColor: 'black', borderBottomWidth: 1
                }}>
                    <Text style={{fontWeight: '200'}}>2151</Text>
                    <Text style={{fontWeight: '200'}}>Mohammed Siddique</Text>
                </View>
            </View>
            <View style={{height: 25, width: 330, marginHorizontal: 'auto', marginVertical: 20}}>
                <View style={{flex: 1, height: 50, flexDirection: 'row', gap: 20}}>
                    <AntDesign name='calendar' size={24} color='black'/>
                    <Text style={{fontWeight: 'bold'}}>21 Dec 2023, 11 AM</Text>
                </View>
            </View>
            <View style={{height: 200, width: 330, marginHorizontal: 'auto'}}>
                <Text style={{fontWeight: 'bold', marginBottom: 10}}>Images</Text>
                <View style={{width: 330,  height: 'auto', marginHorizontal: 'auto'}}>
                    {loading ? <Text style={{color: 'black', fontSize: 24, textAlign: 'center', width: 300, paddingVertical: 5}}>Loading...</Text> : 
                    <FlatList
                    data={images}
                    renderItem={({item}) => (
                    <View style={{width: 165, margin: 'auto'}}>
                        <Image source={{uri: item}} style={{height: 80, width: 145}}/>
                    </View>
                    )}
                    numColumns={2}
                    ItemSeparatorComponent={() => <View style={{height: 20}}/>} />}
                    <Link href='/camera' asChild>
                        <Pressable style={{width: 145, height: 80, marginTop: 10}}>
                            <View style={{display: 'flex', flex: 1, alignItems: 'center', backgroundColor: '#79A6E891', gap: 5, borderRadius: 10, justifyContent: 'center'}}>
                                <MaterialCommunityIcons name='camera-plus' size={30} color='grey'/>
                                <Text style={{fontWeight: '300'}}>Add image</Text>
                            </View>
                        </Pressable>
                    </Link>
                </View>
                <Pressable style={{paddingVertical: 20,borderTopColor: '#000000', borderTopWidth: 1, marginTop: 30}} onPress={() => {setShow(true)}}>
                    <Text>Montage Images</Text>
                </Pressable>
                <Pressable style={{paddingVertical: 20,borderTopColor: '#000000', borderTopWidth: 1}}>
                    <Text>Generate Reports</Text>
                </Pressable>
                <Link href='/report' asChild>
                    <Pressable style={{paddingVertical: 20,borderTopColor: '#000000', borderTopWidth: 1}}>
                        <Text>AI Analysis</Text>
                    </Pressable>
                </Link>
                <Pressable style={{paddingVertical: 20,borderTopColor: '#000000', borderTopWidth: 1}}>
                    <Text>Previous Orders</Text>
                </Pressable>
            </View>
        </View>
        <ImagePicker isVisible={show} onClose={onClose}>
            <View style={{flex: 1, paddingHorizontal: 10}}>
                {loading ? <Text style={{color: 'black', fontSize: 24, textAlign: 'center', width: 300, paddingVertical: 5}}>Loading...</Text> : 
                <FlatList
                data={images}
                renderItem={({item}) => (
                    <View style={{width: 165, margin: 'auto'}}>
                        <Image source={{uri: item}} style={{height: 80, width: 145}}/>
                    </View>
                )}
                numColumns={2}
                ItemSeparatorComponent={() => <View style={{height: 20}}/>} />}
            </View>
        </ImagePicker>
    </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 900,
    },
    header: {
        marginTop: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#10254C',
        padding: 10,
        justifyContent: 'space-between'
    },
    main: {
        backgroundColor: 'white',
        height: 800,
    },
})