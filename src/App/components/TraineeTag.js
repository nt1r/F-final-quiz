import React from 'react';
import '../App.scss';
import { Popover, Modal, Button, message } from 'antd';
import { deleteTraineeUrl, makeHttpRequest } from '../utils/http';

class TraineeTag extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      confirmLoading: false,
    };
  }

  onClickTag = () => {
    this.setState({
      modalVisible: true,
    });
  };

  handleDelete = () => {
    this.setState({
      confirmLoading: true,
    });
    makeHttpRequest('delete', deleteTraineeUrl(this.props.trainee.id)).then((response) => {
      if (response.status === 204) {
        message.success('删除成功');
        this.setState({
          confirmLoading: false,
          modalVisible: false,
        });
        // eslint-disable-next-line no-restricted-globals
        history.go(0);
      }
    });
  };

  handleCancel = () => {
    this.setState({
      modalVisible: false,
    });
  };

  render() {
    const { id, name, office, email, github, zoomId } = this.props.trainee;

    const popOverContent = (
      <div className="pop-over-div">
        <span className="tag-props-span">id: {id}</span>
        <span className="tag-props-span">name: {name}</span>
        <span className="tag-props-span">email: {email}</span>
        <span className="tag-props-span">office: {office}</span>
        <span className="tag-props-span">github: {github}</span>
        <span className="tag-props-span">zoomId: {zoomId}</span>
      </div>
    );

    return (
      <Popover content={popOverContent}>
        <button className="personTagButton" type="button" onClick={this.onClickTag}>
          {id}. {name}
        </button>
        <Modal
          title="删除学员"
          visible={this.state.modalVisible}
          onOk={this.handleDelete}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
          footer={[
            <Button key="cancel" onClick={this.handleCancel}>
              取消
            </Button>,
            <Button
              key="delete"
              type="primary"
              loading={this.state.confirmLoading}
              onClick={this.handleDelete}
            >
              删除
            </Button>,
          ]}
        >
          <p>
            确定要删除学员{id}: {name} ?
          </p>
        </Modal>
      </Popover>
    );
  }
}

export default TraineeTag;
