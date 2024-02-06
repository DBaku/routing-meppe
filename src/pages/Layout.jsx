import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            {/* -- PLATZHALTER -- 
        Outlet wird dynamisch durch die Komponente ersetzt, 
        die zu dem aktuellen pfad passt. */}
            <Outlet />
        </>
    );
};

export default Layout;
