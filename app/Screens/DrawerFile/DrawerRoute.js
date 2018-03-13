import {DrawerNavigator, StackNavigator} from 'react-navigation';
import FormCuti from '../DrawerItem/FormCuti';
import MainPage from '../DrawerItem/MainPage';
import ViewCutiPage from '../DrawerItem/ViewCutiPage';
import DrawerMenu from './DrawerMenu';

const ItemNavigator = StackNavigator ({
    MainPage : {screen : MainPage},
    FormCuti : {screen : FormCuti},
    
    ViewCutiPage : {screen : ViewCutiPage}
})

const MasterDetailPage = DrawerNavigator ({
    Main : {screen : ItemNavigator}

},
{
   
    contentComponent: DrawerMenu,
    drawerWidth: 300,

}
)

export default MasterDetailPage;