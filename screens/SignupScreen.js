import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Styles from '../constants/Styles';

export default class SignupScreen extends Component {
    render() {
        return (
            <ScrollView style={Styles.container}>
                <View>
                        <Text>
                            Signup Screen
                        </Text>
                </View>
            </ScrollView>
        )
    }

}
