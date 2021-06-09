import React from 'react';
import { Form } from 'react-bootstrap';

class Form1 extends React.Component {

    constructor(props){
        super(props);

        this.state={
            numOfHoner:1
            
        }
    }

    updateHorn =(event)=>{


        this.setState({
            numOfHoner: event.target.value
        })
        console.log(event.target.value);
    }

  

    render() {
        return (
            <div>
                <Form onSubmit={this.submitForm}>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Select Number Of Honor</Form.Label>
                        <Form.Control as="select" custom name='numOfHoner' onChange={this.updateHorn}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value={"100"}>100</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>

        );

    }
}

export default Form1;