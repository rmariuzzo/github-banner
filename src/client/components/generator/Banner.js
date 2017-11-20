import React from 'react'
import PropTypes from 'prop-types'

import style from './Banner.scss'

const Banner = props => (
  <div className={style.banner}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="880px"
      height="443px"
      viewBox="0 0 880 443"
      version="1.1"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="gh-title">
          <g id="gh-title-inner" transform="translate(343.000000, 210.000000)">
            <text
              id="text"
              fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"
              fontSize="13"
              fontWeight="700"
              letterSpacing="1.52941179"
              fill="#1D1D1D"
              textAnchor="end"
            >
              <tspan x="55" y="15">
                {props.data.name}
              </tspan>
            </text>

            <text
              id="title"
              fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"
              fontSize="13"
              fontWeight="300"
              letterSpacing="1.52941179"
              fill="#1D1D1D"
            >
              <tspan x="85" y="15">
                {props.data.description}
              </tspan>
            </text>

            <path
              d="M70.5,22.5 L70.5,0.5"
              id="Line"
              stroke="#E1E8EF"
              strokeLinecap="square"
            />
          </g>
        </g>
      </g>
    </svg>
  </div>
)

Banner.propTypes = {
  data: PropTypes.any
}

export default Banner
