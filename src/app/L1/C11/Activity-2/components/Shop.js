
'use client'

import './style.css'

import Car from '../assets/products/car.jpeg';
import Colors from '../assets/products/colors.jpeg';
import Book from '../assets/products/book.jpeg';
import SoftToy from '../assets/products/softToy.jpeg';
import Chocolate from '../assets/products/chocolate.jpeg';
import Puzzle from '../assets/products/puzzle.jpeg';
import BackPack from '../assets/products/backPack.jpeg';
import WaterBottle from '../assets/products/waterBottle.jpeg';
import Robot from '../assets/products/robot.jpeg';
import Ball from '../assets/products/ball.jpeg';
import Glasses from '../assets/products/glasses.jpeg';
import Jacket from '../assets/products/jacket.jpeg';
import Wallet from '../assets/wallet.png';
import Image from 'next/image'

import { useState } from 'react'

export default function Shop() {
    const [moneyRemaining, setMoneyRemaining] = useState(20)
    const [cart, setCart] = useState([])

    const [objects, setObjects] = useState(
        [
            {
                pid: 0,
                img: Car,
                name: 'Toy Car',
                price: 5,
                inPurchase: false
            },
            {
                pid: 1,
                img: Colors,
                name: 'Box of Crayons',
                price: 3,
                inPurchase: false
            },
            {
                pid: 2,
                img: Book,
                name: 'Picture Book',
                price: 7,
                inPurchase: false
            },
            {
                pid: 3,
                img: SoftToy,
                name: 'Stuffed Animal',
                price: 8,
                inPurchase: false
            },
            {
                pid: 4,
                img: Chocolate,
                name: 'Chocolate Box',
                price: 5,
                inPurchase: false
            },
            {
                pid: 5,
                img: Puzzle,
                name: 'Puzzle',
                price: 6,
                inPurchase: false
            },
            {
                pid: 6,
                img: BackPack,
                name: 'Backpack',
                price: 12,
                inPurchase: false
            },
            {
                pid: 7,
                img: WaterBottle,
                name: 'Water Bottle',
                price: 3,
                inPurchase: false
            },
            {
                pid: 8,
                img: Robot,
                name: 'Toy Robot',
                price: 15,
                inPurchase: false
            },
            {
                pid: 9,
                img: Ball,
                name: 'Soccer Ball',
                price: 9,
                inPurchase: false
            },
            {
                pid: 10,
                img: Glasses,
                name: 'Sunglasses',
                price: 6,
                inPurchase: false
            },
            {
                pid: 11,
                img: Jacket,
                name: 'Jacket',
                price: 15,
                inPurchase: false
            }
        ]
    )

    // START : Modal states
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = (isPurchase = false) => {
        if (isPurchase) {
            alert('You did a great job')
            window.location.reload();
        }
        setShowModal(false);
    };
    // END : Modal states


    const handleProductAction = (productDetails, productIndex) => {
        const updatedObjects = objects.map((object, index) =>
            index === productIndex
                ? { ...object, inPurchase: !object.inPurchase }
                : object
        );

        if (productDetails.inPurchase) {
            // Remove from cart 
            setObjects(updatedObjects);
            setCart(cart.filter((item) => item.name !== updatedObjects[productIndex].name));
            setMoneyRemaining(moneyRemaining + productDetails.price);
        } else {
            // Add to cart (if insufficient balance, don't add)
            if (moneyRemaining >= productDetails.price) {
                setObjects(updatedObjects);
                setCart([...cart, updatedObjects[productIndex]]);
                setMoneyRemaining(moneyRemaining - productDetails.price);
            } else {
                alert('Insufficient funds to add ' + productDetails.name + ' to cart.');
            }
        }
    };

    const handleCheckout = () => {
        openModal()
    }

    return (
        <div className="shopMainContainer">

            <div className="walletContainer">
                <Image alt="walletImg" className="walletImg" src={Wallet} />
                <b>${moneyRemaining}</b>
                <button onClick={handleCheckout} className="checkoutBtn">Checkout</button>
            </div>

            <div className="grid grid-cols-5 productRow">
                {objects.slice(0, 5).map((object, index) => (
                    <div key={index} className="productRowInternal">
                        <Image src={object.img} alt={object.name} className="productImg" />
                        <div className="productRowInternal_1">
                            <p className="productName">{object.name}</p>
                            <p className="productPrice">Price: ${object.price}</p>
                        </div>
                        <button
                            onClick={() => { handleProductAction(object, object.pid) }}
                            className={`productActionBtn ${object.inPurchase ? 'btnRedEffect' : 'btnGreenEffect'}`}
                        >
                            {object.inPurchase ? 'Remove from cart' : 'Add to cart'}
                        </button>
                    </div>
                ))}
            </div>

            <br />
            <br />

            <div className="grid grid-cols-5 productRow">
                {objects.slice(5, 10).map((object, index) => (
                    <div key={index} className="productRowInternal">
                        <Image src={object.img} alt={object.name} className="productImg" />
                        <div className="productRowInternal_1">
                            <p className="productName">{object.name}</p>
                            <p className="productPrice">Price: ${object.price}</p>
                        </div>
                        <button
                            onClick={() => { handleProductAction(object, object.pid) }}
                            className={`productActionBtn ${object.inPurchase ? 'btnRedEffect' : 'btnGreenEffect'}`}
                        >
                            {object.inPurchase ? 'Remove from cart' : 'Add to cart'}
                        </button>
                    </div>
                ))}
            </div>

            <br />
            <br />

            <div className="grid grid-cols-5 productRow">
                {objects.slice(10).map((object, index) => (
                    <div key={index} className="productRowInternal">
                        <Image src={object.img} alt={object.name} className="productImg" />
                        <div className="productRowInternal_1">
                            <p className="productName">{object.name}</p>
                            <p className="productPrice">Price: ${object.price}</p>
                        </div>
                        <button
                            onClick={() => { handleProductAction(object, object.pid) }}
                            className={`productActionBtn ${object.inPurchase ? 'btnRedEffect' : 'btnGreenEffect'}`}
                        >
                            {object.inPurchase ? 'Remove from cart' : 'Add to cart'}
                        </button>
                    </div>
                ))}
            </div>



            {/* START Modal code  */}
            {showModal && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                    onClick={handleCloseModal}
                >
                    <div
                        className="bg-white p-6 rounded-lg shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-center text-lg font-bold mb-2">Products</h2>
                        {console.log(cart)}
                        {cart.map((item, index) => (
                            <div key={index} className="checkoutMainContainer">
                                <Image className="productImg" alt="productImg" src={item.img} />
                                <span className="productName">{item.name}</span>
                                <span className="productPrice">${item.price}</span>
                            </div>
                        ))}

                        <div className="modafooter">
                            <button className="closeModalBtn" onClick={() => { handleCloseModal(false) }}>
                                Go Back
                            </button>

                            <button className="finalCheckoutBtn" onClick={() => { handleCloseModal(true) }}>
                                Place order
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* START Modal code  */}

        </div>
    );
}
