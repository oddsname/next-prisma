"use client"

import React, {useContext, createContext, useState, useEffect} from "react";
import classNames from "classnames";

interface TabContextData {
    selected: string,
    setSelected: (value: string) => void
}

const TabContext = createContext<TabContextData>({
    selected: '',
    setSelected: (value: string) => {}
})

const useTabContext = () => {
    const context = useContext(TabContext)

    if(!context) {
        throw new Error("use of TabContext is mandatory")
    }

    return context
}

interface ContentProps {
    children: React.ReactNode,
    value: string,
}

const TabContent: React.FC<ContentProps> = ({children, value=""}) => {
    const { selected } = useTabContext();
    const className = classNames(
        'rounded-lg border-2 border-black m-2 w-full h-full',
        selected === value ? 'block' : 'hidden'
    )

    return (
        <div className={className}>
            {children}
        </div>
    )
}

interface HeaderProps {
    children: string,
    value: string,
    active?: boolean,
}

const TabHeader: React.FC<HeaderProps> = ({children, value, active=false}) => {
    const { selected, setSelected } = useTabContext();

    useEffect(() => {
        if(active) {
            setSelected(value)
        }
    },[])

    const className = classNames(
        'rounded-lg border-2 border-black m-4 text-center font-bold text-2xl hover:bg-white',
        selected === value ? 'bg-white' : 'bg-transparent'
    )

    return (
        <div className={className} onClick={() => setSelected(value)}>
            {children}
        </div>
    )
}

interface Props {
    children: React.ReactNode
}

const TabSwitcher: React.FC<Props> = ({ children }) => {
    const [selected, setSelected] = useState('');

    return (
        <TabContext.Provider value={{selected, setSelected}}>
            {children}
        </TabContext.Provider>
    );
}

export {
    TabContent,
    TabSwitcher,
    TabHeader
}