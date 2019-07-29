import React from 'react';
import './styles.css'

class Card extends React.Component{

        state = {
        bgColor: ""
      }

    cardClick = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        this.setState({
            bgColor: color
        })
    }

    render() {
        return(
            <div className="card text-center shadow" style={{backgroundColor: this.state.bgColor}} onClick={this.cardClick}>
                <div className="overflow">
                <img src={this.props.imgsrc} alt='Image 1' className="card-img-top"/>
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title"> {this.props.title} </h4>
                    <p className="card-text text-secondary"> {this.props.text} </p>
                </div>
            </div>
        );
    }

}

export default Card;