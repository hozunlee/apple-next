export default function Layout({ children }) {
    return (
        <>
            <p className="text-center bg-green-300 shadow-lg">
                현대카드 무이자 이벤트 중
            </p>
            <main>{children}</main>
        </>
    );
}
