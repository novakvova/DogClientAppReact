import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends React.Component {
  state = { 
    dogs: []
   }

  getListDataHandler = (e) => {
    e.preventDefault();
    // var list = [
    //   {id: 1, name: 'Шарік', image: 'https://85.img.avito.st/640x480/5408090485.jpg'},
    //   {id: 2, name: 'Бім', image: 'https://images.ua.prom.st/1605725118_w640_h640_kopilka-sobaka-sharik.jpg'}
    // ];
    // this.setState({dogs: list});
    const url='https://localhost:44301/api/dogs';
    axios.get(url).then(
      (resp) => { 
        console.log('-----axios res-----', resp);
        this.setState({dogs: resp.data});
      }
    );
    console.log("------click button-------");
  }
  render() {
    console.log("--Reander app state--", this.state);

    const todoItems = this.state.dogs.map((dog) =>
      <li key={dog.id}>
        {dog.name}
      </li>
    );
    return ( 
      <div className="container">
        <h1>Hello Peter</h1>
        <button onClick={this.getListDataHandler}>Get data</button>
        <ul>
          {todoItems}
        </ul>
      </div>
     );
  }
}
 
export default App;

