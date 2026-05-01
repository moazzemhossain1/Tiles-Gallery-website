
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
    <div className="">
      oure product
      <div>
        {
          products.map((prodect,index) => <ProductCard key={index} prodect={prodect}></ProductCard>)
        }
      </div>
      
    </div>
  );
}
export default Home;
