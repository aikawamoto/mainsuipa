import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar, Page, Button, BackButton, Row, Col, Switch,Dialog} from 'react-onsenui';

import './style.css';

export default class SecondPage extends React.Component {
  constructor(props) {
    super(props);

    this.intervalID = null;
    this.tick = this.tick.bind(this);
    this.fieldcr=this.fieldcr.bind(this);
     var f = this.fieldcr();

    this.state = {
      field: f,
      
      baku: 0,
      time: 0,
      mode: false,
      dialog: false,
    };
    
    this.mark=this.mark.bind(this);
    this.masu=this.masu.bind(this);
    this.bakudanoku=this.bakudanoku.bind(this);
    this.suuzimasu=this.suuzimasu.bind(this);
    this.click=this.click.bind(this);
    this.rinsetumasuakeru=this.rinsetumasuakeru.bind(this);
    this.gameover=this.gameover.bind(this);
    this.clear=this.clear.bind(this);
    this.gameclear=this.gameclear.bind(this);
   
    
}

 popPage() {
   if(this.state.time!=-1){
     this.props.hako(this.state.time);
   }
   this.props.navigator.popPage(); // タイトル画面に戻る
 }

 fieldcr() {
// 右図のようにフィールドの各セルを空白マス・開いていない状態にする。周囲は壁マスにする
var field =  [
        [{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11}],
        [{type: -1, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: -1, state: 11}],
        [{type: -1, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: -1, state: 11}],
        [{type: -1, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: -1, state: 11}],
        [{type: -1, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: -1, state: 11}],
        [{type: -1, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: -1, state: 11}],
        [{type: -1, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: -1, state: 11}],
        [{type: -1, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: -1, state: 11}],
        [{type: -1, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: -1, state: 11}],
        [{type: -1, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: -1, state: 11}],
        [{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11}],
        ];

        this.bakudanoku(field);
        this.suuzimasu(field);
        
        return field; // 作成したフィールド情報を返す
}

  mark(cell) {
   if(cell.state == 12 )
     return "🚩";

   if(0<cell.type&&cell.type<9)
     return cell.type;
   
   if(this.state.time<0 )
     return "🔥";
   
  
  if(cell.type == -2 )
     return "💣";

  return " ";
}

  masu(cell) {
  if(cell.state == 10 )
     return "box2";
  
     return "box";

}

  
  bakudanoku(field) {
  var bazu = 0;
  var i,j;
  
  while (bazu !=10){
    do{
      i = Math.floor(Math.random() * 9) + 1;
      j = Math.floor(Math.random() * 9) + 1;
    }while (field[i][j].type ==-2);
   

   field[i][j].type=-2;
   bazu+=1; 
   }
}
   

suuzimasu(field) {
 
 var a=0;
  for(var i=1;i<10;i++) {
    for(var j=1;j<10;j++) {
      a=0;
      if(field[i][j].type==0){
        if(field[i-1][j-1].type==-2){
          a+=1;
          }
          if(field[i-1][j].type==-2){ 
            a+=1;
            }
          if(field[i-1][j+1].type==-2){
            a+=1;
            }
          if(field[i][j-1].type==-2){
            a+=1;
           }
          if(field[i][j+1].type==-2){
            a+=1;
          }
          if(field[i+1][j-1].type==-2){
            a+=1;
         }
          if(field[i+1][j].type==-2){
            a+=1;
         }
          if(field[i+1][j+1].type==-2){
            a+=1;
         }
         
     field[i][j].type=a;

    }
       
}
}
}

click(i,j) {
  var s = this.state;
  if(this.intervalID == null) { // タイマーが動いていなかったら、
// タイマーを動かす１秒ごとにtick関数を呼び出す
  this.intervalID = setInterval(this.tick, 1000);

}

  if(s.mode==true){
    if(s.field[i][j].state==11&&s.baku<10){
      s.field[i][j].state=12;
      s.baku+=1;
    }
    else if(s.field[i][j].state==12){
      s.field[i][j].state=11;
      s.baku-=1;
    }
  }

  if(s.mode==false){
    if(s.field[i][j].state==11){
     //ゲームオーバー 
     if(s.field[i][j].type==-2){
       this.gameover();
     }
      if(s.field[i][j].type>0&&s.field[i][j].type<9){
        s.field[i][j].state=10;
      }
      if(s.field[i][j].type==0){
        this.rinsetumasuakeru(s.field,i,j);
      }   
    }
  }
    this.setState(s);

    var result = this.clear(s.field); // ゲームクリア状態か調べ、戻り値をresultに入れる
    if(result==true)
      this.gameclear();
}

rinsetumasuakeru(field, i, j) {

  if(field[i][j].state==10){
    return;
  }
  if(field[i][j].type==-1){
    return;
  }
  field[i][j].state=10;

  if(field[i][j].type>0&&field[i][j].type<9){
    return;
  }

  this.rinsetumasuakeru(field, i-1, j-1);
  this.rinsetumasuakeru(field, i-1, j);
  this.rinsetumasuakeru(field, i-1, j+1);
  this.rinsetumasuakeru(field, i, j-1);
  this.rinsetumasuakeru(field, i, j+1);
  this.rinsetumasuakeru(field, i+1, j-1);
  this.rinsetumasuakeru(field, i+1, j);
  this.rinsetumasuakeru(field, i+1, j+1);

}

gameover() {
  clearInterval(this.intervalID); // タイマーを止める
  this.intervalID = null;
  var s = this.state;
  s.dialog = true; // ダイアログを表示したいのでtrueにする
  s.time = -1; // ゲームオーバーの印としてタイムをマイナスにする
  this.setState(s);
}

clear(field) {
  for(var i=1;i<10;i++) {
    for(var j=1;j<10;j++) {
      if(field[i][j].type==-2){
        if(field[i][j].state!=12)
          return false;
      }
      else{
        if(field[i][j].state==11)
          return false;
        }
      }
    }
    return true;
}

gameclear() {
  clearInterval(this.intervalID); // タイマーを止める
  this.intervalID = null;

  var s = this.state;
  s.dialog = true; // ダイアログを表示したいのでtrueにする
  this.setState(s);
}

// ゲーム画面が破棄されるときに呼び出される
componentWillUnmount() {
clearInterval(this.intervalID); // タイマーを止める
}

tick() {
var s = this.state;
s.time++; // １秒ごとに実行されるので１ずつ増やす
console.log("tick ")
this.setState(s);
}
  render() {
    const item = [];
    const c = [];

    var message,score;
    if(this.state.time<0){
      message="GAME OVER";
      score="";
    }
    else{
      message="GAME CLEAR";
      score="Time: " + this.state.time + "秒";
    
    }
    
    for(let i=1;i<10;i++){
      item.splice(0,item.length);
      for(let j=1;j<10;j++){
        item.push(<Col className={this.masu(this.state.field[i][j])} onClick={() => this.click(i,j)}>{this.mark(this.state.field[i][j])}</Col>);
      }
        c.push(<Row>{item.concat()}</Row>);
    }


  

    return (
      <Page renderToolbar={this.renderToolbar}>
        
      
      <Row>
          <div className="waku">💣{this.state.baku}/10</div>
          <div className="waku">⏱{this.state.time}</div>
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
       {c}
      </div>

      <Dialog isOpen={this.state.dialog} onCancel={this.popPage.bind(this)}><div>
        {message}
        {score}

         <p style={{textAlign: 'center'}}>
          <Button onClick={this.popPage.bind(this)}><div className="sample-1 ">戻る</div></Button>
        </p>
       
         </div>
       </Dialog>
     
      </Page>
    );
  }
}



