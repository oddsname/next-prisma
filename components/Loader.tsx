import React from "react"

interface Props {
    loading: boolean,
    children: React.ReactNode
}

const Loader: React.FC<Props> = ({ loading, children}) => {
    return (
        <div className="h-full w-full">
            { loading
                ? <div className="relative h-full w-full text-2xl flex justify-center">
                    <div className="absolute left top-2/4">Loading...</div>
                </div>
                : children
            }
        </div>
    );
}

export default Loader;