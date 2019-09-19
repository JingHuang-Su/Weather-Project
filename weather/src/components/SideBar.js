import React, { Component } from 'react';
import { connect } from 'react-redux';

import SideBarItem from './SideBarItem';

class SideBar extends Component {
  render() {
    return this.props.state === null ? (
      <nav className='sidebar'>
        <ul className='side-nav' />
        <div className='legal'>
          &copy; 2019 by JingHuang-Su, All rights reserved
        </div>
      </nav>
    ) : (
      <nav className='sidebar'>
        <div className='side-nav'>
          {this.props.favoriate.map(i => (
            <SideBarItem key={i} item={i} />
          ))}
        </div>
        <div className='legal'>
          &copy; 2019 by JingHuang-Su, All rights reserved
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  favoriate: state.favoriate
});

export default connect(
  mapStateToProps,
  null
)(SideBar);
