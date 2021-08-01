import { Card, Col, Row,Avatar } from 'antd';
import React from 'react'
import facebook from './assets/FB.png'
import googl from './assets/GOOGL.png'
import amzn from './assets/AMZN.svg'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const { Meta } = Card;




function Cards() {
    return (
      <DndProvider backend={HTML5Backend}>
          <div className="site-card-wrapper" style={{ marginLeft: "4em",marginRight:'4em',marginTop:'2em' }}>
    <Row gutter={16}>
      <Col span={8}>
      <Meta 
      avatar={<Avatar src={googl} />}
      title="GOOGL"
      description="1001 USD"
    />
      </Col>
      <Col span={8}>
      <Meta 
      avatar={<Avatar src={facebook} />}
      title="FB"
      description="721 USD"
    />
      </Col>
      <Col>
      <Meta 
      avatar={<Avatar src={amzn} />}
      title="AMZN"
      description="654 USD"
    />
      </Col>
    </Row>
  </div>  
  </DndProvider>
        
    )
}

export default Cards
