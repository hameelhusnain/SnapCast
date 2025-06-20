'use client';
import FileInput from "@/components/FileInput"
import FormField from "@/components/FormField"
import { desc } from "drizzle-orm";
import { ChangeEvent, useState } from "react"


const page = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    visibility: 'public',
  });
    const[error, setError] = useState(null);
    const handleInputChange = (event: React.ChangeEvent<any>) => {
      const { name, value } = event.target as HTMLInputElement;

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
            placeholder="Entter a clear and an amazing video title."
            value={formData.title}
            onChange={handleInputChange}
            />
              <FormField 
            id="description"
            label="Description"
            placeholder="Enter a clear and an amazing video description."
            value={formData.description}
            as="textarea"
            onChange={handleInputChange}
            />
            <FileInput />
            <FileInput />
             <FormField 
            id="visibility"
            label="visibility"
            value={formData.visibility}
            as="select"
            options={[
              { value: 'public', label: 'Public' },
              { value: 'private', label: 'Private' },
            ]}
            onChange={handleInputChange}
            />
        </form>

    </div>
  )
}

export default page