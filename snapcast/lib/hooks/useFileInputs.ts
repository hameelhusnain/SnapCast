export const useFileInputs = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      setFiles(Array.from(selectedFiles));
    }
  };

  const clearFiles = () => {
    setFiles([]);
  };

  return {
    files,
    handleFileChange,
    clearFiles,
  };
}
import { useState } from 'react';
import React from 'react';
import { type } from 'os';
import { ChangeEvent } from 'react';
import { FormFieldProps } from '../components/FormField';   