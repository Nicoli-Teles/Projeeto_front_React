
import { NavLink } from "react-router-dom";
import "../css/card_principal.css"
import "../css/inputs.css"

export function Login() {
  return (
    <div className="login-card">
      <h1>Entrar</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="E-mail" className="input-field" />
        <input type="password" placeholder="Senha" className="input-field" />
        
        <div className="button-group">
          <button type="submit" className="btn-primary">Entrar</button>
          <button type="button" className="btn-outline-full">Entrar com Google</button>
        </div>
      </form>
      <div className="footer-links">
        <a href="#">Esqueci a senha</a> • 
        <NavLink to="/CriarConta">
          Criar conta
        </NavLink>
      </div>
      
    </div>
  );
}