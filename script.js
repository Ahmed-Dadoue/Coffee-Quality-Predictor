const copy = {
  de: {
    htmlLang: "de",
    dir: "ltr",
    pageTitle: "Coffee Quality Explorer",
    metaDescription:
      "Eine interaktive und benutzerfreundliche Kaffee-Webseite zum Analysieren von Bohnen, Temperatur und Bruehzeit.",
    languageLabel: "Sprache",
    eyebrow: "Interaktive Kaffee-Analyse",
    heroTitle: "Coffee Quality Explorer",
    heroText:
      "Passe Bruehparameter an, vergleiche Rezepte und sieh sofort, wie sich Temperatur, Zeit und Mahlgrad auf den vorhergesagten Geschmacksscore auswirken.",
    presets: { mild: "Mild", classic: "Klassisch", bold: "Kraeftig" },
    controlsTitle: "1. Bruehprofil einstellen",
    controlsText:
      "Aendere die Parameter und beobachte direkt, wie das Modell auf dein Rezept reagiert.",
    labels: {
      beans: "Bohnenqualitaet",
      water: "Wassertemperatur",
      brew: "Bruehzeit",
      roast: "Roestung",
      grind: "Mahlgrad",
      balance: "Balance",
      power: "Kraft",
      sweetness: "Suesse",
      bitterness: "Bitterkeit",
    },
    hints: {
      beans: "Hoehere Werte bedeuten bessere Bohnen.",
      water: "Zu kalt schmeckt oft flach, zu heiss oft bitter.",
      brew: "Eine mittlere Zeit sorgt meistens fuer Balance.",
    },
    buttons: {
      predict: "Rezept analysieren",
      best: "Beste Einstellungen finden",
      reset: "Zuruecksetzen",
      searching: "Suche laeuft...",
      saved: "Gespeichert",
      resetDone: "Zurueck",
    },
    resultTitle: "2. Modell-Ergebnis",
    resultText: "Die Punktzahl zeigt den vorhergesagten Geschmacksscore fuer dieses Rezept.",
    scoreScale: "/ 100",
    explanationsTitle: "Warum diese Vorhersage?",
    mapTitle: "3. Qualitaetskarte",
    mapText:
      "Die Karte zeigt, welche Kombination aus Temperatur und Zeit laut Modell starke Ergebnisse liefert. Die markierte Zelle zeigt dein aktuelles Profil.",
    legend: { cool: "Kuehler", best: "Besser", hot: "Heisser" },
    mapCurrent: "Aktuell",
    historyTitle: "4. Top-Ergebnisse",
    historyText:
      "Hier siehst du die staerksten Rezepte aus dem aktuellen Verlauf.",
    table: {
      score: "Score",
      beans: "Bohnen",
      roast: "Roestung",
      grind: "Mahlgrad",
      temp: "Temp.",
      time: "Zeit",
    },
    units: { temp: "C", time: "s" },
    roastNames: {
      1: "Hell",
      2: "Mittel",
      3: "Mittel-dunkel",
      4: "Dunkel",
    },
    grindNames: {
      1: "Sehr fein",
      2: "Fein",
      3: "Mittel",
      4: "Grob",
      5: "Sehr grob",
    },
    badges: {
      star: "Top-Ergebnis",
      great: "Sehr ausgewogen",
      good: "Schon richtig gut",
      path: "Auf gutem Weg",
      experiment: "Weitere Optimierung moeglich",
    },
    profiles: {
      excellent:
        "Sehr rund, weich und leicht suess. Das wirkt wie ein Rezept mit sicherem Gefuehl.",
      strong:
        "Kraeftig und dunkel. Eine gute Wahl fuer Menschen, die starken Kaffee moegen.",
      light:
        "Leicht und freundlich. Dieses Rezept wirkt heller und frischer.",
      bitter:
        "Das Rezept ist stark, kann aber schon etwas bitter wirken.",
      balanced:
        "Rund, ruhig und angenehm. Das ist leicht zu verstehen und gut zu trinken.",
      fallback:
        "Hier ist schon Geschmack da, aber ein paar kleine Aenderungen koennen noch helfen.",
    },
    explanations: {
      beansStrong:
        "Die Bohnen sind stark. Das gibt deinem Kaffee einen sehr guten Start.",
      beansMid:
        "Die Bohnen sind ordentlich. Mit guten Einstellungen kann daraus ein schoener Kaffee werden.",
      beansLow:
        "Die Bohnen sind eher schwach. Dadurch wird ein Spitzenwert schwerer.",
      tempGood:
        "Die Temperatur liegt in einer freundlichen Wohlfuehl-Zone fuer den Geschmack.",
      tempLow:
        "Das Wasser ist recht kuehl. Der Kaffee kann dadurch etwas flach wirken.",
      tempHigh:
        "Das Wasser ist ziemlich heiss. Dadurch kann der Geschmack bitterer werden.",
      timeGood:
        "Die Bruehzeit ist gut ausbalanciert. So bekommt der Kaffee oft Ruhe und Tiefe.",
      timeShort:
        "Die Bruehzeit ist kurz. Der Geschmack kann dadurch leichter und duenner wirken.",
      timeLong:
        "Die Bruehzeit ist lang. So wird der Kaffee oft kraeftiger, manchmal aber auch strenger.",
      grindMid:
        "Der Mahlgrad ist mitten drin. Das ist meist eine sichere Wahl.",
      grindFine:
        "Der Mahlgrad ist fein. Das macht den Geschmack staerker, aber manchmal auch schwerer.",
      grindCoarse:
        "Der Mahlgrad ist grob. Das wirkt oft sanfter und leichter.",
      summaryGreat:
        "Alles zusammen passt sehr gut. Darum liegt die Punktzahl so hoch.",
      summaryGood:
        "Das Rezept ist schon gut. Mit kleinen Schritten bei Zeit oder Temperatur geht noch mehr.",
      summaryTry:
        "Hier steckt eine Idee drin, aber noch nicht die beste Mischung. Probiere eine mittlere Temperatur und Zeit.",
    },
    summaryLabels: {
      recipes: "gespeicherte Rezepte",
      best: "bester Score",
      average: "Durchschnitt",
    },
  },
  ar: {
    htmlLang: "ar",
    dir: "rtl",
    pageTitle: "مستكشف جودة القهوة",
    metaDescription:
      "واجهة تفاعلية وسهلة الاستخدام لتحليل إعدادات القهوة وجودتها المتوقعة.",
    languageLabel: "اللغة",
    eyebrow: "واجهة تفاعلية لتحليل القهوة",
    heroTitle: "مستكشف جودة القهوة",
    heroText:
      "عدّل إعدادات التحضير وقارن الوصفات وشاهد مباشرة كيف تؤثر الحرارة والوقت والطحن في درجة الطعم المتوقعة.",
    presets: { mild: "خفيف", classic: "كلاسيكي", bold: "قوي" },
    controlsTitle: "1. اضبط ملف التحضير",
    controlsText:
      "غيّر القيم ولاحظ مباشرة كيف يستجيب النموذج لهذا الإعداد.",
    labels: {
      beans: "جودة الحبوب",
      water: "حرارة الماء",
      brew: "وقت التحضير",
      roast: "التحميص",
      grind: "درجة الطحن",
      balance: "التوازن",
      power: "القوة",
      sweetness: "الحلاوة",
      bitterness: "المرارة",
    },
    hints: {
      beans: "كلما ارتفع الرقم كانت الحبوب أفضل.",
      water: "الحرارة المنخفضة قد تعطي طعمًا خفيفًا، والعالية قد تعطي مرارة.",
      brew: "الوقت المتوسط يعطي توازنًا أفضل في العادة.",
    },
    buttons: {
      predict: "حلّل الوصفة",
      best: "اعثر على أفضل الإعدادات",
      reset: "إعادة الضبط",
      searching: "جارٍ البحث...",
      saved: "تم الحفظ",
      resetDone: "تمت الإعادة",
    },
    resultTitle: "2. نتيجة النموذج",
    resultText: "هذه الدرجة تمثل التقييم المتوقع لهذا الإعداد.",
    scoreScale: "/ 100",
    explanationsTitle: "لماذا هذه التوقعات؟",
    mapTitle: "3. خريطة الجودة",
    mapText:
      "توضح الخريطة المناطق الأقوى بحسب الحرارة والوقت، والخانة المميزة تمثل إعدادك الحالي.",
    legend: { cool: "أبرد", best: "أفضل", hot: "أسخن" },
    mapCurrent: "الحالي",
    historyTitle: "4. أفضل النتائج",
    historyText: "هنا ترى أفضل الوصفات ضمن السجل الحالي.",
    table: {
      score: "الدرجة",
      beans: "الحبوب",
      roast: "التحميص",
      grind: "الطحن",
      temp: "الحرارة",
      time: "الوقت",
    },
    units: { temp: "°م", time: "ث" },
    roastNames: {
      1: "فاتح",
      2: "متوسط",
      3: "متوسط داكن",
      4: "داكن",
    },
    grindNames: {
      1: "ناعم جدًا",
      2: "ناعم",
      3: "متوسط",
      4: "خشن",
      5: "خشن جدًا",
    },
    badges: {
      star: "نتيجة مميزة",
      great: "متوازن جدًا",
      good: "جيد جدًا",
      path: "في الطريق الصحيح",
      experiment: "تحتاج إلى تحسين إضافي",
    },
    profiles: {
      excellent:
        "الطعم دائري وناعم وفيه لمسة حلاوة خفيفة. هذه وصفة تبدو واثقة ومتوازنة.",
      strong: "الطعم قوي وغامق. هذا مناسب لمن يحب القهوة القوية.",
      light: "الطعم خفيف ولطيف. هذه الوصفة تبدو أكثر إشراقًا وانتعاشًا.",
      bitter: "الوصفة قوية، لكنها قد تميل قليلًا إلى المرارة.",
      balanced: "الطعم هادئ ومتوازن وسهل الفهم عند الشرب.",
      fallback: "هناك طعم جيد هنا، لكن بعض التعديلات الصغيرة قد تجعله أفضل.",
    },
    explanations: {
      beansStrong: "الحبوب قوية، وهذا يمنح قهوتك بداية ممتازة.",
      beansMid:
        "جودة الحبوب جيدة، ومع الإعدادات المناسبة يمكن أن تحصل على نتيجة جميلة.",
      beansLow:
        "الحبوب أضعف قليلًا، لذلك يصبح الوصول إلى نتيجة عالية أصعب.",
      tempGood: "درجة الحرارة في منطقة مريحة جدًا للمذاق.",
      tempLow: "الماء بارد نسبيًا، وقد يجعل الطعم خفيفًا أو مسطّحًا.",
      tempHigh: "الماء ساخن جدًا، وهذا قد يجعل الطعم أكثر مرارة.",
      timeGood:
        "وقت التحضير متوازن، وهذا يساعد القهوة على إعطاء طعم أهدأ وأعمق.",
      timeShort: "وقت التحضير قصير، لذلك قد يبدو الطعم أخف وأضعف.",
      timeLong:
        "وقت التحضير طويل، وهذا قد يجعل القهوة أقوى ولكن أحيانًا أشد قسوة.",
      grindMid: "درجة الطحن متوسطة، وهذه غالبًا خطوة آمنة.",
      grindFine: "الطحن ناعم، وهذا قد يجعل الطعم أقوى لكنه أحيانًا أثقل.",
      grindCoarse: "الطحن خشن، وهذا يعطي عادة إحساسًا أخف وألطف.",
      summaryGreat: "كل شيء يعمل معًا بشكل ممتاز، ولهذا جاءت الدرجة مرتفعة.",
      summaryGood:
        "الوصفة جيدة بالفعل، ومع تعديل بسيط في الحرارة أو الوقت يمكن أن تصبح أفضل.",
      summaryTry:
        "هناك فكرة جميلة هنا، لكنها ليست أفضل تركيبة بعد. جرّب حرارة ووقتًا متوسطين.",
    },
    summaryLabels: {
      recipes: "وصفات محفوظة",
      best: "أفضل درجة",
      average: "المتوسط",
    },
  },
};

const defaultRecipe = {
  beansQuality: 8,
  roastLevel: 2,
  grindSize: 3,
  waterTemp: 94,
  brewTime: 30,
};

const presets = {
  mild: { beansQuality: 7, roastLevel: 1, grindSize: 4, waterTemp: 90, brewTime: 22 },
  classic: { beansQuality: 8, roastLevel: 2, grindSize: 3, waterTemp: 94, brewTime: 30 },
  bold: { beansQuality: 8, roastLevel: 4, grindSize: 2, waterTemp: 97, brewTime: 42 },
};

const state = {
  ...defaultRecipe,
  activePreset: "classic",
  history: [],
  lang: getStoredLanguage(),
};

const refs = {
  metaDescription: document.querySelector('meta[name="description"]'),
  languageLabel: document.getElementById("languageLabel"),
  languageSelect: document.getElementById("languageSelect"),
  eyebrowText: document.getElementById("eyebrowText"),
  heroTitle: document.getElementById("heroTitle"),
  heroText: document.getElementById("heroText"),
  presetMildBtn: document.getElementById("presetMildBtn"),
  presetClassicBtn: document.getElementById("presetClassicBtn"),
  presetBoldBtn: document.getElementById("presetBoldBtn"),
  controlsTitle: document.getElementById("controlsTitle"),
  controlsText: document.getElementById("controlsText"),
  beansLabel: document.getElementById("beansLabel"),
  waterLabel: document.getElementById("waterLabel"),
  brewLabel: document.getElementById("brewLabel"),
  beansHint: document.getElementById("beansHint"),
  waterHint: document.getElementById("waterHint"),
  brewHint: document.getElementById("brewHint"),
  roastLabel: document.getElementById("roastLabel"),
  grindLabel: document.getElementById("grindLabel"),
  roastButtons: Array.from(document.querySelectorAll("#roastLevelGroup button")),
  grindButtons: Array.from(document.querySelectorAll("#grindSizeGroup button")),
  beansQuality: document.getElementById("beansQuality"),
  beansQualityValue: document.getElementById("beansQualityValue"),
  waterTemp: document.getElementById("waterTemp"),
  waterTempValue: document.getElementById("waterTempValue"),
  brewTime: document.getElementById("brewTime"),
  brewTimeValue: document.getElementById("brewTimeValue"),
  roastLevelGroup: document.getElementById("roastLevelGroup"),
  grindSizeGroup: document.getElementById("grindSizeGroup"),
  predictBtn: document.getElementById("predictBtn"),
  bestBtn: document.getElementById("bestBtn"),
  resetBtn: document.getElementById("resetBtn"),
  resultTitle: document.getElementById("resultTitle"),
  resultText: document.getElementById("resultText"),
  scoreScaleLabel: document.getElementById("scoreScaleLabel"),
  scoreRing: document.getElementById("scoreRing"),
  scoreValue: document.getElementById("scoreValue"),
  scoreBadge: document.getElementById("scoreBadge"),
  profileText: document.getElementById("profileText"),
  explanationsTitle: document.getElementById("explanationsTitle"),
  explanationList: document.getElementById("explanationList"),
  balanceLabel: document.getElementById("balanceLabel"),
  powerLabel: document.getElementById("powerLabel"),
  sweetLabel: document.getElementById("sweetLabel"),
  bitterLabel: document.getElementById("bitterLabel"),
  balanceValue: document.getElementById("balanceValue"),
  powerValue: document.getElementById("powerValue"),
  sweetValue: document.getElementById("sweetValue"),
  bitterValue: document.getElementById("bitterValue"),
  balanceBar: document.getElementById("balanceBar"),
  powerBar: document.getElementById("powerBar"),
  sweetBar: document.getElementById("sweetBar"),
  bitterBar: document.getElementById("bitterBar"),
  mapTitle: document.getElementById("mapTitle"),
  mapText: document.getElementById("mapText"),
  legendCool: document.getElementById("legendCool"),
  legendBest: document.getElementById("legendBest"),
  legendHot: document.getElementById("legendHot"),
  mapGrid: document.getElementById("mapGrid"),
  historyTitle: document.getElementById("historyTitle"),
  historyText: document.getElementById("historyText"),
  historySummary: document.getElementById("historySummary"),
  tableScoreHead: document.getElementById("tableScoreHead"),
  tableBeansHead: document.getElementById("tableBeansHead"),
  tableRoastHead: document.getElementById("tableRoastHead"),
  tableGrindHead: document.getElementById("tableGrindHead"),
  tableTempHead: document.getElementById("tableTempHead"),
  tableTimeHead: document.getElementById("tableTimeHead"),
  topTableBody: document.getElementById("topTableBody"),
  presetButtons: Array.from(document.querySelectorAll("[data-preset]")),
};

function getStoredLanguage() {
  try {
    const stored = window.localStorage.getItem("coffee-ui-language");
    return stored === "ar" ? "ar" : "de";
  } catch {
    return "de";
  }
}

function storeLanguage(language) {
  try {
    window.localStorage.setItem("coffee-ui-language", language);
  } catch {
    return;
  }
}

function currentCopy() {
  return copy[state.lang];
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function gaussian(value, center, spread) {
  const delta = value - center;
  return Math.exp(-(delta * delta) / (2 * spread * spread));
}

function formatTemp(value) {
  return `${value} ${currentCopy().units.temp}`;
}

function formatTime(value) {
  return `${value} ${currentCopy().units.time}`;
}

function getRecipe() {
  return {
    beansQuality: state.beansQuality,
    roastLevel: state.roastLevel,
    grindSize: state.grindSize,
    waterTemp: state.waterTemp,
    brewTime: state.brewTime,
  };
}

function recipeKey(recipe) {
  return [
    recipe.beansQuality,
    recipe.roastLevel,
    recipe.grindSize,
    recipe.waterTemp,
    recipe.brewTime,
  ].join("-");
}

function detectPreset() {
  return Object.entries(presets).find(([, recipe]) => recipeKey(recipe) === recipeKey(getRecipe()))?.[0] ?? null;
}

function calculateScore(recipe) {
  const beanScore = recipe.beansQuality * 6.4;
  const tempScore = 24 * gaussian(recipe.waterTemp, 94, 3);
  const timeScore = 18 * gaussian(recipe.brewTime, 30, 7);
  const grindScore = 12 * gaussian(recipe.grindSize, 3, 1.15);
  const roastBonus = { 1: 6, 2: 10, 3: 8, 4: 5 }[recipe.roastLevel];

  const harmonyBonus =
    (recipe.roastLevel === 2 || recipe.roastLevel === 3 ? 3 : 0) +
    (recipe.grindSize === 3 ? 3 : 0) +
    (recipe.waterTemp >= 92 && recipe.waterTemp <= 96 ? 3 : 0) +
    (recipe.brewTime >= 25 && recipe.brewTime <= 35 ? 3 : 0);

  const bitterPenalty =
    Math.max(0, recipe.waterTemp - 97) * 1.8 +
    Math.max(0, recipe.brewTime - 45) * 1.2 +
    Math.max(0, 3 - recipe.grindSize) * 1.5;

  const weakPenalty =
    Math.max(0, 89 - recipe.waterTemp) * 1.4 +
    Math.max(0, 18 - recipe.brewTime) * 1.5 +
    Math.max(0, recipe.grindSize - 3) * 1.4;

  const rawScore =
    beanScore +
    tempScore +
    timeScore +
    grindScore +
    roastBonus +
    harmonyBonus -
    bitterPenalty -
    weakPenalty;

  return clamp(Math.round(rawScore), 0, 100);
}

function calculateFlavors(recipe) {
  const balance = clamp(
    Math.round(
      100 -
        Math.abs(recipe.waterTemp - 94) * 6 -
        Math.abs(recipe.brewTime - 30) * 2.2 -
        Math.abs(recipe.grindSize - 3) * 14
    ),
    0,
    100
  );

  const power = clamp(
    Math.round(24 + recipe.roastLevel * 14 + (recipe.waterTemp - 90) * 2.5 + (recipe.brewTime - 22) * 1.05),
    0,
    100
  );

  const sweetness = clamp(
    Math.round(
      recipe.beansQuality * 7 +
        28 +
        (recipe.roastLevel <= 2 ? 8 : -6) +
        (recipe.waterTemp >= 91 && recipe.waterTemp <= 95 ? 8 : -4)
    ),
    0,
    100
  );

  const bitterness = clamp(
    Math.round(
      (recipe.roastLevel - 1) * 18 +
        Math.max(0, recipe.waterTemp - 95) * 8 +
        Math.max(0, recipe.brewTime - 35) * 2.8 +
        Math.max(0, 3 - recipe.grindSize) * 8
    ),
    0,
    100
  );

  return { balance, power, sweetness, bitterness };
}

function getBadge(score) {
  const badges = currentCopy().badges;
  if (score >= 90) return badges.star;
  if (score >= 80) return badges.great;
  if (score >= 70) return badges.good;
  if (score >= 55) return badges.path;
  return badges.experiment;
}

function getProfileText(recipe, score, flavors) {
  const text = currentCopy().profiles;
  if (score >= 88) return text.excellent;
  if (recipe.roastLevel === 4 || flavors.power >= 82) return text.strong;
  if (recipe.roastLevel === 1 && recipe.waterTemp <= 92) return text.light;
  if (flavors.bitterness >= 65) return text.bitter;
  if (flavors.balance >= 78) return text.balanced;
  return text.fallback;
}

function buildExplanations(recipe, score) {
  const text = currentCopy().explanations;
  const items = [];

  if (recipe.beansQuality >= 8) items.push(text.beansStrong);
  else if (recipe.beansQuality >= 5) items.push(text.beansMid);
  else items.push(text.beansLow);

  if (recipe.waterTemp >= 92 && recipe.waterTemp <= 96) items.push(text.tempGood);
  else if (recipe.waterTemp < 90) items.push(text.tempLow);
  else items.push(text.tempHigh);

  if (recipe.brewTime >= 25 && recipe.brewTime <= 35) items.push(text.timeGood);
  else if (recipe.brewTime < 20) items.push(text.timeShort);
  else items.push(text.timeLong);

  if (recipe.grindSize === 3) items.push(text.grindMid);
  else if (recipe.grindSize < 3) items.push(text.grindFine);
  else items.push(text.grindCoarse);

  if (score >= 85) items.push(text.summaryGreat);
  else if (score >= 70) items.push(text.summaryGood);
  else items.push(text.summaryTry);

  return items;
}

function applyLanguage() {
  const text = currentCopy();

  document.documentElement.lang = text.htmlLang;
  document.documentElement.dir = text.dir;
  document.title = text.pageTitle;
  refs.metaDescription.content = text.metaDescription;
  refs.languageSelect.value = state.lang;

  refs.languageLabel.textContent = text.languageLabel;
  refs.eyebrowText.textContent = text.eyebrow;
  refs.heroTitle.textContent = text.heroTitle;
  refs.heroText.textContent = text.heroText;
  refs.presetMildBtn.textContent = text.presets.mild;
  refs.presetClassicBtn.textContent = text.presets.classic;
  refs.presetBoldBtn.textContent = text.presets.bold;
  refs.controlsTitle.textContent = text.controlsTitle;
  refs.controlsText.textContent = text.controlsText;
  refs.beansLabel.textContent = text.labels.beans;
  refs.waterLabel.textContent = text.labels.water;
  refs.brewLabel.textContent = text.labels.brew;
  refs.beansHint.textContent = text.hints.beans;
  refs.waterHint.textContent = text.hints.water;
  refs.brewHint.textContent = text.hints.brew;
  refs.roastLabel.textContent = text.labels.roast;
  refs.grindLabel.textContent = text.labels.grind;
  refs.resultTitle.textContent = text.resultTitle;
  refs.resultText.textContent = text.resultText;
  refs.scoreScaleLabel.textContent = text.scoreScale;
  refs.explanationsTitle.textContent = text.explanationsTitle;
  refs.balanceLabel.textContent = text.labels.balance;
  refs.powerLabel.textContent = text.labels.power;
  refs.sweetLabel.textContent = text.labels.sweetness;
  refs.bitterLabel.textContent = text.labels.bitterness;
  refs.mapTitle.textContent = text.mapTitle;
  refs.mapText.textContent = text.mapText;
  refs.legendCool.textContent = text.legend.cool;
  refs.legendBest.textContent = text.legend.best;
  refs.legendHot.textContent = text.legend.hot;
  refs.historyTitle.textContent = text.historyTitle;
  refs.historyText.textContent = text.historyText;
  refs.tableScoreHead.textContent = text.table.score;
  refs.tableBeansHead.textContent = text.table.beans;
  refs.tableRoastHead.textContent = text.table.roast;
  refs.tableGrindHead.textContent = text.table.grind;
  refs.tableTempHead.textContent = text.table.temp;
  refs.tableTimeHead.textContent = text.table.time;
  refs.mapGrid.setAttribute("aria-label", text.mapTitle);

  refs.roastButtons.forEach((button) => {
    button.textContent = text.roastNames[button.dataset.value];
  });

  refs.grindButtons.forEach((button) => {
    button.textContent = text.grindNames[button.dataset.value];
  });

  refs.predictBtn.textContent = text.buttons.predict;
  refs.resetBtn.textContent = text.buttons.reset;
  refs.bestBtn.textContent = refs.bestBtn.disabled ? text.buttons.searching : text.buttons.best;

  syncControls();
  updateExperience();
  renderHistory();
}

function syncControls() {
  refs.beansQuality.value = state.beansQuality;
  refs.waterTemp.value = state.waterTemp;
  refs.brewTime.value = state.brewTime;

  refs.beansQualityValue.textContent = String(state.beansQuality);
  refs.waterTempValue.textContent = formatTemp(state.waterTemp);
  refs.brewTimeValue.textContent = formatTime(state.brewTime);

  refs.roastButtons.forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.value) === state.roastLevel);
  });

  refs.grindButtons.forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.value) === state.grindSize);
  });

  refs.presetButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.preset === state.activePreset);
  });
}

function renderScore(score, profileText) {
  refs.scoreValue.textContent = String(score);
  refs.scoreBadge.textContent = getBadge(score);
  refs.profileText.textContent = profileText;
  refs.scoreRing.style.setProperty("--score-angle", `${score * 3.6}deg`);

  if (score >= 85) {
    refs.scoreBadge.style.background = "rgba(132, 184, 144, 0.2)";
    refs.scoreBadge.style.color = "#355443";
  } else if (score >= 70) {
    refs.scoreBadge.style.background = "rgba(110, 167, 216, 0.2)";
    refs.scoreBadge.style.color = "#244d73";
  } else {
    refs.scoreBadge.style.background = "rgba(242, 198, 141, 0.26)";
    refs.scoreBadge.style.color = "#8a5428";
  }
}

function renderExplanations(explanations) {
  refs.explanationList.innerHTML = explanations.map((text) => `<li>${text}</li>`).join("");
}

function renderBars(flavors) {
  refs.balanceValue.textContent = String(flavors.balance);
  refs.powerValue.textContent = String(flavors.power);
  refs.sweetValue.textContent = String(flavors.sweetness);
  refs.bitterValue.textContent = String(flavors.bitterness);

  refs.balanceBar.style.width = `${flavors.balance}%`;
  refs.powerBar.style.width = `${flavors.power}%`;
  refs.sweetBar.style.width = `${flavors.sweetness}%`;
  refs.bitterBar.style.width = `${flavors.bitterness}%`;
}

function nearest(value, values) {
  return values.reduce((best, current) => {
    return Math.abs(current - value) < Math.abs(best - value) ? current : best;
  }, values[0]);
}

function renderMap(recipe) {
  const text = currentCopy();
  const temps = [88, 90, 92, 94, 96, 98];
  const times = [18, 24, 30, 36, 42, 48];
  const currentTemp = nearest(recipe.waterTemp, temps);
  const currentTime = nearest(recipe.brewTime, times);
  const cells = [];

  times.forEach((time) => {
    temps.forEach((temp) => {
      const sample = { ...recipe, waterTemp: temp, brewTime: time };
      const score = calculateScore(sample);
      const intensity = score / 100;
      const hueTop = Math.round(34 + intensity * 72);
      const hueBottom = Math.round(22 + intensity * 88);
      const lightTop = Math.round(82 - intensity * 20);
      const lightBottom = Math.round(64 - intensity * 22);
      const isCurrent = temp === currentTemp && time === currentTime;
      const currentAttr = isCurrent ? `data-current-label="${text.mapCurrent}"` : "";

      cells.push(`
        <div
          class="map-cell ${isCurrent ? "current" : ""}"
          ${currentAttr}
          style="background: linear-gradient(180deg, hsl(${hueTop} 72% ${lightTop}%), hsl(${hueBottom} 62% ${lightBottom}%));"
        >
          <small>${temp} ${text.units.temp} | ${time} ${text.units.time}</small>
          <strong>${score}</strong>
        </div>
      `);
    });
  });

  refs.mapGrid.innerHTML = cells.join("");
}

function createHistoryEntry(recipe) {
  return { ...recipe, score: calculateScore(recipe) };
}

function saveRecipeToHistory(recipe) {
  const entry = createHistoryEntry(recipe);
  const newKey = recipeKey(entry);
  state.history = [entry, ...state.history.filter((item) => recipeKey(item) !== newKey)].slice(0, 12);
  renderHistory();
}

function renderHistory() {
  const text = currentCopy();
  const sorted = [...state.history].sort((left, right) => right.score - left.score);
  const topFive = sorted.slice(0, 5);
  const best = sorted[0]?.score ?? 0;
  const average = sorted.length
    ? Math.round(sorted.reduce((sum, item) => sum + item.score, 0) / sorted.length)
    : 0;

  refs.historySummary.innerHTML = [
    `<div class="summary-pill"><strong>${sorted.length}</strong> ${text.summaryLabels.recipes}</div>`,
    `<div class="summary-pill"><strong>${best}</strong> ${text.summaryLabels.best}</div>`,
    `<div class="summary-pill"><strong>${average}</strong> ${text.summaryLabels.average}</div>`,
  ].join("");

  refs.topTableBody.innerHTML = topFive
    .map((entry) => {
      return `
        <tr>
          <td><strong>${entry.score}</strong></td>
          <td>${entry.beansQuality}</td>
          <td>${text.roastNames[entry.roastLevel]}</td>
          <td>${text.grindNames[entry.grindSize]}</td>
          <td>${formatTemp(entry.waterTemp)}</td>
          <td>${formatTime(entry.brewTime)}</td>
        </tr>
      `;
    })
    .join("");
}

function updateExperience() {
  const recipe = getRecipe();
  const score = calculateScore(recipe);
  const flavors = calculateFlavors(recipe);
  const profileText = getProfileText(recipe, score, flavors);

  renderScore(score, profileText);
  renderExplanations(buildExplanations(recipe, score));
  renderBars(flavors);
  renderMap(recipe);
}

function applyRecipe(recipe) {
  state.beansQuality = recipe.beansQuality;
  state.roastLevel = recipe.roastLevel;
  state.grindSize = recipe.grindSize;
  state.waterTemp = recipe.waterTemp;
  state.brewTime = recipe.brewTime;
  state.activePreset = detectPreset();
  syncControls();
  updateExperience();
}

function handleManualChange() {
  state.activePreset = detectPreset();
  syncControls();
  updateExperience();
}

function seedHistory() {
  const samples = [
    presets.classic,
    presets.mild,
    presets.bold,
    { beansQuality: 9, roastLevel: 2, grindSize: 3, waterTemp: 95, brewTime: 31 },
    { beansQuality: 8, roastLevel: 3, grindSize: 2, waterTemp: 94, brewTime: 34 },
  ];

  state.history = samples.map((recipe) => createHistoryEntry(recipe));
  renderHistory();
}

function flashButton(button, temporaryText, defaultText) {
  button.textContent = temporaryText;
  window.setTimeout(() => {
    button.textContent = defaultText;
  }, 1000);
}

function findBestRecipe() {
  refs.bestBtn.disabled = true;
  refs.bestBtn.textContent = currentCopy().buttons.searching;

  window.setTimeout(() => {
    let bestRecipe = getRecipe();
    let bestScore = -1;

    for (let beansQuality = 1; beansQuality <= 10; beansQuality += 1) {
      for (let roastLevel = 1; roastLevel <= 4; roastLevel += 1) {
        for (let grindSize = 1; grindSize <= 5; grindSize += 1) {
          for (let waterTemp = 85; waterTemp <= 100; waterTemp += 1) {
            for (let brewTime = 10; brewTime <= 60; brewTime += 1) {
              const candidate = {
                beansQuality,
                roastLevel,
                grindSize,
                waterTemp,
                brewTime,
              };
              const score = calculateScore(candidate);

              if (score > bestScore) {
                bestScore = score;
                bestRecipe = candidate;
              }
            }
          }
        }
      }
    }

    applyRecipe(bestRecipe);
    saveRecipeToHistory(bestRecipe);
    refs.bestBtn.disabled = false;
    refs.bestBtn.textContent = currentCopy().buttons.best;
  }, 0);
}

function setLanguage(language) {
  state.lang = language === "ar" ? "ar" : "de";
  storeLanguage(state.lang);
  applyLanguage();
}

refs.languageSelect.addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

refs.beansQuality.addEventListener("input", (event) => {
  state.beansQuality = Number(event.target.value);
  handleManualChange();
});

refs.waterTemp.addEventListener("input", (event) => {
  state.waterTemp = Number(event.target.value);
  handleManualChange();
});

refs.brewTime.addEventListener("input", (event) => {
  state.brewTime = Number(event.target.value);
  handleManualChange();
});

refs.roastLevelGroup.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  state.roastLevel = Number(button.dataset.value);
  handleManualChange();
});

refs.grindSizeGroup.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  state.grindSize = Number(button.dataset.value);
  handleManualChange();
});

refs.presetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.activePreset = button.dataset.preset;
    applyRecipe(presets[button.dataset.preset]);
  });
});

refs.predictBtn.addEventListener("click", () => {
  const text = currentCopy();
  saveRecipeToHistory(getRecipe());
  flashButton(refs.predictBtn, text.buttons.saved, text.buttons.predict);
});

refs.bestBtn.addEventListener("click", () => {
  findBestRecipe();
});

refs.resetBtn.addEventListener("click", () => {
  const text = currentCopy();
  applyRecipe(defaultRecipe);
  flashButton(refs.resetBtn, text.buttons.resetDone, text.buttons.reset);
});

seedHistory();
applyLanguage();
