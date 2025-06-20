import { Placeholder } from "drizzle-orm"
import { type } from "os"

const FormField = ({ id, label, type-'text', value, onchange, Placeholder, as = 'input', Option=[]}: FormFieldProps) => {
  
  const InputTorRender = ({ type }{ type: string }) => {
    if (type === 'input') {
      return <textarea />
    } else if (type === 'select') {
      return <select />
  } else {
    return <input />
  }
  
  return (
    <div className="form-field">
      <label htmlFor={id}>{lable}</label>
      <InputTorRender type={as} />
    </div>
  )
}
 
export default FormField