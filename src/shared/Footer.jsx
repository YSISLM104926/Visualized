import { Layout } from 'antd';
import React from 'react'
const { Footer } = Layout;
const Footers = () => {
    return (
        <>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </>
    )
}

export default Footers