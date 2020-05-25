import * as React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ImageBackground, KeyboardAvoidingView } from 'react-native';
import {Input, Button} from 'react-native-elements';
import InputRound from '../components/input-round';



export interface AppProps { }


export interface AppState {
    email:string;
    senha:string;
  }
  

export default class LoginScreen extends React.Component<AppProps, AppState> {
   constructor(props: AppProps) {
    super(props);
    this.state = {
        email:'emailpadrao@gmail.com',
        senha:'123456'
      }
    
   }

//    this.setState({
//     email: 'novoemail@gmail.com', //Substitui
//     senha: '123456',              //Substitui
//     cpf: '111.111.111-11'         //Adiciona
//  });

   public logar() {
    console.log('Email:'+ this.state.email)
    console.log('Senha:'+ this.state.senha)
 }

   public render() {
	return (
        <ImageBackground source={require('./../../assets/imgs/backgroundchamafut4.jpg')} 
                style={styles.background}>
            <KeyboardAvoidingView behavior="height" style={styles.container}>
                            
                <View style={styles.container}>
                    <Text style={styles.logo}>Rebote</Text>     
                </View>
                <InputRound />
                <InputRound />
                <InputRound />
                <Input placeholder='Digite seu e-mail' 
                    leftIcon={{name:'person', color:'white'}} 
                    onChangeText={email => this.setState({email})}
                    inputContainerStyle={styles.containerInput}
                    inputStyle={{color:'white'}}/>

                <Input placeholder='Digite sua senha' 
                    leftIcon={{name:'lock', color:'white'}}
                    onChangeText={senha => this.setState({senha})}
                    inputContainerStyle={styles.containerInput}
                    inputStyle={{color:'white'}}
                    secureTextEntry={true} />
                <Button title="Logar" onPress={() => this.logar()}	buttonStyle={{borderRadius:30}} 	raised={true} />
                <Text style={styles.cadastrar}>Não possui conta? Clique aqui para se cadastrar</Text>
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