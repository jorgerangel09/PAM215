import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreens';
import BotonesScreen from './BotonesScreen';
import TextInputScreen from './TextInputScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ScrollViewScreen from './ScrollViewScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import FlatListScreen from './FlatListScreen';
import ModalScreen from './ModalScreen';
import BottomSheetScreen from './BottomSheetScreen';
import Prueba from './Prueba';
import Repaso1 from './Repaso1';

export default function MenuScreen() {
    const [screen,setScreen]=useState('menu');
    
    switch(screen){
        case 'contador':
            return <ContadorScreen/>;
        case 'botones':
            return <BotonesScreen/>;
        case 'TextInput':
            return <TextInputScreen/>;
        case 'ImageBackground':
            return <ImageBackgroundScreen/>;
        case 'ScrollView':
            return <ScrollViewScreen/>;
        case 'ActivityIndicator':
            return <ActivityIndicatorScreen/>;
        case 'FlatList':
            return <FlatListScreen/>;
        case 'Modal':
            return <ModalScreen/>;
        case 'BottomSheet':
            return <BottomSheetScreen/>;
        case 'Prueba':
            return <Prueba/>;
        case 'Repaso1':
            return <Repaso1/>;
        case 'menu':
            default:
                return (
                <View style={styles.container}>
                <Text style={styles.texto}> Menu de practicas </Text>
                <View style={styles.contenedorBotones}>
                <Button color='#6a00ffff' onPress={()=>setScreen('contador')} title='Pract:Contador'/>
                <Button color='#6a00ffff' onPress={()=>setScreen('botones')} title='Pract:Buttons'/>
                <Button color='#6a00ffff' onPress={()=>setScreen('TextInput')} title='Pract:TextInput'/>
                <Button color='#6a00ffff' onPress={()=>setScreen('ImageBackground')} title='Pract:ImageBackground'/>
                <Button color='#6a00ffff' onPress={()=>setScreen('ScrollView')} title='Pract:ScrollView'/>
                <Button color='#6a00ffff' onPress={()=>setScreen('ActivityIndicator')} title='Pract:ActivityIndicator'/>
                <Button color='#6a00ffff' onPress={()=>setScreen('FlatList')} title='Pract:FlatList'/>
                <Button color='#6a00ffff' onPress={()=>setScreen('Modal')} title='Pract:Modal'/>
                <Button color='#6a00ffff' onPress={()=>setScreen('BottomSheet')} title='Pract:BottomSheet'/>
                <Button color='#6a00ffff' onPress={()=>setScreen('Prueba')} title='Prueba'/>
                <Button color='#6a00ffff' onPress={()=>setScreen('Repaso1')} title='Repaso 1'/>
                </View>
                </View>
                )
    }

}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontFamily:'Times New Roman',
    fontSize:30,
    color:'#ffffffff',
    fontWeight:'bold',
  },
  contenedorBotones:{
    marginTop:20,
    flexDirection:'column',
    gap:20,
  },
})