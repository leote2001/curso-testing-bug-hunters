import type React from "react";
import Navbar from "./Navbar";

interface LayoutProps {
    children: React.ReactNode;
}
export default function Layout({children}: LayoutProps) {
return (
    <>
    <header>
        <h1>Bug Hunters</h1>
        <Navbar />
    </header>
    <main>
    {children}
    </main>
    <footer>
        <p className="small text-muted">Copyright &copy;2026.</p>
    </footer>
    </>
);
}