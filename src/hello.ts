const div = document.querySelector<HTMLDivElement>('#main');

div!.addEventListener('change', (event) => {
  const input = event.target as HTMLInputElement
  console.log('### event', input.value);
})
