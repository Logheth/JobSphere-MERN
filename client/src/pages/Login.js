import React from "react"
import {Row , Col, Input, Form, Button} from 'antd'
import {loginUser} from '../redux/actions/userActions'
import {useDispatch} from 'react-redux'
import { Link } from "react-router-dom"


function Login(){
    const dispatch = useDispatch()
    function login(values){
        dispatch(loginUser(values))
    }
    return(
        <div className="login">
        
            <Row justify={"center"}>
                <Col lg={12} sm={24} className="bs p-5">
                
            <h3>login</h3>
            <hr/>
                    <Form layout="vertical" onFinish={login}>

                        <Form.Item label="username" name="username">
                            <Input/>
                        </Form.Item>

                        <Form.Item label="password" name="password">
                            <Input/>
                        </Form.Item>

                        <Button htmlType="submit">Login</Button><br/>
                        <Link to='/register' className="mt-3">Not registered ? , click here to register </Link>
                    </Form>

                </Col>
            </Row>

                
        </div>
    )
}

export default Login
