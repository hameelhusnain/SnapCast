const FileInput = ({ id, label, accept, file, previewUrl, inputRef, onChange, onRest, type }: FileInputProps) => {
  return (
    <selection className="file-input">
      <label htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type="file"
        accept={accept}
        ref={inputRef}
        onChange={onChange}
        hidden
      />
      {file && (
        <div className="file-preview">
          {type === 'video' ? (
            <video src={preview
    </selection>
  )
}

export default FileInput