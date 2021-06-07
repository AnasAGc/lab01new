import React from 'react';


class HornedBeast extends React.Component{

    render(){
        return(
            <div className='card'>
                <h2> {this.props.title} </h2>
                <img alt={this.props.alt}  src={this.props.url} />
                <p> {this.props.description} </p>
            </div>
        );
    }
}


export default HornedBeast;