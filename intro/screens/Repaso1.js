import { Text, StyleSheet, View, Button, Switch, ImageBackground, Animated, TextInput, Alert, Easing } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Repaso1(){
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [cargando, setCargando] = useState(true);
    const [esAceptar, cambiarAceptar] = useState(false);
    const desvanecido=new Animated.Value(1);
    
    const mostrarAlert = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (nombre.trim() === '' && correo.trim() === '') {
        Alert.alert('Error \n Por favor completa todos los campos.');
      } else if (nombre.trim() === ''){
        Alert.alert('Error \n Falta completar el nombre.');
      } else if (correo.trim() === ''){
        Alert.alert('Error \n Falta completar el correo electrónico.');
      }else if (!emailRegex.test(correo)){
        Alert.alert('Error \n Por favor ingresa un correo electrónico válido.');
      } else if (esAceptar === false) {
        Alert.alert('Términos no aceptados \n Debes aceptar los términos y condiciones.');
      } else {
        Alert.alert('Registro exitoso\n' +`Nombre: ${nombre}\nEmail: ${correo}`);
      }
    }

    useEffect(()=>{
        const timer=setTimeout(()=>{
          Animated.timing(desvanecido,{
            toValue:0,
            duration:800,
            easing: Easing.out(Easing.ease),
            useNativeDriver:true,
          }).start(()=>setCargando(false));
        }, 2000);
        return()=> clearTimeout(timer);
      },[]);


    if(cargando){
        return(
          <Animated.View style={[styles.splashContainer,{opacity:desvanecido}]}>
            <ImageBackground style={styles.splashImage}
            source={require('../assets/logorepaso1.png')}
            resizeMode='contain'
            >
              <Text style={styles.splashText}>Cargando...</Text>
            </ImageBackground>
          </Animated.View>
        )
      }
        return (
          <ImageBackground style={styles.background}
          source={require('../assets/fondorepaso1.jpg')}
          resizeMode='cover'
          >
            <View style={styles.textoContainer}>
            <Text style={styles.texto}>Registro de Usuario</Text>
            <TextInput style={styles.input}
            placeholder='Nombre completo'
            placeholderTextColor="#999"
            value={nombre}
            onChangeText={setNombre}  
            />
            <TextInput style={styles.input}
            placeholder='Correo electrónico'
            placeholderTextColor="#999"
            value={correo}
            onChangeText={setCorreo}
            keyboardType="email-address"
            />
            <View>
            <Text style={styles.texto2}>Aceptar términos y condiciones</Text>
            <Switch style={{marginBottom:10}}
            value={esAceptar}
            onValueChange = {() => cambiarAceptar(!esAceptar)}
            trackColor = {{true: '#28e935ff', false: 'grey'}}
            />
            </View>
            <Button color='#08018fff'
            title = 'Registrarse'
            onPress = {mostrarAlert}
            />
            </View>
            </ImageBackground>
        )
    }

const styles = StyleSheet.create({
    background:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100%'
  },
  texto:{
    color:'#ffffffff',
    fontSize:24,
    fontWeight:'bold',
  },
  texto2:{
    color:'#ffffffff',
  },
  splashContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:50,
    backgroundColor:'#030000ff',
  },
  splashImage:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
  },
  splashText:{
    position:'absolute',
    marginBottom:60,
    fontSize:20,
    color:'#000000ff',
  },
  textoContainer:{
    backgroundColor:'#0000005d',
    padding:20,
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    width: '100%',
  }
})