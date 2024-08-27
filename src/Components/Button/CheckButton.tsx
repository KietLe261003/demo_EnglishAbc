import React, { useState } from 'react';

interface CheckButtonProps {
    labels: string[];
}

const CheckButton: React.FC<CheckButtonProps> = ({ labels }) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleCheckboxClick = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <div className="p-6 space-y-4">
            {labels.map((label, index) => (
                <div
                    key={index}
                    className="flex items-center space-x-2 cursor-pointer"
                    onClick={() => handleCheckboxClick(index)}
                >
                    <div 
                        className={`w-6 h-6 rounded-md border-2 ${
                            selectedIndex === index ? 'bg-orange-700 border-transparent' : 'bg-white border-orange-500'
                        }`}
                    />
                    <span className={`text-[12px]  ${selectedIndex === index ? 'text-orange-700' : 'text-gray-800'}`}>
                        {label}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default CheckButton;
