import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Header, SearchBar, ListItem } from 'react-native-elements';


const HistoryHeader = props => <Header
    centerComponent={{ text: 'History', style: { color: '#fff' } }}
    rightComponent={{ icon: 'add-circle', color: '#fff' }}
/>

const HistorySearch = props =>  <SearchBar 
    placeholder="Search..." 
    lightTheme
    {...props}
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
                <HistorySearch onChangeText={this.updateSearch} value={ this.state.search }/>
                <ScrollView>
                    {reports.map((report, key) => 
                        <ListItem 
                        key={key}
                        leftIcon={{ name: "home"}}
                        title={report.address}
                        subtitle={report.city}
                        onPress={}
                        />)}
                </ScrollView>
            </View>
        )

    }
}

const reports = [
    { 
        id: 1,
        address: "1234 Butt drive",
        city: "Orem",
        state: "UT"
    },
    {
        id: 2,
        address: "382 Maple",
        city: "Pleasant Grove",
        state: "UT"
    },
    {
        id: 3,
        address: "10982 Oak",
        city: "Provo",
        state: "UT"
    },
    {
        id: 4,
        address: "2082 Presidents",
        city: "Salt Lake City",
        state: "UT"
    }
]