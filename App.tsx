import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppContextProvider } from './src/data/AppContext';
import { connect } from './src/data/connect';
import { loadUserData } from './src/data/user/user.actions';
import { Navigation } from './src/Navigation';

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <AppConnected />
    </AppContextProvider>
  );
};

interface StateProps {
  isLoading: boolean,
  isLoggedin: boolean
}

interface DispatchProps {
  loadUserData: typeof loadUserData;
}

interface MyAppProps extends StateProps, DispatchProps { }

const MyApp: React.FC<MyAppProps> = ({ isLoading, isLoggedin, loadUserData }) => {

  useEffect(() => {
    loadUserData();
    // eslint-disable-next-line
  }, []);

  return (
    !isLoading ? <Navigation isLoggedin={isLoggedin}></Navigation> : <View></View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

const AppConnected = connect<{}, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    isLoggedin: state.user.isLoggedin,
    isLoading: state.user.loading
  }),
  mapDispatchToProps: { loadUserData },
  component: MyApp
});