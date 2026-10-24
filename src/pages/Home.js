import Hero from '../components/Hero.js'
import PromoBanner from '../components/PromoBanner.jsx'
import PromoBanner2 from '../components/PromoBanner2.jsx'
import Categories from '../components/Categories.js'
import BrandIntro from '../components/BrandIntro.jsx'

function Home(){
     return(
          <div className="home-container">
               <Hero
                    onShopClick={(slide, index) => {
                    console.log("Shop clicked:", slide.buttonText, index);
                    }}
               />
               <Categories />
               <PromoBanner />
               <BrandIntro />
               <PromoBanner2 />
          </div>
     )
}


export default Home;