import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  categoriaEscolhida: string = '';
  
  
  filmesAcao = [
    { titulo: 'Missão Perigosa', descricao: 'Durante uma operação ultrassecreta, um agente corajoso arrisca tudo para resgatar um cientista feito refém em território inimigo.', imagem: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/12/10/19872227.jpg' },
    { titulo: 'Mad Max: Fury Road', descricao: 'Após ser capturado por Immortan Joe, um guerreiro das estradas chamado Max (Tom Hardy) se vê no meio de uma guerra mortal, iniciada pela Imperatriz Furiosa (Charlize Theron) na tentativa se salvar um grupo de garotas.', imagem: 'https://br.web.img3.acsta.net/c_310_420/pictures/15/03/26/21/14/132057.jpg' },
    { titulo: 'Lucy',  descricao: 'Lucy é obrigada a contrabandear drogas dentro do estômago. Mas o corpo da jovem absorve as substâncias e ela passa a ter superpoderes, como telepatia, telecinesia, a ausência de dor e a capacidade de adquirir conhecimento instantaneamente.', imagem: 'https://br.web.img3.acsta.net/c_310_420/pictures/14/06/12/15/31/228587.jpg' },
    { titulo: 'Carter', descricao: 'Um homem acorda sem lembranças e, orientado por uma voz misteriosa, embarca em uma missão arriscada para descobrir sua verdadeira identidade.', imagem: 'https://br.web.img3.acsta.net/c_310_420/pictures/22/07/20/18/54/2288658.jpg' },
    { titulo: 'A bailarina', descricao: 'Determinada a cumprir a última vontade de sua melhor amiga, uma ex-guarda-costas embarca em uma jornada implacável em busca de justiça.', imagem: 'https://br.web.img3.acsta.net/pictures/23/09/18/23/21/0756025.png' },
];

filmesComedia = [
    { titulo: 'Luck',descricao: 'A corajosa e azarada Sam Greenfield se aventura na encantada Terra da Sorte, onde terá que se unir a criaturas mágicas para mudar seu destino',imagem: 'https://br.web.img3.acsta.net/c_310_420/pictures/22/07/08/09/41/2988143.jpg' },
    { titulo: 'Leo', descricao: 'Após décadas preso em uma escola, um lagarto astuto elabora um plano para conquistar sua liberdade.', imagem: 'https://br.web.img2.acsta.net/c_310_420/pictures/23/01/19/19/16/4346592.jpg' },
    { titulo: 'Barbie',  descricao: 'Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.', imagem: 'https://br.web.img2.acsta.net/c_310_420/pictures/23/06/21/21/10/1335465.jpg'},
    { titulo: 'Gente Grande', descricao: 'A morte do treinador de basquete da infância de velhos amigos reúne a turma no mesmo lugar que celebraram um campeonato anos atrás. Os amigos, acompanhados de suas esposas e filhos, descobrem que idade não significa o mesmo que maturidade.',  imagem: 'https://br.web.img3.acsta.net/c_310_420/pictures/210/299/21029996_20130821205722213.jpg' },    
    { 
      titulo: 'A Candidata Honesta', 
      descricao: 'Joo Sang-sook é uma política popular. Apesar de ser uma mentirosa costumaz, está perto de se reeleger. Porém, ela perde a capacidade de mentir, e sua vida política passa por uma reviravolta hilária.', 
      imagem: 'https://br.web.img2.acsta.net/c_310_420/pictures/22/04/19/19/11/3246275.png' 
    }
    ,
];

filmesTerror = [
  { 
    titulo: 'A queda', 
    descricao: 'Para as melhores amigas Becky e Hunter, a vida é sobre vencer medos e ultrapassar limites. No entanto, depois de subir 600 metros até o topo de uma torre de rádio remota e abandonada, elas acabam presas lá em cima.', 
    imagem: 'https://br.web.img2.acsta.net/pictures/22/10/04/19/16/5487644.jpg' 
  }
  ,
  { 
    titulo: 'Sorria', 
    descricao: 'Após um paciente cometer um suicídio brutal em sua frente, a psiquiatra Rose é perseguida por uma entidade maligna que muda de forma. Enquanto tenta escapar desse pesadelo, Rose também precisa enfrentar seu passado conturbado para sobreviver.', 
    imagem: 'https://br.web.img3.acsta.net/pictures/22/09/20/15/51/1507365.jpg' 
  }
  ,
  { 
    titulo: 'Pearl', 
    descricao: 'Presa em uma fazenda isolada, Pearl deve cuidar de seu pai doente sob a vigilância de sua mãe. Desejando a vida glamourosa que ela viu nos filmes, as tentações e repressões de Pearl colidem.', 
    imagem: 'https://br.web.img3.acsta.net/c_310_420/pictures/23/01/30/18/44/0721635.jpg' 
  }
  ,
  { 
    titulo: 'O Hospedeiro', 
    descricao: 'Na beira do rio Han moram Hie-bong e sua família, donos de uma barraca de comida no parque. Seu filho mais velho, Kang-du, tem 40 anos, mas é um tanto imaturo. A filha do meio é arqueira do time olímpico coreano e o filho mais novo está desempregado.', 
    imagem: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/81/22/19961797.jpg' 
  }
  ,
  { 
    titulo: 'Invasão Zumbi', 
    descricao: 'A Coreia do Sul decreta estado de emergência após um vírus desconhecido tomar conta do país. Algumas pessoas tentam fugir de zumbis e ficam presas em um trem-bala que está a caminho de Busan, a única cidade que não foi afetada pelo vírus.', 
    imagem: 'https://br.web.img2.acsta.net/c_310_420/pictures/16/10/06/23/09/515438.jpg' 
  },
  
];

}