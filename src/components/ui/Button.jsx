import React from "react";

const Button = ({ className, text, link, disable }) => {
    return <button className={`text-[#293264] text-center py-1 px-2 border-[0.771045px] border-solid border-[#4D5B9E] rounded-[7.71045px] lg:py-2 lg:px-6  ${className}`} onClick={link} disabled={disable}>
        {text}
    </button>;
};

export default Button;
