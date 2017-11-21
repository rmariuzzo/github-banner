import React from 'react'

export default {
  name: 'Nigth Gradient',
  author: 'rmariuzzo',
  inspiration: 'https://www.pinterest.com/pin/359302876513662615/',
  fields: {
    name: { label: 'Name', type: 'text' },
    description: { label: 'Description', type: 'text' }
  },
  render(data) {
    return (
      <svg
        width="888px"
        height="443px"
        viewBox="0 0 888 443"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ background: '#F7F7F7' }}
      >
        <defs>
          <linearGradient
            x1="87.9681034%"
            y1="50%"
            x2="1.27351722%"
            y2="50%"
            id="linearGradient-1"
          >
            <stop stopColor="#1F202E" offset="0%" />
            <stop stopColor="#865A3C" offset="67.6877392%" />
            <stop stopColor="#1F202E" offset="100%" />
          </linearGradient>
        </defs>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          fontFamily="Arial-BoldMT, Arial"
          fontWeight="bold"
        >
          <g id="gh-banner">
            <text
              id="gh-title-reflection"
              fill="url(#linearGradient-1)"
              fontSize="48"
            >
              <tspan x="444" y="234" textAnchor="middle">
                {data.name}
              </tspan>
            </text>
            <text id="gh-title-reflection-copy" fontSize="18" fill="#4D4E56">
              <tspan x="444" y="309" textAnchor="middle">
                {data.description}
              </tspan>
            </text>
          </g>
        </g>
      </svg>
    )
  }
}
