import React, { Component } from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View } from 'react-native';

class AuthLoadingScreen extends Component {
    componentDidMount() {
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem("userToken");
        
        this.props.navigation.navigate(userToken ? 'Main' : 'Auth');
    }

    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        )
    }
}

export default AuthLoadingScreen;