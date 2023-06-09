"use client";

import Hello from "./Hello";

export default function Cart() {
    const CartData = [
        { 상품명: "갤럭시", 가격: 3000, 수량: 1 },
        { 상품명: "아이폰", 가격: 5000, 수량: 1 },
    ];
    return (
        <div className="">
            <Hello />
            <RedBtn />
            <h4 className="title">Cart</h4>
            {CartData.map((item, i) => {
                return <CartItem item={item} key={i} />;
            })}
        </div>
    );
}

const CartItem = ({ item: { 상품명, 가격, 수량 } }) => {
    return (
        <div className="flex justify-around p-2 border-b">
            <p>{상품명}</p>
            <p>{가격}</p>
            <p>{수량}</p>
            <RedBtn color="bg-green-300" title="구매하기" />
        </div>
    );
};

const RedBtn = ({ color = "bg-red-300", title = "button" }) => {
    return (
        <button onClick={null} className={`p-1 ${color} `}>
            {title}
        </button>
    );
};
