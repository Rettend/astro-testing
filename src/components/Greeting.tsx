import type { Component } from 'solid-js'
import { current, message, setCurrent } from '../stores/message'

export const Greeting: Component = () => {
  return (
    <div>
      <button
        bg-text
        text-dark
        text-shadow-xl
        font-bold
        my-5
        px-4
        py-2
        rounded-full
        shadow-white
        shadow-lg
        shadow-opacity-30
        transition-100
        hover:transform-scale-105
        active:translate-y-1
        onClick={() => setCurrent(message.random)}
      >
        Greet
      </button>
      <p>{current()}</p>
    </div>
  )
}
