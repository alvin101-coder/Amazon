import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null); 
    const [loading, setLoading] = useState(true); 

};