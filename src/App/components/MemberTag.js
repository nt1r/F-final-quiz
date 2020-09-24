import React from 'react';
import '../App.scss';

class MemberTag extends React.Component {
  render() {
    return (
      <div className="memberTagDiv">
        <span>
          {this.props.id}. {this.props.name}
        </span>
      </div>
    );
  }
}

export default MemberTag;
