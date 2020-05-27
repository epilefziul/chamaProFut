import React from 'react'
import {  createAppContainer, createSwitchNavigator } from 'react-navigation'
import LoginScreen from '../screens/login'
import Cadastro from '../screens/cadastro'
import Menu from '../screens/menu'
import DrawerMenu from './drawer-menu';


const navigation = createSwitchNavigator({
    login: LoginScreen,
    signup: Cadastro,
    menu: DrawerMenu
 })

 export default createAppContainer(navigation );
