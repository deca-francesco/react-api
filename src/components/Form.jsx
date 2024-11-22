export default function Form({ formData, handleFormField, handleFormSubmit }) {

    const form = document.getElementById("form")
    const show_btn = document.getElementById("show-form-btn")

    function handleShowForm() {
        form.classList.remove("d-none")
        show_btn.classList.add("d-none")
    }

    function handleCloseForm() {
        form.classList.add("d-none")
    }

    return (
        <>
            <button className="btn btn-primary" id="show-form-btn" onClick={handleShowForm}>Inserisci Articolo</button>

            <form onSubmit={handleFormSubmit} className="mt-4 d-none" id="form">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Titolo del nuovo articolo</label>
                    <input type="text" className="form-control" name="title" id="title" placeholder="Nuovo titolo" value={formData.title} onChange={handleFormField} />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Immagine</label>
                    <input type="text" className="form-control" name="image" id="image" placeholder="https://picsum.photos/200/100" value={formData.image} onChange={handleFormField} />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Contenuto</label>
                    <textarea className="form-control" name="content" id="content" placeholder="Contenuto" value={formData.content} onChange={handleFormField} />
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Categoria</label>
                    <select className="form-select" name="category" id="category" value={formData.category} onChange={handleFormField}>
                        <option defaultValue={true}>Scegli una categoria</option>
                        <option value="Html">Html</option>
                        <option value="Js">Js</option>
                        <option value="Altri linguaggi">Altri linguaggi</option>
                    </select>
                </div>
                <div className="form-check mt-4 mb-3">
                    <input className="form-check-input" type="checkbox" name="tags" value="Tag 1" checked={formData.tags.includes("Tag 1")} onChange={handleFormField} />
                    <label className="form-check-label" htmlFor="tag1">Tag 1</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="tags" value="Tag 2" checked={formData.tags.includes("Tag 2")} onChange={handleFormField} />
                    <label className="form-check-label" htmlFor="tag2">Tag 2</label>
                </div>
                <div className="form-check mt-5">
                    <input className="form-check-input" type="checkbox" name="publish" checked={formData.publish} onChange={handleFormField} />
                    <label className="form-check-label" htmlFor="publish">Pubblica</label>
                </div>
                <button className="btn btn-success mt-3" type="submit">Inserisci</button>
                <button className="btn btn-secondary mt-3 ms-2" onClick={handleCloseForm}>Chiudi</button>
            </form>
        </>
    )
}