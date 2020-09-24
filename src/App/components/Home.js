import React from 'react';
import '../App.scss';
import GroupSection from './GroupSection';
import MemberSection from './MemberSection';
import {
  addNewTraineeUrl,
  assignGroupUrl,
  getAllTraineesUrl,
  getCachedAssignGroupUrl,
  makeHttpRequest,
} from '../utils/http';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trainees: [],
      teamList: [],
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

    makeHttpRequest('get', getCachedAssignGroupUrl).then((response) => {
      console.log(response.data);
      this.setState({
        teamList: response.data,
      });
    });
  }

  onAddMemberKeyPress = (event) => {
    if (event.key === 'Enter') {
      makeHttpRequest('post', addNewTraineeUrl, {
        name: event.target.value,
      })
        .then((response) => {
          this.setState({
            trainees: response.data,
            addMemberInputVisible: false,
          });
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
          teamList: response.data,
        });
      })
      .catch((error) => {
        // do nothing here
        console.log(error);
      });
  };

  render() {
    return (
      <main>
        <GroupSection teamList={this.state.teamList} onClickButton={this.onClickAssignButton} />
        <MemberSection
          trainees={this.state.trainees}
          inputVisible={this.state.addMemberInputVisible}
          onKeyPress={this.onAddMemberKeyPress}
          changeInputVisible={this.changeAddMemberInputVisible}
        />
      </main>
    );
  }
}

export default Home;
