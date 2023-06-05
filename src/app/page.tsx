import Link from "next/link";

export default function List() {
    let name = "Lee";
    return (
        <div>
            <h1 className="title">호준후레시</h1>
            <p className="title-sub">by dev {name}</p>
            <a className="text-red-200" href="http://daedolaw.com">
                대도
            </a>
            <Link href={"/list"}> 리스트로</Link>
        </div>
    );
}
