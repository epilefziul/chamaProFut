import * as React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ImageBackground, KeyboardAvoidingView } from 'react-native';
import {Input, Button} from 'react-native-elements';
import { Header, Icon } from 'react-native-elements';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

export interface AppProps { }


export interface AppState {
    email:string;
    senha:string;
  }
  

export default class addPlay extends React.Component<AppProps, AppState> {
   constructor(props: AppProps) {
    super(props);
    this.state = {

   }
 }


 async abrirCamera() {
    let permissao = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (permissao.status == 'granted') {
    let foto = await ImagePicker.launchCameraAsync({
    allowsEditing: true,
    base64: true,
    mediaTypes: ImagePicker.MediaTypeOptions.All
    });
    }
}


 public render() {

	return (
        <View style={styles.background}>
         <Header
              leftComponent={<Icon name='menu' color='#fff' onPress={this.props.navigation.openDrawer} />}
              centerComponent={{ text: 'ChamaFut', style: { color: '#fff' }}}
            />
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={styles.container}>
                        
            

                <Input placeholder='Nome do jogador' 
                    leftIcon={{name:'person', color:'white'}}
                    inputContainerStyle={styles.containerInput}
                    inputStyle={{color:'black'}}/>

                <Input placeholder='Posição do jogador' 
                    leftIcon={{name:'person', color:'white'}} 
                    inputContainerStyle={styles.containerInput}
                    inputStyle={{color:'black'}}/>

                <View style={{marginBottom:10, marginTop: 10}}><Button title="Tirar foto" onPress={() => this.abrirCamera()}	buttonStyle={{borderRadius:30}} 	raised={true} /></View>

                <View style={{marginBottom:10}}><Button title="Cadastrar" onPress={() => this.props.navigation.navigate('menu')}	buttonStyle={{borderRadius:30}} 	raised={true} /></View>
                <Button title="Voltar" onPress={() => this.props.navigation.navigate('menu')}	buttonStyle={{borderRadius:30}} 	raised={true} />
            </KeyboardAvoidingView>
        </View>
        )
  }
}

const styles = StyleSheet.create({
    background: {width: '100%', height: '100%', backgroundColor: '#FFF'},
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