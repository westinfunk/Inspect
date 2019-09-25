import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import { header } from '../constants/Styles';

export default class ProfileScreen extends Component {
    static navigationOptions = {
        title: "Account",
        ...header
    }

    render() {
        return (
            <ScrollView>
                <Text>
                    Profile
                </Text>
            </ScrollView>
        )
    }
}