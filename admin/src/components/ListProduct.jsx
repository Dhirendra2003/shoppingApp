import { useEffect, useState } from "react";
import remove_icon from "../assets/cart_cross_icon.png";

export default function ListProduct() {
  const [allproducts, setAllProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/allproducts", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(JSON.stringify(data));
      setAllProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
    async function removeProduct(id){
      if (window.confirm("DO YOU WANT TO DELETE THIS PRODUCTS?")) {
      const resp= await fetch("http://localhost:4000/removeproduct",{
        method:"POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({'id':id})
      });
      const content = await resp.json();
      console.log(id +content+"item deleted")
      alert("product removed pls refresh")
    }}
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  console.log(allproducts); // This will log the updated state after the state is set

  return (
    <table className=" m-[auto] my-[30px] bg-white left-20 rounded-xl  relative border-collapse ">
      <tbody>
        <tr className="p-30">
          <th className="p-2 ">ID</th>
          <th className="p-2 ">Product</th>
          <th className="p-2 ">Name</th>
          <th className="p-2 ">New price</th>
          <th className="p-2 ">Old Price</th>
          <th className="p-2 ">Category</th>
          <th className="p-2 ">Remove</th>
        </tr>

        {allproducts.map((product, index) => (
          <tr key={index} className=" shadow-lg rounded-lg m-15">
            <td className="p-12">{product.id}</td>
            <td>
              <img
                src={product.image}
                className="h-40 shadow-md rounded-lg m-10"
              />
            </td>
            <td className="p-12 ">{product.name}</td>
            <td className="p-12 ">{product.new_price}</td>
            <td className="p-12 ">{product.old_price}</td>
            <td className="p-12 underline">{product.category}</td>
            <td className="p-12 ">
              <button>
                <img src={remove_icon} onClick={() => removeProduct(product.id)} alt="Remove" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
