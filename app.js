import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        {/* Imagem 1 */}
        <Image style={styles.logo} source={require('./icon.png')} />
        {/* Imagem 2 */}
        <Image style={styles.logo} source={require('./write.png')} />
      </View>
      {/* Contêiner central para o formulário de login */}
      <View style={styles.container}>
        {/* Texto "Login" */}
        <Text style={styles.loginText}>Login</Text>
        {/* Campo de entrada para o email */}
        <TextInput style={styles.input} placeholder="Email" />
        {/* Campo de entrada para a senha */}
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
        {/* Botão de confirmação */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
      {/* Rodapé */}
      <View style={styles.footer}>
        {/* Imagem "insta" */}
        <Image style={styles.instaImage} source={require('./insta.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    position: 'relative',
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    borderBottomWidth: 3,
    borderBottomColor: '#dcdcdc',
  },
  footer: {
    width: '100%',
    height: 50,
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 3,
    borderTopColor: '#dcdcdc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  loginText: {
    fontSize: 24,
    color: '#ff99cc', // Rosa clarinho
    marginBottom: 20,
    fontFamily: 'cursive', // Fonte cursiva
  },
  instaImage: {
    width: 50,
    height: 50,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: 10,
    backgroundColor: '#ffcccc',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
  },
});

export default App;
