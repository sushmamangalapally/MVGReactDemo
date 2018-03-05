import React from 'react';
import Modal from 'react-modal';
import TilePrize from './TilePrize';
import $ from 'jquery';

import './Tiles.css';
class Tile extends React.Component{
    componentDidMount() {
        this.$el = $(this.el);
        console.log(this.$el);
    }
    constructor(props) {
        super(props);
        console.log(this.props)
        
        this.state = {
            modalIsOpen: false,
            firstactive: false,
            secondactive: true
          };
      
          this.openModal = this.openModal.bind(this);
          this.afterOpenModal = this.afterOpenModal.bind(this);
          this.closeModal = this.closeModal.bind(this);
          this.slideToRight = this.slideToRight.bind(this);
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
          slideToRight(){
            const currentState = this.state.firstactive;
            const currentState1 = this.state.secondactive;
            this.setState({ firstactive: !currentState, secondactive: !currentState1 });
          }
          getProperModal(content){
              
          }
          
        
        
    render(){   
        const tile = this.props.tile;
        const index = this.props.index;
        const view = this.props.tile.view;
        const length = this.props.tile.prizes;
        const obj = [];
        for(let i =0; i < length; i++){
            obj.push(i);
        }
        const get_slide = []; 
        const slideLength = 29;
        for(let i =0; i < slideLength; i++){
            get_slide.push(i);
        } 

        let content = "";
        if(view == 1){
            content = tile.info
        }else{
            content="Item Locked. Complete the 3 legendary branches to unlock."
        }
        return (
            <div className="Tiles" className={(view === 0) ? 'Tiles grey': "Tiles"}>
            <div  id={index} key={index} onClick={this.openModal}>
                <img src={tile.image}/>
                <h2>{tile.name}</h2>
                {(view === 0) && <div className="mythicPrize"><img width="50px" height="50px" src="http://moziru.com/images/lock-clipart-15.png"/> <h4>Locked</h4></div>}
            </div>
            {view===1 && 
            <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
        //   style={customStyles}
          contentLabel="Example Modal"
          className="PrizesModal" 
        >
        
          <button className="PrizesClose" onClick={this.closeModal}><h1>X</h1></button>
          <h1 className="PrizesTitle">{content}</h1>

          <div className="MainTilePrize">
          {obj.map((item, index) => (
              <div ref={el => this.el = el}>
              <div className={this.state.firstactive ? 'show': null} >
              {item<28 &&  <TilePrize tile={tile} index={item}  key={item}/>}
              </div>
              <div className={this.state.secondactive ? 'show': null} >
              {item>=28 &&  <TilePrize tile={tile} index={item}  key={item}/>}
              </div>
              </div>
             ))}
             {length> 28 && <div className="ArrowButton">
                <button className={(this.state.firstactive) ? 'show': 'right'} onClick={this.slideToRight}> &gt;</button>
             <button className={(this.state.secondactive) ? 'show ': 'left'} onClick={this.slideToRight}> &lt; </button>
                </div>
             }

             </div>
        </Modal>
    }
    {view===0 && 
            <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={{width: "300px"}}
          className="LockedModal"         
          >
        <div>
          <button className="PrizesClose" onClick={this.closeModal}><h1>X</h1></button>
          <h1 className="PrizesTitle">{content}</h1>
            </div>
        </Modal>
    }

            </div>

        )
    }
}

  
export default Tile;

