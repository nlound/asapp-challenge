import React from "react";
import { ListItem } from "../../interfaces";
import Item from "../Item/Item";
import "./ItemList.scss";

const ItemList = (props: { list: ListItem[] }) => {
  return (
    <>
      {props.list.length !== 0 && (
        <ul className="city_list">
          <Item items={props.list}></Item>
        </ul>
      )}
    </>
  );
};

export default ItemList;
