import React from 'react';
import '../App.scss';
import { message } from 'antd';
import TraineeTag from './TraineeTag';
import { makeHttpRequest, renameTeamNameUrl } from '../utils/http';
import TrainerTag from './TrainerTag';

class GroupCard extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      inputVisible: false,
    };
  }

  onRenameKeyPress = (event, id) => {
    if (event.key === 'Enter') {
      const targetValue = event.target.value;
      makeHttpRequest('patch', renameTeamNameUrl(id), {
        newName: targetValue,
      })
        .then((response) => {
          if (response.status === 200) {
            this.setState({
              inputVisible: false,
            });
            // eslint-disable-next-line no-restricted-globals
            history.go(0);
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            message.error('命名与原先相同');
          } else if (error.response.status === 404) {
            message.error('小组ID未找到');
          }
        });
    }
  };

  onClickRenameButton = () => {
    this.setState((prev) => ({
      inputVisible: !prev.inputVisible,
    }));
  };

  render() {
    const { id, name, trainees, trainers } = this.props;
    return (
      <div className="group-card-div">
        {this.state.inputVisible ? (
          <input
            type="text"
            className="renameInput"
            onKeyPress={(event) => this.onRenameKeyPress(event, id)}
          />
        ) : (
          <button type="button" className="teamNameButton" onClick={this.onClickRenameButton}>
            <span className="group-name-span">{name}</span>
            {trainers.map((trainer) => {
              return <TrainerTag key={trainer.id} trainer={trainer} />;
            })}
          </button>
        )}
        <div>
          {trainees.map((trainee) => {
            return <TraineeTag key={trainee.id} trainee={trainee} />;
          })}
        </div>
      </div>
    );
  }
}

export default GroupCard;
