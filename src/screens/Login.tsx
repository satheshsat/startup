import React, { useState } from 'react';
import { StyleSheet, View, Image} from 'react-native';
import { Button, Card, Input } from "@rneui/themed";
import { NavigationContainerProps } from '@react-navigation/native';
import { connect } from '../data/connect';
import { setIsLoggedIn } from '../data/user/user.actions';

interface OwnProps extends NavigationContainerProps {
    navigation: any
}

interface StateProps {
    isLoggedin: boolean
}

interface DispatchProps {
    setIsLoggedIn: typeof setIsLoggedIn
}

interface LoginProps extends OwnProps, StateProps, DispatchProps { }

const Login: React.FC<LoginProps> = ({ isLoggedin, navigation, setIsLoggedIn }) => {
    const [mobileno, setMobileno] = useState('');
    const [password, setPassword] = useState('');
    const [mobilenoError, setMobilenoError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    if(isLoggedin){
        navigation.replace('Home');
    }

    const login = () => {
        let error = false;
        setMobilenoError('');
        setPasswordError('');
        if(!mobileno){
            setMobilenoError('Mobile number is required');
            error = true;
        }
        if(!password){
            setPasswordError('Password is required');
            error = true;
        }
        if(error){
            return;
        }
        setIsLoggedIn(true);
        navigation.replace('Home');
        // navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <Card>
                <View style={styles.cardcontent}>
                    <View>
                    <Input
                        placeholder='Mobile Number'
                        onChangeText={(value: React.SetStateAction<string>) => setMobileno(value)}
                        errorMessage={mobilenoError}
                    />
                    <Input
                        placeholder='Password'
                        secureTextEntry={true} 
                        onChangeText={(value: React.SetStateAction<string>) => setPassword(value)}
                        errorMessage={passwordError}
                    />
                        <Button onPress={() => login()} title="Login" />
                    </View>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 200
    },
    cardcontent:{
        
    },
    image: {
        width: 50, 
        height: 50
    }
  });

  export default connect<OwnProps, StateProps, DispatchProps>({
    mapStateToProps: (state) => ({
        isLoggedin: state.user.isLoggedin
    }),
    mapDispatchToProps: {
      setIsLoggedIn,
    },
    component: Login
  })