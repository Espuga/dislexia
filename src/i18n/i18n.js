import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";


export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'ca',
  fallbackLocale: 'ca',
  availableLocales: ['ca', 'en', 'es'],
  messages: messages,
  missing: (locale, key) => {

    if(key!=''){
      if(!messages[locale][key]){
        console.error(`Translation not found for key: ${key} -> ${locale}`);
        return messages[locale][key];
      } 
      if(messages[locale][key]?.one)  return messages[locale][key].one;
    }
  
  }
});