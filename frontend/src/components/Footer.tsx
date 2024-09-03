import { assets } from "../assets/assets"


const Footer = () => {

  return (
    <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

            <div className="">
                <img src={assets.logo} alt="" className="mb-5 w-32" />
                <p className="w-full md:w-2/3 text-gray-600">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab pariatur nostrum laborum rem labore et consequatur
                </p>
            </div>

            <div className="">
                <p className="text-xl">COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="">
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>+1-1234-567890</li>
                    <li>contactforever@mail.com</li>
                </ul>
            </div>

        </div>

        <div className="">
            <hr />
            <p className="py-5 text-center text-sm">Copyright 2024@ forever.com - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
