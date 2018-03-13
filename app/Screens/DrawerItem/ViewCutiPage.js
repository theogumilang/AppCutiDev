import React, { Component } from 'react';
import { View, Text, TouchableOpacity  } from 'react-native';
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
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default ViewCutiPage;
