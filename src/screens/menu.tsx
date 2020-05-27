import * as React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ImageBackground, KeyboardAvoidingView } from 'react-native';
import {Input, Button} from 'react-native-elements';
import { Header, Icon, ListItem} from 'react-native-elements';



export interface AppProps { }


export interface AppState {

  }
  

export default class Menu extends React.Component<AppProps, AppState> {


   constructor(props: AppProps) {
    super(props);
    this.state = {
      list: [
        {
          name: 'Carlos',
          avatar_url: 'http://jogosindie.com/iapois/img/membros/eq-carlos.jpg',
          subtitle: '26 anos'
        },
        {
          name: 'Irineu',
          avatar_url: 'https://pm1.narvii.com/6425/929a9d3501354cfbd32e4566e062ad4e5f1068f0_128.jpg',
          subtitle: '19 anos'
        },
        {
          name: 'Ronaldo',
          avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          subtitle: '27 anos'
        },
        {
          name: 'Josezin',
          avatar_url: 'https://m.migalhas.com.br/imagem/47BBD8DECEE0A309E21A83F3A88D79D740E2_oscar%20emboaba%20jr.jpg',
          subtitle: '22 anos'
        },
        {
          name: 'Vonaldo',
          avatar_url: 'https://pm1.narvii.com/6435/9f5b13ad63b29cd8070eb7bbbbb6a64075d3e184_00.jpg',
          subtitle: '25 anos'
        },
        {
          name: 'Tiago',
          avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0zsB3WB6n3b6iG61V3Avvic8EwGmOsFaEbQxcRRYWUu3rrDkR&usqp=CAU',
          subtitle: '29 anos'
        },
        {
          name: 'Tonin Bom de Bola',
          avatar_url: 'https://img.r7.com/images/bonitos-do-brasileiro-04122018113155259',
          subtitle: '31 anos'
        }
      ]
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
            <View>
              {
                this.state.list.map((l, i) => (
                  <ListItem
                    key={i}
                    leftAvatar={{ source: { uri: l.avatar_url } }}
                    title={l.name}
                    subtitle={l.subtitle}
                    bottomDivider
                  />
                ))
              }
            </View>
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
        justifyContent: 'flex-start',
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