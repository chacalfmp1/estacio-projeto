document.getElementById('formAgendamento').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coletando os dados do formulário
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const ano = document.getElementById('ano').value;
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;

  // Convertendo a data para o formato Brasileiro (DD/MM/AAAA)
  const dataFormatada = new Date(data);
  const dia = String(dataFormatada.getDate()).padStart(2, '0');
  const mes = String(dataFormatada.getMonth() + 1).padStart(2, '0');
  const anoFormatado = dataFormatada.getFullYear();
  const dataBrasileira = `${dia}/${mes}/${anoFormatado}`;

    // Montando a mensagem de resultado
    const dados = `
        <strong>Nome:</strong> ${nome}<br>
        <strong>Telefone:</strong> ${telefone}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Marca:</strong> ${marca}<br>
        <strong>Modelo:</strong> ${modelo}<br>
        <strong>Ano:</strong> ${ano}<br>
        <strong>Serviço:</strong> ${servico}<br>
        <strong>Data do Agendamento:</strong> ${dataBrasileira}
    `;

    // Exibindo os dados na tela
    document.getElementById('dadosAgendamento').innerHTML = dados;
    document.getElementById('resultado').style.display = 'block';
});
