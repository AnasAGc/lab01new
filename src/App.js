import React from'react';
import Header from './component/Header';
import Main from'./component/Main';
import Footer from './component/Footer';
import rawData from './component/data.json';
import Form1 from './component/Form1'
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends React.Component{


  constructor(props){
    super(props)
    this.state={
      arryData:rawData,

    }
  }

 




  render(){
    return(
      <div>
        <Header name='Anas'/>
        <Form1 />
        <Main dataFile={this.state.arryData}/>
        <Footer/>
      </div>
    )
  }
}

export default App;
