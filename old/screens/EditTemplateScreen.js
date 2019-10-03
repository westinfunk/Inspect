import React, { Component } from 'react';
import { header } from '../constants/Styles';

export default class EditTemplateScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        headerTitle: navigation.getParam('title')
    }

    async componentDidMount() {
        
    }
}