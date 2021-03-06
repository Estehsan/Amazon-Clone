import React from "react";
import styled from "styled-components";

function Product() {
  return (
    <Container>
      <Title>Ipad Pro is availbe</Title>
      <Price>$123</Price>
      <Rating>⭐ ⭐ ⭐ ⭐</Rating>
      <Selection>
        <Image src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156"></Image>
        <AddtoCart>Add to Cart</AddtoCart>
      </Selection>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  background-color: white;
  z-index: 100;
  flex: 1;
  height: 300px;
  padding: 20px;
  margin: 5px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.span``;
const Price = styled.span`
  font-weight: 400;
  margin-top: 3px;
`;
const Rating = styled.div``;
const Image = styled.img`
  max-height: 200px;
  object-fit: contain;
`;
const AddtoCart = styled.button`
  width: 100px;
  height: 40x;
  background-color: #f0c14b;
  border: 2px solid #a88734;
  border-radius: 2px;
  justify-content: center;
`;
const Selection = styled.div`
  display: grid;
  place-items: center;
`;
