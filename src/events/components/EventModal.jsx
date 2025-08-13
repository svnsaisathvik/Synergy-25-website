import React from "react"
import { useEffect, useRef, useState } from "react"
import { X } from "lucide-react"
import "../styles/EventModal.css"

const EventModal = ({ event, isOpen, onClose }) => {
  const modalRef = useRef(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      setTimeout(() => setLoaded(true), 100)

      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    } else {
      setLoaded(false)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!event) return null

  return (
    <section id={event.id}>
    <div className={`hud-modal-overlay ${isOpen ? "open" : ""}`}>
      <div ref={modalRef} className={`hud-modal ${isOpen ? "open" : ""} ${loaded ? "loaded" : ""}`}>
        {/* HUD Frame */}
        <div className="hud-frame">
          <div className="hud-corner top-left"></div>
          <div className="hud-corner top-right"></div>
          <div className="hud-corner bottom-left"></div>
          <div className="hud-corner bottom-right"></div>

          <div className="hud-edge top"></div>
          <div className="hud-edge right"></div>
          <div className="hud-edge bottom"></div>
          <div className="hud-edge left"></div>

          <div className="hud-scan-line"></div>
        </div>

        {/* Close button */}
        <button className="hud-close-button" onClick={onClose}>
          <X className="close-icon" />
          <div className="close-glow"></div>
        </button>

        <div className="hud-content">
          {/* Left side - Event poster */}
          <div className="hud-poster-section">
            <div className="category-tag">{event.category.toUpperCase()}</div>
            <div className="poster-container">
              <div className="poster-frame">
                <div className="poster-frame-corner tl"></div>
                <div className="poster-frame-corner tr"></div>
                <div className="poster-frame-corner bl"></div>
                <div className="poster-frame-corner br"></div>
              </div>
              <img
                src={event.image || "/placeholder.svg"}
                alt={event.name}
                className="event-poster"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
              <div className="poster-overlay"></div>
              <div className="poster-scan"></div>
            </div>
          </div>

          {/* Right side - Event details */}
          <div className="hud-details-section">
            <div className="hud-details-content">
              {/* Event title with glitch effect */}
              <h1 className="hud-title">
                <span className="hud-title-gradient-text" data-text={event.name} style={{fontFamily:"CyberAlert"}}>
                  {event.name}
                </span>
                <div className="title-glow"></div>
              </h1>

              {/* Event info grid */}
              <div className="hud-info-grid">
                <div className="hud-info-item">
                  <div className="info-label" style={{fontFamily:"CyberAlert"}}>TIME</div>
                  <div className="info-value" style={{fontFamily:"OrbitronBold"}}>{event.time}</div>
                  <div className="info-underline"></div>
                </div>

                <div className="hud-info-item">
                  <div className="info-label" style={{fontFamily:"CyberAlert"}}>LOCATION</div>
                  <div className="info-value" style={{fontFamily:"OrbitronBold"}}>{event.venue}</div>
                  <div className="info-underline"></div>
                </div>

                {event.fee!=0&&<div className="hud-info-item prize-item">
                  <div className="info-label" style={{fontFamily:"CyberAlert"}}>REGISTRATION FEE</div>
                  <div className="info-value prize-value" style={{fontFamily:"OrbitronBold"}}>₹ {event.fee}</div>
                  <div className="info-underline prize-underline"></div>
                </div>}
              </div>

              {/* Registration Fee */}
              {event.prizePool!=0&&<div className="hud-section registration-fee-section">
                <div className="section-header">
                  <div className="section-line"></div>
                  <h3 className="gradient-section-title" style={{fontFamily:"CyberAlert"}}>PRIZE POOL</h3>
                  <div className="section-line"></div>
                </div>
                <div className="registration-fee">
                  <span className="fee-amount" style={{fontFamily:"OrbitronRegular"}}>₹ {event.prizePool}</span>
                </div>
              </div>}

              {/* About section */}
              <div className="hud-section">
                <div className="section-header">
                  <div className="section-line"></div>
                  <h3 className="gradient-section-title" style={{fontFamily:"CyberAlert"}}>ABOUT THE EVENT</h3>
                  <div className="section-line"></div>
                </div>
                <div className="section-content">
                  <p className="about-text" style={{fontFamily:"OrbitronBold"}}>{event.about}</p>
                </div>
              </div>

              {/* Requirements section */}
              {/* {event.requirements && (
                <div className="hud-section">
                  <div className="section-header">
                    <div className="section-line"></div>
                    <h3 className="section-title">REQUIREMENTS</h3>
                    <div className="section-line"></div>
                  </div>
                  <ul className="hud-list">
                    {event.requirements.map((req, index) => (
                      <li key={index} className="hud-list-item">
                        <span className="list-marker">{">"}</span>
                        <span className="list-text">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )} */}

              {/* Rules section */}
              {/* {event.rules && (
                <div className="hud-section">
                  <div className="section-header">
                    <div className="section-line"></div>
                    <h3 className="section-title">COMPETITION RULES</h3>
                    <div className="section-line"></div>
                  </div>
                  <ul className="hud-list">
                    {event.rules.map((rule, index) => (
                      <li key={index} className="hud-list-item">
                        <span className="list-marker">{">"}</span>
                        <span className="list-text">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )} */}

              {/* Event Coordinators section */}
              {event.spocs && (
                <div className="hud-section">
                  <div className="section-header">
                    <div className="section-line"></div>
                    <h3 className="gradient-section-title" style={{fontFamily:"CyberAlert"}}>EVENT COORDINATORS</h3>
                    <div className="section-line"></div>
                  </div>
                  <div className="contacts-grid">
                    {event.spocs.map((contact, index) => (
                      <div key={index} className="contact-card">
                        <div className="contact-name" style={{fontFamily:"OrbitronBold"}}>{contact.name}</div>
                        <div className="contact-phone" style={{fontFamily:"OrbitronBold"}}>{contact.contact}</div>
                        <div className="card-glow"></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action buttons */}
              <div className="action-buttons hud-section">
                <button className="hud-rules-button" onClick = {()=>{window.open(event.rulespdf, '_blank');}}>
                  <span className="rules-text" style={{fontFamily:"CyberAlert"}}>VIEW EVENT RULES</span>
                  <div className="button-glow-blue"></div>
                </button>
                {event.registration_form.map((form, index)=>{ return <button key={index} onClick = {()=>{window.open(form.link, '_blank');}} className="hud-register-button">
                  <span className="register-text" style={{fontFamily:"CyberAlert"}}>{form.info==""?"REGISTER NOW":form.info}</span>
                  <div className="button-glow"></div>
                  <div className="button-glitch-1"></div>
                  <div className="button-glitch-2"></div>
                </button>;})}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
  )
}

export default EventModal