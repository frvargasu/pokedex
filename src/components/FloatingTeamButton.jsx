import React from 'react'
import './FloatingTeamButton.css'

const FloatingTeamButton = ({ teamCount, onClick }) => {
  return (
    <button className="floating-team-btn" onClick={onClick}>
      <div className="team-icon">🎮</div>
      <div className="team-count">{teamCount}/6</div>
      <div className="team-label">Mi Equipo</div>
    </button>
  )
}

export default FloatingTeamButton
