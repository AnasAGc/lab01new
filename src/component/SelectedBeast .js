import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';


class SelectedBeast  extends React.Component {

    constructor(props) {
		super(props)
		this.state = {
			showw: false,
		}


	}


    close = () => {
        this.props.funClose();
      }

    


    render(){

        return(

            <Modal show={this.props.showw} onHide={this.close}>
            
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter"> 
                    {this.props.title1}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>

                <Card.Img variant="top" onClick={this.close} alt={this.props.alt} src={this.props.src1} />
				<Card.Text>   {this.props.description1}   </Card.Text>
                <Card.Text>   Number of likes {this.props.numlikes1}  </Card.Text>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.close}>Close</Button>
                </Modal.Footer>
                </Modal>
        )
    }


}

export default SelectedBeast;