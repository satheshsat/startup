import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card } from "@rneui/themed";
import { NavigationContainerProps } from '@react-navigation/native';
import { connect } from '../data/connect';

interface OwnProps extends NavigationContainerProps {
    navigation: any
}

interface StateProps {
}

interface DispatchProps {
    
}

interface HomeProps extends OwnProps, StateProps, DispatchProps { }

const Home: React.FC<HomeProps> = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Card>
                <Text>Home</Text>
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
        
    }),
    mapDispatchToProps: {
      
    },
    component: Home
  })