import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function PublicLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <div className="flex-1 overflow-y-auto">
                <main>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
}