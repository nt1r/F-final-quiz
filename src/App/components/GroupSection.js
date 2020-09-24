import React from 'react';
import '../App.scss';
import GroupCard from './GroupCard';

class GroupSection extends React.Component {
  render() {
    const { groupList, onClickButton } = this.props;
    return (
      <section className="group-section">
        <div className="group-section-title-div">
          <h1>分组列表</h1>
          <button type="button" className="assignButton" onClick={onClickButton}>
            分组学员
          </button>
        </div>
        {groupList.map((group) => {
          return (
            <GroupCard
              key={group.id}
              id={group.id}
              name={group.name}
              trainees={group.trainees}
              trainers={group.trainers}
            />
          );
        })}
      </section>
    );
  }
}

export default GroupSection;
