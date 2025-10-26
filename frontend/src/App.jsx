import "./App.css";

function App() {
  async function handleFile(e) {
    const file = e.target.files[0];
    const response = await fetch("http://192.168.1.6:3390/", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      credentials: "include",
      body: file,
    });
    console.log(response);
  }

  return (
    <>
      <h1>Planilha de Inventario</h1>
      <div>
        <label htmlFor="input-file">
          <span>Selecione o arquivo</span>
          <input
            onChange={handleFile}
            type="file"
            name="input-file"
            id="input-file"
            accept=".csv"
          />
        </label>
      </div>
    </>
  );
}

export default App;
