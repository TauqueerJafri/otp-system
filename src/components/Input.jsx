export const Input = ({ placeholder, onChange, value, type, variant = 'default' }) => {
    const variantStyles = {
        default: 'w-72 bg-white/10 border border-white/20 text-white placeholder-gray-300 rounded-md px-4 py-2 focus: outline-none focus:ring-1 focus:ring-white/60',
        otp: "w-72",
    } 

    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`${variantStyles[variant]}`}
        />
    )
}