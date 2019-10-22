import React from 'react'
import { NewsHeaderCard } from 'react-ui-cards'

export default function Categories({ title, imageUrl, id, linkUrl, size }) {
  return (
    <div className="col-12 col-md-6 my-3" style={{ width: '100%' }}>
      <NewsHeaderCard
        style={{ width: '100%' }}
        className="m-0 p-0 text-center shadow p-3 mb-5 bg-white rounded"
        href={linkUrl}
        thumbnail={imageUrl}
        title={title.toUpperCase()}
        // author='Daily Sport'
        // date='Feb 2, 2018'
        // tags={['nature', 'photo', () => (<i>component</i>)]}
      />
    </div>
  )
}
