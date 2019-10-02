import React, { Component } from 'react';
import { Card, Input, Button, ListItem, Text } from 'react-native-elements';
import { getTemplate } from '../model/Template';

export default class TemplateCategoryScreen extends Component {
    static navigationOptions = {

    }

    state = {
        category: null,
        errorMessage: ""
    }

    async componentDidMount() {
        try {
            this.setState({ loading: true });
            const templateId = this.props.navigation.getParam("templateId");
            const categoryId = this.props.navigation.getParam("categoryId");
            const template = await getTemplate(templateId);
            const categories = template.categories;
            const filteredCategories = categories.filter(category => category.id == categoryId)
            if (!filteredCategories.length) {
                throw Error("Couldn't find that category");
            } else {
                console.log(filteredCategories[0].subcategories)
                this.setState({ category: filteredCategories[0]});
            }
        } catch (err) {
            this.setState({ 
                loading: false,
                errorMessage: err.message
            });
        }
    }

    renderCategory() {
        if(this.state.category) {
            return (
                <Card title={this.state.category.title}> 
                    {this.state.category.subcategories.map(subcategory => {
                        <ListItem title={subcategory.title} />
                    })}
                </Card>)
        } else {
            return (<Card><Text>{this.state.errorMessage}</Text></Card>)
        }
    }

    render() {
        return this.renderCategory()
    }
}