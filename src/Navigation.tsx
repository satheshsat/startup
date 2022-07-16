import Home from './screens/Home';
import Login from './screens/Login';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const Navigation = (props: any) => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'rgb(0, 145, 234)' }, headerTintColor: "white",
                headerTitleStyle: {
                fontWeight: "bold",
                color: "white",
                }}} initialRouteName={props.isLoggedin ? "DrawerNavigation" : "Login"}>
                    <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
                    <Stack.Screen options={{headerShown: false}} name="DrawerNavigation" component={DrawerNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function DrawerNavigation(){
    return (
        <Drawer.Navigator screenOptions={{ headerStyle: { backgroundColor: 'rgb(0, 145, 234)' }, headerTintColor: "white",
        headerTitleStyle: {
        fontWeight: "bold",
        color: "white",
        }}} initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    );
}