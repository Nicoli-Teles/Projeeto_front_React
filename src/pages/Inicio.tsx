
import { useNavigate } from "react-router-dom";
import"../css/inicio.css";
import"../css/tags.css";
import heroImage from '../assets/pesquisa/mulher-em-servidor.jpg';
import erroDesigner from '../assets/pesquisa/erro-design.jpg';
import grandesEmpresas from '../assets/pesquisa/grandes-empresas.png';

export function Inicio() {
  const navigate = useNavigate();
  return (
    <main className="main-container main-home-override">
      <div className="content-wrapper wrapper-home-override">
        
        <section className="hero-section">
          <div className="hero-text">
            <h1 className="page-title">Navegue por tópicos de interesse</h1>
            <p>Descubra conteúdos por categorias, posts em destaque e as escolhas do editor.</p>
            <div className="hero-buttons">
              <button 
                className="btn-primary" 
                onClick={() => navigate('/CategoriaTechno')}
              >
                Explorar categorias
              </button>
              <button 
                className="btn-outline-full" 
                onClick={() => navigate('/Assinatura')}
              >
                Assine a newsletter
              </button>
            </div>
          </div>
          <img className="hero-image" src={heroImage} alt="Profissional usando capacete de segurança e óculos de proteção enquanto analisa um painel elétrico industrial com um tablet em ambiente com iluminação azul"/>
        </section>

        <section className="popular-section">
          <h2>Categorias Populares</h2>
          <div className="popular-grid">
            <article className="pop-card">
              <strong>Work</strong>
            </article>
            <article className="pop-card">
              <strong>Books</strong>
            </article>
            <article className="pop-card">
              <strong>Techno</strong>
            </article>
          </div>
        </section>

        <section className="all-categories-section">
          <h2>Todas as Categorias</h2>
          <div className="grid-categorias">
            <button className="filter-tag tag-dashed">Negócios</button>
            <button className="filter-tag tag-dashed">Techno</button>
            <button className="filter-tag tag-dashed">Produtividade</button>
            <button className="filter-tag tag-dashed">Filmes</button>
            <button className="filter-tag tag-dashed">Lifestyle</button>
            <button className="filter-tag tag-dashed">Educação</button>
            <button className="filter-tag tag-dashed">Mailing</button>
            <button className="filter-tag tag-dashed">eCommerce</button>
            <button className="filter-tag tag-dashed">Alimentação</button>
            <button className="filter-tag tag-dashed">Social</button>
          </div>
        </section>

        <div className="split-layout">
          
          <section className="postagens-destaque">
            <h2>Postagens em Destaque</h2>
            
            <article className="horizontal-card">
              <img className="card-img-placeholder" src={erroDesigner} alt="Ilustração de várias janelas de navegador com símbolos de bloqueio de anúncios, incluindo texto 'Ad Block', ícones de proibição, alertas e anúncios sendo bloqueados em fundo amarelo"/>
              <div className="card-content">
                <span className="card-meta">31 Jul 2025 • Destaque</span>
                <h3>Erros de Design que Todos Devem Evitar</h3>
                <span className="card-time">3 min de leitura</span>
              </div>
            </article>

            <article className="horizontal-card">
              <img className="card-img-placeholder" src={grandesEmpresas} alt="Homem com barba e óculos, vestindo camisa social, utilizando um notebook enquanto está apoiado em uma parede externa de um prédio moderno"/>
              <div className="card-content">
                <span className="card-meta">31 Jul 2025 • Destaque</span>
                <h3>As Maiores Empresas por Receita</h3>
              </div>
            </article>
          </section>

          <aside className="escolhas-editor">
            <h2>Escolhas do Editor</h2>
            <ul className="editor-list">
              <li>O uso negativo da internet</li>
              <li>O segredo do brainstorm</li>
              <li>Escalar para pequenos negócios</li>
              <li>O futuro do trabalho remoto</li>
            </ul>
          </aside>

        </div>
      </div>
    </main>
  );
}