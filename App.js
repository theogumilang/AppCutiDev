import {StackNavigator} from 'react-navigation';
import LoginPage from './app/Screens/LoginPage';
import DrawerRoute from './app/Screens/DrawerFile/DrawerRoute';

const MainNavigation = StackNavigator ({
    LoginPage : {screen : LoginPage},
    DrawerRoute : {screen : DrawerRoute}
},
{
  headerMode: 'none'
}

);

export default MainNavigation;
