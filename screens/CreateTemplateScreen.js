import React, { Component } from 'react';
import SaveHeaderButteron from '../components/SaveHeaderButton';
import { header } from '../constants/Styles';
import { initializeTemplate } from '../model/template';

export default class CreateTemplateScreen extends Component {
    static navigationOptions = {
        headTitle: "Create Template",
        headerRight: <SaveHeaderButton onPress={ ()=>console.log("pressed save") } />,
        ...header
    }

    async componentDidMount() {
        
    }

    render() {

    }
}