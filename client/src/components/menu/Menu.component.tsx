import React from "react";
import styled from "styled-components";

const menus = ["Account", "Analytics"];

const MenuWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const MenuItem = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
  padding: 8px;
  font-size: 2rem;
  padding: 1.5rem 2rem;
`;

export const Menu = () => {
  return (
    <MenuWrapper>
      {menus.map((menuItem) => (
        <MenuItem key={menuItem}>{menuItem}</MenuItem>
      ))}
    </MenuWrapper>
  );
};
