
export default function Root(props) {

const onSubmit = (event) => {
  event.preventDefault();
  window.location.href = '/dashboard';
}

  return <section className="w-full h-screen flex justify-center">
    <div className="self-center">
        <div className="border border-solid border-gray p-4 rounded">
          <form onSubmit={onSubmit} className="flex flex-col">
            <h1>Acesso restrito</h1>
            <div className="mb-2">
              <label htmlFor="email" className="bold">Usuário:</label>
              <input type="email" name="email" className="w-full  p-2 border-b border-solid border-gray-light" placeholder="Informe o seu email" />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="bold">Senha:</label>
              <input type="password" name="password" className="w-full p-2 border-b border-solid border-gray-light" placeholder="Informe o sua senha" />
            </div>
            <button className="border-1 border-solid border-black bg-green px-4 py-2" type="submit">Acessar</button>
          </form>
        </div>
    </div>
  </section>;
}
