import React, { Component } from 'react';
import SaveHeaderButteron from '../components/SaveHeaderButton';
import { header } from '../constants/Styles';
import { initializeTemplate } from '../model/Template';
import { Card, Input, Button } from 'react-native-elements';

export default class CreateTemplateScreen extends Component {
    static navigationOptions = {
        headerTitle: "Create Template",
        ...header
    }

    state = {
        title: ""
    }

    async componentDidMount() {
        
    }

  
    updateTitle(title) {
        this.setState({ title });
    }
    
    async saveTemplate() {
        try {
            const templateId = await initializeTemplate(this.state.title);
            console.log(templateId);
        } catch (err) {
            console.log(err.message);
        }

    }

    render() {
        return (
            <Card title="Template">
                <Input label="Title" value={this.state.title} onChangeText={this.updateTitle.bind(this)}/>
                <Button title="Save Template" onPress={this.saveTemplate.bind(this)}/>
            </Card>
        )
    }
}