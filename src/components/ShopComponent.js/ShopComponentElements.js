import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg? '#f9f9f9' : 'black')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const ProductPlacement = styled.div`
    background: var(--alice-blue);
    padding: 3.2rem 0;
    
`;

export const ProductText = styled.div`
    text-align: center;
    width: 70%;
    margin: 0.9rem auto;
`;

export const Product = styled.div`
    margin:2 rem;
    position: relative;
`;

export const ProductContent = styled.div`
    background: var(--gray);
    padding: 3rem 0.5rem 2rem 0.5rem;
    cursor: pointer
`;

export const ProductImage = styled.div`
    background: var (--white-light);
    box-shgadow: 0 0 20pc 10pc var(--white-light);
    width: 200px;
    height: 200px;
    margin: 0 auto;
    border-radius: 50%
    transition: background 0.5s ease;
`;

export const ProductButton = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1.4rem;
    opacity: 1;
    transition opacity 0.6s ease;
`;

export const CartBuyButton = styled.div`
    background: transparent;
    border: 1px solid black;
    padding: 0.8 rem 0;
    width: 125px;
    font-family: inherit;
    text-transform: uppercase; 
    cursor: pointer;
    border: none;
    transition: all 0.6s ease;
`;

export const CartButton = styled.div`
    background: var(--caribbean-green);
`;

export const BuyButton = styled.div`
    background: white;
`;

export const ProductInfo = styled.div`
    background: white;
    padding: 2rem;
`;

export const ProductInfoTop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProductName = styled.div`
    color: black;
    display: block;
    text-decoration: none;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bold;
`

export const ProductPrice = styled.div`
    padding-top: 0.6rem;
    padding-right: 0.6rem;
    display: inline-block;
`

