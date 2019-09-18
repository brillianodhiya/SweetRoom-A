import React, { Component } from "react";
import { Container, Header, Content, Form, Item, Input } from "native-base"

export default class FormExample extends Component {
    static navigationOptions = {
        title: 'Attachment New Room', 
        /* No more header config here! */
    }

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item>
                            <Input placeholder="Username" />
                        </Item>
                        <Item last>
                            <Input placeholder="Password" />
                        </Item>
                    </Form>
                </Content>
            </Container>
        )
    }
}