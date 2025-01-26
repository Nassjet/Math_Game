import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import EasyModeScreen from '../screens/EasyModeScreen';
import HardModeScreen from '../screens/HardModeScreen';

const Stack = createStackNavigator(); // important : C'est comme si nous essayions d'utiliser un outil avant de le sortir de la boîte à outils.

const AppNavigator = () => {
    return (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="EasyMode" component= {EasyModeScreen} />
        <Stack.Screen name= "HardMode" component= {HardModeScreen} />
    </Stack.Navigator>
    )
}

export default AppNavigator; 