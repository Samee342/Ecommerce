import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";
import Logo from "./Logo";
import Image from "next/image";
import esewa from "@/app/assets/images/esewa.png";
import khalti from "@/app/assets/images/khalti.png";
import fonepay from "@/app/assets/images/fonepay_white.png";

const Footer = () => {
  return (
    <footer className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-b-slate-600 pb-16 mb-5">
          <div>
            <Logo />
            <p className="text-gray-400 py-3">
              Your trusted eCommerce platform delivering quality products with
              fast and secure service.
            </p>
            <div className="flex gap-2">
              <a
                href="#"
                className="text-slate-300 bg-blue-800 rounded-2xl p-2"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-slate-300 bg-purple-600 rounded-2xl p-2"
              >
                <FaInstagram />
              </a>
              <a href="#" className="text-red-700 bg-white rounded-2xl p-2">
                <FaYoutube />
              </a>
              <a
                href="#"
                className="text-slate-300 bg-blue-800 rounded-2xl p-2"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-3">Shop</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline text-sm text-gray-400">
                  Featured
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm text-gray-400">
                  Popular
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm text-gray-400">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm text-gray-400">
                  Sale Items
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-3">We Accept</h3>
            <div className="flex items-start flex-col gap-3">
              <Image
                src={esewa}
                className="h-10 bg-white rounded px-5 py-2 w-auto"
                height={50}
                width={100}
                alt="esewa"
              />
              <Image
                src={khalti}
                className="h-10 bg-white rounded px-5 py-2 w-auto"
                height={50}
                width={100}
                alt="khalti"
              />
              <Image
                src={fonepay}
                className="h-10 bg-white rounded px-5 py-2 w-auto"
                height={50}
                width={100}
                alt="fonepay"
              />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-3">Contact Us</h3>
            <ul>
              <li className="text-sm text-gray-400 mb-1">
                <i className="fa fa-envelope" />
                <span className="ml-1">info@shopnest.com</span>
              </li>
              <li className="text-sm text-gray-400 mb-1">
                <i className="fa fa-map-marker-alt" />
                <span className="ml-1">22nd Street, Manhattan, NYC</span>
              </li>
              <li className="text-sm text-gray-400 mb-1">
                <i className="fa fa-phone" />
                <span className="ml-1">(+01) 4581618761</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-slate-400 text-sm">Copyright © 2025 ShopNest.</p>
          <div className="flex gap-5 mt-3 md:mt-0">
            <a href="#" className="text-sm text-slate-400 hover:underline">
              Privary Policy
            </a>
            <a href="#" className="text-sm text-slate-400 hover:underline">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
