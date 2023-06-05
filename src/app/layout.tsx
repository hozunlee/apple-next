import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "호준후레쉬",
    description: "호준후레쉬 직배송 by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="bg-white p-5">
                    <Link href={"/"} className="text-black mr-2">
                        홈
                    </Link>
                    <Link href={"/list"} className="text-black mr-2">
                        리스트
                    </Link>
                    <Link href={"/cart"} className="text-black mr-2">
                        장바구니
                    </Link>
                </div>
                {children}
            </body>
        </html>
    );
}
