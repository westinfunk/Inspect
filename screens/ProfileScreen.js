import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Text, Card, Button, Divider } from 'react-native-elements';
import { header } from '../constants/Styles';
import { getAccount } from '../model/Account';
import EditHeaderButton from '../components/EditHeaderButton';

export default class ProfileScreen extends Component {
    static navigationOptions = {
        headerTitle: "Account",
        headerRight: <EditHeaderButton onPress={()=>console.log("pressed")} />,
        ...header
    }

    state = {
        account: null
    }

    async componentDidMount() {
        const accountId = 328;
        const account = await getAccount(accountId);
        this.setState({ account });
    }

    renderCard() {
        const account = this.state.account;
        if (account) {
            return ( 
                <Card title={account.company}>
                    <Text>{account.name}</Text>
                    <Text>{account.address}</Text>
                    <Text>{account.city + ", " + account.state}</Text>
                    <Text style={{marginBottom: 10}}>{account.email} </Text>
                    <Button title="Upgrade Account" />
                </Card>
            )
        } else {
            return <Card />
        }
    }

    render() {
        return (
            <ScrollView>
                { this.renderCard() }
            </ScrollView>
        )
    }
}