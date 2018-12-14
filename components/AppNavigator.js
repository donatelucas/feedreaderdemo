import { createStackNavigator } from 'react-navigation';
//app screens
import Card from './Card';

//Every time a new screen is added, import it here 
const AppNavigator = createStackNavigator({
        Card: { 
            screen: Card,
            navigationOptions: ({ navigation }) => ({ header: null, })
        },
            
    },

    {
        initialRouteName:'Card',
    }
);

export default AppNavigator;