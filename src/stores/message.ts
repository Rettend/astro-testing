import { createSignal } from 'solid-js'
import { createStore } from 'solid-js/store'

export const [current, setCurrent] = createSignal('')

export const [message] = createStore({
  messages: [
    'Hello and welcome!',
    'Wow, you are here',
    'We\'ve been expecting you',
    'Welcome to the party',
    'Greetings and salutations',
    'Welcome to the jungle',
    'Hello, Anon',
  ],
  get random(): string {
    const messages = this.messages.filter(m => m !== current())
    return messages[Math.floor(Math.random() * messages.length)] || ''
  },
})
