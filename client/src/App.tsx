import { Card, Layout, Menu } from "antd";
import { useEffect, useState } from "react";

const { Header, Content } = Layout;

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
  }, []);

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#001529",
          color: "white",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          TAMAZON
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{
            backgroundColor: "#001529",
            display: "flex",
            gap: "15px",
            fontSize: "18px"
          }}
        >
          <Menu.Item key="1" style={{ color: "white" }}>
            Home
          </Menu.Item>
          <Menu.Item key="2" style={{ color: "white" }}>
            Products
          </Menu.Item>
          <Menu.Item key="3" style={{ color: "white" }}>
            About
          </Menu.Item>
          <Menu.Item key="4" style={{ color: "white" }}>
            Contact
          </Menu.Item>
        </Menu>
      </Header>

      <Content
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
          <Card
            key={index}
            style={{
              width: 1000,
              border: "2px solid black",
              gap: "20px",
            }}
          >
            <h1>{product.name_of_product}</h1>
            <h3>{product.short_description}</h3>
            <h5>{product.price}</h5>
          </Card>
        ))}
      </Content>
    </Layout>
  );
};

export default App;
