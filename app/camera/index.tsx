import React, {useRef, useState} from 'react'
import { CameraView, useCameraPermissions } from 'expo-camera';
import { View, Text, Button, Pressable, ImageBackground } from 'react-native';
import Slider from '@react-native-community/slider';
import  Ionicons  from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';

const index = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [recording, setRecording] = useState(true);
  const [mode, setMode] = useState('manual');
  const cameraRef = useRef(null);
  const [photo, setPhoto] = useState();
  if(!permission){
    return <View />; 
  }
  else if (!permission.granted) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission"/>
      </View>
    );
  }
  else if(permission.granted && recording){
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{height: 100, width: 400, marginTop: 50, flex: 1, alignItems: 'center', paddingHorizontal: 40,}}>
                <Pressable style={{paddingHorizontal: 20, paddingVertical: 10, borderRadius: 40, borderColor: 'white', borderWidth: 2, marginLeft: 'auto'}}
                onPress={() => {setRecording(false)}}>
                    <Text style={{color: 'white', fontWeight: '700'}}>Done</Text>
                </Pressable>
            </View>
            <View style={{width: 300, height: 300, borderRadius: 150, overflow: 'hidden'}}>
                <CameraView facing={'back'} ref={cameraRef} style={{flex: 1}}></CameraView>
            </View>
            <View style={{height: 100, flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 60, gap: 10}}>
                <Ionicons name='sunny-outline' size={24} color='white'/>
                <Slider style={{width: 300, height: 5}} minimumValue={0} maximumValue={100}
                minimumTrackTintColor='#00F0FF' maximumTrackTintColor='#00F0FF91'/>
            </View>
            <View style={{height: 100, flex: 1, flexDirection: 'row', paddingHorizontal: 50, marginRight: 'auto', alignItems: 'center'}}>
                <Pressable style={{width: 50, height: 50, borderRadius: 25, borderWidth: 2, borderColor: '#00F0FF'}}>
                  <Text style={{color: '#00F0FF', margin: 'auto'}}>[Mf] OFF</Text>
                </Pressable>
            </View>
            <View style={{height: 100, flex: 1, flexDirection: 'row', paddingHorizontal: 30, alignItems: 'center', justifyContent: 'center', gap: 50}}>
                <Pressable style={{padding: 10, borderTopWidth: 2, borderTopColor: mode == 'manual' ? '#00F0FF' : ''}} onPress={()=>{setMode('manual')}}>
                  <Text style={{color: '#00F0FF'}}>Manual</Text>
                </Pressable>
                <Pressable style={{padding: 10, borderTopWidth: 2, borderTopColor: mode == 'auto' ? '#00F0FF' : ''}} onPress={()=>{setMode('auto')}}>
                  <Text style={{color: '#00F0FF'}}>Auto</Text>
                </Pressable>
            </View>
            <View style={{height: 100, flex: 1, flexDirection: 'row', width: 400, paddingHorizontal: 60, alignItems: 'center', justifyContent: 'space-between'}}>
              <Pressable style={{width: 30, height: 30, borderRadius: 15, borderWidth: 2, borderColor: '#00F0FF'}}>
                <Ionicons name='flash-outline' size={24} color='#00F0FF'/>
              </Pressable>
              <View style={{width: 60, height: 60, borderRadius: 30, borderColor: '#00F0FF', borderWidth: 2}}>
                  <Pressable style={{width: 48, height: 48, borderRadius: 24, backgroundColor: '#00F0FF', margin: 'auto'}}
                  onPress={async () => {
                    let photo = await cameraRef.current.takePictureAsync();
                    setPhoto(photo.uri);
                  }}></Pressable>
              </View>
              <View style={{width: 30, height: 30, borderRadius: 15, borderWidth: 2, borderColor: '#00F0FF'}}></View>
            </View>
        </View>
    )
  }
  else if(permission.granted && !recording){
    return(
      <View style={{flex: 1, backgroundColor: 'transparent'}}>
        <View style={{width: 300, height: 300, borderRadius: 150, marginTop: 150, marginHorizontal: 'auto', overflow: 'hidden'}}>
          <ImageBackground source={{uri: photo}} style={{flex: 1}}/>
        </View>
        <View style={{width: 300, height: 100, marginTop: 40, backgroundColor: '#605884', marginHorizontal: 'auto'}}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10}}>
            <Text style={{color: 'white', width: 70}}>Image field</Text>
            <Text style={{width: 120, color: 'white'}}>Macula centered</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10}}>
            <Text style={{color: 'white', width: 70}}>Quality</Text>
            <Text style={{width: 120, color: '#00FF29', textAlign: 'left'}}>Sufficient</Text>
          </View>
        </View>
        <View style={{width: 300, height: 60, marginHorizontal: 'auto', marginTop: 50}}>
          <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center', justifyContent: 'space-between'}}>
            <Pressable style={{width: 130, height: 50, backgroundColor: '#FF9901', borderRadius: 5}} onPress={() => {setRecording(true)}}>
              <Text style={{color: 'white', margin: 'auto'}}>Retake</Text>
            </Pressable>
            <Link href='/patient' asChild>
              <Pressable style={{width: 130, height: 50, backgroundColor: '#1DCD39', borderRadius: 5}}>
                <Text style={{color: 'white', margin: 'auto'}}>Save</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>
    )
  }
}

export default index