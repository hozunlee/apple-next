import Image from "next/image";

export default function Home() {
    const 상품 = ["토마토", "사과", "코코넛"];
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
                        <h2>{item}</h2>
                    </div>
                );
            })}
        </div>
    );
}
