import React from 'react';
import '../App.scss';
import TrainerTag from './TrainerTag';

class TrainerSection extends React.Component {
  render() {
    const { trainers, inputVisible, onKeyPress, changeInputVisible } = this.props;
    return (
      <section>
        <h1>讲师列表</h1>
        <div className="trainer_list_div">
          {trainers.map((trainer) => {
            return <TrainerTag member trainer={trainer} />;
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

export default TrainerSection;
