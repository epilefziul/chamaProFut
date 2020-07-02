import * as React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ImageBackground, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import {Input, Button} from 'react-native-elements';
import firebase from 'firebase';


export interface AppProps { }


export interface AppState {
    nome:string;
    email:string;
    senha:string;
  }
  

export default class Cadastro extends React.Component<AppProps, AppState> {
   constructor(props: AppProps) {
    super(props);
    this.state = {

   }
 }


 public cadastrar(){
     firebase.auth().createUserWithEmailAndPassword(this.state.cadastro.email, this.state.cadastro.senha)
        .then((usuario) => {
            
            usuario.user.updateProfile({
                displayName: this.state.cadastro.nome
            })
            ToastAndroid.show('Cadastrado com sucesso', 3000);
        }).catch(erro => {
            let mensagem = '';
            console.log(erro.code);
            switch(erro.code) {
                case 'auth/email-already-in-use': mensagem = 'Email já em uso'; break;
                case 'auth/invalid-email': mensagem = 'Email inválido'; break;
                case 'auth/weak-password': mensagem = 'Senha fraca'; break;
                default: mensagem = 'Outro erro';
            }
            console.log(erro.code)
            ToastAndroid.show(mensagem, 3000);
        })
        }
 

 public render() {

	return (
        <ImageBackground source={require('./../../assets/imgs/chamaFut.png')} 
                style={styles.background}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={styles.container}>
                        
                        
                <Input placeholder='Digite seu nome' onChangeText={(nome) => this.setState({cadastro: {...this.state.cadastro, nome}})}
                    leftIcon={{name:'person', color:'white'}}
                    inputContainerStyle={styles.containerInput}
                    inputStyle={{color:'white'}}/>

                <Input placeholder='Digite seu e-mail' onChangeText={(email) => this.setState({cadastro: {...this.state.cadastro, email}})}
                    leftIcon={{name:'person', color:'white'}} 
                    inputContainerStyle={styles.containerInput}
                    inputStyle={{color:'white'}}/>

                <Input placeholder='Digite sua senha' onChangeText={(senha) => this.setState({cadastro: {...this.state.cadastro, senha}})}
                    leftIcon={{name:'lock', color:'white'}}
                    inputContainerStyle={styles.containerInput}
                    inputStyle={{color:'white'}}
                    secureTextEntry={true}/>

                <View style={{marginBottom:10}}><Button title="Cadastrar" onPress={() => this.props.navigation.navigate('menu')}	buttonStyle={{borderRadius:30}} 	raised={true} /></View>
                <Button title="Voltar" onPress={() => this.props.navigation.navigate('login')}	buttonStyle={{borderRadius:30}} 	raised={true} />
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
        justifyContent: 'center',
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