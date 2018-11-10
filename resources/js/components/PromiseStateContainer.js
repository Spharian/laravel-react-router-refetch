import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect, PromiseState } from 'react-refetch'
import Loading from './Loading'
import Error from './Error'

class PromiseStateContainer extends Component {

  isEmptyObject(object) {
    return Object.keys(object).length === 0
  }

  render() {
    const { ps, onPending, onNoResults, onRejection, onFulfillment } = this.props

    if (ps.pending) {
      return onPending(ps.meta)
    } else if (ps.rejected) {
      return onRejection(ps.reason, ps.meta)
    } else if (ps.fulfilled && this.isEmptyObject(ps.value)) {
      return onNoResults(ps.value, ps.meta)
    } else if (ps.fulfilled) {
      return onFulfillment(ps.value, ps.meta)
    } else {
      console.log('invalid promise state', ps)
      return null
    }
  }

}

PromiseStateContainer.propTypes = {
  ps: PropTypes.instanceOf(PromiseState).isRequired,
  onPending: PropTypes.func,
  onNoResults: PropTypes.func,
  onRejection: PropTypes.func,
  onFulfillment: PropTypes.func.isRequired,
}

PromiseStateContainer.defaultProps = {
  onPending: meta => <Loading />,
  onNoResults: (value, meta) => <Error error="No results" />,
  onRejection: (reason, meta) => <Error error={reason} />,
}

export default PromiseStateContainer
