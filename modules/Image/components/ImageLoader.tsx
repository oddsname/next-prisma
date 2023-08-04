"use client";

import React, {useState} from "react";
import {useRef} from "react";
import {BsX} from "@react-icons/all-files/bs/BsX";
import Image from "next/image"

interface Props {
    value?: string
    className?: string,
    onChange?: (file: File) => void|any,
    onDelete?: (img: ImgParams) => Promise<{ success: boolean }>
    img: ImgParams,
    setImg: (img: ImgParams) => void|any,
    preview?: boolean,
}

export interface ImgParams {
    url?: string,
    id?: number,
}

const ImageLoader: React.FC<Props> = ({
    img,
    setImg, className = '',
    value = '',
    preview= true,
    onDelete= async () => ({ success: true }),
    onChange = () => {},
}) =>
{
    const fileRef = useRef<HTMLInputElement>(null)
    const [loading, setLoading] = useState(false);

    const previewFile = (file: File) => {
        const reader = new FileReader();

        reader.onload = async (e) => {
            setImg({
                url: reader.result as string
            });
        }

        reader.readAsDataURL(file);
    }
    const onUploadClick = () => {
        if (fileRef.current) {
            fileRef.current.click()
        }
    }

    const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];

            if(preview) {
                previewFile(file);
            }

            onChange(file);
        }
    }

    const onFileDelete = async () => {
        if (img.url) {
            setLoading(true);

            const { success } = await onDelete(img);

            if(success) {
                setImg({});
                setLoading(false);
            }
        }
    }

    const renderBrowseFileContent = () => {
        if (img.url) {
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
                        { img.url && <Image src={img.url} alt='uploaded images' fill className='w-auto mx-auto'/> }
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