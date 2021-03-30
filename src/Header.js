import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Container>
      <Logo>
        <Link to="/">
          <img src={"https://pngimg.com/uploads/amazon/amazon_PNG6.png"} />
        </Link>
      </Logo>
      <LocationOnIcon />
      <HeaderOptionadress>
        <Adress>
          <OptionLineOne>Hello</OptionLineOne>
          <OptionLineTwo>Add your Dress</OptionLineTwo>
        </Adress>
      </HeaderOptionadress>
      <Search>
        <SearchInput type="text" />
        <SearchIconContainer>
          <SearchIcon />
        </SearchIconContainer>
      </Search>

      <NavItems>
        <HeaderOptions>
          <OptionLineOne>Hello</OptionLineOne>
          <OptionLineTwo>Shani</OptionLineTwo>
        </HeaderOptions>
      </NavItems>
      <NavItems>
        <HeaderOptions>
          <OptionLineOne>Returns</OptionLineOne>
          <OptionLineTwo>& Orders</OptionLineTwo>
        </HeaderOptions>
      </NavItems>
      <HeaderOptionCart>
        <Link to="/cart">
          <ShoppingBasketIcon />

          <CartCount>3</CartCount>
        </Link>
      </HeaderOptionCart>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background-color: #0f1111;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const Logo = styled.div`
  margin: 5px;
  img {
    width: 100px;
    margin-left: 11px;
  }
`;

const Adress = styled.div`
  align-item: center;
  padding-left: 9px;
`;
const OptionLineOne = styled.div``;
const OptionLineTwo = styled.div`
  font-weight: 700;
`;

const Search = styled.div`
  display: flex;
  height: 40px;
  margin-left: 5px;

  border-radius: 4px;
  flex-grow: 1;
  overflow: hidden;
  background-color: white;
  :focus-within {
    box-shadow: 0 0 0 3px #f90;
  }
`;
const SearchInput = styled.input`
  display: flex;
  border: 0;
  flex-grow: 1;
  :focus {
    outline: none;
  }
`;
const SearchIconContainer = styled.div`
  background-color: #febd69;
  widhth: 45px;
  color: black;
  justify-content: center;
  display: flex;

  align-items: center;
`;
const NavItems = styled.div`
  display: flex;
`;
const HeaderOptions = styled.div`
  padding: 9px 9px 10px 10px;
`;
const HeaderOptionCart = styled.div`
  display: flex;
  a {
    display: flex;
    align-items: center;
    padding-right: 10px;
    padding-left: 9px;
    justify: space-around;
    color: white;
    text-decoration: none;
  }
`;
const CartCount = styled.div`
  padding-left: 4px;
`;

const HeaderOptionadress = styled.div`
  display: flex;
  margin: 0 5px 0 5px;
`;
// const Adress = styled.div``;
