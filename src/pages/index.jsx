import * as React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import CardWithImage from '../components/CardWithImage'
import Layout from "../layout/layout";

export const Head = () => <title>Mercadinho</title>;

export default function IndexPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then(response => {
                console.log(response.data)
                setProducts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });
    }, []);

    return (
        <Layout>
            <div className="grid justify-items-center gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 p-20">
                {products.map(product => (
                    <CardWithImage key={product.id} product={product} />
                ))}
            </div>
        </Layout>

    );
};

