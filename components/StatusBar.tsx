import React from "react";

interface Props {
    keys: string[] | number[],
    selected?: string | number,
}

const StatusBar: React.FC<Props> = ({keys, selected = 1}) => {
    return (
        <div className="status-bar">
            <div className='status-bar__line'></div>

            <div className="status-bar__dot-block">
                {keys.map(
                    (key) => <div
                        key={key}
                        className={(key === selected ? "bg-disabled" : "bg-network-white") + " status-bar__dot"}
                    />
                )}
            </div>
        </div>
    );
}

export default StatusBar;