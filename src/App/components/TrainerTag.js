import React from 'react';
import '../App.scss';
import { Popover } from 'antd';

class TrainerTag extends React.Component {
  render() {
    const { id, name } = this.props.trainer;

    const popOverContent = (
      <div className="pop-over-div">
        <span className="tag-props-span">id: {id}</span>
        <span className="tag-props-span">name: {name}</span>
      </div>
    );

    return (
      <Popover content={popOverContent}>
        <div className="memberTagDiv">
          <span>
            {id}. {name}
          </span>
        </div>
      </Popover>
    );
  }
}

export default TrainerTag;
