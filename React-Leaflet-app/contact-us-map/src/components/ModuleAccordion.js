import React, { Component } from 'react';
import { Collapse, CardBody, Card, CardHeader, Accordion } from 'reactstrap';

class ModuleAccordion extends Component {
  constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = { collapse: 0, cards: [1] };
      
    }

    toggle(e) {
      let event = e.target.dataset.event;
      this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) });
    }
    render() {
      const {cards, collapse} = this.state;
      return (
        <div className="container">
            {/* <h3 className="page-header">Reactstrap Accordion using card component</h3> */}
            {cards.map(index => {
              return (
                <Card style={{ marginBottom: '1px' }} key={index}>
                  <CardHeader onClick={this.toggle} data-event={index}>{this.props.modules.moduleName}<h6 style={{fontSize:'12px'}}>Module duration: {this.props.modules.duration}</h6></CardHeader>
                  <Collapse isOpen={collapse === index}>
                  <CardBody>
                  {this.props.modules.description}
                  </CardBody>
                  </Collapse>
                </Card>
              )
            })}     
            
          </div>
      );
    }
}

export default ModuleAccordion;