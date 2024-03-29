// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';

import {formatTimestamp} from './DataUtils.js';

/**
 * Displays a Slider
 **/
export default class Slider extends Component {
  // eslint-disable-next-line require-jsdoc
  render() {
    const onChange = function(e) {
      const currentTimestamp = e.target.value;
      this.props.onChange(currentTimestamp);
    }.bind(this);

    const label = this.props.resultsCount + '/' +
      this.props.maxResultsCount + ' results as of ' +
      formatTimestamp(this.props.currentTimestamp);

    return (
      <div className='div-slider'>
        <p>
          {label}
        </p>
        <input
          className='input-slider'
          type="range"
          min={this.props.minTimestamp}
          max={this.props.maxTimestamp}
          value={this.props.currentTimestamp}
          onChange={onChange}
        />

      </div>
    );
  }
}
