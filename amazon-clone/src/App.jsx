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
import card1 from './assets/card1.jpg'
import card2 from './assets/card2.jpg'
import card3 from './assets/card3.jpg'
import card4 from './assets/card4.jpg'
import DiscountCards from './Cards'
import ImageGallerySwiper from './ImageGallerySwiper'
function App() {

  const slides = [banner1, banner2, banner3, banner4];
  const cardSlides = [card1, card2, card3, card4];
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
      <div className="relative w-full h-screen">
        <CustomSwiper slides={slides} />
        <DiscountCards numberOfGroups={4} top="top-88" />
        <ImageGallerySwiper />
        <div className='mt-10'>
          <ImageGallerySwiper />
        </div>
        <DiscountCards numberOfGroups={4} top="top-428" />
        <div className='mt-140'>
          <ImageGallerySwiper />
        </div>
        <div className='mt-10'>
          <ImageGallerySwiper />
        </div>
        <DiscountCards numberOfGroups={4} top="top-768" />
        <div className='mt-140'>
          <ImageGallerySwiper />
        </div>
      </div>
      <footer class="bg-[#232F3E] text-white absolute top-1100 w-full">
        <div class="bg-[#37475A] py-3 text-center text-sm hover:bg-[#485769] cursor-pointer">
          Back to top
        </div>
        <div class="max-w-7xl mx-auto py-10 px-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 class="font-bold mb-3">Get to Know Us</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:underline">About Us</a></li>
              <li><a href="#" class="hover:underline">Careers</a></li>
              <li><a href="#" class="hover:underline">Press Releases</a></li>
              <li><a href="#" class="hover:underline">Amazon Science</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold mb-3">Connect with Us</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:underline">Facebook</a></li>
              <li><a href="#" class="hover:underline">Twitter</a></li>
              <li><a href="#" class="hover:underline">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold mb-3">Make Money with Us</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:underline">Sell on Amazon</a></li>
              <li><a href="#" class="hover:underline">Sell under Amazon Accelerator</a></li>
              <li><a href="#" class="hover:underline">Protect and Build Your Brand</a></li>
              <li><a href="#" class="hover:underline">Become an Affiliate</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold mb-3">Let Us Help You</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:underline">COVID-19 and Amazon</a></li>
              <li><a href="#" class="hover:underline">Your Account</a></li>
              <li><a href="#" class="hover:underline">Returns Centre</a></li>
              <li><a href="#" class="hover:underline">Help</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-700"></div>
        <div class="flex flex-col md:flex-row items-center justify-center gap-3 py-6 text-xs text-gray-300">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" class="h-5" />
          <p>© 2025, Amazon Clone, All rights reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default App
