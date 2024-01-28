import { createSignal, Show, type Component } from 'solid-js'

export const Navigation: Component = () => {
  const [open, setOpen] = createSignal(true)
  
  function toggleMenu() {
    setOpen(!open())
  }

  return (
    <div class='flex-(~ row)' m-5 gap-3 font-bold items-center>
      <div cursor-pointer text-3xl i-ph:list-bold 
        onClick={toggleMenu} />
      <Show when={open()}>
        <div class='flex-(~ row)' gap-3>
          <a hover-underline href='/'>Home</a>
          <a hover-underline href='/about/'>About</a>
          <a hover-underline href='/blog/'>Blog</a>
        </div>
      </Show>
    </div>
  )
}

