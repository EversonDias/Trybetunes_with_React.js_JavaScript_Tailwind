import React, { Component } from 'react';
import Header from '../../components/header';

export default class Profile extends Component {
  render() {
    return (
      <div data-testid="page-profile">
        <Header />
        <p>Profile</p>
      </div>
    );
  }
}