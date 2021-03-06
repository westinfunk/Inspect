import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import { getTemplate } from '../model/Template';
import EditHeaderButton from '../components/EditHeaderButton';

export default class TemplatePreview extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: navigation.getParam('title'),
            headerRight: <EditHeaderButton onPress={() => console.log("edit template")}/>
        }

        this.renderTemplate = this.renderTemplate.bind(this)
    }

    state = {
        template: null
    }

    async componentDidMount() {
        const id = this.props.navigation.getParam('id');
        const template = await getTemplate(id);
        this.setState({ template });
    }



    navToCategory(id, title) {
        const navigation = this.props.navigation;
        const templateId = navigation.getParam('id');
        return function() {
            navigation.navigate("TemplateCategory", {
                title,
                templateId,
                categoryId: id
            })
        }
    }

    renderTemplate() {
        const template = this.state.template;
        if (template) {
            return ( 
             template.categories.map((category, key) => 
             <ListItem 
                key={key} 
                title={category.title} 
                onPress={this.navToCategory(category.id, category.title).bind(this)}
            /> )
            )
        } else {
            return null
        }
    }

    render() {
        return (
            <ScrollView>
                <Button type="outline" title="Use this template" />
                { this.renderTemplate() }
            </ScrollView>
        )
    }
}