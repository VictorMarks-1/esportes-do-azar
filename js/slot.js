document.addEventListener("DOMContentLoaded", () => {
  const symbols = ["🍒", "🍋", "7️⃣", "🔔", "💎", "🍇"];
  
  const reel1 = document.getElementById("reel-1");
  const reel2 = document.getElementById("reel-2");
  const reel3 = document.getElementById("reel-3");
  const spinBtn = document.getElementById("spin-btn");
  const bankStatus = document.getElementById("bank-status");

  const statAttempts = document.getElementById("stat-attempts");
  const statLost = document.getElementById("stat-lost");
  const statNearMiss = document.getElementById("stat-nearmiss");

  let attempts = 0;
  let totalLost = 0;
  let nearMisses = 0;
  let bank = 100;

  spinBtn.addEventListener("click", () => {
    if (bank < 10) {
      bank = 100;
      bankStatus.innerText = "Banca fictícia restaurada para R$ 100,00.";
      return;
    }

    // Desabilita botão durante a animação
    spinBtn.disabled = true;

    // Deduz o custo
    bank -= 10;
    attempts++;
    totalLost += 10;

    // Atualiza contadores de imediato
    statAttempts.innerText = attempts;
    statLost.innerText = `R$ ${totalLost.toFixed(2).replace('.', ',')}`;

    // Lógica do Near-Miss (80% de chance de dar 2 símbolos iguais e 1 diferente)
    let result = [];
    const isNearMiss = Math.random() < 0.8;

    if (isNearMiss) {
      const matchSymbol = symbols[Math.floor(Math.random() * symbols.length)];
      let diffSymbol = symbols[Math.floor(Math.random() * symbols.length)];
      while (diffSymbol === matchSymbol) {
        diffSymbol = symbols[Math.floor(Math.random() * symbols.length)];
      }
      result = [matchSymbol, matchSymbol, diffSymbol];
      nearMisses++;
    } else {
      // Rodada comum totalmente aleatória
      result = [
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)]
      ];
    }

    // Animação dos carretéis
    let counter = 0;
    const interval = setInterval(() => {
      reel1.innerText = symbols[Math.floor(Math.random() * symbols.length)];
      reel2.innerText = symbols[Math.floor(Math.random() * symbols.length)];
      reel3.innerText = symbols[Math.floor(Math.random() * symbols.length)];
      counter++;

      if (counter > 15) {
        clearInterval(interval);
        // Exibe o resultado final
        reel1.innerText = result[0];
        reel2.innerText = result[1];
        reel3.innerText = result[2];

        // Atualiza status e UI
        statNearMiss.innerText = nearMisses;
        bankStatus.innerText = `Saldo atual da banca: R$ ${bank.toFixed(2).replace('.', ',')}`;
        
        spinBtn.disabled = false;
      }
    }, 60);
  });
});