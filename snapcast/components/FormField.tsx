import { Placeholder } from "drizzle-orm"

const FormField = ({ id, label, type-'text', value, onChange, Placeholder, as = 'input', option=[]}: FormFieldProps) => {
  
  const InputTorRender = (type) => {
    if (type === 'input') {
      return <textarea />
    }
  }
  
  return (
    <div className="form-field">
      <label htmlFor={id}>{lable}</label>
    </div>
  )
}
 
export default FormField