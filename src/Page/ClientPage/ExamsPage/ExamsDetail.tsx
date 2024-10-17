import React, { useState } from 'react';
import Button from '../../../Components/Button/Button';
import Question from './Components/Question';
import Timer from './Components/Timer';

const ExamsDetail: React.FC = () => {
  const [answers, setAnswers] = useState<{ [key: string]: string | null }>({});

  const handleAnswerChange = (questionName: string) => (selectedKey: string | null) => {
    setAnswers((prevAnswers) => {
      const currentAnswer = prevAnswers[questionName];
      if (currentAnswer === selectedKey) {
        return { ...prevAnswers, [questionName]: null };
      } else {
        return { ...prevAnswers, [questionName]: selectedKey };
      }
    });
  };

  const handleClick = () => {
    alert('Button clicked!');
  };

  const handleCellClick = (cellNumber: number) => {
    console.log('Cell clicked:', cellNumber);
  };
  const isAnswered = (questionIndex: number) => {
    return answers[`question${questionIndex}`] !== null && answers[`question${questionIndex}`] !== undefined;
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-orange-500 mb-6">Bài kiểm tra 01</h1>
      </div>

      <div className="flex">
        {/* Left Side (Quiz Questions) */}
        <div className="flex-grow max-w-full mr-10">
          <div className="space-y-8">
            <Question
              question="Câu 1: How did they ________ broken?"
              options={[
                { label: 'Become', key: 'A' },
                { label: 'Break', key: 'B' },
                { label: 'Be', key: 'C' },
                { label: 'Get', key: 'D' },
              ]}
              name="question1"
              onChange={handleAnswerChange('question1')}
            />
            <Question
              question="Câu 2: He drives quite ________ but his brother drives really_______"
              options={[
                { label: 'Slow .. fastly', key: 'A' },
                { label: 'Badly .. fastly', key: 'B' },
                { label: 'Slowly .. fast', key: 'C' },
                { label: 'Fast .. fastly', key: 'D' },
              ]}
              name="question2"
              onChange={handleAnswerChange('question2')}
            />
            <Question
              question="Câu 3: She’s wearing a ________ dress."
              options={[
                { label: 'Shock long beautiful', key: 'A' },
                { label: 'Shock long beauty', key: 'B' },
                { label: 'Long shock beautiful', key: 'C' },
                { label: 'Long shock beauty', key: 'D' },
              ]}
              name="question3"
              onChange={handleAnswerChange('question3')}
            />
            <Question
              question="Câu 4: He drives quite ________ but his brother drives really ________."
              options={[
                { label: 'Slow', key: 'A' },
                { label: 'Badly', key: 'B' },
                { label: 'Slowly', key: 'C' },
                { label: 'Fast', key: 'D' },
              ]}
              name="question4"
              onChange={handleAnswerChange('question4')}
            />
          </div>
        </div>

        {/* Right Side (Timer and Calendar) */}
        <div className="w-[400px] bg-gray-100 p-5 flex flex-col h-full justify-end ml-auto">
          {/* Timer */}
          <div className="text-center">
            <h2 className="text-black text-lg font-bold">Thời gian còn lại</h2>
            <Timer />
          </div>
          <div className="flex flex-col">
            <Button
              onClick={handleClick}
              size="large"
              variant="secondary"
            >
              Tạm dừng
            </Button>
            <div className="grid grid-cols-7 mt-4 gap-2">
              {Array.from({ length: 40 }, (_, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer transition-colors duration-300 ${
                    isAnswered(index + 1) ? 'bg-orange-400' : 'hover:bg-gray-400'
                  }`}
                  onClick={() => handleCellClick(index + 1)}
                >
                  {index + 1}
                </div>
              ))}
            </div>

            <div className="mt-8 mr-5 flex justify-between">
              <Button
                onClick={handleClick}
                size="large"
                variant="secondary"
              >
                Quay lại trang trước
              </Button>
              <Button
                onClick={handleClick}
                size="large"
                variant="primary"
              >
                Nộp bài
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamsDetail;
