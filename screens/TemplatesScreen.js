import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Text, Button, ListItem } from 'react-native-elements';
import { header } from '../constants/Styles';
import { getTemplates } from '../model/Template';

export default class TemplatesScreen extends Component {
    static navigationOptions = {
        title: "Templates",
        ...header
    }

    state = {
        templates: []
    }

    async componentDidMount() {
        const templates = await getTemplates();
        this.setState({
            templates
        })
    }

    navToTemplatePreview(id, title) {
        const navigation = this.props.navigation;

        return function() {
           navigation.navigate("TemplatePreview", {
                id, title
            })
        }

    }

    

    render() {
        return (
            <ScrollView>
                {this.state.templates.map((template, index) => 
                    <ListItem 
                        key={ template.id } 
                        title={ template.title } 
                        onPress={this.navToTemplatePreview(template.id, template.title)}
                        bottomDivider 
                    /> 
                )}
                <Button title="Add Template" style={{ marginTop: 20 }} type="outline"></Button>
            </ScrollView>
        )
    }
}
