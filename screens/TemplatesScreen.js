import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { header } from '../constants/Styles';

export default class TemplatesScreen extends Component {
    static navigationOptions = {
        title: "New Inspection",
        ...header
    }

    render() {
        return (
            <ScrollView>
                <Button title="Blank Template"></Button>
                <Text>
                    New Inspection
                </Text>
            </ScrollView>
        )
    }
}

