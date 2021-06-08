
import React from 'react';
import HornedBeast from './HornedBeast';

import CardColumns from 'react-bootstrap/CardColumns';
import 'bootstrap/dist/css/bootstrap.min.css';


class Main extends React.Component {

    

    render() {

        return (


            <CardColumns >

                <div  >

                    {this.props.dataFile.map((item, index) => {

                        return (
                            <HornedBeast alt={item.keyword} description={item.description} title={item.title} url={item.image_url} />

                        )

                    })}


                </div>
            </CardColumns>




        )

    }
}

export default Main;


