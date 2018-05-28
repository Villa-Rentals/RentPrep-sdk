'use strict'

import Base from './abstract/base'

export default class SmartMove extends Base {
  /**
   * Create a new Application
   * @param  {object} application Application object (https://stage.rentprep.com/docs/SmartMoveAPI/#application)
   * @param  {object} product     Product object (https://stage.rentprep.com/docs/SmartMoveAPI/#product)
   * @param  {object} customer    Customer object (https://stage.rentprep.com/docs/SmartMoveAPI/#customer)
   * @param  {object} property    Property object (https://stage.rentprep.com/docs/SmartMoveAPI/#property)
   * @return {promise}            Promise from axios
   */
  create (application, product, customer, property) {
    return this.request('POST', '/api/smartmove/application/create', {
      'Product': product,
      'Application': application,
      'Customer': customer,
      'Property': property
    })
  }

  /**
   * Create a new application natively
   * @param  {object} application Application object (https://stage.rentprep.com/docs/SmartMoveAPI/#application)
   * @param  {object} product     Product object (https://stage.rentprep.com/docs/SmartMoveAPI/#product)
   * @param  {object} customer    Customer object (https://stage.rentprep.com/docs/SmartMoveAPI/#customer)
   * @param  {object} property    Property object (https://stage.rentprep.com/docs/SmartMoveAPI/#property)
   * @param  {object} card        Card Credit card object
   * @return {promise}            Promise from axios
   */
  createNatively (application, product, customer, property, card) {
    return this.request('POST', '/api/smartmove/application/create/embedded', {
      'Product': product,
      'Application': application,
      'Customer': customer,
      'Property': property,
      'CreditCard': card
    })
  }

  /**
   * Delete application
   * @param  {Number} applicationId Application id
   * @param  {string} referenceId   Cusstomer id in your system
   * @param  {string} email         The email of the tenant you'd like to delete from the application
   * @return {promise}              Promise from axios
   */
  removeApplicant (applicationId, referenceId, email) {
    return this.request('POST', '/api/smartmove/applicant/delete', {
      'applicationId': applicationId,
      'referenceId': referenceId,
      'email': email
    })
  }

  /**
   * Add applicant to application
   * @param  {Number} applicationId Application id
   * @param  {string} referenceId   Cusstomer id in your system
   * @param  {string} email         The email of the tenant you'd like to add from the application
   * @return {promise}              Promise from axios
   */
  addApplicant (applicationId, referenceId, email) {
    return this.request('POST', '/api/smartmove/applicant/add', {
      'applicationId': applicationId,
      'referenceId': referenceId,
      'email': email
    })
  }

  /**
   * Get details for application
   * @param  {Number} applicationId Application id
   * @param  {string} referenceId   Cusstomer id in your system
   * @return {promise}              Promise from axios
   */
  getById (applicationId, referenceId) {
    return this.request('POST', '/api/smartmove/application/details', {
      'applicationId': applicationId,
      'referenceId': referenceId
    })
  }

  /**
   * Get all applications
   * @param  {string} referenceId Customer id from your server
   * @param  {Number} [limit=10]  (optional) Limit the number of results returned. Default is 10 if no limit given
   * @param  {Number} [page=0]    (optional) The current page of data for paginated data. Will offset results using page*limit
   * @return {promise}             Promise from axios
   */
  get (referenceId, limit = 10, page = 1) {
    return this.request('POST', '/api/smartmove/application/all', {
      'referenceId': referenceId,
      'limit': limit,
      'page': page
    })
  }

  /**
   * Cancel application
   * @param  {Number} applicationId Application id
   * @param  {string} referenceId   Cusstomer id in your system
   * @return {promise}              Promise from axios
   */
  cancelApplication (applicationId, referenceId) {
    return this.request('POST', '/api/smartmove/application/cancel', {
      'applicationId': applicationId,
      'referenceId': referenceId
    })
  }

  /**
   * Get report url
   * @param  {number} applicationId ApplicationId
   * @param  {string} referenceId   Customer id in oyur system
   * @return {Promise}               Promise from axios
   */
  getReportURL (applicationId, referenceId) {
    return this.request('POST', '/api/smartmove/application/reportUrl', {
      'applicationId': applicationId,
      'referenceId': referenceId
    })
  }

  /**
   * Get report status
   * @param  {number} applicationId ApplicationId
   * @param  {string} referenceId   Customer id in oyur system
   * @return {Promise}               Promise from axios
   */
  getReportStatus (applicationId, referenceId) {
    return this.request('POST', '/api/smartmove/application/report/status', {
      'applicationId': applicationId,
      'referenceId': referenceId
    })
  }
}
