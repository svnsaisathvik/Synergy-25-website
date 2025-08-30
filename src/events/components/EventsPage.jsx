import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DaySection from "./DaySection";
import CustomScrollbar from "./CustomScrollbar";
import { events } from "../data/events.json";
import EventModal from "./EventModal";
import "../styles/EventsPage.css";
import { ArrowLeft, Filter } from "lucide-react";
import FilterModal from "./Filter"; // Import the FilterModal component
import "../styles/main.css";

const EventsPage = () => {
  const [activeDay, setActiveDay] = useState(1);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [searchQuery, setSearchQuery] = useState("");

  const sectionRefs = useRef([]);
  const pageRef = useRef(null);
  const canvasRef = useRef(null);
  const location = useLocation();

  const getAllCategories = () => {
    const categories = new Set();
    categories.add("iiitb exclusive");
    events.forEach((dayData) => {
      dayData.list.forEach((event) => {
        if (event.category) {
          categories.add(event.category);
        }
      });
    });
    return Array.from(categories);
  };

  const categories = getAllCategories();

  // Apply filters to events
  const applyFilters = () => {
    if (selectedCategories.length === 0) {
      setFilteredEvents(events);
    } else {
      const filtered = events.map((dayData) => ({
        ...dayData,
        list: dayData.list.filter((event) => {
          return (
            (selectedCategories.includes(event.category) &&
              !selectedCategories.includes("iiitb exclusive")) ||
            (selectedCategories.includes("iiitb exclusive") &&
              event.iiitb_exclusive === true &&
              (selectedCategories.length != 1
                ? selectedCategories.includes(event.category)
                : true))
          );
        }),
      }));
      setFilteredEvents(filtered);
    }
    setIsFilterModalOpen(false);
  };

  const applySearchFilters = () => {
    let filtered = events;

    // Apply search filter first (always from original events)
    if (searchQuery.trim()) {
      filtered = filtered.map((dayData) => ({
        ...dayData,
        list: dayData.list.filter((event) =>
          event.name.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }));
    }

    setFilteredEvents(filtered);
  };

  useEffect(() => {
    applySearchFilters();
  }, [searchQuery]);

  // Handle category selection
  const handleCategoryChange = (category, isSelected) => {
    if (isSelected) {
      setSelectedCategories((prev) => [...prev, category]);
    } else {
      setSelectedCategories((prev) => prev.filter((cat) => cat !== category));
    }
  };

  // Reset filters
  const resetFilters = () => {
    setSelectedCategories([]);
    setFilteredEvents(events);
  };

  // Matrix rain effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 400; // Header height

    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    const chars =
      "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

    ctx.font = `${fontSize}px monospace`;

    const matrix = () => {
      ctx.fillStyle = "rgba(7, 2, 21, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00d4ff";
      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        ctx.fillText(char, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    };

    const interval = setInterval(matrix, 100);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      drops.length = Math.floor(canvas.width / fontSize);
      drops.fill(1);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const id = location.hash.substring(1);
    if (id != null) {
      const day1 = events[0].list;
      const day2 = events[1].list;
      const day3 = events[2].list;
      const days = [...day1, ...day2, ...day3];
      const event = days.find((e) => e.id == id);

      if (event != null) {
        openEventModal(event);
      }
    }
  }, [location]);

  const handleScroll = () => {
    if (pageRef.current) {
      const scrollPosition = pageRef.current.scrollTop;
      const scrollHeight =
        pageRef.current.scrollHeight - pageRef.current.clientHeight;
      const progress = scrollPosition / scrollHeight;
      setScrollProgress(progress);

      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const { offsetTop } = ref;
          if (scrollPosition >= offsetTop - 200) {
            setActiveDay(index + 1);
          }
        }
      });
    }
  };

  const scrollToDay = (day) => {
    const ref = sectionRefs.current[day - 1];
    if (ref) {
      pageRef.current?.scrollTo({
        top: ref.offsetTop - 150,
        behavior: "smooth",
      });
    }
  };

  const openEventModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeEventModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedEvent(null), 300);
  };

  const handleBackClick = () => {
    // Navigate back to home or previous page
    window.history.back();
  };

  useEffect(() => {
    const currentPageRef = pageRef.current;
    if (currentPageRef) {
      currentPageRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentPageRef) {
        currentPageRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="events-page" ref={pageRef}>
      {/* Smaller Cyberpunk Back Button */}
      <a href="/" className="cyber-back-button">
        <div className="back-button-frame">
          <div className="frame-corner top-left"></div>
          <div className="frame-corner top-right"></div>
          <div className="frame-corner bottom-left"></div>
          <div className="frame-corner bottom-right"></div>
        </div>
        <ArrowLeft className="back-icon" />
        <span className="back-text">BACK</span>
        <div className="button-glow-effect"></div>
      </a>

      {/* Events Header with Matrix Background */}
      <header className="events-header">
        <canvas ref={canvasRef} className="matrix-canvas"></canvas>
        <div className="header-content">
          <h1
            className="events-title cyber-glitch gradient-text"
            data-text="EVENTS"
            style={{ fontFamily: "CyberAlert", fontSize: "l" }}
          >
            EVENTS
          </h1>
        </div>
      </header>

      {/* Sticky Search and Filter Section */}
      <div className="sticky-search-section">
        <div className="search-container">
          <div className="cyber-search-wrapper">
            <input
              type="text"
              placeholder="SEARCH EVENTS..."
              className="cyber-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="search-glow"></div>
            <div className="search-corners">
              <div className="corner top-left"></div>
              <div className="corner top-right"></div>
              <div className="corner bottom-left"></div>
              <div className="corner bottom-right"></div>
            </div>
          </div>

          <button
            className="cyber-filter-button"
            onClick={() => setIsFilterModalOpen(true)}
          >
            <div className="filter-frame">
              <div className="frame-corner top-left"></div>
              <div className="frame-corner top-right"></div>
              <div className="frame-corner bottom-left"></div>
              <div className="frame-corner bottom-right"></div>
            </div>
            <Filter className="filter-icon" />
            <span className="filter-text">FILTER</span>
            <div className="button-pulse"></div>
          </button>
        </div>
      </div>

      <CustomScrollbar
        progress={scrollProgress}
        activeDay={activeDay}
        onDayClick={scrollToDay}
      />

      <div className="events-container">
        {filteredEvents.map((dayData, index) => (
          <DaySection
            key={dayData.day}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            dayData={dayData}
            onEventClick={openEventModal}
            isActive={activeDay === dayData.day}
          />
        ))}
      </div>

      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          isOpen={isModalOpen}
          onClose={closeEventModal}
        />
      )}

      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        categories={categories}
        selectedCategories={selectedCategories}
        onCategoryChange={handleCategoryChange}
        onApplyFilter={applyFilters}
        resetFilters={resetFilters}
      />

      {/* Scan line effect */}
      <div className="scan-line"></div>
    </div>
  );
};

export default EventsPage;
