import { Text, StyleSheet, View, Button, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'

export default function TextInputScreen(){
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [telefono, setTelefono] = useState('');

  const mostrarAlert = () => {
    if (nombre.trim() === '' || password.trim() === '' || telefono.trim() === '') {
      Alert.alert('Error favor de llenar los campos (movil)');
      alert('Error favor de llenar los campos (web)');
    } else {
      //Alert movil
      Alert.alert('Datos ingresados\n'+`Nombre: ${nombre}\nPassword: ${password}\nTelefono: ${telefono}`);
      //Alert web
      alert('Datos ingresados\n'+`Nombre: ${nombre}\nPassword: ${password}\nTelefono: ${telefono}`);
    }
  }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>TextInput & Alert</Text>
        <Text style={styles.tag}>Nombre: </Text>
        <TextInput style={styles.input}
          placeholder='Escribe tu nombre aquí'
          value={nombre}
          onChangeText={setNombre}
        
        />
        <Text style={styles.tag}>Password: </Text>
        <TextInput style={styles.input}
          placeholder='Escribe tu password aquí'
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        
        />
        <Text style={styles.tag}>Telefono: </Text>
        <TextInput style={styles.input}
          placeholder='Escribe tu telefono aquí'
          keyboardType='phone-pad'
          value={telefono}
          onChangeText={setTelefono}
        
        />
        <Button color='#60e09cff'
          title = 'Mostrar Alert'
          onPress = {mostrarAlert}
        />
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#14440aff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontFamily: 'Time New Roman',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffffff',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  tag:{
    fontSize: 16,
    color: '#ffffffff',
    marginBottom: 5,
    marginTop: 10,
  },
  input:{
    width: '250', //ocupa el ancho disponible
    borderWidth: 2, //grosor del borde
    borderColor: '#6ffab6ff', //color del borde
    borderRadius: 10, //borde redondeado
    padding: 10, //espacio interno
    backgroundColor: '#8b8787ff', //color de fondo
    marginBottom: 10, //margen inferior
    color: '#000000ff', //color del texto
  }
})