import React from 'react';

import PropTypes from 'prop-types';
import TabButton from './tabButton';
import './tabs.scss';

export default class Tabs extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      activeTab: Array.isArray(this.props.children) ? this.props.children[0] : this.props.children
    }
    this.switchTab = this.switchTab.bind(this);
  }

  buttons() {
    let children = this.props.children;
    return Array.isArray(children) ?
      children.map((tab) => <TabButton
        key={tab.props.label}
        tab={tab}
        active={this.state.activeTab.props.label === tab.props.label}
        onClick={this.switchTab}> {tab.props.label} </TabButton>)
      : <TabButton tab={children}> {children.props.label} </TabButton>
  }

  changeTab(tab) {
    this.setState({
      activeTab: tab
    })
  }

  switchTab(activeTab) {
    this.setState({
      activeTab
    })
  }

  render() {
    return (
      <div className="tabs">
        <nav className="tabButtons">
          {this.buttons()}
        </nav>
        {this.state.activeTab}
      </div>)
  }
}