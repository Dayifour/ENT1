import Image from "next/image";
import { FaEnvelope, FaLock } from "react-icons/fa";
export default function page() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-3/5 h-3/5 max-w-2xl bg-gray-500 bg-opacity-5 rounded-3xl  flex justify-between sm:grid-cols-2 lg:grid-cols-3 partie">
          {/* partie droite */}
          <div className="mt-6 ml-6 w-2/5 partie1">
            {/* head */}
            <div className="flex">
              <img src="logo.ico" width={30} height={30} alt="Logo" />
              <h1>TECHNOLAB ISTA</h1>
            </div>
            {/* partie input  */}
            <div className="mt-7 flex flex-col h-5/6 justify-between centre">
              <h2>LOGIN</h2>
              <div className="mb-4 relative w-full phone">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="pl-8 border rounded-md "
                />
                <FaEnvelope className="absolute left-3 top-2/3  transform -translate-y-1/2 text-gray-500" />
              </div>
              <div className="mb-4 relative  w-full phone">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="pl-8  border rounded-md "
                />
                <FaLock className="absolute left-3 top-2/3 transform -translate-y-1/2 text-gray-500" />
              </div>
              <a href="" className="text-right text-cyan-500">
                Mot de passe oublier
              </a>
              <button className="bg-cyan-500 text-white py-2 px-4 rounded-md mt-8 phone ">
                Envoyer
              </button>
              <span className="flex justify-between mt-1 phone login-icon">
                <Image
                  src={"img/icon-google.svg"}
                  alt="icon"
                  width={30}
                  height={30}
                ></Image>
                <Image
                  src={"img/icon-facebook.svg"}
                  alt="icon"
                  width={30}
                  height={30}
                ></Image>
                <Image
                  src={"img/icon-apple.svg"}
                  alt="icon"
                  width={30}
                  height={30}
                ></Image>
              </span>
            </div>
          </div>
          {/* partie gauche  */}
          <div className="flex rounded-2xl partie2">
            <svg
              viewBox="0 0 566 840"
              xmlns="http://www.w3.org/2000/svg"
              className="rounded-2xl"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M342.407 73.6315C388.53 56.4007 394.378 17.3643 391.538 
      0H566V840H0C14.5385 834.991 100.266 804.436 77.2046 707.263C49.6393 
      591.11 115.306 518.927 176.468 488.873C363.385 397.026 156.98 302.824 
      167.945 179.32C173.46 117.209 284.755 95.1699 342.407 73.6315Z"
                />
              </mask>

              <g mask="url(#mask0)">
                <path
                  d="M342.407 73.6315C388.53 56.4007 394.378 17.3643 391.538 
      0H566V840H0C14.5385 834.991 100.266 804.436 77.2046 707.263C49.6393 
      591.11 115.306 518.927 176.468 488.873C363.385 397.026 156.98 302.824 
      167.945 179.32C173.46 117.209 284.755 95.1699 342.407 73.6315Z"
                />
                <image href="/img/bg-img.jpg" width="800" height="850" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
