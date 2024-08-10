import React from 'react'
import { Button, Checkbox, Form, Input, InputNumber, Spin } from 'antd';
import { useAddDataMutation, useGetDataByIdQuery, useUpdateDataMutation } from '../redux/api/baseApi';
import { toast } from 'sonner';
import { useNavigate, useParams } from 'react-router-dom';
const UpdateData = () => {
    const [updateData] = useUpdateDataMutation();
    const navigate = useNavigate();
    const { id } = useParams();
    const [addData] = useAddDataMutation();
    const { isLoading, data: existingData } = useGetDataByIdQuery(id);
    if (isLoading) {
        return <Spin />;
    }
    console.log(existingData);
    const onFinish = async (values) => {
        console.log({ id, ...values });
        await updateData({ id, ...values });
        navigate('/dashboard');
        toast.success('Data updated successfully');
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
                                >
                                    <div className='me-[165px] lg:mr-[0px] w-[235px] lg:w-[400px]'>
                                        <Input defaultValue={existingData?.title} className='p-[15px]' placeholder='Title here' />
                                    </div>

                                </Form.Item>
                                <Form.Item
                                    label="Sector"
                                    name="sector"
                                >
                                    <div className='me-[165px] lg:mr-[0px] w-[235px] lg:w-[400px]'>
                                        <Input className='p-[15px]' defaultValue={existingData?.sector} placeholder='Title here' />
                                    </div>

                                </Form.Item>

                                <Form.Item
                                    label="Topic"
                                    name="topic"
                                >
                                    <div className='me-[165px] lg:mr-[0px] w-[235px] lg:w-[400px]'>
                                        <Input className='p-[15px]' defaultValue={existingData?.topic} placeholder='Title here' />
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    label="Insight"
                                    name="insight"
                                >
                                    <div className='me-[165px] lg:mr-[0px] w-[235px] lg:w-[400px]'>
                                        <Input className='p-[15px]' defaultValue={existingData?.insight} placeholder='Title here' />
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    label="Region"
                                    name="region"
                                >
                                    <div className='me-[165px] lg:mr-[0px] w-[235px] lg:w-[400px]'>
                                        <Input className='p-[15px]' defaultValue={existingData?.region} placeholder='Title here' />
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    label="Country"
                                    name="country"
                                >
                                    <div className='me-[165px] lg:mr-[0px] w-[235px] lg:w-[400px]'>
                                        <Input className='p-[15px]' defaultValue={existingData?.country} placeholder='Title here' />
                                    </div>
                                </Form.Item>


                                <Form.Item
                                    label="Source"
                                    name="source"
                                >
                                    <div className='me-[165px] lg:mr-[0px] w-[235px] lg:w-[400px]'>
                                        <Input className='p-[15px]' defaultValue={existingData?.source} placeholder='Title here' />
                                    </div>
                                </Form.Item>



                                <Form.Item
                                    label="Pestle"
                                    name="pestle"
                                >
                                    <div className='me-[165px] lg:mr-[0px] w-[235px] lg:w-[400px]'>
                                        <Input className='p-[15px]' defaultValue={existingData?.pestle} placeholder='Title here' />
                                    </div>
                                </Form.Item>



                                <Form.Item
                                    label="Intensity"
                                    name="intensity"
                                >
                                    <div className='me-[165px] lg:mr-[0px] w-[235px] lg:w-[400px]'>
                                        <Input min={0} max={1e9 + 1} className='p-[15px]' defaultValue={existingData?.intensity} placeholder='Title here' />
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    label="Impact"
                                    name="impact"
                                >
                                    <div className='me-[165px] lg:mr-[0px] w-[235px] lg:w-[400px]'>
                                        <Input min={0} max={1e9 + 1} className='p-[15px]' defaultValue={existingData?.impact} placeholder='Title here' />
                                    </div>

                                </Form.Item>
                                <Form.Item
                                    label="Relevance"
                                    name="relevance"
                                >
                                    <div className='me-[165px] lg:mr-[0px] w-[235px] lg:w-[400px]'>
                                        <Input min={0} max={1e9 + 1} className='p-[15px]' defaultValue={existingData?.relevance} placeholder='Title here' />
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    label="Likelihood"
                                    name="likelihood"
                                >
                                    <div className='me-[165px] lg:mr-[0px] w-[235px] lg:w-[400px]'>
                                        <Input min={0} max={1e9 + 1} className='p-[15px]' defaultValue={existingData?.likelihood} placeholder='Title here' />
                                    </div>
                                </Form.Item>

                                <Form.Item
                                    label="Url"
                                    name="url"
                                >
                                    <div className='me-[165px] lg:mr-[0px] w-[235px] lg:w-[400px]'>
                                        <Input className='p-[15px]' defaultValue={existingData?.url} placeholder='Title here' />
                                    </div>
                                </Form.Item>

                                <Form.Item
                                    label="Added"
                                    name="added"
                                >
                                    <div className='me-[165px] lg:mr-[0px] w-[235px] lg:w-[400px]'>
                                        <Input className='p-[15px]' defaultValue={existingData?.added} placeholder='Title here' />
                                    </div>
                                </Form.Item>

                                <Form.Item
                                    label="Published"
                                    name="published"
                                >
                                    <div className='me-[165px] lg:mr-[0px] w-[235px] lg:w-[400px]'>
                                        <Input className='p-[15px]' defaultValue={existingData?.published} placeholder='Title here' />
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

export default UpdateData