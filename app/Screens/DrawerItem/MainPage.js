import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, AsyncStorage, } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

class MainPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name : '',
      token : ''
    };
  };

  componentDidMount(){
    AsyncStorage.getItem('name', (error, result) => {
      if (result) {
          this.setState({
              name: result
             
          });
      }
  });
   AsyncStorage.getItem('token', (error, result) => {
      if (result) {
          this.setState({
              token: result,
              displayType : 'after_login'
          });

      }
    });
  }
  
  static navigationOptions = ({ navigation, screenProps }) => ({
      
    title: "Main Menu",
    headerLeft: (
      <View style={{ paddingHorizontal: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" size={30} color="black" />
        </TouchableOpacity>
      </View>
    )
  });

  
  
  render() {
    return (
      <View style={styles.Container} >
        <Text style={styles.TextStyle} > Anda Login Sebagai   '{this.state.name} ' </Text>
        <Button title="Logout" onPress={(this.RemoveItem.bind(this))} />
      </View>
    );
  }

  RemoveItem(){
    let keys = ['name', 'token'];
    AsyncStorage.multiRemove(keys, (err) => {
    
    });
    
  }

}
const styles = StyleSheet.create({
   Container : {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },
    TextStyle :{
      fontSize: 15,
      fontWeight: 'bold',
      
    }
});

export default MainPage;
