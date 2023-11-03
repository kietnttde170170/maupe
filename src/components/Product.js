import React, { useState } from 'react'
import { Badge, Button, Card } from 'react-bootstrap'
import { deleteProductById } from '../apis';
import { handleDelete } from '../pages/Cart';

function Product({ product, handleDelete }) {
    console.log(product);

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <div style={{ display: "flex", gap: 4, marginBottom: 4, alignItems: "center" }}>

                    {product.catalogs.map((cata) => (
                        <Badge bg="primary">{cata}</Badge>
                    ))}
                </div>
                <Card.Body>

                    <Card.Title>{product.name}</Card.Title>
                    <div style={{
                        alignItems: "center",
                        display: "flex",
                        gap: 4
                    }}>
                        <i class="fa-solid fa-money-bill-wave"></i>
                        <p>{product.price}</p>
                    </div>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Button variant="danger" onClick={() => handleDelete(product.id)}>
                        Delete
                    </Button>
                </Card.Body>

            </Card>
        </div>
    )
}

export default Product
