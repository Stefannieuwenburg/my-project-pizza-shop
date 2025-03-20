import image1 from "../../assets/img/pizza1.png";
export const Gallery = () => {
  return (
    <>
      <h1 class="text-3xl p-6 text-center">Gallery</h1>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
        <div class="bg-white rounded h-full text-grey-darkest no-underline shadow-md">
          <h1 class="text-3xl p-6">pizza</h1>
          <img
            class="w-full block rounded-b"
            src={image1}
            alt="A photo of a fox"
          />
        </div>
        <div class="mt-2 bg-white rounded h-full text-grey-darkest no-underline shadow-md">
          <h1 class="text-3xl p-6">pizza</h1>
          <img
            class="w-full block rounded-b"
            src={image1}
            alt="A photo of a fox"
          />
        </div>
        <div class="mt-2 bg-white rounded h-full text-grey-darkest no-underline shadow-md">
          <h1 class="text-3xl p-6">pizza</h1>
          <img
            class="w-full block rounded-b"
            src={image1}
            alt="A photo of a fox"
          />
        </div>
        <div class="mt-2 bg-white rounded h-full text-grey-darkest no-underline shadow-md">
          <h1 class="text-3xl p-6">pizza</h1>
          <img
            class="w-full block rounded-b"
            src={image1}
            alt="A photo of a fox"
          />
        </div>
      </div>
    </>
  );
};
