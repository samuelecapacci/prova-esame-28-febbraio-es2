import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    var data = new Date(),
      date = data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
    this.state = {
      showMe: false,
      date: date
    }
  };

  operation() {
    this.setState({
      showMe: !this.state.showMe
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <nav class="navbar">
          <div class="top_container">
            <button type="button" class="btn" href="#">
              <a href="#">Go to Main Website</a>
            </button>
          </div>
        </nav>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id lorem pulvinar, placerat lorem quis, fermentum erat. Donec vel arcu id lacus commodo porta. Nullam ultrices leo nec orci consequat malesuada. Proin enim velit, ultrices varius velit at, condimentum ultrices enim. In tempus eu elit a luctus. Pellentesque lobortis augue.</div>
        {
          this.state.showMe ?
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget dolor feugiat, commodo sapien in, condimentum velit. Fusce nec ligula vitae purus tincidunt lacinia. In odio purus, varius quis neque ac, vestibulum rutrum sem. Nullam ut neque placerat, venenatis est eget, rutrum mauris. Nulla fringilla fermentum odio. Fusce congue tincidunt nibh non scelerisque. Vivamus vel feugiat ipsum. Aenean scelerisque placerat eros ac ornare. Proin semper neque sed tempus posuere. Integer eget placerat lorem, vitae euismod turpis. Maecenas ultrices consequat fringilla. Nam maximus ultricies dapibus. Nulla dapibus tellus nec rutrum rutrum. Sed porta ac diam in sagittis. Curabitur sodales non augue quis mattis.

  Maecenas egestas eget augue dignissim scelerisque. Curabitur ultrices in ante eget cursus. Sed ut mauris risus. Sed tristique lacus lorem, et interdum sem hendrerit id. Praesent porta nunc pulvinar, convallis mauris et, luctus justo. Donec dictum interdum orci non hendrerit. Aliquam euismod ultrices lorem non dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed auctor metus mi. Maecenas ut tempus justo, non varius magna.

Aenean quis eros facilisis, porttitor augue quis, malesuada nisl. Integer sit amet aliquam elit. Vivamus et dolor scelerisque, euismod massa id, convallis elit. Etiam vulputate orci at nibh.</div>
            : null
        }
        <button onClick={() => this.operation()}>ReadMore</button>
        <hr></hr>
        <img src={'https://picsum.photos/1200/500/?random'} />
        <hr></hr>
        <div>Samuele Capacci - Prova 2 - Landing Page - Oggi è il {this.state.date}</div>
      </div>
    );
  }
}

export default App;
