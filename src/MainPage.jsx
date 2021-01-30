import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar, Page, Button} from 'react-onsenui';

import SecondPage from './SecondPage'
import './style.css';

export default class MainPage extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      highscore:9999
    };
    this.hako=this.hako.bind(this);
  }
  
  pushPage() {
    this.props.navigator.pushPage({component: SecondPage, props: {hako: this.hako}});
  }

  hako(newscore) {
    var state = this.state;
    if(newscore<state.highscore){
     state.highscore = newscore;
    }
    this.setState(state); // this.stateを更新
}


  renderToolbar() {
    return (
      <Toolbar>
        
        <div className="sample-1">マインスイーパー</div>
       
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <p style={{textAlign: 'center'}}>
          <p><span class="decorated sample-1" data-text="High Score">High Score ：{this.state.highscore}</span></p>
          <Button onClick={this.pushPage.bind(this)}><div className="sample-1 ">START</div></Button>
        </p>
      </Page>
      
    );
  }
}