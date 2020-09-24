import React from 'react';
import '../App.scss';
import { Popover } from 'antd';

class TraineeTag extends React.Component {
  render() {
    const { id, name, office, email, github, zoomId } = this.props.trainee;

    const popOverContent = (
      <div className="pop-over-div">
        <span className="tag-props-span">id: {id}</span>
        <span className="tag-props-span">name: {name}</span>
        <span className="tag-props-span">email: {email}</span>
        <span className="tag-props-span">office: {office}</span>
        <span className="tag-props-span">github: {github}</span>
        <span className="tag-props-span">zoomId: {zoomId}</span>
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

export default TraineeTag;
