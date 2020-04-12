import React, { Component } from 'react';

export default class Contact extends Component{
    render(){
    return (
            
            <ul className="contact_list"><b>
                <li className="list_item">{this.props.firstName}</li>
                <li className="list_item">{this.props.lastName}</li></b>
                <li className="list_item">{this.props.phone}</li>
                <li className="list_item"> 
                    {
                        !this.props.gender? (<i class="fas fa-question-circle"></i>) : (this.props.gender==='male'?
                        <i class="fas fa-male"></i> : <i class="fas fa-female"></i>)   
                    }
                    {this.props.gender}
                </li>    
            </ul> 
            
        );
    }
}
//vfv