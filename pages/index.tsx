function Homepage() {
  return (
    <div className="min-h-screen grid place-items-center p-4 bg-gray-900">
      <div
        className=" relative bg-white overflow-hidden"
        style={{ width: "640px", height: "360px" }}
      >
        <div
          aria-hidden="true"
          style={{ width: "200px", height: "200px" }}
          className="absolute grid place-items-center bg-purple-200 rounded-full -top-16 -left-12 "
        >
          <svg
            style={{ width: "64px", height: "72px" }}
            className=" ml-3 mt-3"
            viewBox="0 0 64 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60 29.0718C65.3333 32.151 65.3333 39.849 60 42.9282L12 70.641C6.66668 73.7202 1.16801e-05 69.8712 1.19493e-05 63.7128L1.4372e-05 8.28719C1.46412e-05 2.12878 6.66668 -1.72022 12 1.35899L60 29.0718Z"
              fill="white"
            />
          </svg>
        </div>

        <div
          aria-hidden="true"
          style={{ width: "512px", height: "512px" }}
          className="bg-purple-200 absolute rounded-full -top-20 -right-56"
        ></div>

        <div className="flex flex-col relative p-8 h-full justify-end space-y-4 w-2/3">
          <p className="uppercase font-semibold text-sm text-purple-600 tracking-wider">
            How we build it
          </p>
          <h1 className="text-4xl font-extrabold text-gray-900">
            Youtube Thumbnail with Tailwind CSS
          </h1>
          <img
            className="w-36"
            src="https://tailwindcss.com/_next/static/media/tailwindcss-logotype.128b6e12eb85d013bc9f80a917f57efe.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
