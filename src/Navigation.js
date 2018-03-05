import React from 'react';
import './Navigation.css';
class Navigation extends React.Component{
    constructor() {
        super();
        // this.renderInventory = this.renderInventory.bind(this);
        // this.renderLogin = this.renderLogin.bind(this);
        // this.authenticate = this.authenticate.bind(this);
        // this.logout = this.logout.bind(this);
        // this.authHandler = this.authHandler.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        this.state = {
          uid: null,
          owner: null
        }
      }
    render(){
        const nav = ["Battle", "Prizes & Ranks", "Rewards", "Armoury"]
        return (
           <div className="Navigation">
            {nav.map((item, index) => (
                <button key={index}><p>{item}</p></button>
             ))}
           </div> 
        )
    }
}

export default Navigation;