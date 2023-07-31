"use client";

import React, {useState} from "react";
import {useRef} from "react";
import {BsX} from "@react-icons/all-files/bs/BsX";
import Image from "next/image"

interface Props {
    value?: string
    className?: string,
    placeholder?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any
}

interface Img {
    url?: string,
    id?: number,
}

const ImageLoader: React.FC<Props> = ({placeholder = '', className = '', value = '', onChange = () => {}}) => {
    const fileRef = useRef<HTMLInputElement>(null)
    const [userImg, setUserImg] = useState<Img>({});
    const [loading, setLoading] = useState(false);

    const uploadFile = async (file: File): Promise<Img> => {
        const formData = new FormData();

        formData.set('file', file);

        try {
            setLoading(true)
            const response = await fetch('/api/image/upload', {
                method: "POST",
                body: formData,
            });
            setLoading(false);

            return response.json();
        } catch (e) {
            return {};
        }
    }

    const removeFile = async (id: number): Promise<boolean> => {
        setLoading(true);
        const response = await fetch('/api/image/delete', {
            method: "POST",
            body: JSON.stringify({ id })
        });
        setLoading(false);

        return (await response.json()).success;
    }

    const onUploadClick = () => {
        if (fileRef.current) {
            fileRef.current.click()
        }
    }

    const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onload = async (e) => {
                setUserImg({
                    url: reader.result as string
                });
            }

            reader.readAsDataURL(file);

            const {url, id} = await uploadFile(file);

            setUserImg({url, id});
        }
    }

    const onFileDelete = async () => {
        if (userImg.id && await removeFile(userImg.id)) {
            setUserImg({});
        }
    }

    const renderBrowseFileContent = () => {
        if (userImg.url) {
            return (
                <div className='h-full w-full'>
                    <div className='relative'>
                        <div className="z-10 absolute bg-gray-400 h-14 w-full opacity-25"></div>

                        {
                            !loading && <div  className="z-10 absolute w-6 top-1 right-10 text-red-700" onClick={onFileDelete}>
                                <BsX/>
                            </div>
                        }
                    </div>

                    <div className='relative h-full w-auto'>
                        { userImg.url && <Image src={userImg.url} alt='uploaded images' fill className='w-auto mx-auto'/> }
                    </div>

                </div>
            )
        }

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
        <div
            className="border-2 border-dashed border-gray-300 bg-white rounded-2xl h-full w-full cursor-pointer text-5xl text-gray-200 font-bold">
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