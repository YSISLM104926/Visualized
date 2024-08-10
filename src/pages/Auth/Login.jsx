import React, { useContext } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import Navbar from '../../shared/Navbar';
import { useAuthLoginMutation } from '../../redux/api/baseApi';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const Login = () => {
    const navigate = useNavigate();
    const { Login } = useContext(AuthContext);
    const onFinish = async (values) => {
        await Login(values);
        navigate('/dashboard');
    };
    return (
        <>
            <Navbar />
            <div className='flex flex-col justify-center items-center h-screen'>
            <p>Email: testadmin12@gmail.com</p>
            <p>Password: testadmin12</p>
                <div className='border p-12 rounded-lg bg-gray-200 w-96 lg:w-1/4'>
                    <h1 className='mb-8 text-2xl'>Login</h1>
                    <Form
                        name="basic"
                        layout="vertical"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{
                            maxWidth: 1200,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Email!',
                                },
                            ]}
                        >

                            <div className='me-[165px] lg:mr-[0px] w-[285px] lg:w-[375px]'>
                                <Input placeholder='Email here' className='p-[15px]' />
                            </div>


                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <div className='me-[165px] lg:mr-[0px] w-[285px] lg:w-[375px]'>
                                <Input.Password placeholder='Password here' className='p-[15px]' />
                            </div>
                        </Form.Item>




                        <Button style={{ width: '100%', padding: '25px', fontSize: '17px' }} type="primary" htmlType="submit">
                            Submit
                        </Button>

                    </Form>
                </div>
            </div>
        </>
    );
}
export default Login;