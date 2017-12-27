# Como contribuir no ***Verdade Seja Dita***


:+1::tada: Antes de tudo, obrigada por contribuir no nosso projeto! :tada::+1:


Aqui você vai encontrar uma série de guias para contribuir no site **Verdade Seja Dita**, que está hosteado no Github.
Veja essas linhas mais como guias do que regras.
Use seu melhor julgamento, e sinta se livre para propor mudancas neste documento em um Pull Request.

#### Conteúdo

[Código de Conduta](#codigo-de-conduta)

[Como eu Posso Contribuir?](#como-eu-posso-contribuir)
  * [Reportando Bugs](#reportando-bugs)
  * [Sugerindo Melhorias](#sugerindo-melhorias)
  * [Contribuindo no Código](#your-first-code-contribution)
  * [Pull Requests](#pull-requests)

[Guias de Estilo](#styleguides)
  * [Guia de Estilo para Messagens de Commit](#guia-de-estilo-para-mensagens-de-commit)
  * [Guia de Estilo para JavaScript/React](#guia-de-estilo-para-javascript)
  * [Guia de Estilo para Testes](#guia-de-estilo-de-testes)

## Código de Conduta

Esse projeto e todos os participantes são governados pelo [Código de conduta - Verdade Seja Dita](CODE_OF_CONDUCT.md). Se deseja participar, é esperado que você concorde com o Código.

## Como eu posso Contribuir?

### Reportando Bugs

Esta seção guiará a pessoa que deseja contribuir reportando bugs do Site Verdade Seja Dita. Seguindo esse guia você ajudará os mantenedores e a comunidade a entender o seu reporte :pencil:, reproduzir o comportamento :computer: :computer:, e encontrar reportes relacionados :mag_right:.   

Antes de reportar bugs, por favor dê uma olhada [nessa lista](#antes-de-reportar-um-bug) pra checar se você realmente precisa reportar o bug. Quando você estiver reportando um bug, por favor [inclua o máximo de detalhes possível](#como-fazer-um-bom-report-de-bug). Preencha o [template](ISSUE_TEMPLATE.md), as informações pedidas nos ajudam a resolver rápido os problemas.

> **Nota:** Se você encontrar um issue **Fechado** que parece ser o mesmo problema que você está enfrentando, abra um novo issue e inclua um link para o issue original no corpo do seu novo.

#### Antes de Reportar um Bug

* **Execute uma [pesquisa rápida](https://github.com/search?q=+is%3Aissue+user%3Aatom)** para ver se o problema já foi relatado. Se o issue foi relatado e **ainda estiver aberto **, adicione um comentário no issue existente em vez de abrir um novo.
* **Limpe a cache do seu navegador**
* **Tente reproduzir o comportamento em outros navegadores**

#### Como fazer um (Bom) reporte de Bug?

Bugs são acompanhados através de [issues do GitHub](https://guides.github.com/features/issues/). Forneça as seguintes informações preenchendo [o template](ISSUE_TEMPLATE.md).

Explique o problema e inclua detalhes adicionais para ajudar os mantenedores a reproduzir o problema:

* **Use um título claro e descritivo** para a questão para identificar o problema.
* **Descreva os passos exatos que reproduzem o problema** em tantos detalhes quanto possível. Por exemplo, comece explicando como você iniciou o Verdade Seja Dita, p.Ex. através de um link ou digitando o endereço no browser. Ao listar as etapas, **não apenas diga o que fez, mas explique como você fez isso**. Por exemplo, se você moveu o cursor para um campo do form, explique se você usou o mouse, ou um atalho de teclado, em caso afirmativo, qual deles?
* **Forneça exemplos específicos para demonstrar as etapas**. Inclua links para arquivos ou projetos do GitHub, ou fragmentos de cópia / colagem, que você usou nesses exemplos. Se você estiver fornecendo trechos de código no problema, use [Blocos de código Markdown](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Descreva o comportamento que você observou depois de seguir as etapas** e aponte o que exatamente é o problema com esse comportamento.
* **Explique o comportamento que você esperava ver e por que.**

* **Inclua capturas de tela e GIF animados** que mostram seguindo as etapas descritas e demonstram claramente o problema. Você pode usar [esta ferramenta](https://www.cockos.com/licecap/) para gravar GIFs no MacOS e Windows, e [esta ferramenta](https://github.com/colinkeenan/silentcast) ou [esta ferramenta](https://github.com/GNOME/byzanz) no Linux.
* **Se o problema não foi desencadeado por uma ação específica**, descreva o que estava fazendo antes que o problema acontecesse e compartilhe mais informações usando as diretrizes abaixo.

Forneça mais contexto respondendo estas questões:

* **Você pode reproduzir o problema em modo anônimo?**
* **O problema começou a acontecer recentemente** ou isso sempre foi um problema?
* **Você pode reproduzir com segurança o problema?** Caso contrário, forneça detalhes sobre a frequência com que o problema acontece e em que condições normalmente acontece.

Inclua detalhes sobre sua configuração e ambiente:

* **Qual é o nome e a versão do Browser você está usando?**
* **Qual é o nome e a versão do sistema operacional que você está usando?**
* **Você está usando o Verdade Seja Dita com vários monitores?** Em caso afirmativo, você pode reproduzir o problema quando usa um único monitor?
* **Qual formato de teclado você está usando?** Você está usando um layout americano ou algum outro layout?

### Sugerindo Melhorias

Esta seção visa guiar você a submeter uma sugestão de melhoria para o Site Verdade Seja Dita, incluindo novas funcionalidades e pequenas melhorias a existentes. Ao seguir essas diretrizes você ajudará os mantenedores e a comunidade a entender sua sugestão :pencil: e encontrar sugestões relacionadas :mag_right:

Antes de criar suas sugestões de melhorias, por favor de uma olhada [nessa lista](#antes-de-submeter-uma-sugestao-de-melhoria) pra checar se você realmente precisa criar uma. Quando você tiver sugerindo algo, por favor [inclua o máximo de detalhes possível](#como-fazer-um-bom-report-de-bug). Preencha o [template](ISSUE_TEMPLATE.md), incluindo os passos que você imaginaria tomar se a funcionalidade que está pedindo já existisse.

#### Antes de Submeter uma Sugestão de Melhoria

* **Execute uma [pesquisa rápida](https://github.com/search?q=+is%3Aissue+user%3Aatom)** para ver se o issue com a sugestão de melhoria já foi criado. Se o foi, adicione um comentário no issue existente em vez de abrir um novo.

#### Como eu Submeto uma (Boa) Sugestão de Melhoria

Melhorias são acompanhadas através de [issues do GitHub](https://guides.github.com/features/issues/). Depois de você ter determinado os seguintes items:

* **Use um título claro e descritivo** do Issue para identificar a sugestão.
* **Forneça uma descrição passo-a-passo do aprimoramento sugerido** em tantos detalhes quanto possível.
* **Forneça exemplos específicos para demonstrar as etapas**. Se ajudar use [blocos de código de Markdown](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Descreva o comportamento atual** e **explique o comportamento que você esperava ver em vez** e por que.
* **Inclua capturas de tela e GIF animados** que o ajudem a demonstrar os passos ou aponte a parte do Site com a qual a sugestão está relacionada. Você pode usar [esta ferramenta](https://www.cockos.com/licecap/) para gravar GIFs no MacOS e Windows, e [esta ferramenta](https://github.com/colinkeenan/silentcast) ou [esta ferramenta](https://github.com/GNOME/byzanz) no Linux.
* **Explique por que esse aprimoramento seria útil**
* **Liste alguns outros sites onde esse aprimoramento existe.**
* **Especifique o nome e a versão do sistema operacional que você está usando.**

#### Desenvolvimento local

### Pull Requests

* Preencha [o modelo necessário](PULL_REQUEST_TEMPLATE.md)
* Não inclua números de Issues no título do PR
* Inclua capturas de tela e GIFs animados em seus PRs sempre que possível.
* Siga o guia de estilo [JavaScript](#javascript-styleguide).
* Os testes unitários seguem a especificacao [Jasmine](https://jasmine.github.io/). Veja o [Guia de Estilo para Testes](#specs-styleguide) abaixo.
* Finalize todos os arquivos com uma nova linha
* Evite o código dependente de um(a) browser/plataforma específico(a)
* Coloque os imports na seguinte ordem:
    * Módulos padrão do Javascript/Node
    * Módulos do React e relacionados
    * Módulos locais (usando caminhos relativos)


## Guias de Estilo


### Guia de Estilo para Messagens de Commit

* Use o tempo presente ("Adicionar recurso" não "Função adicionada")
* Use o modo imperativo ("Mover o cursor para ..." não "Move o cursor para ...")
* Limite a primeira linha a 72 caracteres ou menos
* Referencie Issues e PRs livremente depois da primeira linha
* Quando apenas alterar a documentação, inclua `[ci skip]` na descrição do Commit
* Considere começar a mensagem de Commit com um emoji aplicável:
    * :art: `:art:` quando melhorar o formato/estrutura do código
    * :racehorse: `:racehorse:` quando melhorar o desempenho
    * :non-potable_water: `:non-potable_water:` when plugging memory leaks
    * :memo: `:memo:` ao escrever documentos
    * :bug: `:bug:` quando corrigir um bug
    * :fire: `:fire:` quando remover códigos ou arquivos
    * :green_heart: `:green_heart:` quando corrigir a CI-Build
    * :white_check_mark: `:white_check_mark:` ao adicionar testes
    * :lock: `:lock:` quando se trata de segurança
    * :arrow_up: `:arrow_up:` ao atualizar dependências
    * :arrow_down: `:arrow_down:` ao diminuir dependências
    * :shirt: `:shirt:` ao remover avisos de linter


### Guia de Estilo para JavaScript

Todo o código Javascript deve aderir ao [JavaScript Standard Style](https://standardjs.com/).

* Prefira o spread operador do objeto (`{...anotherObj}`) ao inves de `Object.assign()`
* Coloque o `export` na mesma linha da delaracão sempre que possível
  ```js
  // Use isso:
  export default class ClassName {

  }

  // Ao inves de:
  class ClassName {

  }
  export default ClassName
  ```

### Guia de Estilo para Testes

- Os testes unitários seguem a especificacao [Jasmine](https://jasmine.github.io/) e geralmente estão na mesma pasta do arquivo que você pretende testar com a extensão `<arquivo>.test.js`.
- Trate `describe` como um substantivo ou situação.
- Trate `it` como uma declaração sobre o estado ou como uma operação muda de estado.

#### Example

```javascript
describe('um cachorro', () =>
 it('late', () =>
 // teste aqui
 describe( 'quando o cachorro está feliz', () =>
  it('abana o rabo', () =>
  // teste aqui
```
