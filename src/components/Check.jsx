export default function Check(props) {
    const {value,label,fieldName} = props
    return (
        <label>
            <input 
            type="checkbox"
            name={fieldName}
            value={value}
            />
            {label}
        </label>
    );
}