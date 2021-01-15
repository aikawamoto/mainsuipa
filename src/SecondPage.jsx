import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar, Page, Button, BackButton, Row, Col} from 'react-onsenui';

import './style.css';

export default class SecondPage extends React.Component {

 popPage() {
   this.props.hako(9);
   this.props.navigator.popPage(); // タイトル画面に戻る
 }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <p style={{textAlign: 'center'}}>
          <Button onClick={this.popPage.bind(this)}>Pop page</Button>
        </p>
        <Row>
          <Col className="box"></Col>
          <Col className="box"></Col>
          <Col className="box"></Col>
          <Col className="box"></Col>
        </Row>

      </Page>
    );
  }
}
