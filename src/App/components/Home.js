import React from 'react';
import '../App.scss';
import GroupSection from './GroupSection';
import TraineeSection from './TraineeSection';
import {
  addNewTrainerUrl,
  assignGroupUrl,
  getAllNotGroupedTraineesUrl,
  getAllNotGroupedTrainersUrl,
  getAssignedGroupsUrl,
  makeHttpRequest,
} from '../utils/http';
import TrainerSection from './TrainerSection';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trainees: [],
      trainers: [],
      groupList: [],
      addMemberInputVisible: false,
    };
  }

  componentDidMount() {
    makeHttpRequest('get', getAllNotGroupedTraineesUrl).then((response) => {
      this.setState({
        trainees: response.data,
      });
    });

    makeHttpRequest('get', getAllNotGroupedTrainersUrl).then((response) => {
      this.setState({
        trainers: response.data,
      });
    });

    makeHttpRequest('get', getAssignedGroupsUrl).then((response) => {
      this.setState({
        groupList: response.data,
      });
    });
    // extract method here
  }

  onAddMemberKeyPress = (event) => {
    if (event.key === 'Enter') {
      makeHttpRequest('post', addNewTrainerUrl, {
        name: event.target.value,
      })
        .then((response) => {
          this.setState((prev) => ({
            trainers: prev.trainers.concat(response.data),
            addMemberInputVisible: false,
          }));
        })
        .catch((error) => {
          // do nothing here
          console.log(error);
        });
    }
  };

  changeAddMemberInputVisible = () => {
    this.setState((prev) => ({
      addMemberInputVisible: !prev.addMemberInputVisible,
    }));
  };

  onClickAssignButton = () => {
    makeHttpRequest('post', assignGroupUrl)
      .then((response) => {
        this.setState({
          groupList: response.data,
        });
        makeHttpRequest('get', getAllNotGroupedTraineesUrl).then((res) => {
          this.setState({
            trainees: res.data,
          });
        });
        makeHttpRequest('get', getAllNotGroupedTrainersUrl).then((res) => {
          this.setState({
            trainers: res.data,
          });
        });
      })
      .catch((error) => {
        // do nothing here
        console.log(error);
      });
  };

  onClickAddTraineeButton = () => {};

  render() {
    return (
      <main>
        <GroupSection groupList={this.state.groupList} onClickButton={this.onClickAssignButton} />
        <TrainerSection
          trainers={this.state.trainers}
          inputVisible={this.state.addMemberInputVisible}
          onKeyPress={this.onAddMemberKeyPress}
          changeInputVisible={this.changeAddMemberInputVisible}
        />
        <TraineeSection
          trainees={this.state.trainees}
          onClickAddButton={this.onClickAddTraineeButton}
        />
      </main>
    );
  }
}

export default Home;
