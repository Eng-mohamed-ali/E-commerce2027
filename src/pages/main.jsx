import Navbar from "../component/navbar";
import CustomFab from "../component/fab";
import Footer from "../component/footer";


function TrendProduct({ image, description, price }) {
  return (
    <div className="border rounded-lg w-90 max-w-sm overflow-hidden shadow-md">
      {/* Image */}
      <img
        src={image}
        alt={description}
        className="w-full h-50 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <p className="text-gray-700 mb-2">{description}</p>
        <span className="text-lg font-semibold text-[#FF6A00]">${price}</span>
      </div>
    </div>
  );
}





function Main() {
  return (
    <div className="w-full overflow-x-hidden min-h-screen">
      <Navbar />
      <main>
        <div className="w-screen h-[200vh] bg-gray-50">

        </div>
        <div className="">

        </div>
        <div className="w-full h-[100px] bg-black">
          <h1 className="text-xl text-white">Shop Smarter Save More.</h1>
          <button type="button">Shop With si</button>
        </div>
      </main>
      <CustomFab />
      <Footer />
    </div>
  )
}


export default Main;