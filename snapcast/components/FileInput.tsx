const FileInput = ({ id, label, accept, file, previewUrl, inputRef, onChange, type }: FileInputProps) => {
  return (
    <section className="file-input">
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
          {type === 'video' && previewUrl ? (
            <video src={previewUrl} controls width="250" />
          ) : type !== 'video' && previewUrl ? (
            <img src={previewUrl} alt="Preview" width="250" />
          ) : null}
        </div>
      )}
    </section>
  )
}

export default FileInput