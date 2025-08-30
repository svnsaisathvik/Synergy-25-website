import React from 'react';
import { X } from 'lucide-react';
import '../styles/Filter.css';

const FilterModal = ({ isOpen, onClose, categories, selectedCategories, onCategoryChange, onApplyFilter, resetFilters }) => {
  if (!isOpen) return null;

  return (
    <div className="filter-modal-overlay">
      <div className="filter-modal-container">
        {/* Cyberpunk frame corners */}
        <div className="modal-frame">
          <div className="frame-corner top-left"></div>
          <div className="frame-corner top-right"></div>
          <div className="frame-corner bottom-left"></div>
          <div className="frame-corner bottom-right"></div>
        </div>
        
        {/* Matrix background effect */}
        <div className="modal-matrix-bg"></div>
        
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h2 className="modal-title cyber-glitch" data-text="FILTER_EVENTS">
              FILTER_EVENTS
            </h2>
            <button onClick={onClose} className="modal-close-btn">
              <X size={20} />
            </button>
          </div>

          {/* Categories */}
          <div className="categories-section">
            <h3 className="categories-title">SELECT_CATEGORIES:</h3>
            <div className="categories-list">
              {categories.map((category) => (
                <label key={category} className="category-item">
                  <div className="cyber-checkbox-wrapper">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={(e) => onCategoryChange(category, e.target.checked)}
                      className="cyber-checkbox-input"
                    />
                    <div className={`cyber-checkbox ${selectedCategories.includes(category) ? 'checked' : ''}`}>
                      <div className="checkbox-corners">
                        <div className="corner top-left"></div>
                        <div className="corner top-right"></div>
                        <div className="corner bottom-left"></div>
                        <div className="corner bottom-right"></div>
                      </div>
                      {selectedCategories.includes(category) && (
                        <div className="checkbox-fill">
                          <div className="fill-pulse"></div>
                          <div className="checkbox-tick">✓</div>
                        </div>
                      )}
                    </div>
                  </div>
                  <span className={`category-label ${selectedCategories.includes(category) ? 'selected' : ''}`}>
                    {category}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="modal-actions">
            <button onClick={onApplyFilter} className="apply-btn">
              <div className="btn-frame">
                <div className="frame-corner top-left"></div>
                <div className="frame-corner top-right"></div>
                <div className="frame-corner bottom-left"></div>
                <div className="frame-corner bottom-right"></div>
              </div>
              <span>APPLY</span>
              <div className="btn-glow"></div>
            </button>
            
            <button onClick={resetFilters} className="reset-btn">
              <div className="btn-frame">
                <div className="frame-corner top-left"></div>
                <div className="frame-corner top-right"></div>
                <div className="frame-corner bottom-left"></div>
                <div className="frame-corner bottom-right"></div>
              </div>
              <span>RESET</span>
            </button>
            
            <button onClick={onClose} className="cancel-btn">
              <div className="btn-frame">
                <div className="frame-corner top-left"></div>
                <div className="frame-corner top-right"></div>
                <div className="frame-corner bottom-left"></div>
                <div className="frame-corner bottom-right"></div>
              </div>
              <span>CANCEL</span>
            </button>
          </div>
        </div>
        
        {/* Scan lines */}
        <div className="scan-lines">
          <div className="scan-line-1"></div>
          <div className="scan-line-2"></div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;