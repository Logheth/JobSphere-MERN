import React from "react";
import {Row , Col , Input , Form ,Button, message} from 'antd'
import {useDispatch} from 'react-redux'
import { registerUser } from "../redux/actions/userActions";
import { Link } from "react-router-dom";

function Register() {
    const dispatch=useDispatch()
    function register(values){
        if (values.password!==values.confirmpassword){
                message.error("password does not match")
        }else{
            console.log(values);
            dispatch(registerUser(values))
        }
    }

  return (
    <div className="register">
      <Row justify="center" className="flex align-items-center">
        <Col lg={12} sm={24} className="bs p-5">
          <h3>Register</h3>
          <hr />
          <Form layout="vertical" onFinish={register}>
            <Form.Item label="username" name="username" rules={[{required:true}]}>
              <Input />
            </Form.Item>

            <Form.Item label="password" name="password" rules={[{required:true}]}>
              <Input />
            </Form.Item>

            <Form.Item label="confirm password" name="confirmpassword" rules={[{required:true}]}>
              <Input />
            </Form.Item>

            <Button htmlType="submit">Register</Button> <br/>

            <Link to='/login' className="mt-3"> Already registered? click here to Login </Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Register;
