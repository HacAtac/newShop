import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome to Hac Shop',
  description: 'We sell the best electronics at competitive prices',
  keywords:
    'hac shop, hac, shop, react, redux, react redux, buy electronics, cheap electronics',
}

export default Meta
