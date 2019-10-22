import React from 'react'
import Card from '../Card/Card'
import { Parallax } from 'react-parallax'
import Categories from '../Categories/Categories'
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
        }
      ],
      category: [
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          id: 5,
          linkUrl: ''
        }
      ]
    };

  }

  render() {
    let categories = this.state.sections.map(({ id, ...categoriesProps }) => <Card key={id} {...categoriesProps} />)
    let styles = this.state.category.map(({ id, ...stylesProps }) => <Categories key={id} {...stylesProps} />)
    return (
      <div>
        <div className="row my-5">
          <br />
          <p className="h2 display-2 font-weight-light mt-5 mb-5 col-12 text-center">Find your perfect style</p>
          <br />
        </div>
        <div className="row my-5">
          {styles}
        </div>
        <br />
        <p className="h2 display-2 font-weight-light mt-5 mb-5 col-12 text-center">Discover new worlds</p>
        <br />
        <div className="row my-5">
          <Parallax
            // blur={10}
            bgImage="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            bgImageAlt="the cat"
            strength={400}
            style={{ width: '100%' }}
          >

            <div style={{ height: '400px' }} />
          </Parallax>
        </div>
        <div className="row my-5">
          <p className="h2 display-2 font-weight-light my-5 col-12 text-center">Find your perfect outfit</p>
        </div>

        <div className="row mb-5">
          {categories}
        </div>
        <div className="row my-5">
          <br />
          <p className="h2 display-2 font-weight-light mt-5 mb-5 col-12 text-center">Changes your life style</p>
          <br />
        </div>
      </div>)
  }
}

