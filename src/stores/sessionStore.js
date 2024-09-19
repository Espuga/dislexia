import { defineStore } from 'pinia'
import { i18n } from '../i18n/i18n';

export const sessionStore = defineStore('sessio', {
  state: () => ({
    text: "Els videojos cada vegada més van adquirint major importància en la nostra societat. Es qüestiona als mateixos com un perill per a la salut ja que, afirmen, la seva prolongada practica pot conduir al sedentarisme, tornar violentes als qui juguen, i més conseqüències. Cada vegada que un jove comet una atrocitat, sempre apareix el mateix sospitós, els videojocs. Els hi acusa de contaminar les ments dels nens amb violència, d'expressar "antivalors" i de ser una influència nefasta en la societat contemporánia. Es tracta d'una acusació ingènua, conservadora, més disposada a buscar un boc expiatori qualsevol que a reflexionar sobre el món en el qual els seus fills van néixer. Al cap i a la fi, els videojocs són un producte cultural, no gaire diferent de la literatura i el cinema, la labor del qual és retornar-nos una image més o menys literal de nosaltres mateixos, del món que creguem o de les decisions que prenem.",
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


