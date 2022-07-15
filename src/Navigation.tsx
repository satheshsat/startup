import Home from './screens/Home';
import Login from './screens/Login';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigation(){
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'rgb(0, 145, 234)' }, headerTintColor: "white",
                headerTitleStyle: {
                fontWeight: "bold",
                color: "white",
                }}} initialRouteName="Login">
                <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}