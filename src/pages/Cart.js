import React, { useEffect, useState } from 'react'
import { Badge, Button, Card } from 'react-bootstrap'
import Product from '../components/Product'
import { getAllProducts, deleteProductById } from '../apis';

function Cart() {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchData = async () => {
        setLoading(true);
        const res = await getAllProducts();
        setProductList(res);
        setLoading(false)
    };
    const handleDelete = async (productId) => {
        setLoading(true);
        const res = await deleteProductById(productId);
        fetchData();
    };
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <div>
                {loading === true ? <h2 style={{ textAlign: 'center', color: 'orange' }}>Loading...</h2> : null}
            </div>
            <div>
                <Button variant='primary' style={{ float: 'right', marginRight: '30px' }}>
                    Add
                </Button>
            </div>
            <div style={{ display: 'flex', gap: 20, padding: 80, flexWrap: 'wrap' }}>

                {loading === false &&
                    productList?.map((product) => (
                        <Product product={product} handleDelete={handleDelete}></Product>
                    ))
                }

            </div>
        </>
    )
}

export default Cart
