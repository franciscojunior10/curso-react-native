import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';
import Product from './pages/product';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'AppHunt'
            }
        },
        Product,
    },{
        defaultNavigationOptions:{
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#Da552F',
            }
        }
    })
)

export default Routes;