import { defineStore } from 'pinia'
import { i18n } from '../i18n/i18n';

export const sessionStore = defineStore('sessio', {
  state: () => ({
    text: "as",
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


