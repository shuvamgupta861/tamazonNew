import { Card } from "antd";
import { log } from "console";
import { useEffect, useState } from "react";

interface Products {
  name_of_product: string;
  short_description: string;
  price: number;
}

const App = () => {
  const [products, setProducts] = useState<Products[]>([]);

  const getProductsListFromBackend = async () => {
    try {
      const response = await fetch("http://localhost:3000/getProductsList");
      const data = await response.json();
      setProducts(data);
      
    } catch (e) {
      console.log("error in fetching products list ", e);
    }
  };

  useEffect(() => {
    getProductsListFromBackend();
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        gap: "20px",
        marginLeft: "22%",
        marginTop: "5%",
      }}
    >
      {products.map((product, index) => (
        <Card style={{ width: 1000, border: "2px solid black", gap: "20px" }}>
          <h1>{product.name_of_product}</h1>
          <h3>{product.short_description}</h3>
          <h5>{product.price}</h5>
        </Card>
      ))}
    </div>
  );
};

export default App;
