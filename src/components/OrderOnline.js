import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import greekSalad from "../assets/GreekSalad.jpg"
import bruschetta from "../assets/Bruschetta.webp"
import lemonDessert from "../assets/LemonDessert.jpg"
import capreseSalad from "../assets/Caprese-Salad.webp"
import garlicBread from "../assets/GarlicBread.jpg"
import tiramisu from "../assets/Tiramisu.png"
import ceaserSalad from "../assets/CeaserSalad.jpg"
import chocoLavaCake from "../assets/chocoCake.jpg"
const OrderOnline = () => {
    const [cart, setCart] = useState([]);
    const navigate=useNavigate();

    const menuItems = [
        {
            id: 1,
            name: 'Greek Salad',
            description: 'The famous Greek salad of crispy lettuce, peppers, olives, and feta cheese garnished with garlic and rosemary croutons.',
            price: 12.99,
            image: greekSalad
        },
        {
            id: 2,
            name: 'Bruschetta',
            description: 'Grilled bread smeared with garlic, seasoned with salt, olive oil, and topped with fresh tomatoes.',
            price: 5.99,
            image: bruschetta
        },
        {
            id: 3,
            name: 'Lemon Dessert',
            description: "Grandma's recipe with authentic ingredients for a delightful finish to your meal.",
            price: 4.78,
            image: lemonDessert,
        }
    ];
    const regularItems = [
        {
            id: 4,
            name: "Caprese Salad",
            description: "A refreshing salad made with fresh mozzarella, tomatoes, basil, and a drizzle of balsamic glaze.",
            price: 10.99,
            image:capreseSalad,      
        },
        {
            id: 5,
            name: "Garlic Bread",
            description: "Warm, toasted bread slices spread with garlic butter and parsley, baked to golden perfection.",
            price: 3.99,
            image: garlicBread
        },
        {
            id: 6,
            name: "Tiramisu",
            description: "A classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream, dusted with cocoa.",
            price: 6.49,
            image: tiramisu
        },
        {
            id: 7,
            name: "Caesar Salad",
            description: "Crisp romaine lettuce tossed with creamy Caesar dressing, parmesan cheese, and croutons.",
            price: 9.99,
            image: ceaserSalad
        },
        {
            id: 8,
            name: "Chocolate Lava Cake",
            description: "A rich and decadent chocolate cake with a gooey molten center, served with a scoop of vanilla ice cream.",
            price: 7.25,
            image: chocoLavaCake
        }
        
    ];
    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map(cartItem => 
                    cartItem.id === item.id 
                        ? { ...cartItem, quantity: cartItem.quantity + 1 } 
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };
    const increaseQuantity = (item) => {
        setCart((prevCart) =>
            prevCart.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            )
        );
    };

    const decreaseQuantity = (item) => {
        setCart((prevCart) =>
            prevCart
                .map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                )
                .filter(cartItem => cartItem.quantity > 0) // Remove items with quantity 0
        );
    };
    const handleCheckout = () => {
        navigate('/customer-details', { state: { cart } });
    };
  return (
    <div>
      <main>
                <section className="order-online">
                    <h1>Order Online</h1>
                    <p>Choose from our weekly specials and regular menu items to enjoy Little Lemon at home!</p>

                    <div className="order-online-menu-items">
                        <h2>Weekly Special</h2>
                        {menuItems.map((item) => (
                            <div className="menu-item" key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
                                <span className="price">${item.price.toFixed(2)}</span>
                                <button onClick={() => addToCart(item)} className="order-button">Add to Cart</button>
                            </div>
                        ))}
                    </div>
                    <div className="order-online-menu-items">
                        <h2>Regular Menu</h2>
                        {regularItems.map((item) => (
                            <div className="menu-item" key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
                                <span className="price">${item.price.toFixed(2)}</span>
                                <button onClick={() => addToCart(item)} className="order-button">Add to Cart</button>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="cart">
                    <h2>Your Cart</h2>
                    {cart.length === 0 ? (
                        <p>Your cart is empty. Start adding items to place an order.</p>
                    ) : (
                        <div>
                            <ul>
                                {cart.map((item) => (
                                    <li key={item.id}>
                                        {item.name} - ${item.price.toFixed(2)} 
                                        <div className="button-container">
                                        <button onClick={() => increaseQuantity(item)}>+</button><div className='quantity'>{item.quantity}</div><button onClick={() => decreaseQuantity(item)}>-</button>
                                        </div>
                                    </li>

                                ))}
                            </ul>
                            <h3>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
                        </div>
                    )}
                    {cart.length > 0 && <button onClick={handleCheckout} className="checkout-button">Checkout</button>}
                </section>  
                <section>
                    <div className='TC'>
                        T&C apply. Only popular menu items availabe since it is a booking based website
                    </div>
                </section>
                
            </main>

    </div>
  )
}

export default OrderOnline
