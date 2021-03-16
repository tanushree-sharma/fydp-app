import React, { Component } from 'react';
import PropTypes from 'prop-types';


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
            {!isOpen && <span><img src="{{ url_for('static',filename='faqArrowDown.png') }}" id="faq-arrow"/></span>}
            {isOpen && <span><img src="{{ url_for('static',filename='faqArrowUp.png') }}" id="faq-arrow"/></span>}
            {label}
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