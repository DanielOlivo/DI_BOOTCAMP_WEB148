import React from "react";
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const cities = {
    'Hong Kong': 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg',
    'Macao': 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp',
    'Japan': 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp',
    'Las Vegas': 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp'
}

class Cities extends React.Component {
    constructor(props){
        super()
        this.props = props;
    }


    render() {
        return <Carousel>{
            Object.entries(cities).map(([name, link]) => 
                <div>
                    <img src={link} />
                    <p className="legend">{name}</p>
                </div>)     
        }</Carousel>
    }
}

export default Cities;