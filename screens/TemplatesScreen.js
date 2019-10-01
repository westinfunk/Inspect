import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Text, Button, ListItem, Card } from 'react-native-elements';
import { header } from '../constants/Styles';
import { getTemplates } from '../model/Template';

export default class TemplatesScreen extends Component {
    static navigationOptions = {
        title: "Templates",
        ...header
    }

    state = {
        templates: [],
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

    navToCreateTemplate() {
        this.props.navigation.navigate("CreateTemplate");
    }

    async refresh() {
        const templates = await getTemplates();
        this.setState({
            templates,
            unrefreshed: false
        })
        console.log("refreshing");
    }


    render() {

        return (
            <Card title="Templates" style={{height: '100%'}}>
            <ScrollView>
                {this.state.templates.map((template, index) => 
                    <ListItem 
                        key={ template.id } 
                        title={ template.title } 
                        onPress={this.navToTemplatePreview(template.id, template.title)}
                        bottomDivider 
                    /> 
                )}
                </ScrollView>
                <Button 
                    title="Create New Template" 
                    style={{ marginTop: 20 }} 
                    type="outline" 
                    onPress={this.navToCreateTemplate.bind(this)} 
                />
                <Button title="Refresh" onPress={this.refresh.bind(this)}/>

            </Card>
        )
    }
}
