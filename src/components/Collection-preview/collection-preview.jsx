import React from 'react'
import { ProductCard } from 'react-ui-cards';

export default function collectionPreview({ title, items }) {
  return (
    <div>
      <div className="row my-5 justify-content-center">
        <p className="h2  display-4">{title}</p>

      </div>
      <div className="row my-5">
        
        {
          items
            .filter((item, idx) => idx < 4)
            .map(item => (
              <div className="col-12 col-md-3 my-2" key={item.id}>
                <ProductCard
                  style={{
                    width: '100%',
                    margin: '0%',
                    // maxWidth: '100%'
                  }}
                  photos={[
                    item.imageUrl,
                  ]}
                  price={`$ ${item.price}`}
                  productName={item.name}
                  description='Morbi dignissim in felis vel aliquet.'
                  buttonText='Add to cart'
                  // rating={3}
                  url=''
                />

              </div>

            ))
        }

      </div>
    </div>
  )
}
