import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Modal } from 'react-bootstrap';

class HornedBeast extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            numlikes: 0,
            show: false,
        }


    }

    incrementNumberOFlikes =
        () => {
            this.setState({
                numlikes: this.state.numlikes + 1
            });

            this.setState({
                show: !this.state.show
            });

        }

    claseModel =
        () => {
            this.setState({
                show: !this.state.show
            });
        }




    render() {
        return (
            {/* <h2> {this.props.title} </h2>
                <img onClick={this.incrementNumberOFlikes} alt={this.props.alt}  src={this.props.url} />
                <p> {this.props.description} </p>
                <p> </p> */}

            < Card >
                    <Card.Img variant="top" onClick={this.incrementNumberOFlikes} alt={this.props.alt} src={this.props.url} />
                    <Card.Body onClick={this.claseModel} >
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>   {this.props.description}   </Card.Text>
                        <Card.Text>   Number of likes {this.state.numlikes}  </Card.Text>

                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card >



        );
    }
}


export default HornedBeast;