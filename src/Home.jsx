import React from "react";
import { TypeAnimation } from "react-type-animation";

function Home() {
    return (
        <div className="m-5">
            <h1 className="text-[25px]">Hi, I'm </h1>

            <TypeAnimation
                style={{
                    display: "block",
                    fontSize: "60px",
                    fontWeight: "bolder",
                    fontFamily: "Poppins"
                }}
                sequence={["Subodh Chandra Shil", 500, ""]}
                repeat={Infinity}
            />

            <div>
                <input
                    type="text"
                    placeholder="Enter Mail"
                    className="p-[10px] w-72"
                />
                <button className="rounded-r-md rounded-l-none font-bold py-2 px-4 text-black bg-gradient-to-r from-lime-500 to-lime-300 hover:text-pink-500">
                    Submit
                </button>
            </div>

            <div className="flex justify-center">
                <a
                    target="_blank"
                    href="https://github.com/Subodh-Chandra-Shil"
                    className="font-bold py-2 px-4 rounded-lg text-black bg-gradient-to-r from-amber-200 to-yellow-500 hover:text-pink-500"
                >
                    Roam My GitHub
                </a>
            </div>
        </div>
    );
}

export default Home;
