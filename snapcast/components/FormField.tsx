import { Placeholder } from "drizzle-orm"

const FormField = ({ id, label, type- 'text', value, onChange, Placeholder, as = 'input', option = []}: FormFieldProps) => {
  const InputToRender = (type) => {
    if(type === 'textarea') {
      return <textPath />
    }
  }
}
return (
  <div className="form-field">
    <label htmlFor={id}>{lable}</label>
  </div>
)
}

export default FormField