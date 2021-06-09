
import React from 'react';
import HornedBeast from './HornedBeast';
import { Form } from 'react-bootstrap';
import datahorns from './data.json'
import CardColumns from 'react-bootstrap/CardColumns';
import 'bootstrap/dist/css/bootstrap.min.css';


class Main extends React.Component {

    datahorns=(event)=>{
            let numberofhorns=parseInt(event.target.value);
            let allhorns=datahorns;
            let newwHorns;
            if (numberofhorns){
                newwHorns=allhorns.filter(item=>{
                    if(item.horns===numberofhorns){
                        return item;
                    }
                })
            }else{
                newwHorns=allhorns;
            }
            this.props.newFunction(newwHorns)
        }
    




    render() {




        return (

            <div className='cards'>
                <Form >
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Select Number Of Honor</Form.Label>
                        <Form.Control as="select" custom name='numOfHoner' onChange={this.datahorns}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="100">100</option>
                        </Form.Control>
                    </Form.Group>
                </Form>

                    <div  className="incard" >

                        {this.props.dataFile.map((item, index) => {

                            return (
                                <HornedBeast ket="index" alt={item.keyword} description={item.description} title={item.title} url={item.image_url} />

                            )

                        })}


                    </div>

            </div>


        )

    }
}

export default Main;


