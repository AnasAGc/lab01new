
import React from 'react';
import HornedBeast from './HornedBeast';
import rawData from './data.json'

class Main extends React.Component {

    render() {

        return (

            <div className='main' >
                {rawData.map((item) => {
                    return (
                        <div>
                            <HornedBeast alt={item.keyword} description={item.description} title={item.description} url={item.image_url} />

                        </div>

                    )

                })}

            </div>
        )

    }
}

export default Main;


