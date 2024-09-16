import React from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FaWpforms } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { FaFileCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Navbar() {
    return (
        <div className="flex justify-center">
            <nav className="bg-[url('01.jpg')] h-full bg-purple-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 list-none flex gap-5 m-5 justify-center p-3 rounded-xl w-fit">
                <li>
                    <Link to="/" className="flex gap-2 place-items-center">
                        {" "}
                        <IoHomeOutline className="text-xl text-white" />
                        <p className="text-white">Home</p>
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="flex gap-2 place-items-center">
                        <FaWpforms className="text-xl text-white" />
                        <p className="text-white">Form</p>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        className="flex gap-2 place-items-center"
                    >
                        <IoIosContact className="text-2xl text-white" />
                        <p className="text-white">Contact</p>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/portfolio"
                        className="flex gap-2 place-items-center"
                    >
                        <FaFileCode className="text-xl text-white" />
                        <p className="text-white">Portfolio</p>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/project"
                        className="flex gap-2 place-items-center"
                    >
                        <FaGithub className="text-xl text-white" />
                        <p className="text-white">Projects</p>
                    </Link>
                </li>
            </nav>
        </div>
    );
}

export default Navbar;
