import React, { Component } from 'react';

export default class ComplaintsList extends Component {
    constructor() {
      super();
  
      this.state = {
        complaints: []
      };
    }

    componentWillMount() {
        this._getAllComplaints();
    }

    _getAllComplaints() {
        console.log('Getting complaints');
      }

}