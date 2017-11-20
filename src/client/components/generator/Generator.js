import React from 'react'
import ReactInputHandler from 'react-input-handler'

import Banner from './Banner'

import style from './Generator.scss'

class Generator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      template: 'apex',
      name: 'Rubens',
      description: 'Mariuzzo'
    }
    this.inputHandler = ReactInputHandler.bind(this)
  }
  render() {
    const { name, description } = this.state
    const bannerData = { name, description }
    return (
      <div>
        <div className={style.sidebar}>
          <h2>GitHub Banner Generator</h2>
          <label>
            <div>Select a template:</div>
            <select name="template" onChange={this.inputHandler}>
              <option>apex</option>
            </select>
          </label>
          <label>
            <div>Name:</div>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.inputHandler}
            />
          </label>
          <label>
            <div>Description:</div>
            <input
              type="text"
              name="description"
              value={description}
              onChange={this.inputHandler}
            />
          </label>
        </div>
        <div className={style.banner}>
          <Banner data={bannerData} />
        </div>
      </div>
    )
  }
}

export default Generator
