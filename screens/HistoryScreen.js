import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Header, SearchBar, ListItem } from 'react-native-elements';
import { getInspections } from '../model/Inspection';
import { header } from '../constants/Styles';

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
    static navigationOptions = {
        title: "Inspections",
        ...header
    }

    state = {
        isLoading: true,
        search: "",
        inspections: []
    }

    async componentDidMount() {
        try {
            const inspections = await getInspections();
            this.setState({
                isLoading: false,
                inspections: inspections
            })
        } catch(err) {
            console.log(err);
        }
    }

    updateSearch = search => {
        this.setState({ search })
    }

    navToInspectionSummary = (inspection)=> {
        const navigator = this.props.navigation;
        return function(){
            console.log(inspection)
            navigator.navigate('InspectionSummary', { inspection });
        }
    }
        
    render() {
        return (
            <View>
                <HistorySearch onChangeText={this.updateSearch} value={ this.state.search }/>
                <ScrollView>
                    {this.state.inspections.map((inspection, key) => 
                        <ListItem 
                        key={key}
                        leftIcon={{ name: "home"}}
                        title={inspection.address}
                        subtitle={inspection.city}
                        onPress={this.navToInspectionSummary(inspection)}
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