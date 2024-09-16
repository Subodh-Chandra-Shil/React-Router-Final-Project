import React from "react";
import { TypeAnimation } from "react-type-animation";

function Home() {
    return (
        <div className="m-10">
            <h1 className="text-[25px]">Hi, I'm </h1>
            <TypeAnimation
                style={{
                    display: "block",
                    fontSize: "60px",
                    fontWeight: "bolder",
                    fontFamily: "Space Grotesk"
                }}
                sequence={[
                    "Subodh Chandra Shil",
                    500,
                    "Wakanda's Ambassador to Bangladesh"
                ]}
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

            <section className="flex mt-14 mb-10 items-center">
                <div className="basis-1/2">
                    <img
                        className="rounded-lg"
                        src="https://t3.ftcdn.net/jpg/06/49/78/98/360_F_649789811_Jmp2V1Dy1MtKjKx8mdI2yUbeCRh9kijo.jpg"
                        alt=""
                    />
                </div>
                <div className="basis-1/2">
                    <div>
                        <h1 className="text-right">
                            Visit My Office In Wakanda
                        </h1>
                    </div>
                    <br />
                    <h3 className="text-right text-justify font-['Space_Grotesk']">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Pariatur eum soluta rem dolorum, aperiam
                        repellendus eaque exercitationem, provident deleniti
                        sint nemo ullam natus. Quod sequi maxime a delectus
                        accusantium et error, illo eligendi alias itaque quasi
                        explicabo! Aspernatur ratione nisi et doloremque natus
                        commodi fugiat ipsum neque blanditiis. Exercitationem
                        distinctio esse saepe, provident optio tempore ad
                        doloribus voluptatum maiores debitis pariatur in
                        delectus dignissimos officiis? Reprehenderit inventore
                        dolor reiciendis, rerum quia eaque porro incidunt ex
                        quidem itaque architecto quam doloribus quo adipisci
                        enim vitae obcaecati sunt? Possimus sint qui sed vel
                        temporibus ratione ducimus inventore asperiores ipsa?
                        Odit, ex pariatur.
                    </h3>
                </div>
            </section>

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
