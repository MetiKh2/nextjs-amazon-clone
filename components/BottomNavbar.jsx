// import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineBars } from "react-icons/ai";

const BottomNavbar = ({ categories }) => {
  const router= useRouter();
  return (
    <nav className="px-5 pb-2 bg-cyan-900">
      <div className="flex space-x-3.5 flex-wrap space-y-2">
        <div onClick={()=>router.push('/')} className="flex space-x-1 items-center space-y-2">
          <AiOutlineBars size={15} className="text-white mt-2" />
          <p className="text-white text-sm">All</p>
        </div>
        {categories?.map((category, index) => (
          <div onClick={() => router.push('/category/' + category)} key={category} className='hover:scale-110 duration-100 cursor-pointer'>
            <div className="text-white text-sm">{category}</div>
          </div>
        ))}
        
        
      </div>
    </nav>
  );
};
// href={'/category/'+category} 
export default BottomNavbar;
