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
}
