import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet  } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

class ViewCutiPage extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
      
    title: "Sisa Cuti Anda",
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
        <Text style={styles.TextStyle} > Cuti Anda Tinggal '8' Hari </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    Container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',

    },
    TextStyle : {
      fontSize: 20,
      fontWeight: 'bold',
    }
});

export default ViewCutiPage;
