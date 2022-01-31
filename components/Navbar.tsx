import request from "../utils/request";

export default function Navbar () {
  return (
      <nav>
        <div className="flex px-10 sm:px-10 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
          {Object.entries(request).map(([key, { title, url }]) => (
              <h2 
                key={title}
                className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 
                hover:text-white active:text-red-500"
              >
                {title}
              </h2>
          ))}
        </div>
      </nav>
  )
}
