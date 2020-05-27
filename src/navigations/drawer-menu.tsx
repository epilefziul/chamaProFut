import React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer';
import Menu from '../screens/menu'
import addPlay from '../screens/addPlayer'
import LoginScreen from '../screens/login'
import { Icon } from 'react-native-elements'

export default createDrawerNavigator({
    menu: {
        screen: Menu, 
        navigationOptions: { 
        title: 'FeitosaFC',
        drawerIcon: <Icon name="security"/>
        }
    },
    add: {
        screen: addPlay, 
        navigationOptions: { 
        title: 'Adicionar jogadores',
        drawerIcon: <Icon name="comment"/>
        }
    },
    sair: {
        screen: LoginScreen, 
        navigationOptions: { 
        title: 'Sair',
        drawerIcon: <Icon name="cancel"/>
        }
    },
});