import Header from '../../components/Header'
import BottomNavbar from '../../components/BottomNavbar'
import ProductFeed from '../../components/ProductFeed'
import Banner from '../../components/Banner';
const ProductsInCategory = ({products,categories}) => {
    if(!products) return 'loading'
  return (
    <section>
        <Header/>
        <BottomNavbar categories={categories}/>
      <main className="max-w-screen-2xl m-auto relative">
        <Banner />
        <ProductFeed products={products}/>
      </main>
    </section>
  )
}

export async function getServerSideProps({query}) {
   const products=await fetch('https://fakestoreapi.com/products/category/'+query.name)
    .then(res=>res.json())
    const categories =await fetch('https://fakestoreapi.com/products/categories')
  .then(res=>res.json());
  return {
    props: {
      products,
      categories
      
    },
  };
}
export default ProductsInCategory
