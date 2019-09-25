import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import EditHeaderButton from '../components/EditHeaderButton';

//import { getInspection } from '../model/Inspection';

export default class InspectionSummary extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "Inspection Summary",
            headerRight: <EditHeaderButton onPress={()=>console.log('Pressed')}/>
        }
    }


    state = {
        inspection: null
    }

    componentDidMount() {
        const inspection = this.props.navigation.getParam('inspection');
        this.setState({
            inspection
        })
    }

    renderCard = () => {
        const inspection = this.state.inspection;
        if (inspection) {
            return (
                <Card title={inspection ? inspection.address : null}>
                    <Text>{inspection.address}</Text>
                    <Text>{inspection.city + ", " + inspection.state}</Text>
                    <Text>{inspection.name}</Text>
                    <Button title="Preview Report" type="outline"/>
                    <Button title="Send" icon={<Icon type='font-awesome' name="send" color="#FFF" />} />
                </Card>
            )
        } else {
            return <Card />
        }
    }


    render() {
        const inspection = this.state.inspection;

        return (
        <ScrollView>
            {this.renderCard()}

        </ScrollView>
        )

    }   
}