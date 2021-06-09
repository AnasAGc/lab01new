import React from 'react';

class Form1 extends React.Component {



  

    render() {
        return (
            <div>
                <Form >
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Select Number Of Honor</Form.Label>
                        <Form.Control as="select" custom name='numOfHoner' onChange={this.props.updatFun}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="100">100</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>

        );

    }
}

export default Form1;