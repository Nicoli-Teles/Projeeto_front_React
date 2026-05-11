

export function CriarConta() {


  return (
        <div className="login-card">
          <h1>Criar Conta</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="E-mail" className="input-field" />
            <input type="password" placeholder="Senha" className="input-field" />
            <input type="password" placeholder="Confirmar senha" className="input-field"></input>

            <div className="checkbox-wrapper">
                <input type="checkbox" id="terms" name="terms" required/>
                <label htmlFor="terms">Concordo com os termos e a política de privacidade</label>
            </div>
            
            <div className="button-group">
              <button type="submit" className="btn-primary">Cadastrar</button>
              
            </div>
          </form>
          
        </div>
  );
}