import Image from "next/image";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import {signIn,signOut,useSession} from 'next-auth/react';
import { useRouter } from "next/router";
const Header = () => {
  const { data: session } = useSession()
  const router = useRouter()
  return (
    <header className="px-6 bg-gray-200 py-4">
      <div className="flex justify-between items-center">
        <div className="w-20 md:w-32">
          <Image onClick={()=>router.push('/')} src={"/R.png"} width={125} height={35} />
        </div>
        <div className="relative flex-1 ml-4">
          <input
            type="text"
            className="outline-none border-none px-2 py-1.5 rounded-md w-full"
          />
          <div className="bg-yellow-400 text-white absolute p-2 right-0 top-0 hover:scale-110 duration-150">
            <AiOutlineSearch size={20} />
          </div>
        </div>
        <div className="ml-4 space-x-4 flex items-center">
          <div onClick={session?signOut:signIn} className="hidden sm:flex flex-col">
            <p className="text-xs opacity-70">{session?`Hello, ${session.user.name}`:'Sign in'}</p>
            <a href="#" className="text-sm font-semibold">
              Account & Lists
            </a>
          </div>
          <div className="hidden sm:flex flex-col">
            <p className="text-xs opacity-70">Returns</p>
            <a href="#" className="text-sm font-semibold">
                & Orders
            </a>
          </div>
          <div onClick={()=>router.push('/checkout')} className="flex space-x-0.5 items-center">
            <AiOutlineShoppingCart size={30}/>
            <a href='' className="text-sm font-semibold">
               Basket
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
