import './App.css'
import logo from './assets/logo1.png'
import location from './assets/logo2.png'
import searchIcon from './assets/logo3.png'
import flag from './assets/flag.png'
import shoppingCart from './assets/shopping-cart.png'
import CustomSwiper from "./CustomSwiper";
import banner1 from './assets/pic1.jpg'
import banner2 from './assets/pic2.jpg'
import banner3 from './assets/pic3.jpg'
import banner4 from './assets/pic4.jpg'
function App() {
  const slides = [banner1, banner2, banner3, banner4];
  return (
    <div>
      <div class="bg-black h-[65px] flex items-center">
        <img src={logo} class="h-9 mx-5" alt="Amazon Logo" />
        <div class="mt-4">
          <img src={location} class="h-5" alt="location" />
        </div>
        <div class="flex flex-col leading-4">
          <p class="text-white text-[12px]">Delivering to Thanjavur 613006</p>
          <p class="text-white font-medium text-[14px]">Update location</p>
        </div>
        <div class="mx-7 flex h-[40px]">
          <button class="search p-3 text-[12px] rounded-l-md">
            All
          </button>
          <input type="text" class="b-0 bg-white w-[600px] p-3" placeholder="Search Amazon.in" />
          <button class="search-icon p-3 rounded-r-md">
            <img src={searchIcon} class="h-5" alt="search" />
          </button>
        </div>
        <div class="flex items-center">
          <img src={flag} class="h-4" alt="flag" />
          <p class="text-white font-medium text-[14px] mx-1">EN</p>
        </div>
        <div class="flex flex-col mx-5 leading-4">
          <p class="text-white text-[13px]">Hello,logesh</p>
          <p class="text-white font-medium text-[14px]">Accounts & Lists</p>
        </div>
        <div class="flex flex-col leading-4">
          <p class="text-white text-[13px]">Returns</p>
          <p class="text-white font-medium text-[14px]">& Orders</p>
        </div>
        <div class="mx-5 flex">
          <img src={shoppingCart} class="h-10" alt="shopping-cart" />
          <p class="text-white font-medium text-[14px] mt-4">Cart</p>
        </div>
      </div>
      <div>
        <nav class="bg-gray-800 text-white p-2">
          <ul class="flex space-x-4 overflow-x-auto">
            <li class="flex-shrink-0 cursor-pointer hover:text-orange-400 whitespace-nowrap">Fresh</li>
            <li class="flex-shrink-0 cursor-pointer hover:text-orange-400 whitespace-nowrap">MX Player</li>
            <li class="flex-shrink-0 cursor-pointer hover:text-orange-400 whitespace-nowrap">Sell</li>
            <li class="flex-shrink-0 cursor-pointer hover:text-orange-400 whitespace-nowrap">Today's Deals</li>
            <li class="flex-shrink-0 cursor-pointer hover:text-orange-400 whitespace-nowrap">Amazon Pay</li>
            <li class="flex-shrink-0 cursor-pointer hover:text-orange-400 whitespace-nowrap">Keep Shopping for
            </li>
            <li class="flex-shrink-0 cursor-pointer hover:text-orange-400 whitespace-nowrap">Bestsellers</li>
            <li class="flex-shrink-0 cursor-pointer hover:text-orange-400 whitespace-nowrap">Prime</li>
            <li class="flex-shrink-0 cursor-pointer hover:text-orange-400 whitespace-nowrap">Buy Again</li>
            <li class="flex-shrink-0 cursor-pointer hover:text-orange-400 whitespace-nowrap">Mobiles</li>
            <li class="flex-shrink-0 cursor-pointer hover:text-orange-400 whitespace-nowrap">Customer Service</li>
            <li class="flex-shrink-0 cursor-pointer hover:text-orange-400 whitespace-nowrap">Gift Cards</li>
            <li class="flex-shrink-0 cursor-pointer hover:text-orange-400 whitespace-nowrap">Electronics</li>
            <li class="flex-shrink-0 cursor-pointer hover:text-orange-400 whitespace-nowrap">Flights</li>
            <li class="flex-shrink-0 cursor-pointer hover:text-orange-400 whitespace-nowrap">Home & Kitchen</li>
          </ul>
        </nav>
      </div>
      <div className="">
        <CustomSwiper slides={slides} />
      </div>
    </div>
  )
}

export default App
