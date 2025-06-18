'use client';
import FileInput from "@/components/FileInput"
import FormField from "@/components/FormField"
import { ChangeEvent, useState } from "react"


const page = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    visibility: 'public',
  });
    const[error, setError] = useState(null);
    const handleInputChange = (e: ChangeEvent) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  return (
    <div className="wrapper-md upload-page">
        <h1>Upload a Video!</h1>

        {error && <div className="error">{error}</div>}

        <form className="rounded-20 shadow-10 gap-6 w-full flex flex-cl px-5 py-7.5">
            <FormField 
            id="title"
            label="Title"
            value={formData.title}
            onChange={}
            />
            <FileInput />
            <button className="btn btn-primary">Upload</button>
        </form>

    </div>
  )
}

export default page