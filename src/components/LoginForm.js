import React, {Component} from 'react';
import { Text, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, LinkButton, Input, Spinner } from './common';

class LoginForm extends Component {

    constructor(props) {
        super(props)

        this.state = {email: '', password: '', error: '', loading: false};
    }

    onButtonPressed() {
        const {email, password} = this.state
        this.setState({error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
             .catch(() => {
                this.setState({error: "Authentication failed."})
            });
        });
    }

    renderButton() {
        if(this.state.loading) {
            return(
                <Spinner size='small'/>
            );
        }

        return(
            <LinkButton onPress={this.onButtonPressed.bind(this)}> 
                        Login
            </LinkButton>
        );
    }

    render() {
        return( 
            <Card> 
                <CardSection>
                    <Input 
                    label={'Email:'}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    keyboardType='email-address' 
                    placeholder='user@info.com'
                    />
                </CardSection>

                <CardSection>
                <Input 
                    label={'Password:'}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })} 
                    secureTextEntry={true}
                    placeholder='password'
                    />
                </CardSection>
                
                <Text style={styles.errorStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    };
}

export default LoginForm;

const styles = StyleSheet.create({
    errorStyle: {
        color: 'red',
        alignSelf: 'center',
        margin: 10,
    },
});