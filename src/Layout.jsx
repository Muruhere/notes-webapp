import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

export default function Layout() {
    return (
        <>
            <Header />
            <section style={{ display: 'flex', flex: 1 }}>
                <Navigation />
                <Outlet />
            </section>
        </>
    )
}