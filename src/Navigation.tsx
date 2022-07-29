import Home from './screens/Home';
import Login from './screens/Login';
import TabA from './screens/TabA';
import TabB from './screens/TabB';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

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
            <Drawer.Screen name="TabNavigation" component={TabScreen} />
        </Drawer.Navigator>
    );
}

const Tab = createBottomTabNavigator();
function TabScreen() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;
            if (route.name === 'TabA') {
                iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'TabB') {
                iconName = focused
                ? 'ios-list-box'
                : 'ios-list';
            }
            return <Ionicons name={iconName} size={size} color={color}     />;
            },
        })}
        >
        <Tab.Screen options={{headerShown: false}} name="TabA" component={TabA} />
        <Tab.Screen options={{headerShown: false}} name="TabB" component={TabB} />
    </Tab.Navigator>
  );
}