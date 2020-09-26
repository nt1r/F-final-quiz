import React from 'react';
import '../App.scss';
import TraineeTag from './TraineeTag';
import { makeHttpRequest, renameTeamNameUrl } from '../utils/http';

class GroupCard extends React.Component {
  constructor(props) {
    super(props);

    // TODO feedback：用props去初始化state会存在一些问题
    this.state = {
      inputVisible: props.inputVisible,
      name: props.name,
    };
  }

  onRenameKeyPress = (event, index) => {
    if (event.key === 'Enter') {
      const targetValue = event.target.value;

      // TODO feedback：可以再抽象一层，专门处理CRUD的逻辑，会更易维护
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
    // TODO feedback：解构state会更易读些
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
              // TODO feedback：不建议提交console.log
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
        {/* TODO feedback：列表用ul li更符合语义 */}
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
