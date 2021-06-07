
import React from 'react';
import HornedBeast from './HornedBeast';
import rawData from './data.json'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Main extends React.Component {

    render() {

        return (

            <div className='main' >
                {/* {rawData.map((item, index) => {

                    return (
                        <div className={'card}' + index} >
                            <HornedBeast alt={item.keyword} description={item.description} title={item.title} url={item.image_url} />

                        </div>

                    )

                })} */}

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
    </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

            </div>
        )

    }
}

export default Main;


