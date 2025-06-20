import { Placeholder } from "drizzle-orm"
import { type } from "os"

const FormField = ({ id, label, type = 'text', value, onChange, placeholder, as = 'input', options = [] }: FormFieldProps) => {
  
  const InputTorRender = ({ type }: { type: string }) => {
    if (type === 'input') {
      return <textarea 
      id={id}
      name="id"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      
      />
    } 
    else if (type === 'select') {
      return <select 
      id={id}
      name="id"
      value={value}
      onChange={onChange}
      
      />
  } 
  else {
    return <input 
    id={id}
    name="id"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    
    />
  }
  
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <InputTorRender type={as} />
    </div>
  )
}
}
export default FormField;