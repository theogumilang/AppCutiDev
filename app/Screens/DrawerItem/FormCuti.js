import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet  } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi, Makiko} from 'react-native-textinput-effects';

class FormCuti extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
      
        title: "Form Cuti",
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
      <View  >

    <Fumi
    label={'Full Name'}
    iconClass={FontAwesomeIcon}
    iconName={'user'}
    iconSize={22}
    iconColor={'#db786d'}
    inputStyle={{ color: '#db6c18' }}
    style={{width :350, height: 55, margin:13 , }}
  />
    <Fumi
    label={'Phone Number'}
    iconClass={FontAwesomeIcon}
    iconName={'phone'}
    iconSize={22}
    iconColor={'#db786d'}
    inputStyle={{ color: '#db6c18' }}
    style={{width :350, height: 55, margin:13 , }}
  />
   <Fumi
    label={'Position'}
    iconClass={FontAwesomeIcon}
    iconName={'id-badge'}
    iconSize={22}
    iconColor={'#db786d'}
    inputStyle={{ color: '#db6c18' }}
    style={{width :350, height: 55, margin:13 , }}
  />
   <Fumi
    label={'Address'}
    iconClass={FontAwesomeIcon}
    iconName={'address-card'}
    iconSize={22}
    iconColor={'#db786d'}
    inputStyle={{ color: '#db6c18' }}
    style={{width :350, height: 55, margin:13 , }}
  />
   <TouchableOpacity
   style={{
       borderWidth:1,
       borderColor:'rgba(0,0,0,0.0)',
       alignItems:'center',
       justifyContent: 'center',
       width:150,
       height:45,
       backgroundColor:'#028213',
       borderRadius:100,
       marginLeft:115,
       marginTop: 25
       
     }}
    // onPress={() => navigate('DrawerRoute')}
 >
 <View>
 <Text style={styles.ButtonText}>Submit Form </Text>
     </View>

 </TouchableOpacity>
      </View>

    );
  }
}
const styles = StyleSheet.create({
   InputStyle : {
     width : 250
   },
   Container : {
     flex : 1,
     justifyContent : 'center',
     alignItems : 'center'
   },
   ButtonText : {
    color : '#fff'
}

});

export default FormCuti;
