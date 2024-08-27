import React, { useState, useEffect } from 'react';

const CalendarComponent: React.FC = () => {
    const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
    const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());
    const [calendarDays, setCalendarDays] = useState<JSX.Element[]>([]);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<string>('');

    useEffect(() => {
        generateCalendar(currentYear, currentMonth);
    }, [currentYear, currentMonth]);

    const generateCalendar = (year: number, month: number) => {
        const firstDayOfMonth = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const firstDayOfWeek = firstDayOfMonth.getDay();

        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const weeks = daysOfWeek.map((day, index) => (
            <div key={index} className="text-center font-semibold">{day}</div>
        ));

        const emptyDays = Array.from({ length: firstDayOfWeek }, (_, index) => (
            <div key={`empty-${index}`} />
        ));

        const days = Array.from({ length: daysInMonth }, (_, index) => {
            const day = index + 1;
            const today = new Date();
            const isToday = year === today.getFullYear() && month === today.getMonth() && day === today.getDate();

            return (
                <div
                    key={day}
                    className={`text-center py-2 border cursor-pointer ${isToday ? 'bg-blue-500 text-white' : ''}`}
                    onClick={() => handleDayClick(day)}
                >
                    {day}
                </div>
            );
        });

        setCalendarDays([...weeks, ...emptyDays, ...days]);
    };

    const handleDayClick = (day: number) => {
        const date = new Date(currentYear, currentMonth, day);
        const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        setSelectedDate(date.toLocaleDateString(undefined, options));
        setModalVisible(true);
    };

    const handlePrevMonth = () => {
        setCurrentMonth(prevMonth => {
            if (prevMonth === 0) {
                setCurrentYear(prevYear => prevYear - 1);
                return 11;
            }
            return prevMonth - 1;
        });
    };

    const handleNextMonth = () => {
        setCurrentMonth(prevMonth => {
            if (prevMonth === 11) {
                setCurrentYear(prevYear => prevYear + 1);
                return 0;
            }
            return prevMonth + 1;
        });
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center">
            <div className="lg:w-7/12 md:w-9/12 sm:w-10/12 mx-auto p-4">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-3 bg-gray-700">
                        <button onClick={handlePrevMonth} className="text-white">Previous</button>
                        <h2 className="text-white">{`${new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(new Date(currentYear, currentMonth))}`}</h2>
                        <button onClick={handleNextMonth} className="text-white">Next</button>
                    </div>
                    <div className="grid grid-cols-7 gap-2 p-4">
                        {calendarDays}
                    </div>
                </div>
            </div>
            {modalVisible && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
                    <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                        <div className="modal-content py-4 text-left px-6">
                            <div className="flex justify-between items-center pb-3">
                                <p className="text-2xl font-bold">Selected Date</p>
                                <button
                                    onClick={handleCloseModal}
                                    className="modal-close px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring"
                                >
                                    ✕
                                </button>
                            </div>
                            <div className="text-xl font-semibold">{selectedDate}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CalendarComponent;
