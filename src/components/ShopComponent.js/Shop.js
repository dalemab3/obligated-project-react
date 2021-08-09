import React from 'react';
import { InfoContainer, InfoWrapper, ProductPlacement, ProductText, Product, ProductContent, ProductImage, ProductButton, CartBuyButton, CartButton, BuyButton, ProductInfo, ProductInfoTop, ProductName, ProductPrice } from './ShopComponentElements';


const ProductSection = ({ id, title, img, description, content, price, count }) => {
    return (
        <>
            <InfoContainer id={id}>
                <InfoWrapper>
                    <ProductPlacement>
                        <ProductText>{title}</ProductText>
                        <Product>
                            <ProductContent>{content}</ProductContent>
                                <ProductImage src={img}>
                                </ProductImage>
                        </Product>
                    </ProductPlacement>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
}

export default ProductSection;
