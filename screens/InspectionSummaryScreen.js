import React, { Component } from 'react';
import { ScrollView } from 'react-native';
//import { getInspection } from '../model/Inspection';

export default class InspectionSummary extends Component {
    state = {
        inspection: null
    }

    componentDidMount() {
        const inspection = this.props.navigation.getParam('inspection');
        const id = inspection.id;
        this.setState({
            inspection
        })
    }



    render() {
        <ScrollView>
            <Text>
                {JSON.stringify(this.state)}
            </Text>
        </ScrollView>
    }   
}