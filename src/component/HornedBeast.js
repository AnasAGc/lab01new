import React from 'react';


class HornedBeast extends React.Component{

    constructor(props){
        super(props)
        this.state={
            numlikes:0
        }
    }

    incrementNumberOFlikes=()=>{
        this.setState({
            numlikes:this.state.numlikes+1
        });
    }

    render(){
        return(
            <div className='card'>
                <h2> {this.props.title} </h2>
                <img onClick={this.incrementNumberOFlikes} alt={this.props.alt}  src={this.props.url} />
                <p> {this.props.description} </p>
                <p> Number of likes {this.state.numlikes} </p>
            </div>
        );
    }
}


export default HornedBeast;