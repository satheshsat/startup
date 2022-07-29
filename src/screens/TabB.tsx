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

interface TabBProps extends OwnProps, StateProps, DispatchProps { }

const TabB: React.FC<TabBProps> = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Card>
                <Text>TabB</Text>
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
    component: TabB
  })