import React, {
  Component
} from 'react';
import './App.css';
import ToDoList from './components/ToDoList/ToDoList.js';

      class App extends Component {
        render() {

          return ( <div className = "App" >
            < div className = "header" > < h1 > ToDo list </h1> </div >
            <ToDoList/> </div>
          );
        }
      }

      export default App;