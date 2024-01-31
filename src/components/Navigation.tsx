import { type Component, Show, createSignal } from 'solid-js'
import { current } from '../stores/message'

export const Navigation: Component = () => {
  const [open, setOpen] = createSignal(true)

  function toggleMenu() {
    setOpen(!open())
  }

  return (
    <div class="flex-(~ row)" m-5 gap-3 font-bold items-center>
      <div
        i-ph:list-bold
        text-3xl
        cursor-pointer
        onClick={toggleMenu}
      />
      <Show when={open()}>
        <div class="flex-(~ row)" gap-3>
          <a hover-underline href="/">Home</a>
          <a hover-underline href="/about/">About</a>
          <a hover-underline href="/blog/">Blog</a>
          <a hover-underline href="/tags/">Tags</a>
        </div>
      </Show>
      <p flex-grow text-right font-normal>{current()}</p>
    </div>
  )
}
