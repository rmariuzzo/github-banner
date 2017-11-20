import React from 'react'
import ReactInputHandler from 'react-input-handler'
import SvgSaver from 'svgsaver'
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
          <label className={style.field}>
            <div>Select a template:</div>
            <select
              className={style.input}
              name="template"
              onChange={this.inputHandler}
            >
              {templates.map((template, index) => (
                <option key={index}>{template.name}</option>
              ))}
            </select>
            <div className={style.author}>
              Author: {selectedTemplate.author}
            </div>
          </label>
          {map(selectedTemplate.fields, (field, key) => (
            <label key={key} className={style.field}>
              <div>{field.label}:</div>
              <input
                className={style.input}
                type={field.type}
                name={`field-${key}`}
                value={this.state[`field-${key}`]}
                onChange={this.inputHandler}
              />
            </label>
          ))}
          <button className={style.button} onClick={() => this.onDownloadSvg()}>
            Download SVG
          </button>
          <button className={style.button} onClick={() => this.onDownloadPng()}>
            Download PNG
          </button>
          <a
            className={style.source}
            href="https://github.com/rmariuzzo/github-banner"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check <em>the source</em> on GitHub!
          </a>
        </div>
        <div className={style.banner}>
          {selectedTemplate.render(templateData)}
        </div>
      </div>
    )
  }

  onDownloadSvg() {
    new SvgSaver().asSvg(document.querySelector('svg'))
  }

  onDownloadPng() {
    new SvgSaver().asPng(document.querySelector('svg'))
  }
}

export default Generator
