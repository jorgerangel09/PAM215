//1. Imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React,{useState} from 'react';

//2. Main: Zona de componentes
export default function App() {

  const[contador,setContador]=useState(0);

  return (

    <View style={styles.container}>

      <Text style={styles.texto}>Contador</Text>
      <Text style={styles.texto2}>{contador}</Text>

      <View style={styles.contenedorBotones}>
      <Button color='#2b0738' title='Incrementar' onPress={()=>setContador(contador+1)}> </Button>
      <Button color='#2b0738' title='Quitar' onPress={()=>setContador(contador-1)}> </Button>
      <Button color='#6600ff63' title='Reiniciar' onPress={()=>setContador(0)}> </Button>
      </View>

      <StatusBar style="auto" />

    </View>
    
  );
}

//3. Estilos: Zona de estilos y posicionamiento
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
    color:'#6a00ffff',
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'line-through',
  },
  texto2:{
    fontFamily:'Courier',
    fontSize:40,
    color:'#40008eff',
    fontWeight:'900',
    textDecorationLine:'underline',
  },
  contenedorBotones:{
    marginTop:20,
    flexDirection:'row',
    gap:20,
  },
});