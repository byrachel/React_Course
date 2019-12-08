import React, { Component } from 'react'
import { Consumer } from '../context'

class Contact extends Component {

    state = {
        show : false
    }

    showContact = () => {
        this.setState({
            show : !this.state.show
        })
    }

    deleteContact = (id, dispatch) => {
        dispatch({type: 'DELETE_CONTACT', payload: id})
    }

    render() {

        return(

            <Consumer>

                {value => {
                    return(
                        
                        <div className="card card-body mb-3 text-center">
                        <h4>{this.props.nom} &nbsp; <img src="arrow.png" onClick={this.showContact} style={{cursor:'pointer'}} /> &nbsp;
                        <img src="close.png" onClick={() => this.deleteContact(this.props.id, value.dispatch)} style={{float:'right'}}/></h4>
        
                        {this.state.show ? (
                            <ul className="card card-body mb-3">
                            <li className="list-group-item">
                                Email: {this.props.email}
                            </li>
                            <li className="list-group-item">
                                Tél:{this.props.tel}
                            </li>
                            </ul>
                        ) : null }
                        
                    </div>
                    
                    )
                }}

            </Consumer>
        )

    }
}

export default Contact;