import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Detalle({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalles Usuario</Text>
            <Text style={styles.texto}>Usando Navegacion Stack</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
    },
    texto: {
        fontSize: 13,                                                                                                                                                       
        fontWeight: 'bold',
        color: '#007BFF',
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});