import React from 'react';
import ReactDOM from 'react-dom'; 
import StarRatings from 'react-star-ratings';
import { Component } from 'react/cjs/react.production.min';
import { FaStar } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";

const ratingChanged = (newRating) => {
    console.log(newRating);
};

class Rate extends Component {
    constructor(props){
        super(props);
        this.setState({
            rating: 0
        })
        this.changeRating = this.changeRating.bind(this)
    }
    changeRating( newRating, name ) {
      this.setState({
        rating: newRating
      });
      console.log(newRating)
    }
 
    render() {
      return (
        <>
            <StarRatings
                // rating là giá trị với this.state.rating
                rating={2.6}
                starRatedColor="yellow"
                isHalf={true}
                changeRating={this.changeRating}
                numberOfStars={5}
                name="rating"
                starDimension="40px"
                starSpacing="15px"
            />
            {/* <StarRatings
                rating={2.5}
                starDimension="40px"
                starSpacing="15px"
            /> */}
            <ReactStars 
                count={5}
                size={24}
                onChange={ratingChanged}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
            />
        </>
      );
    }
}
export default Rate