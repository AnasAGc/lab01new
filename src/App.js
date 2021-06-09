import React from'react';
import Header from './component/Header';
import Main from'./component/Main';
import Footer from './component/Footer';
import rawData from './component/data.json';
// import Form1 from './component/Form1'
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends React.Component{


  constructor(props){
    super(props);

    this.state={
        numOfHoner:1,
        data:rawData,
        
    }
}


// updateHorn =(event)=>{


//     this.setState({
//         numOfHoner:event.target.value,
        // data:rawData.filter(item=> item.horns===parseInt(this.state.numOfHoner)),

//     })
//     console.log(parseInt(this.state.numOfHoner));
//     // console.log(rawData.filter(item=> item.horns===parseInt(this.state.numOfHoner)));
// }

updatHorn=(newhorn)=>{

this.setState({
  data:newhorn
})

}



  render(){
    return(
      <div>
        <Header name='Anas'/>
        {/* <Form1 updatFun={this.updateHorn}  /> */}
        <Main newFunction={this.updatHorn} dataFile={this.state.data}/>
        <Footer/>
      </div>
    )
  }
}

export default App;
