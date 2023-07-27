"use client";

import React from "react";
import {useRef} from "react";

interface Props {
    value?: string
    className?: string,
    placeholder?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any
}

const FileLoader: React.FC<Props> = (
    {
        placeholder = '', className = '', value = '', onChange = () => {
    }
    }
) => {
    const fileRef = useRef<HTMLInputElement>(null)
    const onUploadClick = () => {
        if (fileRef.current) {
            fileRef.current.click()
        }
    }

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files)
    }

    return (

        <div
            className="relative flex justify-center border-2 border-dashed border-gray-300 bg-white rounded-2xl h-full w-full cursor-pointer text-5xl text-gray-200 font-bold"
            onClick={onUploadClick}
        >
            <div className='absolute top-1/4 text-center'>
                Drag and Drop or Browse File
            </div>

            <div className="absolute top-3/4">
                <button className="text-lg border-2 border-gray-400 text-gray-400 px-4">
                    Browse File
                </button>
            </div>

            <input
                ref={fileRef}
                type="file"
                className="hidden"
                onChange={onFileChange}
            />
        </div>
    )
}

export default FileLoader;