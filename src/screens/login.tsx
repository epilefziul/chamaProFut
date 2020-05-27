import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import {Input, Button} from 'react-native-elements';



export interface AppProps { }


export interface AppState {
    email:string;
    senha:string;
  }
  

export default class LoginScreen extends React.Component<AppProps, AppState> {
   constructor(props: AppProps) {
    super(props);
    this.state = {
        email:'email',
        senha:'123'
      }

      emailInp:string = null;
      passInp:string = null;
   }


   public logar() {
    if (this.emailInp === this.state.email && this.passInp === this.state.senha) {
        this.props.navigation.navigate('menu')
    } else {
        alert('Senha ou e-mail inválidos!')
    }
 }

 public render() {

	return (
        <ImageBackground source={require('./../../assets/imgs/chamaFut.png')} 
                style={styles.background}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={styles.container}>
                        
                <Input placeholder='Digite seu e-mail' 
                    leftIcon={{name:'person', color:'white'}} 
                    onChangeText={email => this.emailInp = email}
                    inputContainerStyle={styles.containerInput}
                    inputStyle={{color:'white'}}/>

                <Input placeholder='Digite sua senha' 
                    leftIcon={{name:'lock', color:'white'}}
                    onChangeText={senha => this.passInp = senha}
                    inputContainerStyle={styles.containerInput}
                    inputStyle={{color:'white'}}
                    secureTextEntry={true} />
                <Button title="Logar" onPress={() => this.logar()}	buttonStyle={{borderRadius:30}} 	raised={true} />
               <TouchableOpacity onPress={() => this.props.navigation.navigate('signup')} ><Text style={styles.cadastrar}>Não possui conta? Cadastre-se</Text></TouchableOpacity>
            </KeyboardAvoidingView> 
        </ImageBackground>
        )
  }
}

const styles = StyleSheet.create({
    background: {width: '100%', height: '100%'},
    container: {
        flex: 1,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'stretch'
    },
    logo: { color: 'green', fontSize: 50, textAlign: 'center'},
    containerInput: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 30, 
        padding: 5,
        marginBottom: 5,
       },
       cadastrar: {
        color: 'white',
        fontSize: 20,
        textDecorationLine: 'underline',
        margin: 30,
        textAlign: 'center'
     }
});