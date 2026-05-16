import'../css/menu_lateral.css'
import'../css/cards_estatisticas.css'

import { Link } from 'react-router-dom';


export function Paginas() {


  return (
<main className="main-container dashboard-main">
    <div className="dashboard-wrapper">
        
        <aside className="dashboard-sidebar">
            <h3>Menu</h3>
            <ul>
                <li><Link to="/Paginas">Categorias</Link></li>
                <li><Link to="/CriarPost">Criar Post</Link></li>
                <li><Link to="/EscolhasEditor">Escolhas do Editor</Link></li>
                <li><Link to="/Usuarios">Usuários</Link></li>
                <li><Link to="/FilaRevisao">Fila de revisão</Link></li>
                <li><Link to="/FilaComentarios">Fila de comentários</Link></li>
            </ul>
        </aside>
        
        <section className="dashboard-content">
            
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

            <div className="panel-card">
                <h3>Categorias</h3>
                <input type="text" className="panel-search" placeholder="Buscar categorias..."/>
                
                <div className="categories-list">
                    <div className="list-header">
                        <strong>Categoria</strong>
                    </div>
                    
                    <div className="list-item">
                        <span className="item-name">Categoria #1</span>
                        <div className="item-actions">
                            <button className="btn-action">Editar</button>
                            <button className="btn-action">Excluir</button>
                        </div>
                    </div>
                    <div className="list-item">
                        <span className="item-name">Categoria #2</span>
                        <div className="item-actions">
                            <button className="btn-action">Editar</button>
                            <button className="btn-action">Excluir</button>
                        </div>
                    </div>
                    <div className="list-item">
                        <span className="item-name">Categoria #3</span>
                        <div className="item-actions">
                            <button className="btn-action">Editar</button>
                            <button className="btn-action">Excluir</button>
                        </div>
                    </div>
                    <div className="list-item">
                        <span className="item-name">Categoria #4</span>
                        <div className="item-actions">
                            <button className="btn-action">Editar</button>
                            <button className="btn-action">Excluir</button>
                        </div>
                    </div>
                    <div className="list-item">
                        <span className="item-name">Categoria #5</span>
                        <div className="item-actions">
                            <button className="btn-action">Editar</button>
                            <button className="btn-action">Excluir</button>
                        </div>
                    </div>

                </div>
            </div>
            
        </section>
    </div>
</main>    
  );
}
