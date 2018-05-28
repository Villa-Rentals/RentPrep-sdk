'use strict'

import axios from 'axios'

export default class Base {
  constructor (args) {
    this.production = args.production
    this.key = args.key
  }

  formatUrl (path) {
    let domain = 'stage.rentprep.com'
    if (this.production) {
      domain = 'screen.rentprep.com'
    }
    return `https://${domain}${path}`
  }

  request (method, path, params = {}) {
    let headers = {
      'Content-Type': 'application/json',
      'x-apiKey': this.key
    }

    return axios({
      method: method,
      url: this.formatUrl(path),
      data: params,
      headers: headers
    })
  }
}
