import React from 'react';
import Modal from 'react-modal';
import './Tiles.css';
class Tile extends React.Component{
    constructor(props) {
        super(props);
        console.log(this.props)
        
        this.state = {
            modalIsOpen: false
          };
      
          this.openModal = this.openModal.bind(this);
          this.afterOpenModal = this.afterOpenModal.bind(this);
          this.closeModal = this.closeModal.bind(this);
          Modal.setAppElement('body')
          }

          openModal() {
            this.setState({modalIsOpen: true});
          }
        
          afterOpenModal() {
            // references are now sync'd and can be accessed.
            // this.subtitle.style.color = '#f00';
          }
        
          closeModal() {
            this.setState({modalIsOpen: false});
          }

          
        
        
    render(){   
        const tile = this.props.tile;
        const index = this.props.index;
        return (
            <div className="Tiles" >
              <div className="TilePrize" onClick={this.openModal} key={index}>
              {index%4 == 0 && <img src="https://pre00.deviantart.net/db27/th/pre/i/2014/158/a/4/captain_america_symbol_fill_by_mr_droy-d7ldm98.png"/>}
              {index%4 == 1 && <img src="http://www.clker.com/cliparts/R/z/W/5/P/A/lightning-hi.png"/>}
              {index%4 == 2 && <img src="https://pre00.deviantart.net/4dd2/th/pre/i/2014/158/4/4/black_widow_symbol_fill_by_mr_droy-d7ldm3y.png"/>}
              {index%4 == 3 && <img src="https://pre00.deviantart.net/c57b/th/pre/i/2014/158/d/9/hulk_symbol_fill_c1_by_mr_droy-d7ldmfh.png"/>}
                <p>Prize {index}</p>
              </div>
              <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
        //   style={customStyles}
        className="PrizeContent" 
          contentLabel="Example Modal"
        >
                  <button className="PrizesClose" onClick={this.closeModal}>x</button>

          <h2>{tile.info}</h2>
          <h3>Item Information</h3>
        </Modal>

            </div>

        )
    }
}

  
export default Tile;

