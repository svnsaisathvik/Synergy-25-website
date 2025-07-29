import { useState } from "react";

const eventData = {
  'Day 1': [
    { title: "DECEPTIVE", subtitle: "AI VS REALITY", note: "DEEP FAKE CHALLENGE" },
    { title: "CODE RUSH", subtitle: "HACKATHON", note: "24-HOUR" },
    { title: "PIXEL WARS", subtitle: "UI BATTLE", note: "DESIGN" }
  ],
  'Day 2': [
    { title: "SPEAKER X", subtitle: "KEYNOTE", note: "TECH TALK" },
    { title: "BOT BLITZ", subtitle: "ROBO RACE", note: "TRACK EVENT" },
    { title: "BYTE QUEST", subtitle: "QUIZ", note: "TECHNICAL" }
  ],
  'Day 3': [
    { title: "DEV JAM", subtitle: "APP CONTEST", note: "PITCH + BUILD" },
    { title: "INFINITY LOOP", subtitle: "CP ROUND", note: "ICPC FORMAT" },
    { title: "XR SHOWCASE", subtitle: "AR/VR DEMO", note: "LIVE" }
  ],
};

const EventsSection = () => {
  const [activeDay, setActiveDay] = useState("Day 1");
  const days = ["Day 1", "Day 2", "Day 3"];

  return (
    <section id="events" className="bg-[#0c0c1c] text-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-16 relative z-10">EVENTS</h2>

        {/* Radial Day Selector */}
        <div className="relative h-60 w-full flex items-center justify-center mb-20">
          <div className="relative w-[200px] h-[200px] rounded-full border border-gray-700 flex items-center justify-center">
            {days.map((day, idx) => {
              const angle = (idx / days.length) * 360;
              return (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`absolute px-4 py-2 rounded-full font-semibold text-sm bg-gradient-to-br from-slate-700 to-slate-500 hover:from-slate-600 hover:to-slate-400 transition-all duration-300 quicksand-font ${
                    activeDay === day ? "ring-2 ring-cyan-400 scale-110" : ""
                  }`}
                  style={{
                    transform: `rotate(${angle}deg) translate(100px) rotate(-${angle}deg)`
                  }}
                >
                  {day}
                </button>
              );
            })}
            <div className="absolute w-2 h-2 bg-cyan-400 rounded-full"></div>
          </div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 transition-all duration-500">
          {eventData[activeDay].map((event, i) => (
            <div
              key={i}
              className="aspect-[3/4] bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl border border-blue-500/30 hover:border-blue-400/50 p-4 cursor-pointer group overflow-hidden transform hover:scale-105 transition-all duration-300 flex flex-col"
            >
              <div className="text-red-500 font-bold text-lg mb-2 trebuchet-font">
                {event.title}
              </div>
              <div className="text-white text-sm text-center mb-2 quicksand-font">
                {event.subtitle}
              </div>
              <div className="text-xs text-gray-300 text-center mb-2 quicksand-font">
                {event.note}
              </div>
              <div className="flex-1 flex items-end">
                <div className="text-xs text-gray-400 quicksand-font">REAL-TIME EVENT</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
