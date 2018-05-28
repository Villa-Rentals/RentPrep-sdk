'use strict'

import axios from 'axios'

export default class Base {
  constructor (args) {
    this.production = args.production
    this.key = args.key
  }

  formatUrl (path) {
    let domain = 'sandbox.api.intuit.com'
    if (this.production) {
      domain = 'api.intuit.com'
    }
    return `https://${domain}`
  }

  request (method, path, params = {}) {
    let headers = {
      'Content-Type': 'application/json'
    }

    if (path !== '/payments/tokens') {
      headers['x-apiKey'] = this.key
    }

    return axios({
      method: method,
      url: this.formatUrl(path),
      data: params,
      headers: headers
    })
  }
}
