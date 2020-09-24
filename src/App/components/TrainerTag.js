import React from 'react';
import '../App.scss';
import { Button, message, Modal, Popover } from 'antd';
import { deleteTrainerUrl, makeHttpRequest } from '../utils/http';

class TrainerTag extends React.Component {
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
    makeHttpRequest('delete', deleteTrainerUrl(this.props.trainer.id)).then((response) => {
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
    const { id, name } = this.props.trainer;

    const popOverContent = (
      <div className="pop-over-div">
        <span className="tag-props-span">id: {id}</span>
        <span className="tag-props-span">name: {name}</span>
      </div>
    );

    return (
      <Popover content={popOverContent}>
        <button className="personTagButton" type="button">
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

export default TrainerTag;
