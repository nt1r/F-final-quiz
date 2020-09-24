import React from 'react';
import '../App.scss';

class MemberTag extends React.Component {
  render() {
    return (
      <div className="memberTagDiv">
        <p>
          {this.props.id}. {this.props.name}
        </p>
      </div>
    );
  }
}

export default MemberTag;
