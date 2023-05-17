const app = require('./app');

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
