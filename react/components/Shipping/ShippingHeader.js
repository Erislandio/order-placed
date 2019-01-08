import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { PrettyAddress } from 'vtex.order-details'
import TranslateEstimate from 'vtex.shipping-estimate-translator/TranslateEstimate'

const ShippingHeader = ({ shippingData, index, numPackages }) => {
  const multipleDeliveries = (numPackages > 1)
  return (
    <Fragment>
      <p className="t-heading-4-ns t-heading-5">
        Entrega em casa
        {
          multipleDeliveries &&
          ` - n˚ ${index + 1} de ${numPackages}`
        }
        <br />
        <small className="c-muted-2 t-small">
          <TranslateEstimate shippingEstimate={shippingData.shippingEstimate} />
        </small>
      </p>
      <PrettyAddress address={shippingData.address} />
    </Fragment>
  )
}

ShippingHeader.propTypes = {
  shippingData: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  numPackages: PropTypes.number.isRequired,
}

export default ShippingHeader