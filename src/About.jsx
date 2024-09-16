import React from "react";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography
} from "@material-tailwind/react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function About() {
    const genderOption = ["Male", "Female", "Rather Not Say"];
    const handleFormData = () => {};

    return (
        <div className="flex justify-center">
            <Card
                className=" p-3 border border-blue-500 "
                color="transparent"
                shadow={false}
            >
                <Typography
                    className="text-center font-['Orbitron'] font-bold text-3xl"
                    variant="h4"
                    color="blue-gray"
                >
                    Wakanda Visa Form
                </Typography>
                <form className="flex flex-col justify-center mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="-mb-3"
                        >
                            Your Name
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="John Doe"
                            className=" border-blue-500 p-1 rounded-md border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className:
                                    "before:content-none after:content-none"
                            }}
                        />
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="-mb-3"
                        >
                            Your Email
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            className=" p-1 border-blue-500 border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className:
                                    "before:content-none after:content-none"
                            }}
                        />

                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="-mb-3"
                        >
                            Password
                        </Typography>
                        <Input
                            size="lg"
                            type="password"
                            minLength="8"
                            placeholder=""
                            className=" p-1 border-blue-500 border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className:
                                    "before:content-none after:content-none"
                            }}
                        />

                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="-mb-3"
                        >
                            Share Your Thought
                        </Typography>
                        <textarea name="" id=""></textarea>
                    </div>

                    <Dropdown
                        className="mt-3"
                        options={genderOption}
                        placeholder="Select Gender"
                    />

                    <label className="mt-5 flex">
                        <input type="checkbox" className="mr-2" />
                        I'll Abide by Wakanda's Rule
                    </label>
                    <Button onClick={handleFormData} className="mt-6" fullWidth>
                        Submit Data
                    </Button>
                </form>
            </Card>

            <section>{}</section>
        </div>
    );
}

export default About;
