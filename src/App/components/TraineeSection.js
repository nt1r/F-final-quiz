import React from 'react';
import '../App.scss';
import PersonTag from './PersonTag';

class TraineeSection extends React.Component {
  render() {
    const { trainees, inputVisible, onKeyPress, changeInputVisible } = this.props;
    return (
      <section>
        <h1>学员列表</h1>
        <div className="trainee_list_div">
          {trainees.map((member) => {
            return <PersonTag id={member.id} name={member.name} />;
          })}
          {inputVisible ? (
            <input type="text" className="add_person_input" onKeyPress={onKeyPress} />
          ) : (
            <button type="button" className="addPersonTagButton" onClick={changeInputVisible}>
              + 添加学员
            </button>
          )}
        </div>
      </section>
    );
  }
}

export default TraineeSection;
