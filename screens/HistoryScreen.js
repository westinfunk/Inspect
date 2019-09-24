import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';


const HistoryHeader = props => <Header
centerComponent={{ text: 'History', style: { color: '#fff' } }}
rightComponent={{ icon: 'add-circle', color: '#fff' }}
/>

export default class HistoryScreen extends Component {
    state = {
        search: "",
    }

    updateSearch = search => {
        this.setState({ search })
    }
        
    render() {
        return (
            <View>
                <HistoryHeader />
                <ScrollView>
                    <SearchBar placeholder="Search..." onChangeText={this.updateSearch} value={ this.state.search }/>
                </ScrollView>
            </View>
        )

    }
}