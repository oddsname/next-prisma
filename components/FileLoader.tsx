"use client";

import React, {useState} from "react";
import {useRef} from "react";
import {FileReader} from "next/dist/server/future/route-matcher-providers/dev/helpers/file-reader/file-reader";

interface Props {
    value?: string
    className?: string,
    placeholder?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any
}

const FileLoader: React.FC<Props> = ({placeholder = '', className = '', value = '', onChange = () => {}}) => {
    const fileRef = useRef<HTMLInputElement>(null)
    const [userImg, setUserImg] = useState("");
    const onUploadClick = () => {
        if (fileRef.current) {
            fileRef.current.click()
        }
    }

    const uploadFile = (file: File) => {

    }

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onload = (e) => {
                setUserImg(reader.result as string);
            }

            reader.readAsDataURL(file)
        }
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