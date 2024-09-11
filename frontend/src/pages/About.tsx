import { assets } from "../assets/assets"
import NewsLetter from "../components/NewsLetter"
import Title from "../components/Title"


const About = () => {

  return (
    <div>

      <div className="text-2xl text-center pt-8 border-t">
        <Title text1="ABOUT" text2="US"/>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="" className="w-full md:max-w-[450px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda maiores explicabo libero sequi voluptatem dolor nihil vero pariatur? Nulla officiis et ab quo aut dolor facere debitis esse natus distinctio!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reiciendis itaque nemo aliquam temporibus, fuga ut praesentium quaerat consequatur cum minus ratione, commodi placeat eius nisi ducimus dolorem, esse id.</p>
          <b className="text-gray-800">Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quae obcaecati alias aut dolorum, vero dolores, accusantium voluptatibus saepe veritatis aliquid sapiente vitae eius, laborum consequuntur quasi suscipit aspernatur expedita!</p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1="WHY" text2="CHOOSE US"/>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, eius nulla! Quod</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convinience</b>
          <p className="text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, eius nulla! Quod</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, eius nulla! Quod</p>
        </div>
      </div>

      <NewsLetter />
      
    </div>
  )
}

export default About
