import React from 'react';
import '../App.scss';
import PersonTag from './PersonTag';

class TraineeSection extends React.Component {
  render() {
    const { trainees, onClickAddButton } = this.props;
    return (
      <section>
        <h1>学员列表</h1>
        <div className="trainee_list_div">
          {trainees.map((member) => {
            return <PersonTag id={member.id} name={member.name} />;
          })}
          <button type="button" className="addPersonTagButton" onClick={onClickAddButton}>
            + 添加学员
          </button>
        </div>
      </section>
    );
  }
}

export default TraineeSection;
