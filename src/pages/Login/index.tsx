import React, { useRef, useState, useEffect } from 'react';
import { 
  Text, 
  TextInput, 
  Image, 
  KeyboardAvoidingView, 
  TouchableWithoutFeedback, 
  Keyboard, 
  Alert, 
  Animated 
} from 'react-native';
import { BorderlessButton as Button } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import * as actions from './actions';
import { View } from 'react-native';

export default function LoginPage() {

  const navigation = useNavigation();
  const passwordRef = useRef();
  
  const [ email, setEmail ] = React.useState('');
  const [ userPassword, setPassword ] = React.useState('');

  const [ offset ] = useState(new Animated.ValueXY({x: 0, y: 80}));

  function goSignup() {
    navigation.navigate('Cadastrar');
  }

  async function handleLogin(){
    actions.login(email, userPassword)
    .then(() => {
      navigation.navigate('Produtos');
    })
    .catch((error) => {
      Alert.alert('Erro',error);
    });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.logo}>
        <Image source={require('../../../assets/logo.png')} />
      </View>

      <Animated.View style={styles.container} >
        <TextInput 
        style={styles.input} 
        placeholder="Email"
        keyboardType='email-address'
        autoCapitalize='none'
        autoCorrect={false}
        autoCompleteType='email'
        returnKeyType="next"
        onSubmitEditing={() => { passwordRef.current.focus();}}
        blurOnSubmit={false}
        onChangeText={setEmail}
        />

        <TextInput 
        style={styles.input} 
        placeholder="Senha" 
        secureTextEntry={true}
        ref={passwordRef}
        onChangeText={setPassword}
        />

        <Button onPress={handleLogin} style={styles.btn}>
          <Text style={styles.btnText}>Acessar</Text>
        </Button>

        <Button onPress={goSignup} >
          <Text style={styles.btnMuted}>Realizar cadastro</Text>
        </Button>

      </Animated.View>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}