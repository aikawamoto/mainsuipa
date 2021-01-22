import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar, Page, Button, BackButton, Row, Col, Switch} from 'react-onsenui';

import './style.css';

export default class SecondPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      field:  [
        [{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11}],
        [{type: -1, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: -1, state: 11}],
        [{type: -1, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: -1, state: 11}],
        [{type: -1, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: -1, state: 11}],
        [{type: -1, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: -1, state: 11}],
        [{type: -1, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: -1, state: 11}],
        [{type: -1, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: -1, state: 11}],
        [{type: -1, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: -1, state: 11}],
        [{type: -1, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: -1, state: 11}],
        [{type: -1, state: 11},{type: 0, state: 10},{type: 1, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 12, state: 11},{type: -2, state: 11},{type: 0, state: 12},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: -1, state: 11}],
        [{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11}]
        ],

      mode: false,
    }
    var data = this.state.data;
    this.mark=this.mark.bind(this);
    this.masu=this.masu.bind(this);
}

 popPage() {
   this.props.hako(9);
   this.props.navigator.popPage(); // タイトル画面に戻る
 }

  mark(cell) {
   if(cell.state == 12 )
     return "🚩";

   if(0<cell.type&&cell.type<9)
     return cell.type;
  
  if(cell.type == -2 )
     return "💣";

  return " ";
}

  masu(cell) {
  if(cell.state == 10 )
     return "box2";

     return "box";

}



  render() {
    const item = [];
    const f = [];
    var i,j;
    for(i=1;i<10;i++){
      item.splice(0,item.length);
      for(j=1;j<10;j++){
        item.push(<Col className={this.masu(this.state.field[i][j])}>{this.mark(this.state.field[i][j])}</Col>);
      }
        f.push(<Row>{item.concat()}</Row>);
    }

  
  

    return (
      <Page renderToolbar={this.renderToolbar}>
        <p style={{textAlign: 'center'}}>
          <Button onClick={this.popPage.bind(this)}>戻る</Button>
        </p>
      
      <Row>
          <div className="waku">💣</div>
          <div className="waku">⏱</div>
      </Row>

      <p>
      <div align="right"> 🔨<Switch onChange={(event) => {
        var s = this.state; // stateの値を取得してsに入れる
        s.mode = event.value // evant.valueの値がスイッチの状態を表しています
        this.setState(s); // this.stateをsを使って更新する
        }}
        checked={this.state.mode}>
        </Switch>🚩</div>
      </p>
     
      <div>
       {f}
      </div>

         

     
      </Page>
    );
  }
}






