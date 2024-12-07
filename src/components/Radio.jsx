export default function Radio(props) {
    const {value,label,fieldName} = props
    return (
        <label>
            <input 
            type="radio"
            name={fieldName}
            value={value}
            />
            {label}
        </label>
    );
}