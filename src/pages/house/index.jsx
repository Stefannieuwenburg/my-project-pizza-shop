import imageHouse from "../../assets/img/ovenpizza.jpg";
export const House = () => {
  return (
    <section id="House" class="text-gray-600 body-font h-screen w-full">
      <div class="container mx-auto flex px-5 py-40 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-500">
            What We Do
            <br class="hidden lg:inline-block" />
            making your fresh pizza on a wood stove try our pizza.<br />
            <span className="text-red-500">Order now</span> 
          </h1>
          <p class="mb-8 leading-relaxed">
            Ask the cheff he can make you a pizza on every style you whant
            <br />
            Example chicken pizza with cheese and tomato
          </p>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src={imageHouse}
          />
        </div>
      </div>
    </section>
  );
};
