import React from "react";
import styled from "styled-components";
import Product from "./Product";
function Home() {
  return (
    <Container>
      <Banner></Banner>
      <Content>
        <Product />
        <Product />
      </Content>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;
const Content = styled.div`
  padding: 0 10px 0 10px;
  margin-top: -350px;
  display: flex;
  z-index: 100;
`;
const Banner = styled.div`
  background-image: url("https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg");
  min-height: 600px;
  background-position: center;
  z-index: 100;
  background-size: cover;
`;
