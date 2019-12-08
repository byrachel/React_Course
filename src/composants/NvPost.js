import React, { Component } from 'react'
import axios from 'axios'

class NvPost extends Component {

    state = {
        title: '',
        content: '',
        author: 'Hugo'
    }

postArticle = () => {

    const nvPost = {
        title : this.state.title,
        body : this.state.content,
        auteur : this.state.author
    }
    axios.post('https://jsonplaceholder.typicode.com/posts', nvPost)
        .then(reponse => {
            
        })
}

    render () {
        return (
            <div className="container">
                <div className="form-group">
                    <h1>Ajouter un Article</h1>
                    <label>Titre</label>
                    <input className="form-control" type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                    <label>Contenu</label>
                    <textarea className="form-control" rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                    <label>Auteur</label>
                    <select className="form-control" value= {this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                        <option value="Hugo">Hugo</option>
                        <option value="Juliette">Juliette</option>
                        <option value="John">John</option>
                    </select>
                    <button 
                    onClick={this.postArticle}
                    className="btn btn-primary my-3">Ajouter un Article</button>
                </div>
            </div>
        );
    }
}

export default NvPost;