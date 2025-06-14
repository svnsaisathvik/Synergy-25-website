import React, { forwardRef, useMemo, useState, useEffect } from 'react';
import { FixedSizeList as List } from 'react-window';
import EventCard from './EventCard';
import '../styles/DaySection.css';

const DaySection = forwardRef(
  ({ dayData, onEventClick, isActive }, ref) => {
    const [containerWidth, setContainerWidth] = useState(1400);

    useEffect(() => {
      const updateWidth = () => {
        if (ref?.current) {
          setContainerWidth(ref.current.offsetWidth);
        } else {
          setContainerWidth(window.innerWidth - 100);
        }
      };
      
      updateWidth();
      window.addEventListener('resize', updateWidth);
      
      return () => window.removeEventListener('resize', updateWidth);
    }, [ref]);

    const { rows, itemsPerRow, rowHeight } = useMemo(() => {
      const cardWidth = 300;
      const gap = 20;
      const itemsPerRow = Math.max(1, Math.floor((containerWidth + gap) / (cardWidth + gap)));
      
      const eventRows = [];
      for (let i = 0; i < dayData.list.length; i += itemsPerRow) {
        eventRows.push(dayData.list.slice(i, i + itemsPerRow));
      }
      
      const rowHeight = 380;
      
      return {
        rows: eventRows,
        itemsPerRow,
        rowHeight
      };
    }, [dayData.list, containerWidth]);

    const RowRenderer = ({ index, style }) => {
      const rowEvents = rows[index];
      const startIndex = index * itemsPerRow;
      
      return (
        <div style={{...style, paddingBottom: '20px'}}>
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexWrap: 'nowrap'
          }}>
            {rowEvents.map((event, colIndex) => (
              <EventCard
                key={`${dayData.day}-${startIndex + colIndex}`}
                event={event}
                onClick={() => onEventClick(event)}
                delay={(startIndex + colIndex) * 0.1}
              />
            ))}
          </div>
        </div>
      );
    };

    const totalHeight = rows.length * rowHeight;

    // For small lists or when virtualization isn't needed, render normally
    if (dayData.list.length <= 20) {
      return (
        <div
          ref={ref}
          className={`day-section ${isActive ? 'active' : ''}`}
          id={`day-${dayData.day}`}
        >
          <div className="day-header">
            <div className="day-title">
              <div className="day-number-container">
                <div className="day-number-wrapper">
                  <p className="gradient-day-number" style={{fontSize:"5rem",fontFamily:"CyberAlert"}}>
                    DAY {dayData.day}
                  </p>
                  <div className="day-number-glow"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="events-grid">
            {dayData.list.map((event, index) => (
              <EventCard
                key={`${dayData.day}-${index}`}
                event={event}
                onClick={() => onEventClick(event)}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={`day-section ${isActive ? 'active' : ''}`}
        id={`day-${dayData.day}`}
      >
        <div className="day-header">
          <div className="day-title">
            <div className="day-number-container">
              <div className="day-number-wrapper">
                <p className="gradient-day-number" style={{fontSize:"5rem",fontFamily:"CyberAlert"}}>
                  DAY {dayData.day}
                </p>
                <div className="day-number-glow"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="events-grid">
          <List
            height={totalHeight}
            itemCount={rows.length}
            itemSize={rowHeight}
            style={{ 
              overflow: 'visible',
              width: '100%'
            }}
            overscanCount={1}
          >
            {RowRenderer}
          </List>
        </div>
      </div>
    );
  }
);

export default DaySection;