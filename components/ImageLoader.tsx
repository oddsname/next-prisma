"use client";

import React, {useState} from "react";
import {useRef} from "react";
import { BsX } from "@react-icons/all-files/bs/BsX";

interface Props {
    value?: string
    className?: string,
    placeholder?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any
}

interface Img {
    path?: string,
    id?: number,
}

const ImageLoader: React.FC<Props> = ({placeholder = '', className = '', value = '', onChange = () => {}}) => {
    const fileRef = useRef<HTMLInputElement>(null)
    const [userImg, setUserImg] = useState<Img>({ });

    const uploadFile = async (file: File): Promise<Img> => {
        const formData = new FormData();

        formData.set('file', file);

        try {
            const response = await fetch('/api/image/upload', {
                method: "POST",
                body: formData,
            });

            return response.json();
        } catch (e) {
            return {};
        }
    }

    const removeFile = async() => {
        await fetch('/api/image/delete', {
            method: "POST",
            body: JSON.stringify({...userImg})
        });
    }

    const onUploadClick = () => {
        if (fileRef.current) {
            fileRef.current.click()
        }
    }

    const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onload = async (e) => {
                setUserImg({
                    path: reader.result as string
                });
            }

            reader.readAsDataURL(file);

            const { path, id } = await uploadFile(file);

            setUserImg({ path, id });
        }
    }

    const onFileDelete = async () => {
        await removeFile();
        setUserImg({});
    }

    const renderBrowseFileContent = () => {
        // if(userImg.path) {
        //    return (
        //        <div className='h-full w-full'>
        //            <div className='relative'>
        //                <div className="absolute bg-gray-400 h-14 w-full opacity-25">
        //                </div>
        //
        //                <div className="absolute w-6 top-1 right-10 text-red-700" onClick={onFileDelete}>
        //                    <BsX />
        //                </div>
        //            </div>
        //
        //             <img src={userImg.path} alt='uploaded images' className='h-full mx-auto' />
        //        </div>
        //    )
        // }

        return (
            <div className='relative h-full w-full  flex justify-center' onClick={onUploadClick}>
                <div className='absolute top-1/4 text-center'>
                    Drag and Drop or Browse File
                </div>


                <div className="absolute top-3/4">
                    <button className="text-lg border-2 border-gray-400 text-gray-400 px-4">
                        Browse File
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="border-2 border-dashed border-gray-300 bg-white rounded-2xl h-full w-full cursor-pointer text-5xl text-gray-200 font-bold">
            {renderBrowseFileContent()}

            <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={onFileChange}
            />
        </div>
    )
}

export default ImageLoader;