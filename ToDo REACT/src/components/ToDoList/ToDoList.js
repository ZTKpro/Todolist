import React, {
    Component
} from 'react';
import ToDoItem from '../ToDoItem/ToDoItem.js';
import NewTodoForm from '../NewTodoForm/NewTodoForm.js';

class ToDoList extends Component {  
    components


    static defaultProps = {
        tasks: [
            {text:'find a job'}
        ],
    tilte: 'My stuff'
    }

    state = {
        tasks: this.props.tasks,
        draft: ''
    }
    updateDraft = event => {
        this.setState({
            draft: event.target.value
        })
    }

    addToDo = () => {
        const {
            tasks,
            draft
        } = this.state
        const list = tasks
        list.push({
            text: draft
        })
        this.setState({
            tasks: list,
            draft: ''
        })
    }
    removeAll = () => {
        this.setState({tasks: []})
    }
    render() {
        const {
            tasks,
            draft
        } = this.state;
        return ( 
            < div class = "box" >
            < button onClick={this.removeAll} > 
            Remove All
            </button>
            
             {
                tasks.map(task => < ToDoItem task = {
                        task.text
                    }
                    done = {
                        task.done
                    }
                    />)} <NewTodoForm onSumbit = {
                    this.addToDo
                }
                onChange = {
                    this.updateDraft
                }
                draft = {
                    draft
                }
                /> </div >
            )
        }
    }
    export default ToDoList