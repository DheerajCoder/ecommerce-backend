import React, { useContext } from "react";
import { Context } from "../../../utils/context";
import { MdClose } from "react-icons/md";

import "./CartItem.scss";

const CartItem = () => {
    const { cartItems, handleRemoveFromCart, handleCartProductQuantity } = useContext(Context);

    return (
        <div className="cart-products">
            {cartItems?.map((item) => (
                <div className="search-result-item" key={item.id}>
                    <div className="image-container">
                        {item.attributes && item.attributes.image && item.attributes.image.data && item.attributes.image.data.length > 0 && (
                            <img
                                src={process.env.REACT_APP_STRIPE_APP_DEV_URL + item.attributes.image.data[0].attributes.url}
                                alt={item.attributes.title}
                            />
                        )}
                    </div>
                    <div className="prod-details">
                        <span className="name">{item.attributes.title}</span>
                        <MdClose className="close-btn" onClick={() => handleRemoveFromCart(item)} />
                        <div className="quantity-buttons">
                            <span onClick={() => handleCartProductQuantity("dec", item)}>-</span>
                            <span>{item.attributes.quantity}</span>
                            <span onClick={() => handleCartProductQuantity("inc", item)}>+</span>
                        </div>
                        <div className="text">
                            <span>{item.attributes.quantity} x </span>
                            <span className="highlight">&#8377;{item.attributes.price * item.attributes.quantity}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartItem;
