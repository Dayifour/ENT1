import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { fr } from "date-fns/locale/fr";
import { useState } from "react";

const Calendrier = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const startDate = startOfWeek(startOfMonth(currentMonth));
  const endDate = endOfWeek(endOfMonth(currentMonth));

  const days = [];
  let day = startDate;

  while (day <= endDate) {
    days.push(day);
    day = addDays(day, 1);
  }

  return (
    <div className="max-w-md mx-auto shadow-gray-300 p-4 rounded-lg shadow-md">
      <h2 className="text-center text-xl font-bold mb-4">
        {format(currentMonth, "MMMM yyyy", { locale: fr })}
      </h2>
      <div className="grid grid-cols-7 gap-1 text-center font-semibold">
        {["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"].map((day) => (
          <div key={day} className="p-2">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {days.map((day, index) => (
          <div
            key={index}
            className={`p-2 rounded-full w-10 h-10 flex items-center justify-center
              ${isToday(day) ? "bg-blue-500 text-white" : "bg-transparent"} 
              ${
                isSameMonth(day, currentMonth) ? "text-black" : "text-gray-400"
              }`}
          >
            {format(day, "d")}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendrier;
