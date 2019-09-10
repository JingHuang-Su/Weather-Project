import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => (
  <Fragment>
    <div
      style={{
        margin: '0 auto',
        textAlign: 'center',
        fontSize: '16px'
      }}
    >
      <img
        src={spinner}
        style={{
          width: '100px',
          margin: 'auto',
          display: 'block',
          color: '#fff'
        }}
        alt='Loading...'
      />
      Please wait for loading or{' '}
      <strong>
        {' '}
        Input a city name that you want to search for in the search bar
      </strong>
    </div>
  </Fragment>
);
