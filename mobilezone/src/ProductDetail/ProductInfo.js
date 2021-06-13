import React, { useEffect, useState } from 'react'
import { Button, Descriptions } from 'antd';

function ProductInfo(props) {

    const [Product, setProduct] = useState({})
    console.log(Product)

    useEffect(() => {
     
        setProduct(props.detail)

    }, [props.detail])

    


    return (
        <div>
            <Descriptions title="Product Info">
                <Descriptions.Item label="Price"> {Product.price}</Descriptions.Item>
                <Descriptions.Item label="Make">{Product.title}</Descriptions.Item>
                <Descriptions.Item label="Condition">{Product.condition?.mcondition}</Descriptions.Item>
                <Descriptions.Item label="Description">{Product.city}</Descriptions.Item>
                
            </Descriptions>
            <br/>
            <Descriptions title="Seller Info">
                <Descriptions.Item label="Name"> {Product.name}</Descriptions.Item>
                <Descriptions.Item label="City">{Product.description}</Descriptions.Item>
                <Descriptions.Item label="AnotherNo">{Product.optionaln}</Descriptions.Item>
                
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1 style={{color:'#000'}} size="large" shape="round" type="danger"
                >
                    {`SellerNumber:${Product.number}`}
                    </h1>
            </div>
        </div>
    )
}

export default ProductInfo
