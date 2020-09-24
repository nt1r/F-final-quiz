import React from 'react';
import '../App.scss';
import TraineeTag from './TraineeTag';
import { makeHttpRequest, renameTeamNameUrl } from '../utils/http';

class GroupCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVisible: props.inputVisible,
      name: props.name,
    };
  }

  onRenameKeyPress = (event, index) => {
    if (event.key === 'Enter') {
      const targetValue = event.target.value;
      makeHttpRequest('post', renameTeamNameUrl, {
        newName: targetValue,
        index,
      })
        .then((response) => {
          if (response.status === 200) {
            this.setState({
              name: targetValue,
              inputVisible: false,
            });
          } else if (response.status === 409) {
            console.log('repeat name');
          }
        })
        .catch((error) => {
          // do nothing here
          console.log(error);
        });
    }
  };

  render() {
    const { members, index } = this.props;
    return (
      <div>
        {this.state.inputVisible ? (
          <input
            type="text"
            className="renameInput"
            onKeyPress={(event) => this.onRenameKeyPress(event, index)}
          />
        ) : (
          <button
            type="button"
            className="teamNameButton"
            onClick={(event) => {
              console.log(event);
              this.setState({
                // eslint-disable-next-line react/no-access-state-in-setstate
                inputVisible: !this.state.inputVisible,
              });
            }}
          >
            {this.state.name}
          </button>
        )}
        <div>
          {members.map((member) => {
            return <TraineeTag id={member.id} name={member.name} />;
          })}
        </div>
      </div>
    );
  }
}

export default GroupCard;
