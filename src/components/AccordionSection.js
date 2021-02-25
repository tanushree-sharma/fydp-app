import React, { Component } from 'react';
import PropTypes from 'prop-types';
import faqArrowDown from '../faqArrowDown.png';
import faqArrowUp from '../faqArrowUp.png';


class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this;

    return (
      <div id="accordion-section">
        <div id="accordion-question" onClick={onClick}>
          {label}
          <div >
            {!isOpen && <span><img src={faqArrowDown} id="faq-arrow"/></span>}
            {isOpen && <span><img src={faqArrowUp} id="faq-arrow"/></span>}
          </div>
        </div>
        {isOpen && (
          <div id="accordion-answer">
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;