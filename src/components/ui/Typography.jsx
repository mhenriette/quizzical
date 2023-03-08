export const Heading1 = ({ children, className }) => {
    return (
        <h1 className={`text-3xl font-bold leading-9 text-center text-[#293264] lg:text-5xl lg:leading-10 ${className}`}>{children}</h1>
    )
}
export const Heading2 = ({ children, className }) => {
    return (
        <h1 className={`text-base leading-5 font-bold text-center text-[#293264] lg:text-xl lg:leading-8 ${className}`}>{children}</h1>
    )
}
export const Paragraph = ({ children, className }) => {
    return (
        <h1 className={`text-sm leading-5 font-medium text-center text-[#293264] lg:text-base lg:leading-8 ${className}`}>{children}</h1>
    )
}