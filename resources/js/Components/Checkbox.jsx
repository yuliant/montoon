// export default function Checkbox({ className = '', ...props }) {
//     return (
//         <input
//             {...props}
//             type="checkbox"
//             className={
//                 'rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 ' +
//                 className
//             }
//         />
//     );
// }

export default function Checkbox({ name, value, handleChange, checked = false }) {
    return (
        <input
            type="checkbox"
            name={name}
            value={value}
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            onChange={(e) => handleChange(e)}
            defaultChecked={checked}
        />
    );
}
