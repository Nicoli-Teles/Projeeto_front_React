import imagemReuniao from '../assets/pesquisa/reuniao.webp';
import imagemComentario1 from '../assets/pesquisa/comentario-1.png';
import imagemMulherTrabalhando from '../assets/pesquisa/mulher_trabalhando.webp';
import imagemHomemCafe from '../assets/pesquisa/homem_com_cafe.webp';
import imagemGrandesEmpresas from'../assets/pesquisa/grandes-empresas.png' ;
import imagemHomemPaisagem from'../assets/pesquisa/homem_e_paisagem.webp';
import imagemMulherFone from'../assets/pesquisa/mulher_com_fone.webp';
import imagemMulherServidor from'../assets/pesquisa/mulher-em-servidor.jpg'
import imagemHomemCadeira from '../assets/pesquisa/homem_cadeira.webp'
import { CardLayout } from '../componentes/CardLayout';
export function Destaques() {
// esse array srá percorrido e chamado na função map mais a baixo, desse modo esses serão os atributos passados para o componente externalizado
    const listaDestaques = [
        { id: 1, titulo: "Reuniões do Momento", imagem: imagemReuniao, descricao: "Mulher de costas participando de uma videochamada com quatro colegas em um notebook sobre a mesa de trabalho." },
        { id: 2, titulo: "Comentarios Intrigantes", imagem: imagemComentario1, descricao: "comentário do antigo twiter 'fjdshfsdkjfhsdkjfhskdjfhksdjhf' " },
        { id: 3, titulo: "Trabalho Feminino", imagem: imagemMulherTrabalhando, descricao: "Mulher de frente trabalhando com notebook na frente lapis numa mão e celular na outra levando ao ouvido (ela esta sentada)" },
        { id: 4, titulo: "Café do Mal ?", imagem: imagemHomemCafe, descricao: "Homem sentado tomando uma xicara de café de perfil." },
        { id: 5, titulo: "Melhores Empresas do Ano", imagem: imagemGrandesEmpresas, descricao: "Homem de pé do lado de dentro do vidro olahndo para cima com tablet na mão." },
        { id: 6, titulo: "Homens Pasmem!", imagem: imagemHomemPaisagem, descricao: "Homem sentado num tablado de madeira escura com notebook no colo e observando uma paisagem (imagem visata de costas)." },
        { id: 7, titulo: "Top Musicas anos 90", imagem: imagemMulherFone, descricao: "Mulher de frente com fones de ouvido escutando musica." },
        { id: 8, titulo: "Mulheres TECH", imagem: imagemMulherServidor, descricao: "Mulher de perfil mexendo num servidor com luz ambiente azul e capacete." },
        { id: 9, titulo: "Homens e Cadeiras o Que Tem em Comum ?", imagem: imagemHomemCadeira, descricao: "Homem de costas sentado numa cadeira em ambiente de escritório." },
    ];



  return (
    <div className="content-wrapper">
      <h1 className="page-title">Destaques</h1>
      <div className="highlights-grid">
        {listaDestaques.map((item) => (    // função map que percorre a lista aqui
                    <CardLayout 
                        key={item.id}
                        titulo={item.titulo}
                        imagem={item.imagem}
                        descricao={item.descricao}
                    />
                ))}
        
      </div>
    </div>
  );
}