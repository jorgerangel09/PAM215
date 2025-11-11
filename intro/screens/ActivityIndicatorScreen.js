import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function ActivityIndicatorScreen() {
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    // Simula una carga de 3 segundos
    setTimeout(() => setLoading(false), 3000);
  };

  // Si loading es true, renderizamos solo el loader
  if (loading) {
    return (
      <View style={styles.container}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator 
          size="large" 
          color="#6108d6ff" 
          animating={true} 
          hidesWhenStopped={true} />
          <Text style={styles.texto}>Cargando...</Text>
        </View>
      </View>
    );
  }

  // Si loading es false, mostramos el estado listo
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ActivityIndicator</Text>
      <Button color='#9500ffff'title="Cargar datos" onPress={startLoading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000ff',
  },
  title: {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    color:'#ffffff',
  },
  texto:{
    color:'#ffffff',
  },
  loaderContainer: {
    alignItems: 'center',
  },
});