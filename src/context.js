import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT' : 
            return {
            contacts: state.contacts.filter(contact =>
                contact.id !== action.payload)

                //on garde les ID différents de celui surlequel on a cliqué
            };
        case 'ADD_CONTACT' :
            return {
                contacts : [action.payload, ...state.contacts]
                // on ajoute l'objet à notre tableau state
            };
        default:
            return state;
    }
}

export class Provider extends Component {

    state = {
        contacts : [
            {
                id: 1,
                nom : 'John',
                email : 'john@gmail.com',
                tel : '555-555-555'
            },
            {
                id: 2,
                nom : 'Rachel',
                email : 'rachel@gmail.com',
                tel : '444-444-444'
            },
            {
                id : 3,
                nom : 'Test',
                email : 'test@gmail.com',
                tel : '555-555-555'
            }
        ],
        dispatch: action => {
            this.setState(state => reducer(state,action))
        }
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;