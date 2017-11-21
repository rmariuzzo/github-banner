import React from 'react'

export default {
  name: 'Reflection',
  author: 'rmariuzzo',
  inspiration: null,
  fields: {
    name: { label: 'Name', type: 'text' }
  },
  render(data) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="888px"
        height="443px"
        viewBox="0 0 888 443"
        version="1.1"
      >
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          fontSize="48"
          fontFamily="Arial-BoldMT, Arial"
          fontWeight="bold"
        >
          <g id="gh-banner">
            <text id="gh-title-reflection" fill="#4C4A4A">
              <tspan x="444" y="212" textAnchor="middle">
                {data.name}
              </tspan>
            </text>
            <text
              id="gh-title"
              transform="translate(444.500000, 248.500000) scale(1, -1) translate(-444.500000, -248.500000) "
              fill="#F4F0F0"
            >
              <tspan x="444" y="265" textAnchor="middle">
                {data.name}
              </tspan>
            </text>
          </g>
        </g>
      </svg>
    )
  }
}
