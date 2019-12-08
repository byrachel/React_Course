import React, { Component } from 'react'
import { Consumer } from '../context'
import uuid from 'uuid'

export default class AddContact extends Component {

    state = {
        nom : '',
        mail : '',
        tel : ''
    }

    onChange = e => this.setState({ [e.target.name] : e.target.value})

    onSubmit = (dispatch, e) => {
        e.preventDefault();
        const newContact = {
            id : uuid(),
            nom : this.state.nom,
            email : this.state.mail,
            tel : this.state.tel
        }
        dispatch({type : 'ADD_CONTACT', payload: newContact});
        this.setState ({
            nom : '',
            email : '',
            tel : ''

        })

        this.props.history.push('/contact')
    }

    render() {

        return(
            <Consumer>
                {value => {
                    return(
                        <div className="container">
                            <div className="card mb-3">
                            <div className="card-header">Ajouter un contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, value.dispatch)}>
                                    <div className="form-group">
                                        <label htmlFor="nom">Contact: </label>
                                        <input type="text"
                                        className="form-control form-control-lg"
                                        placeholder="tapez un nom"
                                        name="nom"
                                        value={this.state.nom}
                                        onChange={this.onChange}>

                                        </input>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="mail">eMail: </label>
                                        <input type="text"
                                        className="form-control form-control-lg"
                                        placeholder="tapez un eMail"
                                        name="mail"
                                        value={this.state.mail}
                                        onChange={this.onChange}>
                                            
                                        </input>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="tel">Téléphone: </label>
                                        <input type="text"
                                        className="form-control form-control-lg"
                                        placeholder="tel"
                                        name="tel"
                                        value={this.state.tel}
                                        onChange={this.onChange}>
                                            
                                        </input>
                                    </div>

                                    <input type="submit" value="Ajouter un contact" className="btn btn-block btn-primary" />
                                </form>
                            </div>
                        </div>
                    </div>
                    )
                }}
                
            </Consumer>

        )

    }
}
