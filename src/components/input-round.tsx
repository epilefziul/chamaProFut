export default class InputRound extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
      super(props);
      this.state = { };
    }
    public render() {
      return (
           <View>
          <Text style={{color:'white', fontSize:20}}>Texto</Text>
              <Input placeholder='Digite seu e-mail' leftIcon={{name:'person', color:'white'}} 
               inputContainerStyle={styles.containerInput} inputStyle={{color:'white'}} />
           </View>
           );
    }
  }
  const styles = StyleSheet.create({
    containerInput: {
       backgroundColor: 'rgba(255,255,255,0.3)',
       borderRadius: 30, 
       padding: 5,
       marginBottom: 5,
    }
  });