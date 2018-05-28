'use strict'

import Base from './abstract/base'

export default class SmartMove extends Base {
  /**
   * Createa new Application
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
}
