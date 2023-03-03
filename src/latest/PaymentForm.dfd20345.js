import {
  v as e,
  b as a,
  y as t,
  T as r,
  h as o,
  s as n,
} from "./preact.294f37c2.js";
import {
  ce as i,
  cf as s,
  bT as l,
  cg as c,
  ay as u,
  L as d,
  T as p,
  C as y,
  ch as h,
  ci as f,
  c4 as b,
  u as m,
  cj as g,
  av as x,
  b9 as v,
  ba as k,
} from "./index.6eeae9f8.js";
import { A as w } from "./ActionButton.5286af2f.js";
let P = "jg2u1",
  V = "jgp7",
  C = "jg212",
  z = "jg1o7",
  I = { ssl: "jg2u1", sslTitle: "jgp7", sslText: "jg212", sslLink: "jg1o7" };
var S = "/static/media/ssllock.16b6dd2f.svg";
let A = (a) =>
    e(
      "div",
      { className: I.ssl, "data-section": "secured" },
      e("img", { src: S, alt: "Secured" }),
      e("span", { className: I.sslTitle }, "HTTPS/SSL"),
      e(
        "div",
        { className: I.sslText },
        a,
        e(
          "a",
          {
            className: I.sslLink,
            href: "https://www.braintreegateway.com/merchants/xdmf4zdb54vjr7hj/verified",
            rel: "noopener noreferrer",
            target: "_blank",
          },
          "Braintree"
        ),
        "."
      )
    ),
  j = "Cur2hb",
  U = "Curgt",
  T = { wrapper: "Cur2hb", error: "Curgt" },
  F = "Bx8by",
  B = "Bx82b4",
  D = "Bx81y2",
  N = "Bx82qn",
  q = {
    exitActive: "Bx8by",
    enterActive: "Bx82b4",
    enter: "Bx81y2",
    exit: "Bx82qn",
  };
var L = {
    translations: {
      "": {
        " if necessary and then try to pay again. If this doesn't help, please contact ":
          [
            " wenn n\xf6tig und versuchen Sie dann erneut zu bezahlen. Wenn dies nicht hilft, wenden Sie sich bitte an ",
          ],
        " using your mail, website or app if you think we made a mistake.": [
          " \xfcber Ihre E-Mail, Website oder App, wenn Sie glauben, dass wir einen Fehler gemacht haben.",
        ],
        " using your mail, website or app.": [
          " \xfcber Ihre E-Mail, Website oder App.",
        ],
        "change it": ["es \xe4ndern"],
        "CVV did not pass verification.": [
          "CVV hat die \xdcberpr\xfcfung nicht bestanden.",
        ],
        "CVV did not pass verification. Please double-check that the CVV2 or CID code is correct.":
          [
            "CVV hat die \xdcberpr\xfcfung nicht bestanden. Bitte nochmal nachpr\xfcfen Sie, ob der CVV2- oder CID-Code korrekt ist.",
          ],
        "It looks like you are already subscribed. ": [
          "Es sieht so aus, als ob Sie bereits abonniert sind. ",
        ],
        "It looks like you are not currently subscribed. ": [
          "Es sieht so aus, als ob Sie derzeit nicht abonniert sind. ",
        ],
        "Network error occurred. Please try again later.": [
          "Es ist ein Netzwerkfehler aufgetreten. Bitte versuchen Sie es sp\xe4ter noch einmal.",
        ],
        "Please contact ": ["Bitte kontaktieren Sie "],
        "Please fix the errors and try again.": [
          "Bitte beheben Sie die Fehler und versuchen Sie es erneut.",
        ],
        "There was a problem processing your credit card. Please double check your data and try again. If this doesn't help, please contact your bank to find out the reason of declined transaction.":
          [
            "Es gab ein Problem bei der Verarbeitung Ihrer Kreditkarte. Bitte nochmal nachpr\xfcfen Sie Ihre Daten und versuchen Sie es erneut. Sollte dies nicht helfen, wenden Sie sich bitte an Ihre Bank, um den Grund f\xfcr die abgelehnte Transaktion herauszufinden.",
          ],
        'Unfortunately, on our side, we just see the message "Payment declined" without details. The transaction may be getting declined because of a high level of recent activity on a card, a card being over its limit, or due to a range of other reasons which only the bank knows. Please contact your bank to find out the reason.':
          [
            'Leider sehen wir auf unserer Seite nur die Meldung "Zahlung abgelehnt" ohne Details. Die Transaktion kann abgelehnt werden, weil in letzter Zeit viele Aktivit\xe4ten auf einer Karte stattgefunden haben, weil das Limit der Karte \xfcberschritten wurde oder aus einer Reihe anderer Gr\xfcnde, die nur die Bank kennt. Wenden Sie sich bitte an Ihre Bank, um den Grund zu erfahren.',
          ],
        "Verification of your Songsterr Account email failed. Please double check it, ":
          [
            "Die Verifizierung der E-Mail Ihres Songsterr-Kontos ist fehlgeschlagen. Bitte \xfcberpr\xfcfen Sie sie noch einmal, ",
          ],
        "Your actions appear suspicious. We will reject any attempt to subscribe within the next twenty four hours. ":
          [
            "Ihre Aktionen erscheinen verd\xe4chtig. Wir werden jeden Versuch einer Anmeldung innerhalb der n\xe4chsten vierundzwanzig Stunden ablehnen. ",
          ],
      },
    },
    language: "de",
    pluralForms: "nplurals=2; plural=(n != 1);",
  },
  E = {
    translations: {
      "": {
        " if necessary and then try to pay again. If this doesn't help, please contact ":
          [
            " si es necesario e intente pagar de nuevo. Si esto no le ayuda, p\xf3ngase en contacto con ",
          ],
        " using your mail, website or app if you think we made a mistake.": [
          " utilizando su correo, p\xe1gina web o aplicaci\xf3n si cree que hemos cometido un error.",
        ],
        " using your mail, website or app.": [
          " utilizando su correo, p\xe1gina web o aplicaci\xf3n.",
        ],
        "change it": ["c\xe1mbialo"],
        "CVV did not pass verification.": [
          "CVV no pas\xf3 la verificaci\xf3n.",
        ],
        "CVV did not pass verification. Please double-check that the CVV2 or CID code is correct.":
          [
            "CVV no pas\xf3 la verificaci\xf3n. Por favor, vuelva a comprobar que el c\xf3digo CVV2 o CID es correcto.",
          ],
        "It looks like you are already subscribed. ": [
          "Parece que ya est\xe1 suscrito. ",
        ],
        "It looks like you are not currently subscribed. ": [
          "Parece que actualmente no est\xe1 suscrito. ",
        ],
        "Network error occurred. Please try again later.": [
          "Se ha producido un error en la red. Vuelva a intentarlo m\xe1s tarde.",
        ],
        "Please contact ": ["Por favor contactar "],
        "Please fix the errors and try again.": [
          "Por favor, corrija los errores e int\xe9ntelo de nuevo.",
        ],
        "There was a problem processing your credit card. Please double check your data and try again. If this doesn't help, please contact your bank to find out the reason of declined transaction.":
          [
            "Ha habido un problema al procesar su tarjeta de cr\xe9dito. Por favor, vuelva a comprobar sus datos e int\xe9ntelo de nuevo. Si esto no le ayuda, por favor contactar con su banco para averiguar el motivo del rechazo de la transacci\xf3n.",
          ],
        'Unfortunately, on our side, we just see the message "Payment declined" without details. The transaction may be getting declined because of a high level of recent activity on a card, a card being over its limit, or due to a range of other reasons which only the bank knows. Please contact your bank to find out the reason.':
          [
            "Desgraciadamente, por nuestra parte, s\xf3lo vemos el mensaje \xabPago rechazado\xbb sin m\xe1s detalles. La transacci\xf3n puede estar siendo rechazada debido a un alto nivel de actividad reciente en una tarjeta, a que la tarjeta est\xe1 por encima de su l\xedmite, o debido a una serie de otras razones que s\xf3lo el banco conoce. Por favor contactar su banco para averiguar el motivo.",
          ],
        "Verification of your Songsterr Account email failed. Please double check it, ":
          [
            "La verificaci\xf3n del correo electr\xf3nico de su cuenta de Songsterr ha fallado. Por favor, vuelva a comprobarlo, ",
          ],
        "Your actions appear suspicious. We will reject any attempt to subscribe within the next twenty four hours. ":
          [
            "Tus acciones parecen sospechosas. Rechazaremos cualquier intento de suscripci\xf3n en las pr\xf3ximas veinticuatro horas. ",
          ],
      },
    },
    language: "es",
    pluralForms: "nplurals=2; plural=(n != 1);",
  },
  W = {
    translations: {
      "": {
        " if necessary and then try to pay again. If this doesn't help, please contact ":
          [
            " si n\xe9cessaire, puis r\xe9essayer de payer. Si cela ne vous aide pas, veuillez contacter ",
          ],
        " using your mail, website or app if you think we made a mistake.": [
          " en utilisant votre courrier, votre site Web ou votre application si vous pensez que nous avons fait une erreur.",
        ],
        " using your mail, website or app.": [
          " en utilisant votre courrier, votre site Web ou votre application.",
        ],
        "change it": ["le modifier"],
        "CVV did not pass verification.": [
          "CVV nΓÇÖa pas pass\xe9 la v\xe9rification.",
        ],
        "CVV did not pass verification. Please double-check that the CVV2 or CID code is correct.":
          [
            "CVV n'a pas pass\xe9 la v\xe9rification. Veuillez rev\xe9rifier que le code CVV2 ou CID est correct.",
          ],
        "It looks like you are already subscribed. ": [
          "Il semble que vous soyez d\xe9j\xe0 abonn\xe9. ",
        ],
        "It looks like you are not currently subscribed. ": [
          "Il semble que vous n'\xeates pas abonn\xe9 actuellement. ",
        ],
        "Network error occurred. Please try again later.": [
          "Une erreur r\xe9seau sΓÇÖest produite. Veuillez r\xe9essayer plus tard.",
        ],
        "Please contact ": ["Veuillez contacter "],
        "Please fix the errors and try again.": [
          "Veuillez corriger les erreurs et r\xe9essayez.",
        ],
        "There was a problem processing your credit card. Please double check your data and try again. If this doesn't help, please contact your bank to find out the reason of declined transaction.":
          [
            "Il y a eu un probl\xe8me de traitement de votre carte de cr\xe9dit. Veuillez v\xe9rifier vos donn\xe9es et r\xe9essayer. Si cela ne vous aide pas, veuillez contacter votre banque pour conna\xeetre la raison de la transaction refus\xe9e.",
          ],
        'Unfortunately, on our side, we just see the message "Payment declined" without details. The transaction may be getting declined because of a high level of recent activity on a card, a card being over its limit, or due to a range of other reasons which only the bank knows. Please contact your bank to find out the reason.':
          [
            "Malheureusement, de notre c\xf4t\xe9, nous voyons juste le message \xabPaiement refus\xe9\xbb sans d\xe9tails. La transaction peut \xeatre refus\xe9e en raison dΓÇÖun niveau \xe9lev\xe9 dΓÇÖactivit\xe9 r\xe9cente sur une carte, dΓÇÖune carte d\xe9passant sa limite ou dΓÇÖune s\xe9rie dΓÇÖautres raisons que seule la banque conna\xeet. Veuillez contacter votre banque pour en conna\xeetre la raison.",
          ],
        "Verification of your Songsterr Account email failed. Please double check it, ":
          [
            "La v\xe9rification de l'e-mail de votre compte Songsterr a \xe9chou\xe9. Veuillez le v\xe9rifier, ",
          ],
        "Your actions appear suspicious. We will reject any attempt to subscribe within the next twenty four hours. ":
          [
            "Vos actions semblent suspectes. Nous rejetterons toute tentative de souscription dans les prochaines vingt-quatre heures. ",
          ],
      },
    },
    language: "fr",
    pluralForms: "nplurals=2; plural=(n > 1);",
  },
  Y = {
    translations: {
      "": {
        " if necessary and then try to pay again. If this doesn't help, please contact ":
          [
            " se necessario, provare a pagare di nuovo. Se ci\xf2 non dovesse essere d'aiuto, si prega di contattare ",
          ],
        " using your mail, website or app if you think we made a mistake.": [
          " utilizzando la posta, il sito web o l'app se pensa che abbiamo commesso un errore.",
        ],
        " using your mail, website or app.": [
          " utilizzando la posta, il sito web o l'app.",
        ],
        "change it": ["cambiarlo"],
        "CVV did not pass verification.": [
          "Il CVV non ha superato la verifica.",
        ],
        "CVV did not pass verification. Please double-check that the CVV2 or CID code is correct.":
          [
            "Il CVV non ha superato la verifica. Si prega di ricontrollare che il codice CVV2 o CID sia corretto.",
          ],
        "It looks like you are already subscribed. ": [
          "Sembra che tu sia gi\xe0 iscritto. ",
        ],
        "It looks like you are not currently subscribed. ": [
          "Sembra che tu non sia attualmente iscritto. ",
        ],
        "Network error occurred. Please try again later.": [
          "Si \xe8 verificato un errore di rete. La preghiamo di riprovare pi\xf9 tardi.",
        ],
        "Please contact ": ["Si prega di contattare "],
        "Please fix the errors and try again.": [
          "Si prega di correggere gli errori e riprovare.",
        ],
        "There was a problem processing your credit card. Please double check your data and try again. If this doesn't help, please contact your bank to find out the reason of declined transaction.":
          [
            "Si \xe8 verificato un problema nell'elaborazione della sua carta di credito. La preghiamo di ricontrollare i suoi dati e di riprovare. Se questo non aiuta, contatti la sua banca per scoprire il motivo della transazione rifiutata.",
          ],
        'Unfortunately, on our side, we just see the message "Payment declined" without details. The transaction may be getting declined because of a high level of recent activity on a card, a card being over its limit, or due to a range of other reasons which only the bank knows. Please contact your bank to find out the reason.':
          [
            'Purtroppo, da parte nostra, vediamo solo il messaggio "Pagamento rifiutato" senza dettagli. La transazione potrebbe essere rifiutata a causa di un alto livello di attivit\xe0 recente su una carta, una carta che ha superato il suo limite, o per una serie di altri motivi che solo la banca conosce. Si prega di contattare la sua banca per scoprire il motivo.',
          ],
        "Verification of your Songsterr Account email failed. Please double check it, ":
          [
            "La verifica dell'e-mail del suo Account Songsterr non \xe8 riuscita. La preghiamo di ricontrollare, ",
          ],
        "Your actions appear suspicious. We will reject any attempt to subscribe within the next twenty four hours. ":
          [
            "Le tue azioni sembrano sospette. Rifiuteremo qualsiasi tentativo di abbonamento entro le prossime ventiquattro ore. ",
          ],
      },
    },
    language: "it",
    pluralForms: "nplurals=2; plural=(n != 1);",
  },
  O = {
    translations: {
      "": {
        " if necessary and then try to pay again. If this doesn't help, please contact ":
          [
            " σ┐àΦªüπü½σ┐£πüÿπüªπÇüσåìσ║ªµö»µëòπüåπéêπüåπü½πüùπüªπüÅπüáπüòπüäπÇéπüôπéîπüºσòÅΘíîπüîΦºúµ▒║πüùπü¬πüäσá┤σÉêπü»πÇüπü½ΘÇúτ╡íπüùπüªπüÅπüáπüòπüä ",
          ],
        " using your mail, website or app if you think we made a mistake.": [
          " τºüπüƒπüíπüîΘûôΘüòπüäπéÆτè»πüùπüƒπü¿µÇ¥πéÅπéîπéïσá┤σÉêπü»πÇüπâíπâ╝πâ½πÇüπéªπéºπâûπé╡πéñπâêπÇüπü╛πüƒπü»πéóπâùπâ¬πéÆΣ╜┐τö¿πüùπüªπüÅπüáπüòπüäπÇé",
        ],
        " using your mail, website or app.": [
          " πâíπâ╝πâ½πÇüπéªπéºπâûπé╡πéñπâêπÇüπü╛πüƒπü»πéóπâùπâ¬πéÆΣ╜┐τö¿πüÖπéïπÇé",
        ],
        "change it": ["πü¥πéîπéÆσñëµ¢┤"],
        "CVV did not pass verification.": [
          "CVV πü»µñ£Φ¿╝πü½σÉêµá╝πüùπü╛πü¢πéôπüºπüùπüƒπÇé",
        ],
        "CVV did not pass verification. Please double-check that the CVV2 or CID code is correct.":
          [
            "CVV πü»µñ£Φ¿╝πü½σÉêµá╝πüùπü╛πü¢πéôπüºπüùπüƒπÇéCVV2πü╛πüƒπü»CIDπé│πâ╝πâëπüîµ¡úπüùπüäπüôπü¿πéÆσåìτó║Φ¬ìπüùπüªπüÅπüáπüòπüäπÇé",
          ],
        "It looks like you are already subscribed. ": [
          "πüÖπüºπü½Φ│╝Φ¬¡πüùπüªπüäπéïπéêπüåπüºπüÖπÇé ",
        ],
        "It looks like you are not currently subscribed. ": [
          "τÅ╛σ£¿Φ│╝Φ¬¡πüùπüªπüäπü¬πüäπéêπüåπüºπüÖπÇé ",
        ],
        "Network error occurred. Please try again later.": [
          "πâìπââπâêπâ»πâ╝πé» πé¿πâ⌐πâ╝πüîτÖ║τöƒπüùπü╛πüùπüƒπÇéπüùπü░πéëπüÅπüùπüªπüïπéëπééπüåΣ╕Çσ║ªπüèΦ⌐ªπüùπüÅπüáπüòπüäπÇé",
        ],
        "Please contact ": ["πü½ΘÇúτ╡íπüùπüªΣ╕ïπüòπüä "],
        "Please fix the errors and try again.": [
          "πé¿πâ⌐πâ╝πéÆΣ┐«µ¡úπüùπüªπÇüπééπüåΣ╕Çσ║ªπéäπéèτ¢┤πüùπüªπüÅπüáπüòπüäπÇé",
        ],
        "There was a problem processing your credit card. Please double check your data and try again. If this doesn't help, please contact your bank to find out the reason of declined transaction.":
          [
            "πé»πâ¼πé╕πââπâê πé½πâ╝πâëπü«σçªτÉåΣ╕¡πü½σòÅΘíîπüîτÖ║τöƒπüùπü╛πüùπüƒπÇéπâçπâ╝πé┐πéÆσåìτó║Φ¬ìπüùπüªπÇüπééπüåΣ╕Çσ║ªπüèΦ⌐ªπüùπüÅπüáπüòπüäπÇéπü¥πéîπüºπééσòÅΘíîπüîΦºúµ▒║πüùπü¬πüäσá┤σÉêπü»πÇüΘèÇΦíîπü½ΘÇúτ╡íπüùπüªπÇüσÅûσ╝òπüîµïÆσÉªπüòπéîπüƒτÉåτö▒πéÆτó║Φ¬ìπüùπüªπüÅπüáπüòπüäπÇé",
          ],
        'Unfortunately, on our side, we just see the message "Payment declined" without details. The transaction may be getting declined because of a high level of recent activity on a card, a card being over its limit, or due to a range of other reasons which only the bank knows. Please contact your bank to find out the reason.':
          [
            "µ«ïσ┐╡πü¬πüîπéëπÇüτºüπüƒπüíπü«σü┤πüºπü»πÇüΦ⌐│τ┤░πü¬πüùπüºπÇîµö»µëòπüäπüîµïÆσÉªπüòπéîπü╛πüùπüƒπÇìπü¿πüäπüåπâíπââπé╗πâ╝πé╕πüîΦí¿τñ║πüòπéîπü╛πüÖπÇéπé½πâ╝πâëπüºπü«µ£ÇΦ┐æπü«πéóπé»πâåπéúπâôπâåπéúπü«πâ¼πâÖπâ½πüîΘ½ÿπüäπÇüπé½πâ╝πâëπüîσê╢ΘÖÉπéÆΦ╢àπüêπüªπüäπéïπÇüπü╛πüƒπü»ΘèÇΦíîπüáπüæπüîτƒÑπüúπüªπüäπéïπü¥πü«Σ╗ûπü«πüòπü╛πüûπü╛πü¬τÉåτö▒πü½πéêπéèπÇüπâêπâ⌐πâ│πé╢πé»πé╖πâºπâ│πüîµïÆσÉªπüòπéîπüªπüäπéïσÅ»Φâ╜µÇºπüîπüéπéèπü╛πüÖπÇéτÉåτö▒πü½πüñπüäπüªπü»πÇüπüöσê⌐τö¿πü«ΘèÇΦíîπü½πüèσòÅπüäσÉêπéÅπü¢πüÅπüáπüòπüäπÇé",
          ],
        "Verification of your Songsterr Account email failed. Please double check it, ":
          [
            "πüéπü¬πüƒπü«Songsterrπéóπé½πéªπâ│πâêπü«Θ¢╗σ¡Éπâíπâ╝πâ½πü«µñ£Φ¿╝πü½σñ▒µòùπüùπü╛πüùπüƒπÇé πü¥πéîπéÆσåìτó║Φ¬ìπüùπüªπüÅπüáπüòπüä, ",
          ],
        "Your actions appear suspicious. We will reject any attempt to subscribe within the next twenty four hours. ":
          [
            "πüéπü¬πüƒπü«Φíîσïòπü»τûæπéÅπüùπüäπéêπüåπüºπüÖπÇéΣ╗èσ╛î24µÖéΘûôΣ╗Ñσåàπü½Φ│╝Φ¬¡πüÖπéïΦ⌐ªπü┐πéÆµïÆσÉªπüùπü╛πüÖπÇé ",
          ],
      },
    },
    language: "ja",
    pluralForms: "nplurals=1; plural=0;",
  },
  R = {
    translations: {
      "": {
        " if necessary and then try to pay again. If this doesn't help, please contact ":
          [
            " φòä∞Üöφò£ Ω▓╜∞Ü░ δïñ∞ï£ ∞ºÇδ╢êφòÿ∞ï¡∞ï£∞ÿñ. Ω╖╕δ₧ÿδÅä δÅä∞¢Ç∞¥┤ δÉÿ∞ºÇ ∞òè∞£╝δ⌐┤ δïñ∞¥î∞£╝δí£ δ¼╕∞¥ÿφòÿ∞ï¡∞ï£∞ÿñ ",
          ],
        " using your mail, website or app if you think we made a mistake.": [
          " δï╣∞ïá∞¥Ç ∞Ü░δª¼Ω░Ç ∞ïñ∞êÿδÑ╝ ∞â¥Ω░üφòÿδèö Ω▓╜∞Ü░ δ⌐ö∞¥╝,∞¢╣ ∞é¼∞¥┤φè╕ δÿÉδèö ∞¥æ∞Ü⌐ φöäδí£Ω╖╕δ₧¿∞¥ä ∞é¼∞Ü⌐φòÿ∞ù¼.",
        ],
        " using your mail, website or app.": [
          " δ⌐ö∞¥╝, ∞¢╣∞é¼∞¥┤φè╕ δÿÉδèö ∞ò▒∞¥ä ∞é¼∞Ü⌐φòÿ∞ù¼.",
        ],
        "change it": ["Ω╖╕Ω▓â∞¥ä δ░öΩ╛╕∞ï¡∞ï£∞ÿñ"],
        "CVV did not pass verification.": [
          "CVVδèö Ω▓Ç∞ª¥∞¥ä φå╡Ω│╝φòÿ∞ºÇ δ¬╗φûê∞è╡δïêδïñ.",
        ],
        "CVV did not pass verification. Please double-check that the CVV2 or CID code is correct.":
          [
            "CVVδèö Ω▓Ç∞ª¥∞¥ä φå╡Ω│╝φòÿ∞ºÇ δ¬╗φûê∞è╡δïêδïñ. CVV2 δÿÉδèö CID ∞╜öδô£Ω░Ç ∞ÿ¼δ░öδÑ╕∞ºÇ δïñ∞ï£ φÖò∞¥╕φòÿ∞ï¡∞ï£∞ÿñ.",
          ],
        "It looks like you are already subscribed. ": [
          "∞¥┤δ»╕ Ω╡¼δÅà φò£ Ω▓â Ω░Ö∞è╡δïêδïñ. ",
        ],
        "It looks like you are not currently subscribed. ": [
          "φÿä∞₧¼ Ω╡¼δÅàφòÿ∞ºÇ ∞òè∞¥Ç Ω▓â Ω░Ö∞è╡δïêδïñ. ",
        ],
        "Network error occurred. Please try again later.": [
          "δäñφè╕∞¢îφü¼ ∞ÿñδÑÿΩ░Ç δ░£∞â¥φûê∞è╡δïêδïñ. δéÿ∞ñæ∞ùÉ δïñ∞ï£ ∞ï£δÅäφòÿ∞ï¡∞ï£∞ÿñ.",
        ],
        "Please contact ": ["∞ù░δ¥╜∞ú╝∞ä╕∞Üö "],
        "Please fix the errors and try again.": [
          "∞ÿñδÑÿδÑ╝ ∞êÿ∞áòφòÿΩ│á δïñ∞ï£ ∞ï£δÅäφòÿ∞ï¡∞ï£∞ÿñ.",
        ],
        "There was a problem processing your credit card. Please double check your data and try again. If this doesn't help, please contact your bank to find out the reason of declined transaction.":
          [
            "∞ïá∞Ü⌐∞╣┤δô£δÑ╝ ∞▓ÿδª¼φòÿδèö ∞ñæ∞ùÉ δ¼╕∞á£Ω░Ç δ░£∞â¥φûê∞è╡δïêδïñ. δì░∞¥┤φä░δÑ╝ δïñ∞ï£ φÖò∞¥╕φòÿΩ│á δïñ∞ï£ ∞ï£δÅäφòÿ∞ï¡∞ï£∞ÿñ. ∞¥┤ δ░⌐δ▓ò∞¥┤ δÅä∞¢Ç∞¥┤ δÉÿ∞ºÇ ∞òè∞£╝δ⌐┤ ∞¥Çφûë∞ùÉ δ¼╕∞¥ÿφòÿ∞ù¼ Ω▒░δ₧ÿ Ω▒░δ╢Ç ∞¥┤∞£áδÑ╝ φÖò∞¥╕φòÿ∞ï¡∞ï£∞ÿñ.",
          ],
        'Unfortunately, on our side, we just see the message "Payment declined" without details. The transaction may be getting declined because of a high level of recent activity on a card, a card being over its limit, or due to a range of other reasons which only the bank knows. Please contact your bank to find out the reason.':
          [
            'δ╢êφûëφ₧êδÅä ∞Ü░δª¼ ∞╕í∞ùÉ∞ä£δèö ∞ä╕δ╢Ç ∞áòδ│┤∞ùå∞¥┤ "Ω▓░∞á£ Ω▒░δ╢Ç"δ¥╝δèö δ⌐ö∞ï£∞ºÇ δºî φæ£∞ï£δÉ⌐δïêδïñ. ∞╡£Ω╖╝ ∞╣┤δô£ φÖ£δÅÖ∞¥┤ δºÄΩ▒░δéÿ ∞╣┤δô£Ω░Ç φò£δÅäδÑ╝ ∞┤êΩ│╝φòÿΩ▒░δéÿ ∞¥Çφûëδºî ∞òîΩ│á ∞₧êδèö δïñ∞ûæφò£ ∞¥┤∞£áδí£ ∞¥╕φò┤ Ω▒░δ₧ÿΩ░Ç Ω▒░δ╢ÇδÉá ∞êÿ ∞₧ê∞è╡δïêδïñ. ∞¥Çφûë∞ùÉ δ¼╕∞¥ÿφòÿ∞ù¼ ∞¥┤∞£áδÑ╝ φÖò∞¥╕φòÿ∞ä╕∞Üö.',
          ],
        "Verification of your Songsterr Account email failed. Please double check it, ":
          [
            "∞åí∞èñφä░ Ω│ä∞áò ∞¥┤δ⌐ö∞¥╝ φÖò∞¥╕∞ùÉ ∞ïñφî¿φûê∞è╡δïêδïñ. δïñ∞ï£ φò£ δ▓ê φÖò∞¥╕φò┤∞ú╝∞ä╕∞Üö ",
          ],
        "Your actions appear suspicious. We will reject any attempt to subscribe within the next twenty four hours. ":
          [
            "δï╣∞ïá∞¥ÿ φûëδÅÖ∞¥Ç ∞¥ÿ∞ï¼∞èñδƒ¼∞¢î δ│┤∞₧àδïêδïñ. ∞Ü░δª¼δèö δïñ∞¥î 24 ∞ï£Ω░ä ∞¥┤δé┤∞ùÉ Ω╡¼δÅà ∞ï£δÅäδÑ╝ Ω▒░δ╢Ç φòá Ω▓â∞₧àδïêδïñ. ",
          ],
      },
    },
    language: "ko",
    pluralForms: "nplurals=1; plural=0;",
  },
  _ = {
    translations: {
      "": {
        " if necessary and then try to pay again. If this doesn't help, please contact ":
          [
            " se necess\xe1rio e depois tentar pagar novamente. Se isto n\xe3o ajudar, favor contatar ",
          ],
        " using your mail, website or app if you think we made a mistake.": [
          " usando seu correio, website ou app, se o senhor achar que cometemos um erro.",
        ],
        " using your mail, website or app.": [
          " usando seu correio, website ou app.",
        ],
        "change it": ["mud\xe1-lo"],
        "CVV did not pass verification.": [
          "O CVV n\xe3o passou na verifica\xe7\xe3o.",
        ],
        "CVV did not pass verification. Please double-check that the CVV2 or CID code is correct.":
          [
            "O CVV n\xe3o passou na verifica\xe7\xe3o. Queira verificar novamente se o CVV2 ou o c\xf3digo do CID est\xe1 correto.",
          ],
        "It looks like you are already subscribed. ": [
          "Parece que o senhor j\xe1 est\xe1 inscrito. ",
        ],
        "It looks like you are not currently subscribed. ": [
          "Parece que o senhor n\xe3o est\xe1 inscrito no momento. ",
        ],
        "Network error occurred. Please try again later.": [
          "Ocorreu um erro na rede. Queira tentar novamente mais tarde.",
        ],
        "Please contact ": ["Favor contatar "],
        "Please fix the errors and try again.": [
          "Queira reparar os erros e tentar novamente.",
        ],
        "There was a problem processing your credit card. Please double check your data and try again. If this doesn't help, please contact your bank to find out the reason of declined transaction.":
          [
            "Houve um problema no processamento de seu cart\xe3o de cr\xe9dito. Por favor, verifique novamente seus dados e tente novamente. Se isso n\xe3o ajudar, favor entrar em contato com seu banco para descobrir o motivo da recusa da transa\xe7\xe3o.",
          ],
        'Unfortunately, on our side, we just see the message "Payment declined" without details. The transaction may be getting declined because of a high level of recent activity on a card, a card being over its limit, or due to a range of other reasons which only the bank knows. Please contact your bank to find out the reason.':
          [
            'Infelizmente, de nosso lado, vemos apenas a mensagem "Pagamento declinado" sem detalhes. A transa\xe7\xe3o pode estar sendo recusada por causa de um alto n\xedvel de atividade recente em um cart\xe3o, por um cart\xe3o estar acima de seu limite, ou devido a uma s\xe9rie de outras raz\xf5es que s\xf3 o banco conhece. Queira entrar em contato com seu banco para saber a raz\xe3o.',
          ],
        "Verification of your Songsterr Account email failed. Please double check it, ":
          [
            "A verifica\xe7\xe3o do e-mail de sua conta Songsterr falhou. Queira verific\xe1-lo duas vezes, ",
          ],
        "Your actions appear suspicious. We will reject any attempt to subscribe within the next twenty four hours. ":
          [
            "Suas a\xe7\xf5es parecem suspeitas. Rejeitaremos qualquer tentativa de inscri\xe7\xe3o dentro das pr\xf3ximas vinte e quatro horas. ",
          ],
      },
    },
    language: "pt",
    pluralForms: "nplurals=2; plural=(n != 1);",
  },
  M = {
    translations: {
      "": {
        " if necessary and then try to pay again. If this doesn't help, please contact ":
          [
            " ╨┐╤Ç╨╕ ╨╜╨╡╨╛╨▒╤à╨╛╨┤╨╕╨╝╨╛╤ü╤é╨╕, ╨░ ╨╖╨░╤é╨╡╨╝ ╨┐╨╛╨┐╤Ç╨╛╨▒╤â╨╣╤é╨╡ ╨╛╨┐╨╗╨░╤é╨╕╤é╤î ╤ü╨╜╨╛╨▓╨░. ╨ò╤ü╨╗╨╕ ╤ì╤é╨╛ ╨╜╨╡ ╨┐╨╛╨╝╨╛╨│╨╗╨╛, ╨┐╨╛╨╢╨░╨╗╤â╨╣╤ü╤é╨░, ╤ü╨▓╤Å╨╢╨╕╤é╨╡╤ü╤î ",
          ],
        " using your mail, website or app if you think we made a mistake.": [
          " ╨╕╤ü╨┐╨╛╨╗╤î╨╖╤â╤Å ╤ü╨▓╨╛╨╣ e-mail, ╨▓╨╡╨▒-╤ü╨░╨╣╤é ╨╕╨╗╨╕ ╨┐╤Ç╨╕╨╗╨╛╨╢╨╡╨╜╨╕╨╡, ╨╡╤ü╨╗╨╕ ╨▓╤ï ╤ü╤ç╨╕╤é╨░╨╡╤é╨╡, ╤ç╤é╨╛ ╨╝╤ï ╨┤╨╛╨┐╤â╤ü╤é╨╕╨╗╨╕ ╨╛╤ê╨╕╨▒╨║╤â.",
        ],
        " using your mail, website or app.": [
          " ╨╕╤ü╨┐╨╛╨╗╤î╨╖╤â╤Å ╤ü╨▓╨╛╨╣ e-mail, ╨▓╨╡╨▒-╤ü╨░╨╣╤é ╨╕╨╗╨╕ ╨┐╤Ç╨╕╨╗╨╛╨╢╨╡╨╜╨╕╨╡.",
        ],
        "change it": ["╨╕╨╖╨╝╨╡╨╜╨╕╤é╨╡ ╤ì╤é╨╛"],
        "CVV did not pass verification.": [
          "CVV ╨╜╨╡ ╨┐╤Ç╨╛╤ê╨╡╨╗ ╨┐╤Ç╨╛╨▓╨╡╤Ç╨║╤â.",
        ],
        "CVV did not pass verification. Please double-check that the CVV2 or CID code is correct.":
          [
            "CVV ╨╜╨╡ ╨┐╤Ç╨╛╤ê╨╡╨╗ ╨┐╤Ç╨╛╨▓╨╡╤Ç╨║╤â. ╨ƒ╨╛╨╢╨░╨╗╤â╨╣╤ü╤é╨░, ╨┤╨▓╨░╨╢╨┤╤ï ╨┐╤Ç╨╛╨▓╨╡╤Ç╤î╤é╨╡ ╨┐╤Ç╨░╨▓╨╕╨╗╤î╨╜╨╛╤ü╤é╤î CVV2 ╨╕╨╗╨╕ CID ╨║╨╛╨┤╨░.",
          ],
        "It looks like you are already subscribed. ": [
          "╨ƒ╨╛╤à╨╛╨╢╨╡, ╤ç╤é╨╛ ╨▓╤ï ╤â╨╢╨╡ ╨┐╨╛╨┤╨┐╨╕╤ü╨░╨╜╤ï. ",
        ],
        "It looks like you are not currently subscribed. ": [
          "╨ƒ╨╛╤à╨╛╨╢╨╡, ╤ç╤é╨╛ ╨▓ ╨╜╨░╤ü╤é╨╛╤Å╤ë╨╡╨╡ ╨▓╤Ç╨╡╨╝╤Å ╨▓╤ï ╨╜╨╡ ╨┐╨╛╨┤╨┐╨╕╤ü╨░╨╜╤ï. ",
        ],
        "Network error occurred. Please try again later.": [
          "╨ƒ╤Ç╨╛╨╕╨╖╨╛╤ê╨╗╨░ ╤ü╨╡╤é╨╡╨▓╨░╤Å ╨╛╤ê╨╕╨▒╨║╨░. ╨ƒ╨╛╨╢╨░╨╗╤â╨╣╤ü╤é╨░, ╨┐╨╛╨▓╤é╨╛╤Ç╨╕╤é╨╡ ╨┐╨╛╨┐╤ï╤é╨║╤â ╨┐╨╛╨╖╨╢╨╡.",
        ],
        "Please contact ": ["╨ƒ╨╛╨╢╨░╨╗╤â╨╣╤ü╤é╨░, ╤ü╨▓╤Å╨╢╨╕╤é╨╡╤ü╤î ╤ü "],
        "Please fix the errors and try again.": [
          "╨ƒ╨╛╨╢╨░╨╗╤â╨╣╤ü╤é╨░, ╨╕╤ü╨┐╤Ç╨░╨▓╤î╤é╨╡ ╨╛╤ê╨╕╨▒╨║╨╕ ╨╕ ╨┐╨╛╨▓╤é╨╛╤Ç╨╕╤é╨╡ ╨┐╨╛╨┐╤ï╤é╨║╤â.",
        ],
        "There was a problem processing your credit card. Please double check your data and try again. If this doesn't help, please contact your bank to find out the reason of declined transaction.":
          [
            "╨Æ╨╛╨╖╨╜╨╕╨║╨╗╨░ ╨┐╤Ç╨╛╨▒╨╗╨╡╨╝╨░ ╤ü ╨╛╨▒╤Ç╨░╨▒╨╛╤é╨║╨╛╨╣ ╨▓╨░╤ê╨╡╨╣ ╨║╤Ç╨╡╨┤╨╕╤é╨╜╨╛╨╣ ╨║╨░╤Ç╤é╤ï. ╨ƒ╨╛╨╢╨░╨╗╤â╨╣╤ü╤é╨░, ╨┤╨▓╨░╨╢╨┤╤ï ╨┐╤Ç╨╛╨▓╨╡╤Ç╤î╤é╨╡ ╨┤╨░╨╜╨╜╤ï╨╡ ╨╕ ╨┐╨╛╨▓╤é╨╛╤Ç╨╕╤é╨╡ ╨┐╨╛╨┐╤ï╤é╨║╤â. ╨ò╤ü╨╗╨╕ ╤ì╤é╨╛ ╨╜╨╡ ╨┐╨╛╨╝╨╛╨│╨╗╨╛, ╨┐╨╛╨╢╨░╨╗╤â╨╣╤ü╤é╨░, ╤ü╨▓╤Å╨╢╨╕╤é╨╡╤ü╤î ╤ü ╨▓╨░╤ê╨╕╨╝ ╨▒╨░╨╜╨║╨╛╨╝, ╤ç╤é╨╛╨▒╤ï ╨▓╤ï╤Å╤ü╨╜╨╕╤é╤î ╨┐╤Ç╨╕╤ç╨╕╨╜╤â ╨╛╤é╨║╨╗╨╛╨╜╨╡╨╜╨╕╤Å ╤é╤Ç╨░╨╜╨╖╨░╨║╤å╨╕╨╕.",
          ],
        'Unfortunately, on our side, we just see the message "Payment declined" without details. The transaction may be getting declined because of a high level of recent activity on a card, a card being over its limit, or due to a range of other reasons which only the bank knows. Please contact your bank to find out the reason.':
          [
            '╨Ü ╤ü╨╛╨╢╨░╨╗╨╡╨╜╨╕╤Ä, ╨╜╨░ ╨╜╨░╤ê╨╡╨╣ ╤ü╤é╨╛╤Ç╨╛╨╜╨╡ ╨╝╤ï ╨┐╤Ç╨╛╤ü╤é╨╛ ╨▓╨╕╨┤╨╕╨╝ ╤ü╨╛╨╛╨▒╤ë╨╡╨╜╨╕╨╡ "╨ƒ╨╗╨░╤é╨╡╨╢ ╨╛╤é╨║╨╗╨╛╨╜╨╡╨╜" ╨▒╨╡╨╖ ╨┐╨╛╨┤╤Ç╨╛╨▒╨╜╨╛╤ü╤é╨╡╨╣. ╨ó╤Ç╨░╨╜╨╖╨░╨║╤å╨╕╤Å ╨╝╨╛╨╢╨╡╤é ╨▒╤ï╤é╤î ╨╛╤é╨║╨╗╨╛╨╜╨╡╨╜╨░ ╨╕╨╖-╨╖╨░ ╨▓╤ï╤ü╨╛╨║╨╛╨│╨╛ ╤â╤Ç╨╛╨▓╨╜╤Å ╨░╨║╤é╨╕╨▓╨╜╨╛╤ü╤é╨╕ ╨┐╨╛ ╨║╨░╤Ç╤é╨╡, ╨┐╤Ç╨╡╨▓╤ï╤ê╨╡╨╜╨╕╤Å ╨╗╨╕╨╝╨╕╤é╨░ ╨┐╨╛ ╨║╨░╤Ç╤é╨╡ ╨╕╨╗╨╕ ╨┐╨╛ ╤Ç╤Å╨┤╤â ╨┤╤Ç╤â╨│╨╕╤à ╨┐╤Ç╨╕╤ç╨╕╨╜, ╨║╨╛╤é╨╛╤Ç╤ï╨╡ ╨╕╨╖╨▓╨╡╤ü╤é╨╜╤ï ╤é╨╛╨╗╤î╨║╨╛ ╨▒╨░╨╜╨║╤â. ╨ƒ╨╛╨╢╨░╨╗╤â╨╣╤ü╤é╨░, ╤ü╨▓╤Å╨╢╨╕╤é╨╡╤ü╤î ╤ü ╨▓╨░╤ê╨╕╨╝ ╨▒╨░╨╜╨║╨╛╨╝, ╤ç╤é╨╛╨▒╤ï ╨▓╤ï╤Å╤ü╨╜╨╕╤é╤î ╨┐╤Ç╨╕╤ç╨╕╨╜╤â.',
          ],
        "Verification of your Songsterr Account email failed. Please double check it, ":
          [
            "╨ƒ╤Ç╨╛╨▓╨╡╤Ç╨║╨░ ╤ì╨╗╨╡╨║╤é╤Ç╨╛╨╜╨╜╨╛╨╣ ╨┐╨╛╤ç╤é╤ï ╨░╨║╨║╨░╤â╨╜╤é╨░ Songsterr ╨╜╨╡ ╨┐╤Ç╨╛╤ê╨╗╨░. ╨ƒ╨╛╨╢╨░╨╗╤â╨╣╤ü╤é╨░, ╨┐╤Ç╨╛╨▓╨╡╤Ç╤î╤é╨╡ ╨╡╨│╨╛ ╨╡╤ë╨╡ ╤Ç╨░╨╖, ",
          ],
        "Your actions appear suspicious. We will reject any attempt to subscribe within the next twenty four hours. ":
          [
            "╨Æ╨░╤ê╨╕ ╨┤╨╡╨╣╤ü╤é╨▓╨╕╤Å ╨║╨░╨╢╤â╤é╤ü╤Å ╨┐╨╛╨┤╨╛╨╖╤Ç╨╕╤é╨╡╨╗╤î╨╜╤ï╨╝╨╕. ╨£╤ï ╨╛╤é╨║╨╗╨╛╨╜╨╕╨╝ ╨╗╤Ä╨▒╤â╤Ä ╨┐╨╛╨┐╤ï╤é╨║╤â ╨┐╨╛╨┤╨┐╨╕╤ü╨║╨╕ ╨▓ ╤é╨╡╤ç╨╡╨╜╨╕╨╡ ╤ü╨╗╨╡╨┤╤â╤Ä╤ë╨╕╤à ╨┤╨▓╨░╨┤╤å╨░╤é╨╕ ╤ç╨╡╤é╤ï╤Ç╨╡╤à ╤ç╨░╤ü╨╛╨▓. ",
          ],
      },
    },
    language: "ru",
    pluralForms:
      "nplurals=3; plural=(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);",
  },
  K = {
    translations: {
      "": {
        " if necessary and then try to pay again. If this doesn't help, please contact ":
          [
            " σªéµ₧£µ£ëσ┐àΦªüτÜäΦ»¥∩╝îσåìΦ»òτ¥ÇΘçìµû░µö»Σ╗ÿπÇéσªéµ₧£Φ┐ÖΦ┐ÿµ▓íµ£ëσ╕«σè⌐∩╝îΦ»╖Φüöτ│╗",
          ],
        " using your mail, website or app if you think we made a mistake.": [
          " σªéµ₧£Σ╜áΦ«ñΣ╕║µêæΣ╗¼τè»Σ║åΣ╕ÇΣ╕¬ΘöÖΦ»»∩╝îΦ»╖Σ╜┐τö¿Σ╜áτÜäΘé«Σ╗╢πÇüτ╜æτ½Öµêûσ║öτö¿τ¿ïσ║ÅπÇé",
        ],
        " using your mail, website or app.": [
          " Σ╜┐τö¿Σ╜áτÜäΘé«Σ╗╢πÇüτ╜æτ½Öµêûσ║öτö¿τ¿ïσ║ÅπÇé",
        ],
        "change it": ["µö╣σÅÿσ«â"],
        "CVV did not pass verification.": ["CVVµ▓íµ£ëΘÇÜΦ┐çΘ¬îΦ»üπÇé"],
        "CVV did not pass verification. Please double-check that the CVV2 or CID code is correct.":
          [
            "CVVµ▓íµ£ëΘÇÜΦ┐çΘ¬îΦ»üπÇéΦ»╖Σ╗öτ╗åµúÇµƒÑCVV2µêûCIDΣ╗úτáüµÿ»σÉªµ¡úτí«πÇé",
          ],
        "It looks like you are already subscribed. ": [
          "τ£ïΦ╡╖µ¥ÑΣ╜áσ╖▓τ╗ÅΦ«óΘÿàΣ║åπÇé",
        ],
        "It looks like you are not currently subscribed. ": [
          "τ£ïΦ╡╖µ¥ÑΣ╜áτ¢«σëìΦ┐ÿµ▓íµ£ëΦ«óΘÿàπÇé",
        ],
        "Network error occurred. Please try again later.": [
          "σÅæτöƒτ╜æτ╗£ΘöÖΦ»»πÇéΦ»╖τ¿ìσÉÄσåìΦ»òπÇé",
        ],
        "Please contact ": ["Φ»╖Φüöτ│╗"],
        "Please fix the errors and try again.": [
          "Φ»╖Σ┐«σñìΘöÖΦ»»σ╣╢σåìµ¼íσ░¥Φ»òπÇé",
        ],
        "There was a problem processing your credit card. Please double check your data and try again. If this doesn't help, please contact your bank to find out the reason of declined transaction.":
          [
            "σñäτÉåµé¿τÜäΣ┐íτö¿σìíµù╢σç║τÄ░Σ║åΘù«ΘóÿπÇéΦ»╖Σ╗öτ╗åµúÇµƒÑµé¿τÜäµò░µì«σ╣╢σåìµ¼íσ░¥Φ»òπÇéσªéµ₧£Φ┐ÖΦ┐ÿµ▓íµ£ëσ╕«σè⌐∩╝îΦ»╖Φüöτ│╗µé¿τÜäΘô╢Φíî∩╝îµë╛σç║Σ║ñµÿôΦó½µïÆτ╗¥τÜäσÄƒσ¢áπÇé",
          ],
        'Unfortunately, on our side, we just see the message "Payment declined" without details. The transaction may be getting declined because of a high level of recent activity on a card, a card being over its limit, or due to a range of other reasons which only the bank knows. Please contact your bank to find out the reason.':
          [
            'Σ╕ìσ╣╕τÜäµÿ»∩╝îσ£¿µêæΣ╗¼Φ┐ÖΦ╛╣∩╝îµêæΣ╗¼σÅ¬τ£ïσê░Σ║å "Σ╗ÿµ¼╛Φó½µïÆτ╗¥ "τÜäΣ┐íµü»∩╝îµ▓íµ£ëΣ╗╗Σ╜òτ╗åΦèéπÇéΣ║ñµÿôΦó½µïÆτ╗¥τÜäσÄƒσ¢áσÅ»Φâ╜µÿ»µƒÉσ╝áσìíµ£ÇΦ┐æτÜäµ┤╗σè¿ΘçÅσ╛êσñº∩╝îµƒÉσ╝áσìíΦ╢àΦ┐çΣ║åσ«âτÜäΘÖÉΘó¥∩╝îµêûΦÇàτö▒Σ║ÄΣ╕Çτ│╗σêùσà╢Σ╗ûσÄƒσ¢á∩╝îσÅ¬µ£ëΘô╢ΦíîτƒÑΘüôπÇéΦ»╖Σ╕ÄΣ╜áτÜäΘô╢ΦíîΦüöτ│╗∩╝îµë╛σç║σÄƒσ¢áπÇé',
          ],
        "Verification of your Songsterr Account email failed. Please double check it, ":
          [
            "µé¿τÜäSongsterrΦ┤ªµê╖τö╡σ¡ÉΘé«Σ╗╢Θ¬îΦ»üσñ▒Φ┤ÑπÇéΦ»╖Σ╗öτ╗åµúÇµƒÑ∩╝î",
          ],
        "Your actions appear suspicious. We will reject any attempt to subscribe within the next twenty four hours. ":
          [
            "Σ╜áτÜäΦíîΣ╕║Σ╝╝Σ╣Äσ╛êσÅ»τûæπÇéµêæΣ╗¼σ░åµïÆτ╗¥Σ╗╗Σ╜òσ£¿µ£¬µ¥Ñ24σ░Åµù╢σåàτÜäΦ«óΘÿàσ░¥Φ»òπÇé",
          ],
      },
    },
    language: "zh",
    pluralForms: "nplurals=1; plural=0;",
  },
  H = {
    translations: {
      "": {
        " if necessary and then try to pay again. If this doesn't help, please contact ":
          [
            " gerekirse ve sonra tekrar \xf6demeyi deneyin. Bu i┼ƒe yaramazsa, l\xfctfen ileti┼ƒime ge\xe7in ",
          ],
        " using your mail, website or app if you think we made a mistake.": [
          " bir hata yapt─▒─ƒ─▒m─▒z─▒ d\xfc┼ƒ\xfcn\xfcyorsan─▒z mailinizi, web sitenizi veya uygulaman─▒z─▒ kullanarak.",
        ],
        " using your mail, website or app.": [
          " postan─▒z─▒, web sitenizi veya uygulaman─▒z─▒ kullanarak.",
        ],
        "change it": ["de─ƒi┼ƒtir onu"],
        "CVV did not pass verification.": ["CVV do─ƒrulamay─▒ ge\xe7emedi."],
        "CVV did not pass verification. Please double-check that the CVV2 or CID code is correct.":
          [
            "CVV do─ƒrulamay─▒ ge\xe7emedi. L\xfctfen CVV2 veya CID kodunun do─ƒru oldu─ƒunu iki kez kontrol edin.",
          ],
        "It looks like you are already subscribed. ": [
          "G\xf6r\xfcn\xfc┼ƒe g\xf6re zaten abone olmu┼ƒsunuz. ",
        ],
        "It looks like you are not currently subscribed. ": [
          "┼₧u anda abone olmam─▒┼ƒs─▒n─▒z gibi g\xf6r\xfcn\xfcyor. ",
        ],
        "Network error occurred. Please try again later.": [
          "A─ƒ hatas─▒ olu┼ƒtu. L\xfctfen daha sonra tekrar deneyin.",
        ],
        "Please contact ": ["L\xfctfen ileti┼ƒime ge\xe7in "],
        "Please fix the errors and try again.": [
          "L\xfctfen hatalar─▒ d\xfczeltin ve tekrar deneyin.",
        ],
        "There was a problem processing your credit card. Please double check your data and try again. If this doesn't help, please contact your bank to find out the reason of declined transaction.":
          [
            "Kredi kart─▒n─▒z i┼ƒlenirken bir sorun olu┼ƒtu. L\xfctfen verilerinizi iki kez kontrol edin ve tekrar deneyin. Bu i┼ƒe yaramazsa, reddedilen i┼ƒlemin nedenini \xf6─ƒrenmek i\xe7in l\xfctfen bankan─▒zla ileti┼ƒime ge\xe7in.",
          ],
        'Unfortunately, on our side, we just see the message "Payment declined" without details. The transaction may be getting declined because of a high level of recent activity on a card, a card being over its limit, or due to a range of other reasons which only the bank knows. Please contact your bank to find out the reason.':
          [
            'Ne yaz─▒k ki, bizim taraf─▒m─▒zda, ayr─▒nt─▒lar olmadan sadece "\xd6deme reddedildi" mesaj─▒n─▒ g\xf6r\xfcyoruz. ─░┼ƒlem, bir kartta son zamanlarda y\xfcksek d\xfczeyde hareket olmas─▒, bir kart─▒n limitini a┼ƒmas─▒ veya yaln─▒zca bankan─▒n bildi─ƒi bir dizi ba┼ƒka nedenden dolay─▒ reddediliyor olabilir. Sebebini \xf6─ƒrenmek i\xe7in l\xfctfen bankan─▒zla ileti┼ƒime ge\xe7in.',
          ],
        "Verification of your Songsterr Account email failed. Please double check it, ":
          [
            "Songsterr Hesap e-postan─▒z─▒n do─ƒrulanmas─▒ ba┼ƒar─▒s─▒z oldu. L\xfctfen iki kez kontrol edin, ",
          ],
        "Your actions appear suspicious. We will reject any attempt to subscribe within the next twenty four hours. ":
          [
            "Hareketleriniz ┼ƒ\xfcpheli g\xf6r\xfcn\xfcyor. \xd6n\xfcm\xfczdeki yirmi d\xf6rt saat i\xe7inde herhangi bir abone olma giri┼ƒimini reddedece─ƒiz. ",
          ],
      },
    },
    language: "tr",
    pluralForms: "nplurals=2; plural=(n > 1);",
  },
  G = [L, E, W, Y, O, R, _, M, K, H];
let Z = {
    enter: q.enter,
    enterActive: q.enterActive,
    exit: q.exit,
    exitActive: q.exitActive,
  },
  Q = new Map();
function J(e) {
  let a = Q.get(e);
  return a || ((a = h(e, G)), Q.set(e, a)), a;
}
let X = (e, a) => {
    if (e._braintreeWebError) {
      let t = e._braintreeWebError?.code;
      switch (t) {
        case "HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED":
          return a("CVV did not pass verification.");
        case "HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR":
          return a("Network error occurred. Please try again later.");
      }
    }
    return a("Please fix the errors and try again.");
  },
  $ = (e, a) => {
    let t = f(),
      { gettext: r } = J(t),
      { name: o, message: n } = e;
    if (e instanceof i) return { message: n };
    if (e instanceof s) return { type: "fraud" };
    if (e instanceof l && n.includes("cvv")) return { type: "cvv" };
    if (e instanceof l) {
      let e = "subscribe" === a && "You are already subscribed." === n,
        t = "update" === a && "You're not subscribed." === n;
      if (e || t) return { type: "conflict" };
    }
    if (n.includes("risk_threshold") || n.includes("fraud") || e instanceof c)
      return { type: "restrain" };
    if ("DropinError" === o) return { message: X(e, r) };
    let u = r(
      "subscribe" === a
        ? "There was a problem processing your credit card. Please double check your data and try again. If this doesn't help, please contact your bank to find out the reason of declined transaction."
        : 'Unfortunately, on our side, we just see the message "Payment declined" without details. The transaction may be getting declined because of a high level of recent activity on a card, a card being over its limit, or due to a range of other reasons which only the bank knows. Please contact your bank to find out the reason.'
    );
    return { message: u };
  };
function ee(a) {
  let { error: t, mode: r } = a,
    { gettext: o } = u(G),
    n = e(
      "a",
      { href: "mailto:support@songsterr.com", "data-action": "support" },
      "support@songsterr.com"
    ),
    i = null;
  if (
    (t &&
      "cvv" === t.type &&
      (i = e(
        "div",
        null,
        o(
          "CVV did not pass verification. Please double-check that the CVV2 or CID code is correct."
        )
      )),
    t && "conflict" === t.type)
  ) {
    let a = o(
      "update" === r
        ? "It looks like you are not currently subscribed. "
        : "It looks like you are already subscribed. "
    );
    i = e(
      "div",
      null,
      a,
      o("Please contact "),
      n,
      o(" using your mail, website or app if you think we made a mistake.")
    );
  }
  return (
    t &&
      "fraud" === t.type &&
      (i = e(
        "div",
        null,
        o(
          "Verification of your Songsterr Account email failed. Please double check it, "
        ),
        e(d, { to: "/a/wa/account", "data-action": "account" }, o("change it")),
        o(
          " if necessary and then try to pay again. If this doesn't help, please contact "
        ),
        n,
        o(" using your mail, website or app.")
      )),
    t &&
      "restrain" === t.type &&
      (i = e(
        "div",
        null,
        o(
          "Your actions appear suspicious. We will reject any attempt to subscribe within the next twenty four hours. "
        ),
        o("Please contact "),
        n,
        o(" using your mail, website or app if you think we made a mistake.")
      )),
    t && !i && (i = e("div", null, t.message)),
    e(
      "div",
      { className: T.wrapper },
      e(
        p,
        null,
        t &&
          e(
            y,
            { animationStyles: Z, timeout: 300 },
            e(
              "div",
              {
                className: T.error,
                key: "error",
                role: "alert",
                "aria-label": "form",
              },
              i
            )
          )
      )
    )
  );
}
let ea = "Bst1r8",
  et = "Bst21i",
  er = "Bst1nm",
  eo = "Bstlw",
  en = "Bst33x",
  ei = {
    form: "Bst1r8",
    container: "Bst21i",
    actionButtonsWrapper: "Bst1nm",
    actionButtons: "Bstlw",
    processingIndicator: "Bst33x",
  };
var es = {
    translations: {
      "": {
        Cancel: ["Abbrechen"],
        "Choose a way to pay": ["W\xe4hlen Sie eine Zahlungsart"],
        "Fill in your card details": ["F\xfcllen Sie Ihre Kartendaten aus"],
        "Processing payment...": ["Zahlung wird bearbeitet..."],
        "Secured by ": ["Gesichert durch "],
        "Updating...": ["AktualisierenΓÇª"],
        "Use Apple Pay button to proceed": [
          "Verwenden Sie die Apple Pay-Taste, um fortzufahren",
        ],
        "Use PayPal button to proceed": [
          "Verwenden Sie die PayPal-Taste, um fortzufahren",
        ],
      },
    },
    language: "de",
    pluralForms: "nplurals=2; plural=(n != 1);",
  },
  el = {
    translations: {
      "": {
        Cancel: ["Cancelar"],
        "Choose a way to pay": ["Elija una forma de pago"],
        "Fill in your card details": ["Rellene los datos de su tarjeta"],
        "Processing payment...": ["Procesamiento de pagosΓÇª"],
        "Secured by ": ["Asegurado por "],
        "Updating...": ["Actualizando..."],
        "Use Apple Pay button to proceed": [
          "Utilice el bot\xf3n de Apple Pay para continuar",
        ],
        "Use PayPal button to proceed": [
          "Utilice el bot\xf3n de PayPal para continuar",
        ],
      },
    },
    language: "es",
    pluralForms: "nplurals=2; plural=(n != 1);",
  },
  ec = {
    translations: {
      "": {
        Cancel: ["Annuler"],
        "Choose a way to pay": ["Choisissez un mode de paiement"],
        "Fill in your card details": [
          "Remplissez les d\xe9tails de votre carte",
        ],
        "Processing payment...": ["Traitement du paiement..."],
        "Secured by ": ["S\xe9curis\xe9 par "],
        "Updating...": ["Mise \xe0 jour..."],
        "Use Apple Pay button to proceed": [
          "Utilisez le bouton Apple\xa0Pay pour continuer",
        ],
        "Use PayPal button to proceed": [
          "Utilisez le bouton PayPal pour continuer",
        ],
      },
    },
    language: "fr",
    pluralForms: "nplurals=2; plural=(n > 1);",
  },
  eu = {
    translations: {
      "": {
        Cancel: ["Annulla"],
        "Choose a way to pay": ["Scelga un modo per pagare"],
        "Fill in your card details": ["Inserisca i dati della sua carta"],
        "Processing payment...": ["Elaborazione del pagamento..."],
        "Secured by ": ["Protetto da "],
        "Updating...": ["In aggiornamentoΓÇª"],
        "Use Apple Pay button to proceed": [
          "Utilizzi il pulsante Apple Pay per procedere",
        ],
        "Use PayPal button to proceed": [
          "Utilizzi il pulsante PayPal per procedere",
        ],
      },
    },
    language: "it",
    pluralForms: "nplurals=2; plural=(n != 1);",
  },
  ed = {
    translations: {
      "": {
        Cancel: ["πé¡πâúπâ│πé╗πâ½"],
        "Choose a way to pay": ["µö»µëòπüäµû╣µ│òπéÆΘü╕µè₧πüÖπéï"],
        "Fill in your card details": [
          "πüéπü¬πüƒπü«πé½πâ╝πâëπü«Φ⌐│τ┤░πéÆΦ¿ÿσàÑπüùπüªπüÅπüáπüòπüä",
        ],
        "Processing payment...": ["µö»µëòπüäσçªτÉå..."],
        "Secured by ": ["πü½πéêπüúπüªτó║Σ┐¥ "],
        "Updating...": ["µ¢┤µû░Σ╕¡.."],
        "Use Apple Pay button to proceed": [
          "Apple Payπâ£πé┐πâ│πéÆΣ╜┐τö¿πüùπüªτ╢ÜΦíîπüùπü╛πüÖ",
        ],
        "Use PayPal button to proceed": [
          "PayPalπâ£πé┐πâ│πéÆΣ╜┐τö¿πüùπüªτ╢ÜΦíîπüùπü╛πüÖ",
        ],
      },
    },
    language: "ja",
    pluralForms: "nplurals=1; plural=0;",
  },
  ep = {
    translations: {
      "": {
        Cancel: ["∞╖¿∞åî"],
        "Choose a way to pay": ["Ω▓░∞á£ δ░⌐δ▓ò ∞äáφâ¥"],
        "Fill in your card details": ["∞╣┤δô£ ∞ä╕δ╢Ç ∞áòδ│┤ ∞₧àδáÑ"],
        "Processing payment...": ["Ω▓░∞á£ ∞▓ÿδª¼ ∞ñæ..."],
        "Secured by ": ["∞ùÉ ∞¥ÿφò┤ φÖòδ│┤ "],
        "Updating...": ["∞ùàδì░∞¥┤φè╕ ∞ñæΓÇª"],
        "Use Apple Pay button to proceed": [
          "Ω│ä∞åìφòÿδáñδ⌐┤ Apple Pay δ▓äφè╝∞¥ä ∞é¼∞Ü⌐φòÿ∞ï¡∞ï£∞ÿñ",
        ],
        "Use PayPal button to proceed": [
          "Ω│ä∞åìφòÿδáñδ⌐┤ PayPal δ▓äφè╝∞¥ä ∞é¼∞Ü⌐φòÿ∞ï¡∞ï£∞ÿñ",
        ],
      },
    },
    language: "ko",
    pluralForms: "nplurals=1; plural=0;",
  },
  ey = {
    translations: {
      "": {
        Cancel: ["Cancelar"],
        "Choose a way to pay": ["Escolha uma forma de pagamento"],
        "Fill in your card details": ["Preencha os dados de seu cart\xe3o"],
        "Processing payment...": ["Processamento do pagamento..."],
        "Secured by ": ["Assegurada por "],
        "Updating...": ["Atualizando..."],
        "Use Apple Pay button to proceed": [
          "Use o bot\xe3o Apple Pay para prosseguir",
        ],
        "Use PayPal button to proceed": [
          "Use o bot\xe3o PayPal para prosseguir",
        ],
      },
    },
    language: "pt",
    pluralForms: "nplurals=2; plural=(n != 1);",
  },
  eh = {
    translations: {
      "": {
        Cancel: ["╨₧╤é╨╝╨╡╨╜╨░"],
        "Choose a way to pay": ["╨Æ╤ï╨▒╨╡╤Ç╨╕╤é╨╡ ╤ü╨┐╨╛╤ü╨╛╨▒ ╨╛╨┐╨╗╨░╤é╤ï"],
        "Fill in your card details": [
          "╨ù╨░╨┐╨╛╨╗╨╜╨╕╤é╨╡ ╨┤╨░╨╜╨╜╤ï╨╡ ╨▓╨░╤ê╨╡╨╣ ╨║╨░╤Ç╤é╤ï",
        ],
        "Processing payment...": ["╨₧╨▒╤Ç╨░╨▒╨╛╤é╨║╨░ ╨┐╨╗╨░╤é╨╡╨╢╨╡╨╣..."],
        "Secured by ": ["╨ù╨░╤ë╨╕╤ë╨╡╨╜╨╛ "],
        "Updating...": ["╨₧╨▒╨╜╨╛╨▓╨╗╨╡╨╜╨╕╨╡..."],
        "Use Apple Pay button to proceed": [
          "╨ÿ╤ü╨┐╨╛╨╗╤î╨╖╤â╨╣╤é╨╡ ╨║╨╜╨╛╨┐╨║╤â Apple Pay ╨┤╨╗╤Å ╨┐╤Ç╨╛╨┤╨╛╨╗╨╢╨╡╨╜╨╕╤Å",
        ],
        "Use PayPal button to proceed": [
          "╨ÿ╤ü╨┐╨╛╨╗╤î╨╖╤â╨╣╤é╨╡ ╨║╨╜╨╛╨┐╨║╤â PayPal ╨┤╨╗╤Å ╨┐╤Ç╨╛╨┤╨╛╨╗╨╢╨╡╨╜╨╕╤Å",
        ],
      },
    },
    language: "ru",
    pluralForms:
      "nplurals=3; plural=(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);",
  },
  ef = {
    translations: {
      "": {
        Cancel: ["σÅûµ╢ê"],
        "Choose a way to pay": ["ΘÇëµï⌐Σ╕Çτºìµö»Σ╗ÿµû╣σ╝Å"],
        "Fill in your card details": ["σí½σ»½µé¿τÜäΘèÇΦíîσìíΦ⌐│τ┤░Σ┐íµü»"],
        "Processing payment...": ["µ¡úσ£¿ΦÖòτÉåΣ╗ÿµ¼╛..."],
        "Secured by ": ["µïàΣ┐¥Σ║║µÿ»"],
        "Updating...": ["µ¡úσ£¿µ¢┤µû░..."],
        "Use Apple Pay button to proceed": ["Σ╜┐τö¿Apple PayµîëΘÆ«µ¥ÑΦ┐¢Φíî"],
        "Use PayPal button to proceed": ["Σ╜┐τö¿PayPalµîëΘÆ«µ¥ÑΦ┐¢Φíî"],
      },
    },
    language: "zh",
    pluralForms: "nplurals=1; plural=0;",
  },
  eb = {
    translations: {
      "": {
        Cancel: ["─░ptal"],
        "Choose a way to pay": ["\xd6deme i\xe7in bir yol se\xe7in"],
        "Fill in your card details": ["Kart bilgilerinizi doldurun"],
        "Processing payment...": ["\xd6deme i┼ƒlemeΓÇª"],
        "Secured by ": ["Taraf─▒ndan emniyete al─▒nm─▒┼ƒ "],
        "Updating...": ["G\xfcncelleniyor..."],
        "Use Apple Pay button to proceed": [
          "Devam etmek i\xe7in Apple Pay d\xfc─ƒmesini kullan─▒n",
        ],
        "Use PayPal button to proceed": [
          "Devam etmek i\xe7in PayPal d\xfc─ƒmesini kullan─▒n",
        ],
      },
    },
    language: "tr",
    pluralForms: "nplurals=2; plural=(n > 1);",
  },
  em = [es, el, ec, eu, ed, ep, ey, eh, ef, eb];
let eg = (e, a) => {
    switch (a.event) {
      case "initialize:success":
        return { ...e, instance: a.instance };
      case "initialize:failure":
        return { ...e, error: a.error };
      case "submit:start":
        return { ...e, processing: !0, error: null };
      case "submit:success":
        return { ...e, processing: !1 };
      case "submit:failure":
        return { ...e, processing: !1, error: a.error };
      case "update:view":
        return { ...e, activeView: a.activeView };
      default:
        return { ...e };
    }
  },
  ex = (i) => {
    let { locale: s, gettext: l } = u(em),
      c = {
        card: l("Fill in your card details"),
        paypal: l("Use PayPal button to proceed"),
        applePay: l("Use Apple Pay button to proceed"),
        options: l("Choose a way to pay"),
      };
    b();
    let p = a(),
      { mode: y, submitButtonId: h, submitButtonName: f, cancelLink: P } = i,
      { dispatch: V, payment: C } = m("payment"),
      [z, I] = t(eg, {
        instance: null,
        error: null,
        processing: !1,
        activeView: "options",
      }),
      S = r(
        async (e) => {
          if (z.instance && !z.processing) {
            e instanceof Event && e.preventDefault();
            try {
              I({ event: "submit:start" });
              let e = C.plan.id,
                {
                  type: a,
                  nonce: t,
                  deviceData: r,
                } = await z.instance.requestPaymentMethod(),
                { subscription: o } = await g(y, {
                  nonce: t,
                  deviceData: r,
                  planId: e,
                }),
                n =
                  "PayPalAccount" === a
                    ? "PayPal"
                    : "ApplePayCard" === a
                    ? "ApplePay"
                    : "Card";
              V("user/subscribePlus", {
                mode: y,
                subscription: o,
                paymentType: n,
              }),
                i.toggleNext();
            } catch (a) {
              V("curiosity/error", {
                error: "Subscription",
                message: a.message,
              }),
                await z.instance.clearSelectedPaymentMethod();
              let e = $(a, y);
              ("fraud" === e.type || "restrain" === e.type) &&
                V("curiosity/fraud"),
                I({ event: "submit:failure", error: e });
            }
          }
        },
        [z]
      ),
      j = r(
        async (e) => {
          let a = "PayPalAccount" === e.type || "ApplePayCard" === e.type;
          e.paymentMethodIsSelected && a && (await S());
        },
        [S]
      ),
      U = async (e) => {
        I({ event: "update:view", activeView: e.newViewId });
      };
    o(() => {
      let { ready: e, token: a, module: t, plan: r } = C,
        o = async () => {
          let e = r.price,
            o = { authorization: a, container: p.current, locale: s },
            n = await t.getInstance(o, e);
          n.on("changeActiveView", U),
            I({ event: "initialize:success", instance: n });
        };
      return (
        !z.instance &&
          e &&
          o().catch((e) => I({ event: "initialize:failure", error: e })),
        () => {
          if (z.instance)
            try {
              z.instance.off("changeActiveView", U),
                z.instance.teardown((e) => e && console.error(e));
            } catch (e) {}
        }
      );
    }, [C, z.instance]),
      n(() => {
        let e;
        let a = document.querySelector(
          '[data-braintree-id="choose-a-way-to-pay"]'
        );
        return (
          a &&
            (Object.assign(a.style, {
              textAlign: "left",
              transition: "transform 200ms ease",
              visibility: "visible",
              transform: "translateY(30px)",
            }),
            (e = setTimeout(() => {
              a &&
                ((a.textContent = c[z.activeView] || ""),
                (a.style.transform = "translateY(0)"));
            }, 200))),
          () => e && clearTimeout(e)
        );
      }, [z.activeView]),
      o(() => {
        if (z.instance) {
          try {
            z.instance.off("paymentMethodRequestable", j);
          } catch (e) {}
          z.instance.on("paymentMethodRequestable", j);
        }
      }, [z.instance, j]);
    let T = e(
      "div",
      { className: ei.actionButtons },
      z.processing &&
        e(
          "div",
          { className: ei.processingIndicator },
          e(v, { width: 17, height: 17, fill: "#93959d", className: k.button }),
          e(
            "span",
            null,
            l("update" === y ? "Updating..." : "Processing payment...")
          )
        ),
      !z.processing &&
        e(w, {
          id: h,
          title: f,
          isDisabled: !z.instance || z.processing,
          processing: z.processing,
        }),
      !z.processing &&
        P &&
        e(
          d,
          { to: P, className: x.buttonLink, "data-action": "cancel" },
          l("Cancel")
        )
    );
    return e(
      "form",
      { className: ei.form, noValidate: !0, onSubmit: S },
      e(ee, { error: z.error, mode: y }),
      e("div", { className: ei.container, ref: p }),
      e(
        "div",
        { className: ei.actionButtonsWrapper },
        T,
        e(A, { securedBy: l("Secured by ") })
      )
    );
  };
export { ex as P };
