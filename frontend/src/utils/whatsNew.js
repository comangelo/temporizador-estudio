/**
 * «Novedades» de cada versión publicada.
 *
 * Al publicar una versión con cambios visibles, añade una entrada AL PRINCIPIO de
 * RELEASES (id = fecha de publicación, AAAA-MM-DD) con 2–4 frases cortas por idioma.
 * La app la enseña una sola vez, al abrirla después de actualizar. A quien la abre
 * por primera vez no se le enseña (no hay nada «nuevo» para él).
 */
export const RELEASES = [
  {
    id: "2026-11-27",
    items: {
      es: ["En el móvil y la tableta, la app tiene ahora aspecto de app de Android o de iPhone: barra de pestañas abajo con Estudio, Historial, Ayuda y Ajustes. El botón «atrás» del móvil vuelve a la pantalla anterior.", "En el ordenador sigue igual."],
      ca: ["Al mòbil i a la tauleta, l’app té ara aspecte d’app d’Android o d’iPhone: barra de pestanyes a baix amb Estudi, Historial, Ajuda i Configuració. El botó «enrere» del mòbil torna a la pantalla anterior.", "A l’ordinador continua igual."],
      eu: ["Mugikorrean eta tabletan, aplikazioak Android edo iPhone aplikazio baten itxura du orain: fitxa-barra behean, Azterketa, Historia, Laguntza eta Ezarpenekin. Mugikorreko «atzera» botoiak aurreko pantailara itzultzen da.", "Ordenagailuan berdin jarraitzen du."],
      gl: ["No móbil e na tableta, a app ten agora aspecto de app de Android ou de iPhone: barra de lapelas abaixo con Estudo, Historial, Axuda e Axustes. O botón «atrás» do móbil volve á pantalla anterior.", "No ordenador segue igual."],
      en: ["On phones and tablets the app now looks like an Android or iPhone app: a tab bar at the bottom with Study, History, Help and Settings. The phone’s back button returns to the previous screen.", "On the computer it stays the same."],
      de: ["Auf Handy und Tablet sieht die App jetzt wie eine Android- bzw. iPhone-App aus: unten eine Leiste mit Studium, Verlauf, Hilfe und Einstellungen. Die Zurück-Taste des Handys führt zum vorherigen Bildschirm.", "Am Computer bleibt alles wie bisher."],
      it: ["Su telefono e tablet l’app ha ora l’aspetto di un’app Android o iPhone: barra delle schede in basso con Studio, Cronologia, Aiuto e Impostazioni. Il tasto «indietro» del telefono torna alla schermata precedente.", "Sul computer resta tutto uguale."],
      fr: ["Sur téléphone et tablette, l’app ressemble maintenant à une app Android ou iPhone : barre d’onglets en bas avec Étude, Historique, Aide et Réglages. Le bouton « retour » du téléphone ramène à l’écran précédent.", "Sur ordinateur, rien ne change."],
      pt: ["No celular e no tablet, o app agora tem aparência de app de Android ou de iPhone: barra de abas embaixo com Estudo, Histórico, Ajuda e Configurações. O botão «voltar» do celular volta à tela anterior.", "No computador continua igual."],
      pl: ["Na telefonie i tablecie aplikacja wygląda teraz jak aplikacja na Androida lub iPhone’a: na dole pasek kart Studium, Historia, Pomoc i Ustawienia. Przycisk «wstecz» w telefonie wraca do poprzedniego ekranu.", "Na komputerze bez zmian."],
      nl: ["Op telefoon en tablet ziet de app er nu uit als een Android- of iPhone-app: onderaan een tabbalk met Studie, Geschiedenis, Help en Instellingen. De terugknop van de telefoon gaat naar het vorige scherm.", "Op de computer blijft alles hetzelfde."],
      ro: ["Pe telefon și tabletă, aplicația arată acum ca o aplicație Android sau iPhone: bară de file jos cu Studiu, Istoric, Ajutor și Setări. Butonul «înapoi» al telefonului revine la ecranul anterior.", "Pe calculator rămâne la fel."],
      nb: ["På mobil og nettbrett ser appen nå ut som en Android- eller iPhone-app: en fanelinje nederst med Studium, Historikk, Hjelp og Innstillinger. Tilbake-knappen på mobilen går til forrige skjerm.", "På datamaskinen er alt som før."],
      sv: ["På mobil och surfplatta ser appen nu ut som en Android- eller iPhone-app: en flikrad längst ner med Studium, Historik, Hjälp och Inställningar. Mobilens bakåtknapp går till föregående skärm.", "På datorn är allt som förut."],
    },
  },
  {
    id: "2026-11-26-2",
    items: {
      es: ["Nuevos idiomas: noruego y sueco, con su manual y su guía rápida. La revista se descarga de jw.org en esos idiomas."],
      ca: ["Nous idiomes: noruec i suec, amb el seu manual i la seva guia ràpida. La revista es descarrega de jw.org en aquests idiomes."],
      eu: ["Hizkuntza berriak: norvegiera eta suediera, eskuliburuarekin eta gida azkarrarekin. Aldizkaria hizkuntza horietan deskargatzen da jw.org-etik."],
      gl: ["Novos idiomas: noruegués e sueco, co seu manual e a súa guía rápida. A revista descárgase de jw.org neses idiomas."],
      en: ["New languages: Norwegian and Swedish, with their own guide and quick guide. The magazine is downloaded from jw.org in those languages."],
      de: ["Neue Sprachen: Norwegisch und Schwedisch, mit Anleitung und Kurzanleitung. Die Zeitschrift wird in diesen Sprachen von jw.org geladen."],
      it: ["Nuove lingue: norvegese e svedese, con il loro manuale e la guida rapida. La rivista viene scaricata da jw.org in queste lingue."],
      fr: ["Nouvelles langues : norvégien et suédois, avec leur guide et leur guide rapide. La revue est téléchargée depuis jw.org dans ces langues."],
      pt: ["Novos idiomas: norueguês e sueco, com manual e guia rápido. A revista é baixada do jw.org nesses idiomas."],
      pl: ["Nowe języki: norweski i szwedzki, z instrukcją i krótkim przewodnikiem. Czasopismo jest pobierane z jw.org w tych językach."],
      nl: ["Nieuwe talen: Noors en Zweeds, met handleiding en snelgids. Het tijdschrift wordt in die talen van jw.org gedownload."],
      ro: ["Limbi noi: norvegiană și suedeză, cu manualul și ghidul rapid. Revista se descarcă de pe jw.org în aceste limbi."],
      nb: ["Nye språk: norsk og svensk, med egen brukerveiledning og hurtigveiledning. Bladet lastes ned fra jw.org på disse språkene."],
      sv: ["Nya språk: norska och svenska, med egen bruksanvisning och snabbguide. Tidskriften laddas ner från jw.org på de här språken."],
    },
  },
  {
    id: "2026-11-26",
    items: {
      es: ["Ajustes más sencillos: los párrafos largos o agrupados reciben ahora su tiempo extra de comentarios de forma automática, según sus palabras."],
      ca: ["Ajustos més senzills: els paràgrafs llargs o agrupats reben ara el seu temps extra de comentaris de manera automàtica, segons les seves paraules."],
      eu: ["Ezarpen errazagoak: paragrafo luzeek edo taldekatuek iruzkinetarako denbora gehigarria automatikoki jasotzen dute orain, beren hitzen arabera."],
      gl: ["Axustes máis sinxelos: os parágrafos longos ou agrupados reciben agora o seu tempo extra de comentarios de forma automática, segundo as súas palabras."],
      en: ["Simpler settings: long or grouped paragraphs now get their extra comment time automatically, based on their words."],
      de: ["Einfachere Einstellungen: Lange oder zusammengefasste Absätze bekommen ihre zusätzliche Kommentarzeit jetzt automatisch, je nach Wortzahl."],
      it: ["Impostazioni più semplici: i paragrafi lunghi o raggruppati ricevono ora in automatico il loro tempo extra per i commenti, in base alle parole."],
      fr: ["Réglages plus simples : les paragraphes longs ou regroupés reçoivent désormais automatiquement leur temps de commentaires supplémentaire, selon leur nombre de mots."],
      pt: ["Configurações mais simples: os parágrafos longos ou agrupados agora recebem automaticamente o tempo extra de comentários, de acordo com as palavras."],
      pl: ["Prostsze ustawienia: długie lub zgrupowane akapity dostają teraz dodatkowy czas na komentarze automatycznie, zależnie od liczby słów."],
      nl: ["Eenvoudigere instellingen: lange of gegroepeerde paragrafen krijgen nu automatisch hun extra commentaartijd, op basis van het aantal woorden."],
      ro: ["Setări mai simple: paragrafele lungi sau grupate primesc acum automat timpul suplimentar pentru comentarii, în funcție de numărul de cuvinte."],
      nb: ["Enklere innstillinger: Lange eller grupperte avsnitt får nå ekstra tid til kommentarer automatisk, ut fra antall ord."],
      sv: ["Enklare inställningar: långa eller grupperade stycken får nu extra tid för kommentarer automatiskt, utifrån antalet ord."],
    },
  },
  {
    id: "2026-11-25",
    items: {
      es: ["Nueva barra del estudio: todo el estudio en una línea, con dónde vas, dónde deberías ir según la hora y cuántos minutos vas tarde o adelantado."],
      ca: ["Nova barra de l’estudi: tot l’estudi en una línia, amb on ets, on hauries de ser segons l’hora i quants minuts vas tard o avançat."],
      eu: ["Azterketaren barra berria: azterketa osoa lerro batean, non zauden, orduaren arabera non egon beharko zenukeen eta zenbat minutu berandu edo aurreratuta zoazen."],
      gl: ["Nova barra do estudo: todo o estudo nunha liña, con por onde vas, por onde deberías ir segundo a hora e cantos minutos vas tarde ou adiantado."],
      en: ["New study bar: the whole study in one line, showing where you are, where you should be by the clock and how many minutes behind or ahead you are."],
      de: ["Neue Studiumsleiste: das ganze Studium in einer Zeile – wo du bist, wo du laut Uhr sein solltest und wie viele Minuten du im Verzug oder voraus bist."],
      it: ["Nuova barra dello studio: tutto lo studio su una riga, con dove sei, dove dovresti essere secondo l’orario e di quanti minuti sei in ritardo o in anticipo."],
      fr: ["Nouvelle barre de l’étude : toute l’étude sur une ligne, avec où tu en es, où tu devrais en être selon l’heure et combien de minutes de retard ou d’avance tu as."],
      pt: ["Nova barra do estudo: o estudo inteiro numa linha, com onde você está, onde deveria estar pelo relógio e quantos minutos está atrasado ou adiantado."],
      pl: ["Nowy pasek studium: całe studium w jednej linii — gdzie jesteś, gdzie powinieneś być według zegara i ile minut spóźnienia lub zapasu masz."],
      nl: ["Nieuwe studiebalk: de hele studie op één regel, met waar je bent, waar je volgens de klok zou moeten zijn en hoeveel minuten je achter of voor loopt."],
      ro: ["Bara nouă a studiului: tot studiul pe o linie, cu unde ești, unde ar trebui să fii după ceas și câte minute ai întârziere sau avans."],
    },
  },
  {
    id: "2026-11-24-2",
    items: {
      es: ["«Empezar desde aquí» durante el estudio ya no reinicia el reloj: si se te olvidó pulsar «Siguiente», salta al párrafo correcto y la hora de fin se mantiene.", "El manual explica mejor cómo se reparte el tiempo según las palabras de cada párrafo."],
      ca: ["«Començar des d’aquí» durant l’estudi ja no reinicia el rellotge: si t’has oblidat de prémer «Següent», salta al paràgraf correcte i l’hora final es manté.", "El manual explica millor com es reparteix el temps segons les paraules de cada paràgraf."],
      eu: ["«Hasi hemendik» azterketan zehar ez du gehiago erlojua berrabiarazten: «Hurrengoa» sakatzea ahaztu bazaizu, jauzi paragrafo zuzenera eta amaiera-ordua mantentzen da.", "Eskuliburuak hobeto azaltzen du denbora nola banatzen den paragrafo bakoitzaren hitzen arabera."],
      gl: ["«Comezar desde aquí» durante o estudo xa non reinicia o reloxo: se esqueciches premer «Seguinte», salta ao parágrafo correcto e a hora de fin mantense.", "O manual explica mellor como se reparte o tempo segundo as palabras de cada parágrafo."],
      en: ["“Start from here” during the study no longer resets the clock: if you forgot to tap “Next”, jump to the right paragraph and the end time stays the same.", "The manual now explains better how time is shared according to each paragraph’s words."],
      de: ["„Hier beginnen“ setzt während des Studiums die Uhr nicht mehr zurück: Wenn du vergessen hast, auf „Weiter“ zu tippen, springst du zum richtigen Absatz und die Endzeit bleibt.", "Das Handbuch erklärt jetzt besser, wie die Zeit nach den Wörtern jedes Absatzes verteilt wird."],
      it: ["«Inizia da qui» durante lo studio non azzera più l’orologio: se hai dimenticato di toccare «Avanti», passa al paragrafo giusto e l’ora di fine resta la stessa.", "Il manuale spiega meglio come il tempo viene distribuito in base alle parole di ogni paragrafo."],
      fr: ["« Commencer ici » pendant l’étude ne remet plus l’horloge à zéro : si tu as oublié de toucher « Suivant », passe au bon paragraphe et l’heure de fin reste la même.", "Le manuel explique mieux comment le temps est réparti selon les mots de chaque paragraphe."],
      pt: ["«Começar daqui» durante o estudo já não reinicia o relógio: se esqueceu de tocar em «Próximo», passe ao parágrafo certo e a hora de fim mantém-se.", "O manual explica melhor como o tempo é repartido segundo as palavras de cada parágrafo."],
      pl: ["„Zacznij stąd” w trakcie studium nie zeruje już zegara: jeśli zapomniałeś stuknąć „Dalej”, przejdź do właściwego akapitu, a godzina zakończenia pozostanie.", "Instrukcja lepiej wyjaśnia, jak czas jest dzielony według liczby słów w akapicie."],
      nl: ["‘Hier beginnen’ tijdens de studie zet de klok niet meer terug: vergat je op ‘Volgende’ te tikken, spring dan naar de juiste paragraaf en de eindtijd blijft gelijk.", "De handleiding legt beter uit hoe de tijd wordt verdeeld volgens de woorden van elke paragraaf."],
      ro: ["„Începe de aici” în timpul studiului nu mai resetează cronometrul: dacă ai uitat să atingi „Următorul”, treci la paragraful corect și ora de încheiere rămâne.", "Manualul explică mai bine cum se împarte timpul după cuvintele fiecărui paragraf."],
    },
  },
  {
    id: "2026-11-24",
    items: {
      es: ["Icono en la barra del móvil (Ajustes → Avisos): si durante el estudio cambias a otra app, verás un icono arriba; tócalo para volver.", "Nuevo icono de la aplicación."],
      ca: ["Icona a la barra del mòbil (Configuració → Avisos): si durant l’estudi canvies a una altra app, veuràs una icona a dalt; toca-la per tornar.", "Nova icona de l’aplicació."],
      eu: ["Ikonoa mugikorraren barran (Ezarpenak → Abisuak): azterketan beste aplikazio batera aldatzen bazara, ikono bat ikusiko duzu goian; ukitu itzultzeko.", "Aplikazioaren ikono berria."],
      gl: ["Icona na barra do móbil (Axustes → Avisos): se durante o estudo cambias a outra app, verás unha icona arriba; tócaa para volver.", "Nova icona da aplicación."],
      en: ["Icon in the phone’s status bar (Settings → Alerts): if you switch to another app during the study, you’ll see an icon at the top; tap it to come back.", "New app icon."],
      de: ["Symbol in der Statusleiste (Einstellungen → Hinweise): Wechselst du während des Studiums zu einer anderen App, siehst du oben ein Symbol; tippe darauf, um zurückzukehren.", "Neues App-Symbol."],
      it: ["Icona nella barra del telefono (Impostazioni → Avvisi): se durante lo studio passi a un’altra app, vedrai un’icona in alto; toccala per tornare.", "Nuova icona dell’app."],
      fr: ["Icône dans la barre du téléphone (Réglages → Alertes) : si tu passes à une autre appli pendant l’étude, une icône apparaît en haut ; touche-la pour revenir.", "Nouvelle icône de l’appli."],
      pt: ["Ícone na barra do celular (Configurações → Avisos): se durante o estudo você mudar para outro app, verá um ícone no topo; toque nele para voltar.", "Novo ícone do aplicativo."],
      pl: ["Ikona na pasku telefonu (Ustawienia → Alerty): jeśli podczas studium przełączysz się do innej aplikacji, u góry pojawi się ikona; stuknij ją, aby wrócić.", "Nowa ikona aplikacji."],
      nl: ["Pictogram in de statusbalk (Instellingen → Meldingen): ga je tijdens de studie naar een andere app, dan zie je bovenaan een pictogram; tik erop om terug te gaan.", "Nieuw app-pictogram."],
      ro: ["Pictogramă în bara telefonului (Setări → Alerte): dacă în timpul studiului treci la altă aplicație, vei vedea o pictogramă sus; atinge-o ca să revii.", "Pictogramă nouă pentru aplicație."],
    },
  },
  {
    id: "2026-11-23",
    items: {
      es: ["Comentarios reservados: apunta quién te pidió comentar en un párrafo o pregunta de repaso, y la app te enseñará su nombre cuando llegue (también en el modo presentación).", "Nuevos tipos de sonido para los avisos (Ajustes → Avisos). Ahora suena por defecto un solo pitido corto, para distraer menos.", "La hora de inicio de la reunión se elige ahora con dos listas, hora y minutos."],
      ca: ["Comentaris reservats: apunta qui t’ha demanat comentar en un paràgraf o pregunta de repàs, i l’app et mostrarà el seu nom quan arribi (també en el mode presentació).", "Nous tipus de so per als avisos (Configuració → Avisos). Ara sona de manera predeterminada un sol xiulet curt, per distreure menys.", "L’hora d’inici de la reunió ara es tria amb dues llistes, hora i minuts."],
      eu: ["Erreserbatutako iruzkinak: idatzi nork eskatu dizun paragrafo edo errepaso-galdera batean iruzkintzea, eta aplikazioak bere izena erakutsiko dizu iristen denean (aurkezpen moduan ere).", "Abisuetarako soinu mota berriak (Ezarpenak → Abisuak). Orain bip labur bakarra entzuten da lehenetsita, gutxiago distraitzeko.", "Bileraren hasiera-ordua bi zerrendarekin aukeratzen da orain: ordua eta minutuak."],
      gl: ["Comentarios reservados: apunta quen che pediu comentar nun parágrafo ou pregunta de repaso, e a app amosarache o seu nome cando chegue (tamén no modo presentación).", "Novos tipos de son para os avisos (Axustes → Avisos). Agora soa por defecto un só pitido curto, para distraer menos.", "A hora de inicio da reunión elíxese agora con dúas listas, hora e minutos."],
      en: ["Reserved comments: note who asked to comment on a paragraph or review question, and the app will show their name when it comes up (also in presentation mode).", "New sound types for alerts (Settings → Alerts). A single short beep is now the default, so it’s less distracting.", "The meeting start time is now picked from two lists, hours and minutes."],
      de: ["Vorgemerkte Kommentare: Notiere, wer bei einem Absatz oder einer Wiederholungsfrage kommentieren möchte – die App zeigt den Namen zur richtigen Zeit an (auch im Präsentationsmodus).", "Neue Signaltöne für die Hinweise (Einstellungen → Hinweise). Standard ist jetzt ein einzelner kurzer Piepton, der weniger ablenkt.", "Der Beginn der Zusammenkunft wird jetzt mit zwei Listen gewählt: Stunden und Minuten."],
      it: ["Commenti prenotati: annota chi ti ha chiesto di commentare a un paragrafo o a una domanda di ripasso, e l’app ti mostrerà il suo nome al momento giusto (anche in modalità presentazione).", "Nuovi tipi di suono per gli avvisi (Impostazioni → Avvisi). Ora il suono predefinito è un solo bip breve, che distrae meno.", "L’ora di inizio dell’adunanza ora si sceglie con due elenchi, ore e minuti."],
      fr: ["Commentaires réservés : note qui t’a demandé de commenter un paragraphe ou une question de révision, et l’appli affichera son nom le moment venu (aussi en mode présentation).", "Nouveaux types de son pour les alertes (Réglages → Alertes). Par défaut, un seul bip court, pour moins distraire.", "L’heure de début de la réunion se choisit maintenant avec deux listes, heures et minutes."],
      pt: ["Comentários reservados: anote quem pediu para comentar num parágrafo ou pergunta de recapitulação, e o app mostrará o nome na hora certa (também no modo apresentação).", "Novos tipos de som para os avisos (Configurações → Avisos). Agora o padrão é um só bipe curto, que distrai menos.", "O horário de início da reunião agora é escolhido em duas listas, horas e minutos."],
      pl: ["Zarezerwowane komentarze: zapisz, kto poprosił o komentarz przy akapicie lub pytaniu powtórkowym, a aplikacja pokaże jego imię we właściwym momencie (także w trybie prezentacji).", "Nowe rodzaje dźwięku przypomnień (Ustawienia → Alerty). Domyślnie jest teraz jeden krótki sygnał, który mniej rozprasza.", "Godzinę rozpoczęcia zebrania wybiera się teraz z dwóch list: godziny i minuty."],
      nl: ["Gereserveerde commentaren: noteer wie bij een paragraaf of herhalingsvraag commentaar wil geven, en de app toont de naam op het juiste moment (ook in de presentatiemodus).", "Nieuwe geluiden voor meldingen (Instellingen → Meldingen). Standaard klinkt nu één korte piep, die minder afleidt.", "De begintijd van de vergadering kies je nu uit twee lijsten: uren en minuten."],
      ro: ["Comentarii rezervate: notează cine ți-a cerut să comenteze la un paragraf sau la o întrebare recapitulativă, iar aplicația îi va afișa numele la momentul potrivit (și în modul prezentare).", "Tipuri noi de sunet pentru avertizări (Setări → Alerte). Acum, implicit se aude un singur bip scurt, care distrage mai puțin.", "Ora de începere a întrunirii se alege acum din două liste, ore și minute."],
    },
  },
  {
    id: "2026-11-15",
    items: {
      es: ["Hora de inicio de la reunión pública (Ajustes → Tiempo): el estudio termina a su hora aunque el discurso se alargue.", "El historial de estudios ahora está en una tarjeta verde de la pantalla de inicio.", "Barras de tiempo más claras, con un bloque para cada parte."],
      ca: ["Hora d’inici de la reunió pública (Configuració → Temps): l’estudi acaba a l’hora encara que el discurs s’allargui.", "L’historial d’estudis ara és en una targeta verda de la pantalla d’inici.", "Barres de temps més clares, amb un bloc per a cada part."],
      eu: ["Bilera publikoaren hasiera-ordua (Ezarpenak → Denbora): azterketa bere orduan amaitzen da hitzaldia luzatu arren.", "Azterketen historia hasierako pantailako txartel berde batean dago orain.", "Denbora-barra argiagoak, zati bakoitzerako bloke batekin."],
      gl: ["Hora de inicio da reunión pública (Axustes → Tempo): o estudo remata á súa hora aínda que o discurso se alongue.", "O historial de estudos agora está nunha tarxeta verde da pantalla de inicio.", "Barras de tempo máis claras, cun bloque para cada parte."],
      en: ["Public meeting start time (Settings → Time): the study ends on time even if the talk runs over.", "Study history is now a green card on the home screen.", "Clearer time bars, with one block for each part."],
      de: ["Beginn der öffentlichen Zusammenkunft (Einstellungen → Zeit): Das Studium endet pünktlich, auch wenn der Vortrag überzieht.", "Der Verlauf der Studien ist jetzt eine grüne Karte auf dem Startbildschirm.", "Übersichtlichere Zeitbalken mit einem Block für jeden Teil."],
      it: ["Ora di inizio dell’adunanza pubblica (Impostazioni → Tempo): lo studio finisce in orario anche se il discorso si allunga.", "La cronologia degli studi ora è una scheda verde nella schermata iniziale.", "Barre del tempo più chiare, con un blocco per ogni parte."],
      fr: ["Heure de début de la réunion publique (Réglages → Temps) : l’étude se termine à l’heure même si le discours déborde.", "L’historique des études est maintenant une carte verte sur l’écran d’accueil.", "Barres de temps plus claires, avec un bloc pour chaque partie."],
      pt: ["Horário de início da reunião pública (Configurações → Tempo): o estudo termina no horário mesmo que o discurso passe do tempo.", "O histórico de estudos agora é um cartão verde na tela inicial.", "Barras de tempo mais claras, com um bloco para cada parte."],
      pl: ["Godzina rozpoczęcia zebrania publicznego (Ustawienia → Czas): studium kończy się o czasie, nawet jeśli wykład się przedłuży.", "Historia studiów jest teraz zieloną kartą na ekranie startowym.", "Czytelniejsze paski czasu, z osobnym blokiem dla każdej części."],
      nl: ["Begintijd van de openbare vergadering (Instellingen → Tijd): de studie eindigt op tijd, ook als de lezing uitloopt.", "De geschiedenis van studies is nu een groene kaart op het startscherm.", "Duidelijkere tijdbalken, met een blok voor elk onderdeel."],
      ro: ["Ora de începere a întrunirii publice (Setări → Timp): studiul se încheie la timp chiar dacă discursul se prelungește.", "Istoricul studiilor este acum un card verde pe ecranul de start.", "Bare de timp mai clare, cu un bloc pentru fiecare parte."],
    },
  },
];

const SEEN_KEY = "pdfTimer_whatsNewSeen";

export const latestRelease = () => RELEASES[0];

export function releaseItems(release, lang) {
  return release.items[lang] || release.items.en || release.items.es;
}

/** true si hay que enseñar las novedades al abrir la app (llamar antes de que la app guarde nada). */
export function shouldShowWhatsNew() {
  try {
    const latest = latestRelease();
    if (!latest) return false;
    const seen = localStorage.getItem(SEEN_KEY);
    if (seen === latest.id) return false;
    if (seen === null) {
      // ¿Primera vez que se usa la app en este dispositivo? Entonces no hay nada «nuevo».
      const used = Object.keys(localStorage).some((k) => k.startsWith("pdfTimer_") && k !== "pdfTimer_language" && k !== SEEN_KEY);
      if (!used) { localStorage.setItem(SEEN_KEY, latest.id); return false; }
    }
    return true;
  } catch {
    return false;
  }
}

export function markWhatsNewSeen() {
  try { localStorage.setItem(SEEN_KEY, latestRelease().id); } catch { /* sin almacenamiento */ }
}
