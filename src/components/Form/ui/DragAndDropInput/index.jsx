import s from "./DragAndDropInput.module.scss";

import {useEffect, useState} from "react";

import { useDropzone } from 'react-dropzone';

import Image from "next/image";
import uploadIcon from "@/icons/uplooad-icon.png";

import { IoClose } from "react-icons/io5";

const DragAndDropInput = ({onLoad, className, sent, children}) => {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const onDrop = (acceptedFiles) => {
        const maxSize = 5 * 1024 * 1024; // 5 MB
        const validFiles = acceptedFiles.filter(file => file.size <= maxSize);

        if (validFiles.length !== acceptedFiles.length) {
            alert('Some files are too large. Please upload files smaller than 5MB.');
        }

        const uniqueFiles = validFiles.filter(file => !selectedFiles.some(existingFile => existingFile.name === file.name));

        setSelectedFiles(prevFiles => [...prevFiles, ...uniqueFiles]);
    };

    const handleRemoveFile = (e, fileName) => {
        e.stopPropagation();
        setSelectedFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
    };

    const handleLoadEvent = () => {
        let base64Images = []
        for (let file of selectedFiles) {
            const reader = new FileReader();
            reader.onloadend = function() {
                const base64String = reader.result.split(',')[1];
                base64Images.push(base64String)
            }
            reader.readAsDataURL(file);
        }
        onLoad(base64Images)
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/jpeg': [],
            'image/png': [],
            'image/gif': [],
            'image/bmp': [],
            'image/webp': []
        }
    });

    useEffect(() => {
        handleLoadEvent()
    }, [selectedFiles]);

    useEffect(() => {
        if (sent) {
            setSelectedFiles([])
        }
    }, [sent]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column" }}>
            <div {...getRootProps()} className={[className, s.draggableSection].join(" ")}>
                <input {...getInputProps()} />
                {selectedFiles.length === 0 ? (
                    <>
                        <Image src={uploadIcon} alt="upload icon" />
                        <h4 className={s.draggableTitle}>
                            {isDragActive ? "Drop the files here ..." : "Upload Images If You Can"}
                            <br />
                            Drag or Click
                        </h4>
                        <p className={s.draggableSubtitle}>
                            A quick photo or two with your
                            <br />
                            smartphone is all we need
                        </p>
                    </>
                ) : (
                    <div className={s.previewSection}>
                        {selectedFiles.map(file => (
                            <div key={file.name} className={s.previewItem}>
                                <Image
                                    src={URL.createObjectURL(file)}
                                    alt={file.name}
                                    width={50}
                                    height={50}
                                    className={s.previewImage}
                                />
                                <p className={s.previewName}>{file.name}</p>
                                <IoClose
                                    onClick={(e) => handleRemoveFile(e, file.name)}
                                    className={s.deleteButton}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {children}
        </div>
    );
}

export default DragAndDropInput