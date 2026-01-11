---
title: "Zen Paris, zazen depuis plus de 10 ans"
date: 2024-03-21
draft: false
image:
  src: "/assets/couture-traditionnelle-kesa-zen.webp"
  alt: "Couture zen : cousez votre rakusu ou votre kesa"
snippet: "Historique du dojo Zen Paris, Kosen sangha"
publishDate: "2015-12-12T00:00:00Z"
category: ""
tags: []
---

<div id="zen-intro">
  <p>Bonjour ami·e du zen !</p>
  <p id="years-text"></p>
  <p>Ceci pour une meilleure visibilité et un meilleur fonctionnement dans les différentes activités
    (zazen, sesshin, couture, etc.) et au sein de la Kosen Sangha.</p>
  <p id="years-text-repeat"></p>
  <p>
    Alors un grand merci à toutes les personnes, anciennes ou moins anciennes qui par leur présence,
    leur énergie et leur soutien ont contribué et contribuent à faire de Zen Paris
    l’association que nous connaissons aujourd’hui…
  </p>
</div>

<script type="module" client:load>
  const now = new Date();
  const foundingYear = 2014;
  const foundingMonth = 3; // March
  const yearsSince = now.getFullYear() - foundingYear;

  // First paragraph
  const yearsText = `Le dojo Zen Paris, fondé à la fin des années 1990 par Josy Thibaut, mère de Maître Kosen, s’est constitué, sous son impulsion et celle des pratiquant·e·s d’alors, en association Loi 1901 il y a ${yearsSince} ${yearsSince === 1 ? "an" : "ans"}, en mars ${foundingYear} exactement.`;
  document.getElementById("years-text").textContent = yearsText;

  // Repeated mention
  const repeatText = `Avec Zen Paris, ${yearsSince} ${yearsSince === 1 ? "an" : "ans"} de pratique donc, de pérégrinations, de projets ou de rencontres dans la grande Voie du Zen !`;
  document.getElementById("years-text-repeat").textContent = repeatText;
</script>
