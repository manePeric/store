import React, { useState } from 'react'
import productService from '../services/ProductService';
function AppProducts(){
    const [products, setProducts] = useState(productService.getAll())
}

export default AppProducts;