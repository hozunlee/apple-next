"use client";

import Image from "next/image";
import { useState } from "react";

const data = [
    { title: "토마토", count: 1 },
    { title: "사과", count: 1 },
    { title: "코코넛", count: 1 },
];

export default function Home() {
    const [상품, 상품변경] = useState(data);

    const increaseCount = (index) => {
        const temp = [...상품];
        temp[index].count = 상품[index].count + 1;
        상품변경(temp);
    };

    const decreaseCount = (index) => {
        const temp = [...상품];
        temp[index].count = 상품[index].count - 1;
        상품변경(temp);
    };

    return (
        <div>
            <h1 className=" text-center">여기는상품목록</h1>
            {상품.map((item, i) => {
                return (
                    <div
                        key={i}
                        className="my-5 mx-auto w-52 bg-white text-black p-5"
                    >
                        <img
                            src={`/food${i}.png`}
                            alt="사진"
                            className="w-full h-auto"
                        />
                        <h2>{item.title}</h2>
                        <h3> $40</h3>
                        <button onClick={() => decreaseCount(i)}>-</button>
                        <span>{item.count}</span>
                        <button
                            className="secondary"
                            onClick={() => increaseCount(i)}
                        >
                            +
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
