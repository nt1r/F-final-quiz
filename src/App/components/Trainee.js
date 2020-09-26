import React from 'react';
import '../App.scss';
import { Form, Input, Button } from 'antd';
import '../../style/_trainee.scss';
import { addNewTraineeUrl, makeHttpRequest } from '../utils/http';

// TODO feedback：命名不太合理，组件功能应该是创建Trainee
class Trainee extends React.Component {
  render() {
    // TODO 方法应当定义在render之外
    const onSubmit = (values) => {
      makeHttpRequest('post', addNewTraineeUrl, values).then((response) => {
        console.log(response.data);
      });
      this.props.history.push('/');
    };

    const onCancel = () => {
      this.props.history.push('/');
    };

    return (
      // TODO feedback：使用section标签更合理
      <main className="trainee-main">
        <h1>添加学员</h1>
        <Form layout="vertical" name="nest-messages" onFinish={onSubmit}>
          <Form.Item
            name="name"
            label="姓名"
            rules={[
              {
                required: true,
                message: '此项为必填',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="邮箱"
            rules={[
              {
                required: true,
                message: '此项为必填',
              },
              {
                type: 'email',
                message: '邮箱格式错误',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="office"
            label="办公室"
            rules={[
              {
                required: true,
                message: '此项为必填',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="zoomId"
            label="Zoom ID"
            rules={[
              {
                required: true,
                message: '此项为必填',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="github"
            label="Github账号"
            rules={[
              {
                required: true,
                message: '此项为必填',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button className="submit-button" type="primary" htmlType="submit">
              提交
            </Button>
            <Button htmlType="button" onClick={onCancel}>
              取消
            </Button>
          </Form.Item>
        </Form>
      </main>
    );
  }
}

export default Trainee;
