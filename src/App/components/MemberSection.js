import React from 'react';
import '../App.scss';
import MemberTag from './MemberTag';

class MemberSection extends React.Component {
  render() {
    const { members, inputVisible, onKeyPress, changeInputVisible } = this.props;
    return (
      <section>
        <h1>学员列表</h1>
        <div className="member_list_div">
          {members.map((member) => {
            return <MemberTag id={member.id} name={member.name} />;
          })}
          {inputVisible ? (
            <input type="text" className="add_member_input" onKeyPress={onKeyPress} />
          ) : (
            <button type="button" className="memberTagButton" onClick={changeInputVisible}>
              + 添加学员
            </button>
          )}
        </div>
      </section>
    );
  }
}

export default MemberSection;
