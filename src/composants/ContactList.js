import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../context';
import './style.css';
import AddContact from './AddContact';


class List extends Component {

    state = {
        visible: false
    }

    showModal = () => {
        this.setState({
            visible: true
        });
    }
    
    _displayModal = () => {
    if(this.state.visible) {
        return (
            <div className="popup">
                <AddContact />
            </div>
        );
    }
    }

    render() {

        return(
            <Consumer>
                {value => {
                    return (
                        <div className="container">
                        <p className="display-4 my-5">Nos contacts</p>
                        {value.contacts.map(contact => (
                            <Contact
                            key={contact.id}
                            id={contact.id}
                            nom={contact.nom}
                            email={contact.email}
                            tel={contact.tel}
                            />
                        ))}
                        <button className="bouton" onClick={this.showModal}>Ajouter un contact</button>

                        {this._displayModal()}

                    </div>
                    )
                }}
                
            </Consumer>
        )
    }
}

export default List;