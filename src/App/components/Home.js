import React from 'react';
import '../App.scss';
import GroupSection from './GroupSection';
import TraineeSection from './TraineeSection';
import {
  addNewTrainerUrl,
  assignGroupUrl,
  getAllTraineesUrl,
  getAllTrainersUrl,
  getCachedAssignGroupUrl,
  makeHttpRequest,
} from '../utils/http';
import TrainerSection from './TrainerSection';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trainers: [],
      trainees: [],
      groupList: [],
      addMemberInputVisible: false,
    };
  }

  componentDidMount() {
    makeHttpRequest('get', getAllTraineesUrl).then((response) => {
      console.log(response.data);
      this.setState({
        trainees: response.data,
      });
    });

    makeHttpRequest('get', getAllTrainersUrl).then((response) => {
      console.log(response.data);
      this.setState({
        trainers: response.data,
      });
    });

    makeHttpRequest('get', getCachedAssignGroupUrl).then((response) => {
      console.log(response.data);
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
        console.log(response.data);
        this.setState({
          groupList: response.data,
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
        <GroupSection teamList={this.state.groupList} onClickButton={this.onClickAssignButton} />
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
