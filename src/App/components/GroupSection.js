import React from 'react';
import '../App.scss';
import TeamCard from './TeamCard';

class GroupSection extends React.Component {
  render() {
    const { teamList, onClickButton } = this.props;
    return (
      <section>
        <div className="groupSectionTitleDiv">
          <h1>分组列表</h1>
          <button type="button" className="assignButton" onClick={onClickButton}>
            分组学员
          </button>
        </div>
        {teamList.map((team, index) => {
          return (
            <TeamCard
              name={team.name}
              members={team.memberList}
              index={index}
              inputVisible={false}
            />
          );
        })}
      </section>
    );
  }
}

export default GroupSection;
