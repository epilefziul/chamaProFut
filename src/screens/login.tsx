import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, KeyboardAvoidingView, TouchableOpacity, Platform, ToastAndroid, Alert } from 'react-native';
import firebase from 'firebase';
import {Input, Button} from 'react-native-elements';
import {AdMobBanner, AdMobInterstitial, AdMobRewarded} from 'expo-ads-admob';


export interface AppProps { }


export interface AppState {
    email:string;
    senha:string;
  }
  

export default class LoginScreen extends React.Component<AppProps, AppState> {
   constructor(props: AppProps) {
    super(props);
    this.state = {
        email:'',
        senha:''
      }
   }


   public logar() {

    console.log(this.state);
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
        .then(() => {
           this.props.navigation.navigate('menu');
        })
        .catch(erro => {
            if (Platform.OS == 'android')
               ToastAndroid.show('Email ou senha incorreta', 3000)
            else
                Alert.alert('Erro', 'Email ou senha incorreta');   

        })


    /* if (this.emailInp === this.state.email && this.passInp === this.state.senha) {
        this.props.navigation.navigate('menu')
    } else {
        alert('Senha ou e-mail inválidos!')
    } */
 }

async abrirBanner() {

    AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/8691691433');
    AdMobRewarded.setTestDeviceID('EMULATOR');
    
    await AdMobInterstitial.requestAdAsync();
    await AdMobInterstitial.showAdAsync();


}


 public render() {

	return (
        <ImageBackground source={require('./../../assets/imgs/chamaFut.png')} 
                style={styles.background}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={styles.container}>
                        
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

                <Button title="Propaganda" onPress={() => this.abrirBanner()} />

               <TouchableOpacity onPress={() => this.props.navigation.navigate('signup')} ><Text style={styles.cadastrar}>Não possui conta? Cadastre-se</Text></TouchableOpacity>
            
               {/* <AdMobBanner                      
                    adUnitID="ca-app-pub-3940256099942544/6300978111"
                    testID="EMULATOR"
                    bannerSize="mediumRectangle"
                /> */}
            
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
        marginTop: 30,
        textAlign: 'center'
     }
});