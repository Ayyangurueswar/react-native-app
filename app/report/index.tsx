import React, {useEffect, useState} from 'react'
import { StyleSheet, View, Text,  FlatList, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import  AntDesign  from '@expo/vector-icons/AntDesign';
import {getDownloadURL, listAll, ref} from "firebase/storage";
import { storage } from '@/firebaseConfig';
import { Link } from 'expo-router';

const index = () => {
  const [images, setImages] = useState<any[]>();
  const [loading, setLoading] =  useState(false);
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
    <View>
        <LinearGradient colors={['#23416D', '#1F70EB']} style={styles.gradient}
        start={{x: 0, y: 0}} end={{x: 0.5, y: 0.5}}/>
        <View style={{height: 100, backgroundColor: '#224375', width: 400, paddingHorizontal: 30}}>
          <Link href='/patient' asChild>
            <Text style={{color: 'white', marginTop: 30, fontSize: 48}}>&lt;</Text>
          </Link>
        </View>
        <View style={{height: 670, backgroundColor: 'white'}}>
          <Text style={{color: '#15336C', textAlign: 'center', fontSize: 28, padding: 10}}>Retinoscan</Text>
          <View style={{width: 300, marginHorizontal: 'auto', height: 600}}>
            <View style={{width: 300, height: 60}}>
              <View style={{flex: 1, flexDirection: 'row', gap: 20, alignItems: 'center'}}>
                <AntDesign name='exclamationcircle' size={24} color='#CD1919'/>
                <Text style={{color: '#CD1919'}}>81 SCANS LEFT</Text>
              </View>
            </View>
            <View style={{marginHorizontal: 20, width: 300, height: 100}}>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text style={{width: 150, color: '#102A70'}}>Patient MRN:</Text>
                <Text style={{width: 150, color: '#102A70', fontWeight: 'bold'}}>26203</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text style={{width: 150, color: '#102A70'}}>Patient Name:</Text>
                <Text style={{width: 150, color: '#102A70', fontWeight: 'bold'}}>Himank Arora</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text style={{width: 150, color: '#102A70'}}>Date:</Text>
                <Text style={{width: 150, color: '#102A70', fontWeight: 'bold'}}>21-Dec-2023</Text>
              </View>
            </View>
            <View style={{width: 300, height: 60}}>
              <View style={{flex: 1, flexDirection: 'row', gap: 20, alignItems: 'center'}}>
                <View style={{width: 20, height: 20, borderRadius: 10, backgroundColor: '#CD1919'}}></View>
                <Text style={{color: '#CD1919'}}>DR DETECTED</Text>
              </View>
            </View>
            <View style={{width: 300, height: 170, marginTop: 10, marginHorizontal: 'auto'}}>
              {loading ? <Text style={{color: 'black', fontSize: 24, textAlign: 'center', width: 300, paddingVertical: 5}}>Loading...</Text> : 
              <FlatList
                  data={images}
                  renderItem={({item}) => (
                      <View style={{width: 150, margin: 'auto'}}>
                          <Image source={{uri: item}} style={{height: 80, width: 140}}/>
                      </View>
                  )}
                  numColumns={2}
                  ItemSeparatorComponent={() => <View style={{height: 10}}/>} />}
            </View>
            <View style={{width: 300, paddingVertical: 10, backgroundColor: '#10254C', marginVertical: 30, borderRadius: 7}}>
              <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>SEE FULL REPORT</Text>
            </View>
            <View style={{width: 300, backgroundColor: '#2F3A72', paddingVertical: 15, paddingHorizontal: 10, borderRadius: 10}}>
              <Text style={{color: 'white', textAlign: 'center'}}>Retinoscan is a physician assist software and is not a replacement for an ophthalmologist&apos;s diagnosis and must not be constructed as a final diagnosis.</Text>
            </View>
          </View>
        </View>
    </View>
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
})