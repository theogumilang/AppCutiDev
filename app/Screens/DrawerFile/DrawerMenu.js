import React, { Component } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icons from "react-native-vector-icons/FontAwesome"
import { NavigationActions } from "react-navigation";

class DrawerMenu extends Component {
  _navigate(route) {
    return this.props.navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: `${route}` })]
      })
    );
  }
  render() {
    return (
      <View style={styles.container}>
       <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
/>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() =>
            this._navigate("MainPage", { isStatusBarHidden: false })}
        >
       
        <View style={{flexDirection:'row'}} >
          <Icon name="dashboard" size={30} color="black" />
          <Text style={styles.menuItemText}>Main Menu</Text>
          </View>
        </TouchableOpacity>
        <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
/>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => this._navigate("FormCuti", { isStatusBarHidden: false })}
        >
        <View style={{flexDirection: 'row'}} >
          <Icons name="archive" size={30} color="black" />
          <Text style={styles.menuItemText}>Form Cuti</Text>
          </View>
        </TouchableOpacity>
        <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
/>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => this._navigate("ViewCutiPage", { isStatusBarHidden: false })}
        >
        <View style={{flexDirection:'row'}}  >
          <Icons name="eye" size={30} color="black" />
          <Text style={styles.menuItemText}>Lihat Sisa Cuti</Text>
          </View>
        </TouchableOpacity>
        <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 70,
    marginLeft: 15,
    
  },
  menuItem: {
    padding: 10,
    justifyContent: "center",
   
    marginBottom: 2
  },
  menuItemText: {
    fontSize: 20,
    marginLeft: 20
  }
});

DrawerMenu.defaultProps = {};

DrawerMenu.propTypes = {};

export default DrawerMenu;
