import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
  data() {
    return {
      sections: ['Legislação', 'Serviços Disponíveis', 'Contato'],
      currentSection: 'Legislação'
    }
  },
  template: `
    <div class="p-4 max-w-3xl mx-auto">
      <h1 class="text-3xl font-bold mb-4 text-center">PetMemória</h1>
      <div class="flex justify-center gap-4 mb-6">
        <button 
          v-for="section in sections"
          :key="section"
          @click="currentSection = section"
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {{ section }}
        </button>
      </div>
      <div v-if="currentSection === 'Legislação'">
        <h2 class="text-xl font-semibold mb-2">Legislação</h2>
        <p>Informações sobre a legislação vigente referente à destinação de animais falecidos.</p>
      </div>
      <div v-if="currentSection === 'Serviços Disponíveis'">
        <h2 class="text-xl font-semibold mb-2">Serviços Disponíveis</h2>
        <p>Listagem de serviços de cremação e sepultamento em Campo Grande - MS.</p>
      </div>
      <div v-if="currentSection === 'Contato'">
        <h2 class="text-xl font-semibold mb-2">Contato</h2>
        <p>Entre em contato para mais orientações e suporte ao tutor.</p>
      </div>
    </div>
  `
}).mount('#app')
