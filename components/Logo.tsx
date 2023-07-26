"use client";

import React from "react";
import Image from "next/image";
import {useRouter} from "next/navigation";

interface Props {
    url: string
}

const Logo: React.FC<Props> = ({ url }) => {
    const { push } = useRouter();

    return (
        <Image onClick={() => push(url)} className='cursor-pointer' src="/ts-icon.png" alt="icon" width={185} height={50}/>
    )
}

export default Logo;