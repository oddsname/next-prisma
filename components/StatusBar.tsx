import React from "react";

interface Props {
    amount: number,
    selected?: number,
}

const StatusBar: React.FC<Props> = ({amount, selected = 1}) => {
    const getAmount = () => {
        return Array.from(Array(amount).keys());
    }

    const isSelected = (number: number) => {
        return number + 1 === selected
    }

    return (
        <div className="status-bar">
            <div className='status-bar__line'></div>

            <div className="status-bar__dot-block">
                {getAmount().map(
                    (i) => <div
                        key={i}
                        className={ (isSelected(i) ? "bg-disabled" : "bg-network-white") + " status-bar__dot"}
                    />
                )}
            </div>
        </div>
    );
}

export default StatusBar;