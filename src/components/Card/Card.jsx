import React from 'react'
import { NewsHeaderCard } from 'react-ui-cards';

const Card = ({ title, imageUrl, id, linkUrl, col }) => {

  let categories = id < 4 ?
    <NewsHeaderCard
      className="m-0 p-0"
      href={linkUrl}
      thumbnail={imageUrl}
      title={title}
      author='Daily Sport'
      date='Feb 2, 2018'
      tags={['nature', 'photo', () => (<i>component</i>)]}
    /> : null
  console.log('categories: ', categories);
  return < div className="col col-md-4">{categories}</div>
}

export default Card


{/* <div className={`col col-md-3`}>
    <NewsHeaderCard
      className="m-0 p-0"
      href={linkUrl}
      thumbnail={imageUrl}
      title={title}
      author='Daily Sport'
      date='Feb 2, 2018'
      tags={['nature', 'photo', () => (<i>component</i>)]}
    />
  </div> */}