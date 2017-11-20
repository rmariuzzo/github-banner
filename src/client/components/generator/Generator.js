import React from 'react'
import ReactInputHandler from 'react-input-handler'
import { map, reduce } from 'lodash'

import templates from './templates/templates'

import style from './Generator.scss'

class Generator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      template: templates[0].name
    }
    this.inputHandler = ReactInputHandler.bind(this)
  }

  componentWillMount() {
    const defaultData = [
      'GitHub Banner Generator',
      'A tool to create GitHub banners!'
    ]
    const selectedTemplate = templates.find(t => t.name === this.state.template)
    const fields = reduce(
      selectedTemplate.fields,
      (prev, curr, key) => {
        prev[`field-${key}`] = defaultData.shift()
        return prev
      },
      {}
    )
    this.setState(fields)
  }

  render() {
    const { template } = this.state
    const selectedTemplate = templates.find(t => t.name === template)
    const templateData = reduce(
      this.state,
      (prev, curr, key) => {
        if (key.startsWith('field-')) {
          prev[key.replace(/^field-/, '')] = curr
        }
        return prev
      },
      {}
    )

    return (
      <div>
        <div className={style.sidebar}>
          <h2>GitHub Banner Generator</h2>
          <label>
            <div>Select a template:</div>
            <select name="template" onChange={this.inputHandler}>
              {templates.map((template, index) => (
                <option key={index}>{template.name}</option>
              ))}
            </select>
          </label>
          {map(selectedTemplate.fields, (field, key) => (
            <label key={key}>
              <div>{field.label}:</div>
              <input
                type={field.type}
                name={`field-${key}`}
                value={this.state[`field-${key}`]}
                onChange={this.inputHandler}
              />
            </label>
          ))}
        </div>
        <div className={style.banner}>
          {selectedTemplate.render(templateData)}
        </div>
      </div>
    )
  }
}

export default Generator
