import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, AsyncStorage } from 'react-native';
import {ReactNativeAD, ADLoginView } from 'react-native-azure-ad';


const CLIENT_ID = '1c6488a6-0077-4385-9e20-86441c8c90ef'
const AUTH_URL = 'https://login.microsoftonline.com/common/oauth2/authorize'
const ADContext = new ReactNativeAD({
      client_id : CLIENT_ID,
      // redirectUrl : 'http://localhost:8080',
      // Optional
      authority_host : AUTH_URL,
      // Optional
      // tenant  : 'common',
      // This is required if client_id is a web application id
      // but not recommended doing this way.
      // client_secret : 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      resources : [
        'https://graph.microsoft.com',
        'https://outlook.office365.com',
      ]
    })
 
class LoginPage extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        info : null,
        shouldLogout : true,
        displayType : 'before_login',
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
                  displayType : 'after_login',
                  shouldLogout : true,
              });
              const {replace} = this.props.navigation;
              replace('DrawerRoute') ;
          }
        });
         
       }

       saveData() {
        let name = this.state.name;
        let token = this.state.token;
    
        AsyncStorage.setItem('name', name);
        AsyncStorage.setItem('token', token);
        this.setState({
             name: name,
             token: token
        });
        alert('Login Berhasil');
    }
      
    

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ImageBackground style={styles.Container} 
      source={require('../Img/background.png')}
      >
     {this._renderContent.bind(this)()}
      </ImageBackground>
    );
  }

   _renderContent(){
       switch (this.state.displayType) {
           case 'before_login':
               return     <TouchableOpacity
               style={{
                   borderWidth:1,
                   borderColor:'rgba(0,0,0,0.0)',
                   alignItems:'center',
                   justifyContent:'center',
                   width:300,
                   height:50,
                   backgroundColor:'#ea6404',
                   borderRadius:100,
                   
                 }}
                 onPress={(this._showADLogin.bind(this))}
             >
             <View>
             <Text style={styles.ButtonText}   > Login Dengan Akun Onmicrosoft </Text>
                 </View>
            
             </TouchableOpacity>
               
               case 'login' :
               // In fact we care if it successfully redirect to the URI, because
               // we alread have the access_token after successfully logged in.
               // set `hideAfterLogin` to `true` so that it won't display an error page.
               return [
                 <ADLoginView
                   key="webview"
                   hideAfterLogin={true}
                   style={{flex :1}}
                   needLogout={this.state.shouldLogout}
                   context={ADContext}
                   onURLChange={this._onURLChange.bind(this)}
                   onSuccess={this._onLoginSuccess.bind(this)}/>]
       }
   }
   _showADLogin() {
    this.setState({
      displayType : 'login'
    })
  }

  _onLoginSuccess(cred)
   {
     
    console.log('user credential', cred)
    let user_credential = ADContext.saveCredentials('https://graph.microsoft.com')
    let access_token = ADContext.getAccessToken('https://graph.microsoft.com')
    fetch('https://graph.microsoft.com/v1.0/me', {
      method : 'GET',
      headers : {
        Authorization : `bearer ${access_token}`
      }
    })
    .then(res => res.json())
    .then(user => {
      const {replace} = this.props.navigation;
      console.log(user)
      this.setState({
        displayType : 'after_login',
        info : user.displayName,
        name : user.displayName,
        token : access_token,
      })
   
    this.saveData()
    replace('DrawerRoute') ;
    })
    
  }

  _onURLChange(e) {
    // listen to webview URL change, if the URL matches login URL redirect user
    // to start page.
    let isLoginPage = e.url === `${AUTH_URL}?response_type=code&client_id=${CLIENT_ID}`
    if(isLoginPage && this.state.shouldLogout) {
      console.log('logged out')
      this.setState({
        displayType : 'before_login',
        shouldLogout : false
      })
    }
  }

}

const styles = StyleSheet.create({
    Container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    ButtonText : {
        color : '#fff'
    }
});
export default LoginPage;
