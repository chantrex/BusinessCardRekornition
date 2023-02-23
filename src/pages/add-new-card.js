import { Col, Row, message, Upload, Button, Checkbox, Form, Input } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function AddNewCard() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Row justify="space-around">
        <Col span={8}>
          <div>
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </div>
        </Col>
        <Col span={8}>
          <div>
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Name"
                name="Name"
                rules={[
                  {
                    required: true,
                    message: "Please input  name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="TelePhone No"
                name="telephoneNO"
                rules={[
                  {
                    required: true,
                    message: "Please input telephone no",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="EMail address"
                name="emailAddress"
                rules={[
                  {
                    required: true,
                    message: "Please input Email address",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item label="Company Website" name="compwebsite">
                <Input />
              </Form.Item>

              <Form.Item label="Company Adress" name="compaddress">
                <Input />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default AddNewCard;
