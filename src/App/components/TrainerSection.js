import React from 'react';
import '../App.scss';
import PersonTag from './PersonTag';

class TraineeSection extends React.Component {
  render() {
    const { trainers, inputVisible, onKeyPress, changeInputVisible } = this.props;
    return (
      <section>
        <h1>讲师列表</h1>
        <div className="trainer_list_div">
          {trainers.map((member) => {
            return <PersonTag id={member.id} name={member.name} />;
          })}
          {inputVisible ? (
            <input type="text" className="add_person_input" onKeyPress={onKeyPress} />
          ) : (
            <button type="button" className="addPersonTagButton" onClick={changeInputVisible}>
              + 添加讲师
            </button>
          )}
        </div>
      </section>
    );
  }
}

export default TraineeSection;
