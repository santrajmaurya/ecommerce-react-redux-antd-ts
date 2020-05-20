import React from "react";

import "./CartItem.scss";

interface IItem {
  id?: number;
  imageUrl: string;
  name: string;
  quantity: number;
  price: number;
  key? : number
}

interface CartItemProps {
  item: IItem;
  key: number;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{item.name}</span>
        <span className="price">
          {item.quantity} x ${item.price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
