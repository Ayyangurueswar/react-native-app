import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'expo-router'

const index = () => {
  const {signUp} = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async () => {
    try{
        setLoading(true);
        await signUp(email, password);
        router.push('/exam');
    }
    catch(e: any){
        alert(e.message);
    }
    finally{
        setLoading(false);
    }
  }
  return (
    <View style={styles.container}>
        <LinearGradient colors={['#23416D', '#1F70EB']} style={styles.gradient}
        start={{x: 0, y: 0}} end={{x: 0.5, y: 0.5}}/>
        <View style={styles.box}>
            <View style={styles.wrapper}>
                <View style={styles.card}>
                    <Text style={styles.heading}>Retinoscan</Text>
                    <TextInput style={styles.input} placeholder='email' onChangeText={setEmail} value={email} inputMode='email'/>
                    <TextInput style={styles.input} placeholder='password' onChangeText={setPassword} value={password} secureTextEntry/>
                    <Pressable style={styles.button} onPress={handleSubmit}>
                        <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 18}}>Signup</Text>
                    </Pressable>
                </View>
            </View>
        </View>
        {loading && <Text style={{color: 'white', width: 330, textAlign: 'center', paddingVertical: 10, fontSize: 20}}>Logging in...</Text>}
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
        borderColor: '#7EA7BE',
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