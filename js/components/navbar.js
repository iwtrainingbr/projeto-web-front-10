function navbar() {
  return `
    <nav>
      <button onclick="changeContent('home')">Inicio</button>
      <button onclick="changeContent('add')">Cadastrar</button>
      <button onclick="changeContent('list')">Listar</button>
    </nav>
  `;
}
