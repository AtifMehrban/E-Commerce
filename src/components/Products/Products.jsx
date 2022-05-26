import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';
// const products =[
//     { id:1, namae:'Shoes',description:'Running shoes.',price:'$5',image:'https://startuppakistan.com.pk/top-12-shoe-brands-in-pakistan/'},

//     {id:2, name: 'Macbook',description:'Apple macbook', price:'$15',image:'https://www.paklap.pk/apple-macbook-pro-14-mkgq3-m1-pro-chip-processor--2021-price-reviews-pakistan-lahore-karachi.html'},
// ];
const Products = ({products,onAddToCart}) =>
{
    const classes=useStyles();
    return (
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justify="center" spacing={4}>
        {
            products.map((product)=>(
                <Grid item key = {product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} onAddToCart={onAddToCart}/>
                </Grid>
            ))}
        </Grid>
    </main>
    );
}
export default Products;