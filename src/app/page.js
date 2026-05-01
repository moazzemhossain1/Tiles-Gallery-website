
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

const productFache=async()=>{
  const res =await fetch("http://localhost:5000/prouducts");
  const datas=await res.json();
  return datas;
}

const Home= async()=> {

  const products=await productFache();
  console.log("products",products)

  return (
    <div className="container mx-auto">
      <h3 className="text-center text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-bold">Our product collection</h3>
      <p className="mt-3 mb-3 text-2xl font-medium text-center">We are sell stylish,high-quality ties. Perfect for every cccasion.</p>
      
      <div className="grid grid-cols-3 gap-4">
        {
          products.map((prodect,index) => <ProductCard key={index} prodect={prodect}></ProductCard>)
        }
      </div>
      
    </div>
  );
}
export default Home;
