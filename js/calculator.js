document.addEventListener("DOMContentLoaded", () => {
  // 1. Simulador de Impacto Financeiro
  const weeklyInput = document.getElementById("weekly-amount");
  const calcBtn = document.getElementById("calc-btn");
  
  const res6m = document.getElementById("res-6m");
  const res1y = document.getElementById("res-1y");
  const res5y = document.getElementById("res-5y");
  const financialTip = document.getElementById("financial-tip");

  function calculateFinancialImpact() {
    const weeklyValue = parseFloat(weeklyInput.value) || 0;
    
    // Aproximando: 1 mês = 4.33 semanas, 6 meses = 26 semanas, 1 ano = 52 semanas, 5 anos = 260 semanas
    const total6Meses = weeklyValue * 26;
    const total1Ano = weeklyValue * 52;
    const total5Anos = weeklyValue * 260;

    res6m.innerText = `R$ ${total6Meses.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    res1y.innerText = `R$ ${total1Ano.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    res5y.innerText = `R$ ${total5Anos.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    if (total1Ano >= 4000) {
      financialTip.innerHTML = `💡 Em 1 ano, esse valor de <strong>R$ ${total1Ano.toFixed(2)}</strong> seria suficiente para realizar uma viagem internacional ou comprar equipamentos de trabalho de alto padrão.`;
    } else {
      financialTip.innerHTML = `💡 Em 1 ano, você poderia montar uma reserva de emergência ou quitar faturas de cartão de crédito.`;
    }
  }

  calcBtn.addEventListener("click", calculateFinancialImpact);
  weeklyInput.addEventListener("input", calculateFinancialImpact);

  // 2. Questionário de Triagem (DSM-5)
  const triageBtn = document.getElementById("triage-btn");
  const triageSelects = document.querySelectorAll(".triage-select");
  const diagBadge = document.getElementById("diag-badge");
  const diagScore = document.getElementById("diag-score");
  const diagText = document.getElementById("diag-text");

  triageBtn.addEventListener("click", () => {
    let score = 0;
    triageSelects.forEach(select => {
      score += parseInt(select.value) || 0;
    });

    diagScore.innerHTML = `Score: <strong>${score}/7</strong>`;

    if (score >= 5) {
      diagBadge.className = "badge-danger";
      diagBadge.innerText = "⚠ Alto Risco de Dependência";
      diagText.innerText = "Suas respostas indicam forte compatibilidade com os critérios clínicos de ludopatia. Recomendamos buscar apoio profissional especializado imediatamente (veja nossa página de Saúde e Apoio).";
    } else if (score >= 2) {
      diagBadge.className = "badge-success";
      diagBadge.innerText = "⚡ Risco Moderado";
      diagText.innerText = "Existem sinais de alerta nos seus hábitos de jogo. O comportamento de compensação e o gasto oculto podem escalar rapidamente se não forem monitorados.";
    } else {
      diagBadge.className = "badge-success";
      diagBadge.innerText = "✔ Baixo Risco Imediato";
      diagText.innerText = "Seus hábitos atuais não apontam dependência severa, mas lembre-se de que toda plataforma de aposta é desenhada matematicamente para acumular perdas no longo prazo.";
    }
  });
});