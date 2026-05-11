export function Assinatura() {


  return (
          <div className="login-card">
            <h1>Assine a newsletter</h1>
            <form>
                    <input type="email" placeholder="E-mail" className="input-field"/>            
                <div className="checkbox-wrapper">
                    <input type="checkbox" id="terms" name="terms" required/>
                    <label htmlFor="terms">Concordo com os termos e a política de privacidade</label>
                </div>

                <div className="button-group">
                    <button type="submit" className="btn-primary">Assinar</button>
                </div>
            </form>

        </div>
  );
}