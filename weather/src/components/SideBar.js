import React, { Component } from 'react';
import { connect } from 'react-redux';

import SideBarItem from './SideBarItem';

class SideBar extends Component {
  render() {
    return JSON.parse(window.localStorage.getItem('favoriate')) === null ? (
      <nav class='sidebar'>
        <ul class='side-nav' />
        <div class='legal'>
          &copy; 2019 by JingHuang-Su, All rights reserved
        </div>
      </nav>
    ) : (
      <nav class='sidebar'>
        <div class='side-nav'>
          {JSON.parse(window.localStorage.getItem('favoriate')).map(i => (
            <SideBarItem item={i} />
          ))}
        </div>
        <div class='legal'>
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
