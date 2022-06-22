import ProductFeedCard from './ProductFeedCard'

const ProductFeed = ({products}) => {
  return (
    <div className='absolute top-full lg:top-72 grid lg:grid-cols-4 gap-7 right-4 left-4'>
        {
            products?.slice(0,4)?.map((product, index) => (
                <ProductFeedCard product={product} key={product.id}/>
            ))
        }
        <img src="https://links.papareact.com/dyz" className='md:col-span-full' alt="" />
        {
            products?.slice(4)?.map((product, index) => (
                <ProductFeedCard product={product} key={product.id}/>
            ))
        }
         </div>
  )
}

export default ProductFeed