import React, { useEffect, useState } from 'react'
import { Row, Col } from 'antd';
import Navbar from '../components/Navbar'
import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'
import axios from 'axios'

function ProductDerailPage(props) {
    const [Product, setProduct] = useState([])
    const productId = props.match.params.productId
    useEffect(() => {
        axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0])
            })

    }, [])
    return (
        <>
        <Navbar/>
        <div className="postPage" style={{ width: '100%', padding: '3rem 4rem' }}>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h1 style={{color:'#000'}}>{Product.make}</h1>
        </div>

        <br />

        <Row gutter={[16, 16]} >
            <Col lg={12} xs={24}>
                <ProductImage detail={Product} />
            </Col>
            <Col lg={12} xs={24}>
                <ProductInfo
                    detail={Product} />
            </Col>
        </Row>
    </div>
    </>
    )
}

export default ProductDerailPage;
