import React from 'react'
import SHOP_DATA from './shop.data'

import CollectionPreview from '../../components/Collection-preview/collection-preview'

export default class ShopPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    let collectionsItems = this.state.collections.map(({ id, ...collectionProps }) => <CollectionPreview key={id} {...collectionProps} />)
    return (
      <div>
        {collectionsItems}
      </div>
    )
  }
}
