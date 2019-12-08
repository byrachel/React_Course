import React, { Component } from 'react'

import PostComplet from './PostComplet'
import axios from 'axios'
import Post from './Post'

class Blog extends Component {

    state = {
        posts : [],
        selectPostId : null
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(reponse => {
                const articles = reponse.data.slice(0,5)
                const postauteur = articles.map(post => {
                    return {
                        ...post,
                        auteur: 'Hugo'
                    }
                })
                this.setState({posts: postauteur})
                //data est notre tableau d'objet dans jsonplaceholder

            })
    }

    selectPost = (id) => {
        this.setState({selectPostId : id})
    }

    render () {

        const posts = this.state.posts.map(post => {
            return <Post 
            key={post.id} 
            auteur={post.auteur} 
            titre={post.title}
            clicked={() => this.selectPost(post.id)}
            />
        })

        return (
            <div className="container">
                <section>
                    <PostComplet id={this.state.selectPostId} />
                </section>
                <h2 className="text-center my-5">Tous les Articles :</h2>
                <section className="Posts">
                    {posts}
                </section>

            </div>
        );
    }
}

export default Blog;