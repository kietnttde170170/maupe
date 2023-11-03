import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { addProduct } from "../apis";


function ProductForm() {
    const [form, setForm] = useState({
        name: "",
        price: "",
        description: "",
        catalogs: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const req = {
            ...form,
            catalogs: form.catalogs.split(",")
        }
        console.log(req);
        const res = await addProduct(req);
        console.log(res);
        setIsLoading(false);
    };

    const [isLoading, setIsLoading] = useState(false);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignItems: "center",
                marginTop: 100,
                gap: 20,
            }}
        >
            <Card style={{ width: "40rem" }}>
                <Card.Header as="h5">
                    <Form.Text>Create a new product</Form.Text>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter price"
                                onChange={(e) => setForm({ ...form, price: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter description"
                                onChange={(e) => setForm({ ...form, description: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Catalogs</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter catalogs"
                                onChange={(e) => setForm({ ...form, catalogs: e.target.value })}
                            />
                            <Form.Text className="text-muted">Ex: Java, SQL Server</Form.Text>
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                label="Public this post"


                            />
                        </Form.Group> */}
                        {/* <Button
                            type="submit"
                            variant="primary"

                        // onClick={!isLoading ? handleSubmit : null}
                        >

                        </Button> */}
                        <Button
                            variant="primary"
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Loading…' : 'Add'}
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductForm;
