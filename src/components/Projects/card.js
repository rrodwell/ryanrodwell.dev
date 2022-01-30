import React from 'react'

export default function Card({ cardTitle, cardSubtitle, link }) {
  return (
    <div className="col-lg-4">
      <div className="card mx-3 my-5" style={{ height: '220px' }}>
        <div className="card-body d-flex flex-column">
          <h2 className="card-title">{cardTitle}</h2>
          <p className="card-text flex-grow-1">{cardSubtitle}</p>
          <a href={link} className="card-link">
            See
          </a>
        </div>
      </div>
    </div>
  )
}
