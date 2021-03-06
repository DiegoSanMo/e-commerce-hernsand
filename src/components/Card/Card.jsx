import React from 'react'
import { NewsHeaderCard } from 'react-ui-cards';
import { withRouter } from 'react-router-dom'

const Card = ({ title, imageUrl, id, linkUrl, history, match }) => {
  
  return (
    <div className="col-12 col-md-4 my-3" style={{ width: '100%' }} onClick={() => history.push(`${match.url}${linkUrl}`)}>
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
    </div>)

}

export default withRouter(Card)