import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar, Page, Button, BackButton, Row, Col, Switch} from 'react-onsenui';

import './style.css';

export default class SecondPage extends React.Component {
  constructor(props) {
    super(props);
    this.fieldcr=this.fieldcr.bind(this);
     var f = this.fieldcr();

    this.state = {
      field: f,

       
      mode: false,
    };
    
    this.mark=this.mark.bind(this);
    this.masu=this.masu.bind(this);
    this.bakudanoku=this.bakudanoku.bind(this);
    this.suuzimasu=this.suuzimasu.bind(this);
    
    
}


 popPage() {
   this.props.hako(9);
   this.props.navigator.popPage(); // タイトル画面に戻る
 }

 fieldcr() {
// 右図のようにフィールドの各セルを空白マス・開いていない状態にする。周囲は壁マスにする
var field =  [
        [{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11},{type: -1, state: 11}],
        [{type: -1, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: -1, state: 11}],
        [{type: -1, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: -1, state: 11}],
        [{type: -1, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: -1, state: 11}],
        [{type: -1, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: -1, state: 11}],
        [{type: -1, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: -1, state: 11}],
        [{type: -1, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: -1, state: 11}],
        [{type: -1, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: -1, state: 11}],
        [{type: -1, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: -1, state: 11}],
        [{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: 0, state: 11},{type: -1, state: 11}],
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
   console.log("💣置いたよ=" + i + ", "+j);

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
         console.log("数字置いたよ=" + i + ", "+j);
     field[i][j].type=a;


    }
       
}
}
}



  render() {
    const item = [];
    const c = [];
    var i,j;
    for(i=1;i<10;i++){
      item.splice(0,item.length);
      for(j=1;j<10;j++){
        item.push(<Col className={this.masu(this.state.field[i][j])}>{this.mark(this.state.field[i][j])}</Col>);
      }
        c.push(<Row>{item.concat()}</Row>);
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
       {c}
      </div>

         

     
      </Page>
    );
  }
}






