import React from 'react';
import '../App.scss';
import TraineeTag from './TraineeTag';

class TraineeSection extends React.Component {
  render() {
    const { trainees, onClickAddButton } = this.props;
    return (
      <section>
        <h1>学员列表</h1>
        {/* TODO feedback：列表用ul li更符合语义 */}
        <div className="trainee_list_div">
          {trainees.map((trainee) => {
            return <TraineeTag trainee={trainee} />;
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
