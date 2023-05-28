import { Layout, App as AppContext } from "antd";
import PokemonPage from "./pages/PokemonPage";
import Navbar from "./components/ui/Navbar";

function App() {
  const { Content, Footer } = Layout;

  return (
    <AppContext>
      <Layout className="site-layout" style={{ minHeight: "100vh" }}>
        <Navbar />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <PokemonPage />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Copyright ©2023 Created by OmenDilly
        </Footer>
      </Layout>
    </AppContext>
  );
}

export default App;
