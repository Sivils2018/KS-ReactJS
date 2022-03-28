import React, {Component} from 'react';
import Card from './CardUI';
import img1 from '../assets/beauty.jpeg';
import img2 from '../assets/clothes.jpeg';
import img3 from '../assets/sports.jpeg';



class Cards extends Component {
    render() {
        return (
            <div className="container">
                <div className = "row">
                <div className= "col-sm">
                    <Card imgsrc={img1} title="Beauty"/> </div>
                <div className="col-sm">
                    <Card imgsrc={img2} title="Clothes"/> </div>
                <div className="col-sm">
                    <Card imgsrc={img3} title="Sports"/> </div>
                </div> 
                </div>
        );
    }
}
export default Cards