import React from 'react';



class Headers extends React.Component {

    render() {
        return (
            <div className='header' >
                <h1>
                    Hello everyone  {this.props.name}
                </h1>
            </div>
        )
    }

}

export default Headers;
