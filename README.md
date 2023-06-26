# Store Manager

Este é o repositório do projeto Store Manager, onde você desenvolverá uma API RESTful para um sistema de gerenciamento de vendas. A API permitirá a criação, visualização, atualização e exclusão de produtos e vendas. O banco de dados MySQL será utilizado para armazenar os dados.



## Funcionalidades

- Interagir com um banco de dados relacional MySQL
- Implementar uma API utilizando arquitetura em camadas
- Criar validações para os dados recebidos pela API
- Escrever testes para APIs para garantir a implementação dos endpoints

## Iniciando a aplicação no Docker Compose

1. Instale as dependências do projeto:
```
npm install
```

2. Inicie os containers utilizando o Docker Compose. Isso irá iniciar o container do backend da aplicação e o container do banco de dados MySQL:
```
docker-compose up -d
```

A aplicação estará disponível em `http://localhost:3001` no modo de desenvolvimento.

3. Verifique os logs da aplicação para acompanhar sua execução (opcional):
```
docker logs -n 20 -f store_manager
```

# Contribuição
Contribuições são sempre bem-vindas! Se você tiver sugestões de melhorias, correções de bugs ou novos testes, sinta-se à vontade para contribuir seguindo as etapas abaixo:

1. Crie um fork do repositório.

2. Crie uma branch para sua feature/correção: git checkout -b minha-feature.

3. Faça as alterações desejadas nos testes.

4. Faça o commit das suas alterações: git commit -m 'Meu novo teste'.

5. Envie para o repositório remoto: git push origin minha-feature.

6. Abra um pull request explicando suas alterações.


Agora você está pronto para começar a desenvolver a API e escrever os testes para os endpoints.

Utilize a arquitetura em camadas para separar as responsabilidades da aplicação, interaja com o banco de dados MySQL para persistir os dados e crie validações para garantir a integridade dos dados recebidos pela API.

Lembre-se de escrever testes para cada endpoint, garantindo a qualidade e robustez da sua aplicação.

Bons estudos e bom desenvolvimento!

# Contato
Se você tiver alguma dúvida ou sugestão, entre em contato por meio dos seguintes canais:

E-mail: marcoaureliojunqueira8@gmail.com

GitHub: https://github.com/MarcoAureliojunqueira

LinkedIn: https://www.linkedin.com/in/marco-aurélio-junqueira/
