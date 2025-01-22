import { useState } from 'react';

const Calendar = () => {
  const daysOfWeek = ['LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM', 'DIM'];
  const dates = [
    ['', '', '', '', 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, '', '', '', '', '', ''],
  ];
  const [events] = useState([
    { id: 1, title: 'Evènements', type: 'AUTRES' },
    { id: 2, title: 'Evènements', type: 'AUTRES' },
    { id: 3, title: 'Evènements', type: 'AUTRES' },
    { id: 4, title: 'Evènements', type: 'AUTRES' },
  ]);

  return (
    <div className="max-w-sm mx-auto font-sans">
      {/* Header */}
      <h3 className="text-center text-lg font-bold mb-4">Août 2024</h3>

      {/* Calendar */}
      <div className="grid grid-cols-7 gap-2 mb-6">
        {/* Days of the week */}
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center font-semibold text-gray-700">
            {day}
          </div>
        ))}
        {/* Dates */}
        {dates.flat().map((date, index) => (
          <div
            key={index}
            className={`text-center py-2 rounded-lg ${
              date
                ? 'bg-gray-100 border border-gray-300'
                : 'bg-transparent'
            }`}
          >
            {date}
          </div>
        ))}
      </div>

      {/* Events */}
      <h4 className="font-semibold text-lg mb-2">Evènements</h4>
      <div className="space-y-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex justify-between items-center border-b pb-2 border-gray-200"
          >
            <span>{event.title}</span>
            <span className="text-gray-500 text-sm">{event.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
