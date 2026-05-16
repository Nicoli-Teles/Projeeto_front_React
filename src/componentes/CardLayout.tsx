


type CardLayoutProps = {
    imagem: string;
    descricao: string;
    titulo: string;
    date?: string; // O ponto de interrogar é para dizer que esse atributo é opcional 
}

export function CardLayout({ imagem, descricao, titulo, date }: CardLayoutProps) {
    return (
        <div className="card-highlight">
            <div className="card-image"></div>
            <figure className="card-img">
                <img src={imagem} alt={descricao} />
            </figure>
            
            <div className="card-content">
                <strong>
                    <h3>{titulo}</h3>
                </strong>
            </div>

            {date && (                           // aqui deixamos essa parte no html como: se tiver data mostra isso
                <div className="date">
                    <p>{date}</p>
                </div>
            )}
        </div>
    );
}
