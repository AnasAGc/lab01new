
import React from 'react';
import HornedBeast from './HornedBeast';
import rawData from './data.json'

class Main extends React.Component {

    render() {

        return (

            <div className='main' >
                {rawData.map((item,index) => {
                                                console.log(index);

                    return (
                        <div className={'card}'+index} >
                            <HornedBeast  alt={item.keyword} description={item.description} title={item.title} url={item.image_url} />

                        </div>

                    )

                })}

            </div>
        )

    }
}

export default Main;


