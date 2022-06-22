import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import BottomNavbar from "../components/BottomNavbar";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
const Home = ({products,categories}) => {
  return (
    <div>
      <Head>
        <title>Meti Amazon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <BottomNavbar categories={categories}/>
      <main className="max-w-screen-2xl m-auto relative">
        <Banner />
        <ProductFeed products={products}/>
      </main>
    </div>
  );
};
export async function getStaticProps() {
  const products =await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json());

  const categories =await fetch('https://fakestoreapi.com/products/categories')
  .then(res=>res.json());
  return {
    props: {
      products,
      categories
    },
  };
}
export default Home;
