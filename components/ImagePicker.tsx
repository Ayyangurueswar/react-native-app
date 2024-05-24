import React from 'react'
import { Modal, View, StyleSheet, Pressable, Text } from 'react-native'

const ImagePicker = ({isVisible, children, onClose}: {
    isVisible: boolean;
    children: React.ReactNode;
    onClose: () => void;
}) => {
  return (
    <Modal animationType='slide' transparent={true} visible={isVisible}>
        <View style={styles.modalContent}>
            <View style={styles.titleContainer}>
                <Pressable onPress={onClose} style={{width: 50}}>
                    <Text>Back</Text>
                </Pressable>
                <Text style={{textAlign: 'center', width: 200, fontWeight: 'bold'}}>Montage</Text>
            </View>
            {children}
            <View style={{height: 100}}>
                <Pressable style={{paddingVertical: 18, paddingHorizontal: 130, backgroundColor: '#10254C', borderRadius: 10, margin: 'auto'}}>
                    <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Procced</Text>
                </Pressable>
            </View>
        </View>
    </Modal>
  )
}

export default ImagePicker

const styles = StyleSheet.create({
    modalContent: {
        height: '60%',
        width: '100%',
        backgroundColor: 'white',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
    },
    titleContainer: {
        flexDirection: 'row',
        height: 75,
        alignItems: 'center',
        paddingHorizontal: 30
    }
})