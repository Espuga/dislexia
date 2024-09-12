import { defineStore } from 'pinia'
import { i18n } from '../i18n/i18n';

export const sessionStore = defineStore('sessio', {
  state: () => ({
    text: "Llegir suposa un procés complex en què diversos components mentals intervenen alhora. En primer lloc, suposa percebre correctament els estímuls gràfics, siguin les lletres de l'alfabet o els caràcters d'altres sistemes d'escriptura. Després implica associar aquestes grafies a un so o conjunt de sons per accedir al nivell fonològic de la paraula (es pot oralitzar posteriorment o usar aquesta informació internament, en la lectura silenciosa). Aquesta informació permet desxifrar la paraula però no comprendre-la, ja que cal trobar un mot similar al cervell, activant les pistes morfosintàctiques, contextuals i el coneixement previ per tal d'identificar-la. Una vegada que s'ha entès la paraula, cal extrapolar aquest significat a la frase i al text particular, perquè pot estar, per exemple, en sentit figurat. Quan està clar el sentit de l'oració es lliga amb la informació precedent del text per accedir a la seva idea general. Tots aquests nivells actuen de forma simultània, perquè el traspàs de dades entre ells permet fer inferències de sentit i accelerar la lectura global. La visualització de les lletres o signes ocupa la major part del temps de lectura. Els lectors experts minimitzen aquest temps de dues maneres: d'una banda, amplien el camp visual (el que s'anomena zona foveal) per veure d'un sol cop d'ull diverses lletres (alhora que actuen entre elles com a pistes d'identificació) i d'altra banda, es fixen en la part superior de la línia d'escriptura, on es concentra la major part de la informació sobre la forma de les lletres.[3] El temps ordinari de fixació és de 250 mil·lisegons per paraula. Els ulls, però, efectuen moviments constants d'endavant cap endarrere per aprofitar el context i d'aquesta manera no llegir totes les paraules plenament i omplir les llacunes amb hipòtesis de sentit. Aquestes hipòtesis expliquen que un error de tipografia pugui passar desapercebut, perquè el cervell corregeix la paraula segons la seva hipòtesi de les lletres que haurien de ser-hi i no \"veu\" realment l'error.",
    title: ""
  }),

  actions: {

    async changeIdiom(idiom) {
      i18n.global.locale.value = idiom
    },

    getTitle() {
      return this.title;
    },
    setTitle(title) {
      this.title = title
    },
    getText() {
      return this.text;
    },
    setText(text) {
      this.text = text;
    }
  }
})


