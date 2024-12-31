'use client'
import { useEffect, useState } from "react";

export default function Page() {
    const[products,setProducts]=useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                let data = await fetch('https://dummyjson.com/product');
                data = await data.json();
                console.log(data);
                setProducts(data.products)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Call the asynchronous function
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            {
                products.map((product)=>(
                 
                   
                     <h1 key={product.id}>
                        {product.title},
                        price:{product.price}
                        </h1>
                        
                   
                   
                ))
            }
        </div>
    );
}
