import React from 'react';
import tilePrices from './tile-prices';
import Tile from './Tile';

import './Tiles.css';
class Tiles extends React.Component{
    constructor() {
        super();
        this.state = {
            showModal: false
          }
          
    }
                        
    render(){   
        console.log(tilePrices["legendary1"]["view"]);
        return (
           <div className="MainTiles">
            {Object.keys(tilePrices).map((item, index) => (
                <Tile tile={tilePrices[item]} index={item} key={item}/>
             ))}
           </div> 

        )
    }
}

  
export default Tiles;