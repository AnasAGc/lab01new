
import React from 'react';
import HornedBeast from './HornedBeast';
import rawData from './data.json'
import CardColumns from 'react-bootstrap/CardColumns';
import 'bootstrap/dist/css/bootstrap.min.css';


class Main extends React.Component {

    render() {

        return (

            <div className='main' >
                <CardColumns>


                {rawData.map((item, index) => {

                    return (
                            <HornedBeast alt={item.keyword} description={item.description} title={item.title} url={item.image_url} />

                    )





                })}

     

            </CardColumns>
            </div>
            


        )

    }
}

export default Main;


