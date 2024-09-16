import "./App.css";
import {
    BrowserRouter,
    Routes,
    Route,
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Project from "./Project";
import Navbar from "./Navbar";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <>
                    <Navbar />
                    <Home />
                </>
            )
        },
        {
            path: "/about",
            element: (
                <>
                    <Navbar />
                    <About />
                </>
            )
        },
        {
            path: "/contact",
            element: (
                <>
                    <Navbar />
                    <Contact />
                </>
            )
        },
        {
            path: "/portfolio",
            element: (
                <>
                    <Navbar />
                    <Portfolio />
                </>
            )
        },
        {
            path: "/project",
            element: (
                <>
                    <Navbar />
                    <Project />
                </>
            )
        }
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
