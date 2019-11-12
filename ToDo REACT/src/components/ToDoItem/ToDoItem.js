import React, { Component } from 'react';


class ToDoItem extends Component {
    static defaultProps = {
        done: false
    }
    state = {
        done: this.props.done
    }

    toggleDone = () => {
        this.setState({ done: !this.state.done })
    }

    render() {
        return (
            <ul onClick={this.toggleDone} className={this.state.done ? 'doneTodo' : ''}>
                <li>{this.props.task}</li>
            </ul>
        )
    }
}

export default ToDoItem