import React from 'react'
import Loading from '../components/Loading'
import Error from '../components/Error'

const RefetchMixin = {
  fulfilled: function(resource, callback) {
    if (resource.pending) {
      return <Loading />
    } else if (resource.rejected) {
      return <Error error={resource.reason} />
    } else if (resource.fulfilled) {
      return callback(resource.value);
    }
  }
};

export default RefetchMixin;
