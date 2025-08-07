import './App.css';
import Header from "./components/Header"
import BannerPrincipal from "./components/BannerPrincipal"
import BannerCategorias from "./components/Categorias"
import BannerNavegacao from "./components/Navegacao"
import CardProduto from "./components/Card"
import Blog from "./components/Blog"
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <Header />
      
      <main>
      
        <BannerPrincipal />
        <BannerCategorias />
        <BannerNavegacao />
        <CardProduto />
        <Blog />
        <Footer />
        
      </main>
      
    </>
  );
}

export default App;
