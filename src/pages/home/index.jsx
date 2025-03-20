import imageBg from "../../assets/img/bg.jpg";
  
export const Home = () => {
  return (
    <section
      id="home"
      className="bg-accent-dark 
      bg-no-repeat h-screen w-full"
      style={{ backgroundImage: `url(${imageBg})`, backgroundSize: "cover" }}
    >
      <div className="text-gray- text-xl body-font">
        <div className="container mx-auto flex px-5 py-52 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-50">
              Before they sold out
              <br className="hidden lg:inline-block" />
              Are you ready to order
            </h1>
            <p className="mb-8 leading-relaxed text-green-600 font-bold">
              If you're a pizza lover, you know that nothing beats the taste of
              a freshly baked pizza straight from the oven.<br />
              We can making your own style of pizza now you can 
              enjoy the authentic taste of wood-fired pizza order now.<br />
              And we will sent your pizza straight to your home to enjoy it
              
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg">
                Gallery
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-500 rounded text-lg">
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
