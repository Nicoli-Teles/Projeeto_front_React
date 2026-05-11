
// src/layouts/AppLayout.tsx
// Objetivo: organizar a estrutura visual principal, navegação e affordances do aplicativo HABIT.

import { NavLink, Outlet, useNavigate } from "react-router-dom";

import "../css/header.css";
import "../css/botoes.css"
import "../css/cards_destaques.css";
import "../css/main.css"
import "../css/footer.css"
import "../css/global.css";
import "../css/responsividade.css";


export function AppLayout() {
  const navigate = useNavigate();

  return (
    <div className="app-shell">
      {/* Cabeçalho */}
      <header className="navbar">
        <div className="nav-left">
          <span className="logo">
            <h3>HABIT</h3>
          </span>
          <nav>
            <NavLink to="/" end>Início</NavLink>
            <NavLink to="/Paginas">Páginas</NavLink>
            <NavLink to="/Destaques">Destaques</NavLink>
            <NavLink to="/Assinatura">Assinar</NavLink>
            <NavLink to="/CriarPost">Admin</NavLink>
          </nav>
        </div>

        <div className="nav-right">
          <div className="search-box">
            <input type="text" placeholder="Buscar..." />
          </div>
          <div className="botoes-nav">
            <button 
              className="btn-outline" 
              onClick={() => navigate('/pesquisa')}
            >
              Buscar
            </button>
            <button 
              className="btn-outline" 
              onClick={() => navigate('/Login')}
            >
              Entrar
            </button>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="main-container-forms">
        <Outlet />
      </main>

      {/* Seção de navegação inferior */}
      <section className="categories">
        <div className="cat-item"><strong>Instagram</strong></div>
        <div className="cat-item"><strong>Work</strong></div>
        <div className="cat-item"><strong>Bags</strong></div>
        <div className="cat-item"><strong>Lamp</strong></div>
        <div className="cat-item"><strong>Books</strong></div>
      </section>

      {/* Rodapé */}
      <footer className="site-footer">
        © 2025 HABIT • Meu site
      </footer>

    </div>
  );
}
