const baseClasses =
    'w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500';

const SelectInput = ({ options, className = '', ...props }) => (
    <select className={`${baseClasses} ${className}`} {...props}>
        {options.map((opt) => (
            <option key={opt} value={opt}>
                {opt}
            </option>
        ))}
    </select>
);

export default SelectInput;
