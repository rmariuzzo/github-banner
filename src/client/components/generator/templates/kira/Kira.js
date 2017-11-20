import React from 'react'

export default {
  name: 'Kira',
  author: 'https://dribbble.com/shots/2832706-Optimizing-Content',
  fields: {
    name: { label: 'Name', type: 'text' },
    description: { label: 'Description', type: 'text' }
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
          id="github-banner"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="gh-title" fill="#000000">
            <text
              id="name"
              fontFamily="Roboto-Bold, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"
              fontSize="48"
              fontWeight="bold"
              textAnchor="middle"
            >
              <tspan x="444" y="210">
                {data.name}
              </tspan>
            </text>
            <text
              id="description"
              fontFamily="Roboto-Regular, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"
              fontSize="18"
              fontWeight="normal"
              textAnchor="middle"
            >
              <tspan x="444" y="259">
                {data.description}
              </tspan>
            </text>
          </g>
        </g>
      </svg>
    )
  }
}
