import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Typography,IconBotton} from  '@material-ui/core';
import { AddShoppingCart, ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

const Product = ({product,onAddToCart}) => {
    const  classes= useStyles();
  return (
    <Card className='classes.root'>
        <CardMedia className='classes.media' image={ product.image} title = {Product.name} />
        <CardContent>
            <div className={classes.CardContent}>
                <Typography varient="h5" gutterBottom>
                    {Product.name}
                </Typography>

                <Typography varient="h5" gutterBottom>
                    {Product.price.formatted_with_symbol}
                </Typography>

            </div>
            <Typography  dangerouslySetInnerHTML={{__html:product.description}}varient ="body2" color= "textSecondary"/>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
            <IconBotton aria-label ="add to cart" onClick={()=>onAddToCart(product.id,1)}>
                <AddShoppingCart/>
            </IconBotton>

        </CardActions>
    </Card>
  )
}

export default Product;
