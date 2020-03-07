import React from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
// import 'App.css';

import HorizontalTimelineContent from './Components/HorizontalTimelineContent';
import GameInfo from './resources/content';

// Directly importing the minified bootstrap css to avoid all the painful
// steps it will take otherwise to get it to work.
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {

  constructor(props){
    super(props);
    this.state={ value: 0, previous: 0};
  }


  componentWillMount(){
    this.data=GameInfo.map((game, index) => {
      return ({
        data: game.date,
        component: (
          <div className='container' key={index}>
          <h1>{ `The Elder Scrolls ${index + 1}:`}</h1>
            <h2>{ game.subtitle }</h2>
            <hr />
            <p>{ game.content}</p>
            <hr />
          </div>
        )
      });
    });
  }
  render(){
   return  (
    
  <HorizontalTimelineContent content={this.data}/>
  );
  } 
}

// ReactDOM.render(<App/>, document.getElementById('content'));
export default App;
