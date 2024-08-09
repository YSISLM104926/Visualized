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
                    <h1 className='text-start ms-8 mt-12 text-3xl'>Update Data</h1>
                    <div className='border p-10 m-7 rounded-lg bg-gray-200'>
                        <Form
                            name="basic"
                            layout="vertical"
                            initialValues={existingData}
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            style={{
                                maxWidth: 1600,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >

                            <div className='grid grid-cols-4 gap-x-20'>
                                <Form.Item
                                    label="Title"
                                    name="title">
                                    <Input style={{ width: '400px', padding: '15px' }} defaultValue={existingData?.title} placeholder='Title here' />
                                </Form.Item>
                                <Form.Item
                                    label="Sector"
                                    name="sector"
                                >
                                    <Input style={{ width: '400px', padding: '15px' }} defaultValue={existingData?.sector} placeholder='Sector here' />
                                </Form.Item>

                                <Form.Item
                                    label="Topic"
                                    name="topic"
                                >
                                    <Input style={{ width: '400px', padding: '15px' }} initialValues defaultValue={existingData?.topic} placeholder='Topic here' />
                                </Form.Item>
                                <Form.Item
                                    label="Insight"
                                    name="insight"
                                >
                                    <Input style={{ width: '400px', padding: '15px' }} defaultValue={existingData?.insight} placeholder='Insight here' />
                                </Form.Item>
                                <Form.Item
                                    label="Region"
                                    name="region"
                                >
                                    <Input style={{ width: '400px', padding: '15px' }} defaultValue={existingData?.region} placeholder='Region here' />
                                </Form.Item>
                                <Form.Item
                                    label="Country"
                                    name="country"
                                >
                                    <Input style={{ width: '400px', padding: '15px' }} defaultValue={existingData?.country} placeholder='Country here' />
                                </Form.Item>


                                <Form.Item
                                    label="Source"
                                    name="source"
                                >
                                    <Input style={{ width: '400px', padding: '15px' }} defaultValue={existingData?.source} placeholder='Source here' />
                                </Form.Item>



                                <Form.Item
                                    label="Pestle"
                                    name="pestle"
                                >
                                    <Input style={{ width: '400px', padding: '15px' }} defaultValue={existingData?.pestle} placeholder='Pestle here' />
                                </Form.Item>



                                <Form.Item
                                    label="Intensity"
                                    name="intensity"
                                >
                                    <InputNumber min={0} max={1e9 + 1} defaultValue={existingData?.intensity} style={{ width: '400px', padding: '15px' }} placeholder='Intensity here' />
                                </Form.Item>
                                <Form.Item
                                    label="Impact"
                                    name="impact"
                                >
                                    <InputNumber min={0} max={1e9 + 1} defaultValue={existingData?.impact} style={{ width: '400px', padding: '15px' }} placeholder='Impact here' />
                                </Form.Item>
                                <Form.Item
                                    label="Relevance"
                                    name="relevance"
                                >
                                    <InputNumber min={0} max={1e9 + 1} defaultValue={existingData?.relevance} style={{ width: '400px', padding: '15px' }} placeholder='Relevance here' />
                                </Form.Item>
                                <Form.Item
                                    label="Likelihood"
                                    name="likelihood"
                                >
                                    <InputNumber min={0} max={1e9 + 1} defaultValue={existingData?.likelihood} style={{ width: '400px', padding: '15px' }} placeholder='Likelihood here' />
                                </Form.Item>

                                <Form.Item
                                    label="Url"
                                    name="url"
                                >
                                    <Input style={{ width: '400px', padding: '15px' }} defaultValue={existingData?.url} placeholder='Url here' />
                                </Form.Item>

                                <Form.Item
                                    label="Added"
                                    name="added"
                                >
                                    <Input style={{ width: '400px', padding: '15px' }} defaultValue={existingData?.added} placeholder='Added here' />
                                </Form.Item>

                                <Form.Item
                                    label="Published"
                                    name="published"
                                >
                                    <Input style={{ width: '400px', padding: '15px' }} defaultValue={existingData?.published} placeholder='Published here' />
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