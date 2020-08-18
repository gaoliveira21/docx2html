<p>
  <h1>:scroll: DOCX2HTML</h1>
  <p>Uma simples CLI desenvolvida em NodeJS para converter arquivos docx para html</p>
  <b>:warning: A CLI pode apresentar perda de dados ao converter arquivos muito complexos. :warning:</b>
</p>

## Tecnologias utilizadas

- [NodeJS](https://nodejs.org/en/)
- [Commander](https://github.com/tj/commander.js/#installation)
- [EasyDocx](https://www.npmjs.com/package/node-easy-docx)

## :computer: Pré-requisitos

- [NodeJS](https://nodejs.org/en/)

### ⚙️ Como rodar a aplicação

```bash
# Clone este repositório
$ git clone <https://github.com/gaoliveira21/docx2html.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd docx2html

# Instale as dependências
$ npm install

# Adicione a CLI de forma global
$ npm link

# Para converter arquivos execute o comando abaixo
$ docx2html convert <docxpath> <outputdir> <outputfilename>

```

- **:paperclip: docxpath:** Caminho até o arquivo .docx (**Exemplo:** /home/user/MyDoc.docx);
- **:open_file_folder: outputdir:** Caminho onde o arquivo .html será salvo (**Exemplo:** /home/user/MyHTMLDocs);
- **bookmark_tabs: outputfilename:** Nome do arquivo .html (**Exemplo:** MyDoc);

---

### :memo: License
Esse projeto está sob MIT license. Veja [LICENSE](https://github.com/gaoliveira21/bootcamp-gostack-fastfeet-api/blob/master/LICENSE.md) para mais informações.

---

:construction_worker: Feito por **Gabriel Oliveira** :smiley: - **Contato:** <a href="https://www.linkedin.com/in/gabriel-jos%C3%A9-de-oliveira-633962197/">Linkedin</a>
