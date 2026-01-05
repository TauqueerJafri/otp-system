export const Button = ({ disabled, children, onClick }) => {
    return (
        <button disabled={disabled} onClick={onClick} className={`w-72 py-2 rounded-md font-medium text-white cursor-pointer ${disabled ? "bg-gray-400 cursor-not-allowed" : "bg-[#50C878]"}`}>
            {children}
        </button>
    )
}