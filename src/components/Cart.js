import React from 'react';
import { data } from '../data/data';

export function Cart(props) {
    let totalPrice = 0;
    return (
        <>
            {props.films.length !== 0 &&
                <div className="cartContainer">
                    <h2 className="cartTitle">Cart</h2>
                    <div className="cartItems">
                        {props.films.map(film => {
                            totalPrice += film.price;
                            return (
                                <div className="cartItem">
                                    <h3 className="cartFilmName">{film.name}</h3>
                                    <h4 className="cartFilmPrice">{film.price}</h4>
                                </div>
                            )
                        })}
                    </div>
                    <h4 className="cartTotal">Total: {totalPrice}</h4>
                </div>
            }
        </>
    );

}