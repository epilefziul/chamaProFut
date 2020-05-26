import * as React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ImageBackground, KeyboardAvoidingView } from 'react-native';
import {Input, Button} from 'react-native-elements';



export interface AppProps { }


export interface AppState {
    email:string;
    senha:string;
  }
  

export default class Menu extends React.Component<AppProps, AppState> {
   constructor(props: AppProps) {
    super(props);
    this.state = {

      }

   }




 public render() {

	return (
        <ImageBackground source={require('./../../assets/imgs/BG-Rebote.png')} 
                style={styles.background}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={styles.container}>
                <Text style={styles.cadastrar}>Apenas o cadastro, minha delicinha!</Text>
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