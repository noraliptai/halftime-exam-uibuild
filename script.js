const root = document.getElementById("root")

root.insertAdjacentHTML("beforeend", `
    <form>
        <h1>Visszajelzés</h1>
        <input type="text" placeholder="Tárgy">
        <textarea placeholder="Megjegyzés"></textarea>
        <div>
            <div>
                <input type="checkbox">
                <p>Elolvastam és elfogadom az <span class="link">Adatkezelési Tájékoztatót</span></p>
            </div>
            <div>
                <input type="checkbox">
                <p>Szeretnék hírlevelet kapni</p>
            </div>
        </div>
        <button>Mentés</button>
    </form>
`)