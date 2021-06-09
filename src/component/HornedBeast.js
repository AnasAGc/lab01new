import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import SelectedBeast from './SelectedBeast ';

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

			<div className={"card"}>

				< Card style={{ width: "18rem" }} >
					<Card.Img height="200px" width="300px" variant="top" onClick={this.incrementNumberOFlikes} alt={this.props.alt} src={this.props.url} />
					<Card.Body onClick={this.claseModel} >
						<Card.Title>{this.props.title}</Card.Title>
						<Card.Text>   {this.props.description}   </Card.Text>
						<Card.Text>   Number of likes {this.state.numlikes}  </Card.Text>

						{/* <Button variant="primary">Go somewhere</Button> */}
					</Card.Body>
				</Card >


				<SelectedBeast
					showw={this.state.show}
					src1={this.props.url}
					alt={this.props.alt}
					title1={this.props.title}
					description1={this.props.description}
					numlikes1={this.state.numlikes}

					funClose={this.claseModel}

				/>

			</div>

		);
	}
}


export default HornedBeast;