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
  const [video, setVideo] = useState<{ file?: File; previewUrl?: string; inputRef?: React.RefObject<HTMLInputElement>; handleFileChange?: (e: ChangeEvent<HTMLInputElement>) => void; restFile?: () => void }>({});
  const [thumbnail, setThumbnail] = useState<{ file?: File; previewUrl?: string; inputRef?: React.RefObject<HTMLInputElement>; handleFileChange?: (e: ChangeEvent<HTMLInputElement>) => void; restFile?: () => void }>({});
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

        <form className="rounded-20 shadow-15 gap-6 w-full flex flex-col px-5 py-7.5">
            <FormField 
            id="title"
            label="Title"
            placeholder="Enter your video title here."
            value={formData.title}
            onChange={handleInputChange}
            />
              <FormField 
            id="description"
            label="Description"
            placeholder="Enter your video descricption here."
            value={formData.description}
            as="textarea"
            onChange={handleInputChange}
            />
            <FileInput 
            id="video"
            label="Video"
            accept="video/*"
            file={video.file ?? null}
            previewUrl={video.previewUrl ?? null}
            inputRef={video.inputRef ?? null}
            onChange={video.handleFileChange ?? (() => {})}
            onRest={video.restFile}
            type="video"
            />
             <FileInput 
            id="thumbnail"
            label="Thumbnail"
            accept="image/*"
            file={thumbnail.file ?? null}
            previewUrl={thumbnail.previewUrl ?? null}
            inputRef={thumbnail.inputRef ?? null}
            onChange={thumbnail.handleFileChange ?? (() => {})}
            onRest={thumbnail.restFile}
            type="image"
            />
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