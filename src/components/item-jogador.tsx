import Jogador from "../models/jogadores";

export interface AppProps {
    jogador:Jogador;
 }
 
 export function ItemJogador (props: AppProps) {
   return (
       <View style={styles.container}>
     <Text>{props.jogador.nome}</Text>
     <Text>{props.jogador.posicao}</Text>
      </View>
   );
 }
 
 const styles = StyleSheet.create({
   container: {
     flexDirection: 'row',
     justifyContent:'space-between',
     padding:10
   } 
 });