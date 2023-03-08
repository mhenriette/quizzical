import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import { Heading1, Heading2 } from "../ui/Typography";

const Start = ({ start }) => {
    return <div className="h-screen flex justify-center items-center flex-col gap-y-5">
        <Heading1 children='Quizzical' />
        <Heading2 children='Some description if needed' className='font-normal' />
        <Button text='Start quiz' className='py-3 px-16 bg-[#4D5B9E] text-white' link={start} />

    </div>;
};

export default Start;
