import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const Login = ({ navigation }) => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleButtonPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text>Faça o login</Text>
      
      {/* Campo de entrada para o login */}
      <TextInput
        style={styles.input}
        placeholder="Login"
        onChangeText={text => setLogin(text)}
        value={login}
      />

      {/* Campo de entrada para a senha */}
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={text => setSenha(text)}
        value={senha}
      />

      {/* Botão para realizar o login */}
      <Button title="Login" onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Login;
