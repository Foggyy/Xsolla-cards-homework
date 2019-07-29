import React, { Component } from 'react'
import Card from "./Card";
import jsonData from "../Cards/cards.json";

class Cards extends Component {

    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    {jsonData.cards.map((element, index) => {
                        return(
                            <div className="col-md-4">
                                <Card imgsrc={element.image} title={element.category} text={element.text}/>
                             </div>
                        )                        
                    })}
                </div>
            </div>
        );
    }
}

export default Cards;