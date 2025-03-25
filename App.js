import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, Alert } from 'react-native';

const App = () => {
    // Estados para armazenar as notas inseridas pelo usuário
    const [nota1, setNota1] = useState('');
    const [nota2, setNota2] = useState('');
    const [nota3, setNota3] = useState('');
    const [nota4, setNota4] = useState('');
    const [resultado, setResultado] = useState(''); 
    
    // Função para validar se a nota está dentro do intervalo permitido (0 a 10)
    const validarNota = (nota) => {
        const valor = parseFloat(nota);
        if (isNaN(valor) || valor < 0 || valor > 10) {
            Alert.alert("Erro", "As notas devem estar entre 0 e 10."); // Exibe um alerta caso a nota seja inválida
            return false;
        }
        return true;
    };

    // Função para calcular a média das notas inseridas
    const calcularMedia = () => {
        // Verifica se todas as notas são válidas antes de calcular a média
        if (!validarNota(nota1) || !validarNota(nota2) || !validarNota(nota3) || !validarNota(nota4)) {
            setResultado("Insira notas válidas entre 0 e 10."); // Define a mensagem de erro
            return;
        }

        // Converte os valores das notas para número
        const n1 = parseFloat(nota1);
        const n2 = parseFloat(nota2);
        const n3 = parseFloat(nota3);
        const n4 = parseFloat(nota4);
        
        // Calcula a média das notas
        const media = (n1 + n2 + n3 + n4) / 4;
        
        // Define a mensagem do resultado com base na média calculada
        if (media >= 6.0) {
            setResultado("Parabéns! Você foi aprovado.");
        } else if (media > 4 && media <= 6) {
            setResultado("Que pena! Você está de recuperação.");
        } else {
            setResultado("Sinto muito! Você está reprovado.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Verificador de Nota</Text> 
            
            {/* Campos para inserção das notas */}
            <TextInput style={styles.input} placeholder="Digite sua nota" keyboardType="numeric" value={nota1} onChangeText={setNota1} />
            <TextInput style={styles.input} placeholder="Digite sua nota" keyboardType="numeric" value={nota2} onChangeText={setNota2} />
            <TextInput style={styles.input} placeholder="Digite sua nota" keyboardType="numeric" value={nota3} onChangeText={setNota3} />
            <TextInput style={styles.input} placeholder="Digite sua nota" keyboardType="numeric" value={nota4} onChangeText={setNota4} />
            
            {/* Campo somente leitura para exibir o resultado */}
            <TextInput style={styles.input} placeholder="Resultado" value={resultado} editable={false} />
            
            {/* Botão para calcular a média */}
            <Button title="Calcular Média" onPress={calcularMedia} color="black" />
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#87CEEB',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    input: {
        height: 40,
        width: '90%',
        borderWidth: 2,
        borderRadius: 8,
        marginBottom: 12,
        paddingHorizontal: 8,
    }
});
