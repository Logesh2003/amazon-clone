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
      <div className="bg-black h-[75px] flex items-center justify-between px-4 md:px-10">
        <div className="flex items-center space-x-2">
          <img src={logo} className="h-12" alt="Amazon Logo" />
        </div>

        <div className="md:flex items-center space-x-1">
          <img src={location} className="h-5" alt="location" />
          <div className="flex flex-col leading-4">
            <p className="text-white text-[14px]">Delivering to Thanjavur 613006</p>
            <p className="text-white font-medium text-[18px] cursor-pointer hover:underline">
              Update location
            </p>
          </div>
        </div>

        <div className="flex flex-1 mx-2 md:mx-7 h-[50px] max-w-[800px]">
          <button className="bg-gray-100 p-2 text-[16px] rounded-l-md border border-gray-300 sm:block">
            All
          </button>
          <input
            type="text"
            className="flex-1 bg-white p-2 outline-none text-[18]"
            placeholder="Search Amazon.in"
          />
          <button className="search-icon p-2 rounded-r-sm">
            <img src={searchIcon} className="h-5" alt="search" />
          </button>
        </div>

        <div className="lg:flex items-center space-x-6">
          <div className="flex items-center">
            <img src={flag} className="h-4" alt="flag" />
            <p className="text-white font-medium text-[14px] mx-1">EN</p>
          </div>

          <div className="flex flex-col leading-4">
            <p className="text-white text-[13px]">Hello, Logesh</p>
            <p className="text-white font-medium text-[14px] cursor-pointer hover:underline">
              Accounts & Lists
            </p>
          </div>

          <div className="flex flex-col leading-4">
            <p className="text-white text-[13px]">Returns</p>
            <p className="text-white font-medium text-[14px]">& Orders</p>
          </div>

          <div className="flex items-center space-x-1">
            <img src={shoppingCart} className="h-8" alt="shopping-cart" />
            <p className="text-white font-medium text-[14px]">Cart</p>
          </div>
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
      <footer class="bg-[#232F3E] text-white absolute top-1030 w-full">
        <div class="bg-[#37475A] py-3 text-center text-sm hover:bg-[#485769] cursor-pointer">
          Back to top
        </div>
        <div class="max-w-7xl mx-auto py-10 px-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-xl">
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
        <div class="flex flex-col md:flex-row items-center justify-center gap-3 py-6 text-md text-gray-300">
          <img src={logo} alt="Amazon" class="h-10" />
          {/* <p>© 2025, Amazon Clone, All rights reserved</p> */}
          {/* <img src={flag} className="h-4" alt="flag" /> */}
        </div>
      </footer>
      <footer className="bg-[#131A22] text-gray-300 py-10 absolute top-1125 w-full">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="font-semibold text-white mb-2">AbeBooks</h3>
            <p>Books, art<br />& collectibles</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">Amazon Web Services</h3>
            <p>Scalable Cloud<br />Computing Services</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">Audible</h3>
            <p>Download<br />Audio Books</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">IMDb</h3>
            <p>Movies, TV<br />& Celebrities</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">Shopbop</h3>
            <p>Designer<br />Fashion Brands</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">Amazon Business</h3>
            <p>Everything For<br />Your Business</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">Prime Now</h3>
            <p>2-Hour Delivery<br />on Everyday Items</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">Amazon Prime Music</h3>
            <p>100 million songs, ad-free<br />Over 15 million podcast episodes</p>
          </div>
        </div>

        <div className="border-t border-gray-700 my-6"></div>

        <div className="text-center text-xs text-gray-400 space-x-4">
          <a href="#" className="hover:underline">Conditions of Use & Sale</a>
          <a href="#" className="hover:underline">Privacy Notice</a>
          <a href="#" className="hover:underline">Interest-Based Ads</a>
          <p className="mt-2">© 1996–2025, Amazon.com, Inc. or its affiliates</p>
        </div>
      </footer>

    </div>
  )
}

export default App
