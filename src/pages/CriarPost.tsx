import '../css/criar_post.css';
import '../css/menu_lateral.css';
import '../css/cards_estatisticas.css';

import { Link, useLocation } from 'react-router-dom';

export function CriarPost() {
  const location = useLocation();

  // Função simples para verificar se a rota está ativa
  const isActive = (path: string) => location.pathname === path ? "ativo" : "";

  return (
    <main className="main-container dashboard-main">
      <div className="dashboard-wrapper">
        
        {/* Menu Lateral */}
        <aside className="dashboard-sidebar">
          <h3>Menu</h3>
          <ul>
            <li>
              <Link to="/Paginas" className={isActive("/Paginas")}>Categorias</Link>
            </li>
            <li>
              <Link to="/CriarPost" className={isActive("/CriarPost")}>Criar Post</Link>
            </li>
            <li>
              <Link to="/EscolhasEditor" className={isActive("/EscolhasEditor")}>Escolhas do Editor</Link>
            </li>
            <li>
              <Link to="/Usuarios" className={isActive("/Usuarios")}>Usuários</Link>
            </li>
            <li>
              <Link to="/FilaRevisao" className={isActive("/FilaRevisao")}>Fila de revisão</Link>
            </li>
            <li>
              <Link to="/FilaComentarios" className={isActive("/FilaComentarios")}>Fila de comentários</Link>
            </li>
          </ul>
        </aside>

        {/* Lado Direito */}
        <section className="dashboard-content">
          
          {/* Estatísticas */}
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-title">Posts</span>
              <strong className="stat-value">128</strong>
            </div>
            <div className="stat-card">
              <span className="stat-title">Visualizações</span>
              <strong className="stat-value">54k</strong>
            </div>
            <div className="stat-card">
              <span className="stat-title">Inscritos</span>
              <strong className="stat-value">12k</strong>
            </div>
            <div className="stat-card">
              <span className="stat-title">Pendências</span>
              <strong className="stat-value">7</strong>
            </div>
          </div>

          {/* Painel de Criação */}
          <div className="panel-card">
            <h3>Criar Post</h3>
            
            <form className="post-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" className="input-field" placeholder="Título" />

              <div className="editor-simulator">
                <textarea placeholder="Escreva aqui... (Editor simulador)"></textarea>
              </div>

              <div className="form-row">
                <input type="text" className="input-field half" placeholder="Categorias e tags" />
                <input type="text" className="input-field half" placeholder="Upload da imagem de capa" />
              </div>

              <div className="form-actions">
                <div className="button-group">
                  <button type="button" className="btn-outline-full">Salvar rascunho</button>
                  <button type="button" className="btn-outline-full">Enviar para revisão</button>
                  <button type="submit" className="btn-primary">Publicar (admin)</button>
                </div>
              </div>
            </form>
          </div>
          
        </section>
      </div>
    </main>
  );
}