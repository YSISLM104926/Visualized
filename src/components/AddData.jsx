import React from 'react'
import { Button, Checkbox, Form, Input, InputNumber, Spin } from 'antd';
import { useAddDataMutation } from '../redux/api/baseApi';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
const AddData = () => {
    const navigate = useNavigate();
    const [addData, { isLoading }] = useAddDataMutation();
    if (isLoading) {
        return <p></p>;
    }
    const onFinish = async (values) => {
        await addData(values);
        navigate('/dashboard');
        toast.success('Data added successfully');
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <>
                <div className=''>
                    <h1 className='text-start ms-8 mt-12 text-3xl'>Add Data</h1>
                    <div className='border p-10 m-7 rounded-lg bg-gray-200'>
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
                                maxWidth: 1600,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >

                            <div className='grid md:grid-cols-2 lg:grid-cols-4 lg:gap-x-20'>
                                <Form.Item
                                    label="Title"
                                    name="title"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input title!',
                                        },
                                    ]}
                                >
                                    <div className='me-[165px] lg:mr-[0px] w-[235px] lg:w-[400px]'>
                                        <Input placeholder='Title here' className='p-[15px]' />
                                    </div>

                                </Form.Item>
                                <Form.Item
                                    label="Sector"
                                    name="sector"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input sector',
                                        },
                                    ]}
                                >
                                    <div className='me-[165px] lg:mr-[0px] w-[235px] lg:w-[400px]'>
                                        <Input placeholder='Sector here' className='p-[15px]' />
                                    </div>

                                </Form.Item>

                                <Form.Item
                                    label="Topic"
                                    name="topic"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input topic',
                                        },
                                    ]}
                                >
                                    <div className='me-[165px] lg:mr-[0px] w-[235px] lg:w-[400px]'>
                                        <Input placeholder='Topic here' className='p-[15px]' />
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    label="Insight"
                                    name="insight"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input insight',
                                        },
                                    ]}
                                >
                                    <div className='me-[165px] lg:mr-[0px] w-[235px] lg:w-[400px]'>
                                        <Input placeholder='Insight here' className='p-[15px]' />
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    label="Region"
                                    name="region"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input region',
                                        },
                                    ]}
                                >
                                    <div className='me-[165px] lg:mr-[0px] w-[235px] lg:w-[400px]'>
                                        <Input placeholder='Region here' className='p-[15px]' />
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    label="Country"
                                    name="country"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input country',
                                        },
                                    ]}
                                >
                                    <div className='me-[165px] lg:mr-[0px] w-[235px] lg:w-[400px]'>
                                        <Input placeholder='Country here' className='p-[15px]' />
                                    </div>
                                </Form.Item>


                                <Form.Item
                                    label="Source"
                                    name="source"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input source',
                                        },
                                    ]}
                                >
                                    <div className='me-[165px] lg:mr-[0px] w-[235px] lg:w-[400px]'>
                                        <Input placeholder='Source here' className='p-[15px]' />
                                    </div>
                                </Form.Item>



                                <Form.Item
                                    label="Pestle"
                                    name="pestle"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input pestle',
                                        },
                                    ]}
                                >
                                    <div className='me-[165px] lg:mr-[0px] w-[235px] lg:w-[400px]'>
                                        <Input placeholder='Pestle here' className='p-[15px]' />
                                    </div>
                                </Form.Item>



                                <Form.Item
                                    label="Intensity"
                                    name="intensity"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input intensity',
                                        },
                                    ]}
                                >
                                    <div className='me-[165px] lg:mr-[0px] w-[235px] lg:w-[400px]'>
                                        <Input min={0} max={1e9 + 1} placeholder='Intensity here' className='p-[15px]' />
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    label="Impact"
                                    name="impact"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input impact',
                                        },
                                    ]}
                                >
                                    <div className='me-[165px] lg:mr-[0px] w-[235px] lg:w-[400px]'>
                                        <Input min={0} max={1e9 + 1} placeholder='Impact here' className='p-[15px]' />
                                    </div>

                                </Form.Item>
                                <Form.Item
                                    label="Relevance"
                                    name="relevance"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input relevance',
                                        },
                                    ]}
                                >
                                    <div className='me-[165px] lg:mr-[0px] w-[235px] lg:w-[400px]'>
                                        <Input min={0} max={1e9 + 1} placeholder='Relevance here' className='p-[15px]' />
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    label="Likelihood"
                                    name="likelihood"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input likelihood',
                                        },
                                    ]}
                                >
                                    <div className='me-[165px] lg:mr-[0px] w-[235px] lg:w-[400px]'>
                                        <Input min={0} max={1e9 + 1} placeholder='Likelihood here' className='p-[15px]' />
                                    </div>
                                </Form.Item>

                                <Form.Item
                                    label="Url"
                                    name="url"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input url',
                                        },
                                    ]}
                                >
                                    <div className='me-[165px] lg:mr-[0px] w-[235px] lg:w-[400px]'>
                                        <Input placeholder='Url here' className='p-[15px]' />
                                    </div>
                                </Form.Item>

                                <Form.Item
                                    label="Added"
                                    name="added"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input added',
                                        },
                                    ]}
                                >
                                    <div className='me-[165px] lg:mr-[0px] w-[235px] lg:w-[400px]'>
                                        <Input placeholder='Added here' className='p-[15px]' />
                                    </div>
                                </Form.Item>

                                <Form.Item
                                    label="Published"
                                    name="published"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input published',
                                        },
                                    ]}
                                >
                                    <div className='me-[165px] lg:mr-[0px] w-[235px] lg:w-[400px]'>
                                        <Input placeholder='Published here' className='p-[15px]' />
                                    </div>
                                </Form.Item>



                            </div>

                            <Button style={{ width: '100%', padding: '25px', fontSize: '17px' }} type="primary" htmlType="submit">
                                Submit
                            </Button>


                        </Form>
                    </div>
                </div>
            </>

        </div>
    )
}

export default AddData