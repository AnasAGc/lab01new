import React from'react';
import Header from './component/Header';
import Main from'./component/Main';
import Footer from './component/Footer';
import rawData from './component/data.json'



class App extends React.Component{
  render(){
    return(
      <div>
        <Header name='Anas'/>
        <Main dataFile={rawData}/>
        <Footer/>
      </div>
    )
  }
}

export default App;
