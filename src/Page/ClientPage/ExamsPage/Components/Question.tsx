import React from 'react';
import CheckButton from '../../../../Components/Button/CheckButton';


interface QuestionProps {
  question: string;
  options: { label: string; key: string }[];
  name: string;
  onChange: (key: string | null) => void;
}

const Question: React.FC<QuestionProps> = ({ question, options, onChange }) => {
  return (
    <div className="p-6 bg-gray-200 rounded-lg shadow-md">
      <h2 className="text-lg mb-4">{question}</h2>
      <CheckButton data={options} onChange={onChange} />
    </div>
  );
};

export default Question;
