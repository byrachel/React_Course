import React, { Component } from 'react'

class Todo extends Component {
    state = {
        element : '',
        items : []
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            element : '',
            items : [...this.state.items, {element : this.state.element}]
        })
    }

    deleteItem = (index) => {
        const arr = this.state.items;
        arr.splice(index, 1);
        this.setState({
            items: arr
        })
    }

    todoList = () => {
        return this.state.items.map((item, index) => {
            return(
                <div className="card mb-3" key={index}>
                    <div className="card-body">
                        <h4>{item.element}
                        &nbsp;
                        <img src="close.png"
                        style={{cursor: 'pointer', float: 'right' }}
                        onClick={() => this.deleteItem(index)} />
                        </h4>
                    </div>
                </div>
            )
        })
    }
    
    render() {
        return (
            <div className="container">
            <div className="card my-3">
                <div className="card-header">Ma To-do liste</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="element">Tâche : &nbsp; </label>
                            <input type="text"
                                className="form-control form-control-lg"
                                name="element"
                                onChange={this.onChange}
                                value={this.state.element}
                            />
                        </div>
                        
                        <button className="btn btn-primary btn-block">Ajouter</button>
                    </form>
                </div>
                {this.todoList()}
            </div>
            </div>

        )
    }
}

export default Todo;
