import React from 'react'
import Card from '../Card/Card'
export default class Directory extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,

          linkUrl: 'hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: ''
        }
      ]
    };

  }

  render() {
    let gg = this.state.sections.map(({ title, imageUrl, id, linkUrl, size }) => <Card title={title} imageUrl={imageUrl} id={id} linkUrl={linkUrl} key={id} />)
    return (
      <div>
        <div className="row my-5">
          <h2 className="display-2 font-weight-light my-5 col-12 text-center">Find your perfect outfit</h2>

        </div>
        <div className="row">
          {gg}

        </div>
      </div>)
  }
}

