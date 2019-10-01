import React, { Component } from 'react';
import { Card, Input, Button } from 'react-native-elements';

export default class TemplateCategoryScreen extends Component {
    static navigationOptions = {

    }

    state = {
        category: null
    }

    renderCategory() {
        if(this.state.category) {
            return (
                <Card title={this.state.title}> 

                </Card>)
        } else {
            return <Card />
        }
    }

    render() {
        return this.renderCategory()
    }
}