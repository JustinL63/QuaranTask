import React, { Component } from 'react';
import {Container, Form, Card, Button } from 'react-bootstrap'

class TaskCreator extends Component {
    state = {
        task: {
            title: '',
            description: '',
            author: ''
        }
    }

    onChangeHandler = (event) => {
        this.setState({
            [event.target.value]: event.target.name
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
    }


    //this component will create a task with individual attributes
    //each task will get an id, title, description, author, and timestamp created
    //this will then be sent to the google firebase backend to be saved in a database 




    render() {
        return (
                
            <Container>
                <Card className="text-center">
                    <Card.Body>
                    <Form>
                    <Form.Group>
                        <Form.Label>Task Title</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="title"
                            name="taskTitle"
                            onChange={this.onChangeHandler}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Task Description</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="descriptions"
                            name="taskDescription"
                            onChange={this.onChangeHandler}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Author</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="created by"
                            name="taskAuthor"
                            onChange={this.onChangeHandler}/>
                    </Form.Group>
                </Form>
                    </Card.Body>
                    <Card.Footer className="text">Time Stamp</Card.Footer>
                    <Button onClick={this.onSubmitHandler} variant="primary">Submit</Button>
                </Card>
                </Container>
        );
    }
}

export default TaskCreator;