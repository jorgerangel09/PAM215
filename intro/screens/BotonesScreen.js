import { Text, StyleSheet, View, Button, Switch } from 'react-native'
import React,{useState} from 'react';

export default function BotonesScreen(){
  const [esEncendido, cambiarEncendido] = useState(false);
  const [color, cambiarColor] = useState('yellow');

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Control de luz</Text>
        
        {/* Operador terniario 
        {condicional ? valorTrue : valorFalse}
        */}
        <Text style={[styles.luz, {color: esEncendido ? color:'white'}]}>
          {esEncendido ? 'Luz Encendida' : 'Luz Apagada'}
        </Text>

        <Switch style={{marginBottom:10}}
        value={esEncendido}
        onValueChange = {() => cambiarEncendido(!esEncendido)}
        trackColor = {{true: '#03b40fff', false: 'grey'}}
        ></Switch>

      <View style={styles.cajaBotones}>
        <Button
        title='Amarillo'
        onPress={() =>esEncendido && cambiarColor('yellow')}
        color='#aaaa16ff'
        ></Button>

        <Button
        title='Azul'
        onPress={() =>esEncendido && cambiarColor('blue')}
        color='#2525adff'
        ></Button>

        <Button
        title='Rojo'
        onPress={() =>esEncendido && cambiarColor('red')}
        color='#ad2525ff'
        ></Button>
      </View>
      </View>
    )
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cajaBotones:{
    flexDirection:'column',
    gap:10,
    mrginTop:15,
  },
  titulo:{
    fontSize:40,
    color:'#8200c8ff',
    marginBottom:20,
    fontWeight: 'bold',
  },
  luz:{
    fontSize:30,
    marginBottom:20,
  }
})