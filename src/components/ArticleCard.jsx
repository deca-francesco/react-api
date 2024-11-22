

export default function ArticleCard({ data, index, children, api_server }) {

    function handleCancelClick(e) {
        const dataIndex = Number(e.target.getAttribute('data-index'));
        const newArticles = postsData.data.filter((post, index) => index !== dataIndex);
        setArticles(newArticles);
    }

    function handleModifyClick(e) {
        const dataIndex = Number(e.target.getAttribute('data-index'));
        setCurrentIndex(dataIndex);
        setModifyArticle(articles[dataIndex]);
    }

    return (
        <div className="col">
            <div className="card mb-5">
                <img src={api_server + data.image} className="object-fit-cover card-img-top" height={350} />
                <div className="card-body">
                    <h3>{data.title}</h3>
                    <p>{data.content}</p>
                    <p>Tags: {data.tags.join(", ")}</p>
                    <div className="buttonsDiv d-flex justify-content-end">
                        <button onClick={handleCancelClick} data-index={index} className="btn btn-outline-danger">Cancella</button>
                        <button onClick={handleModifyClick} data-index={index} className="ms-3 btn btn-outline-primary">Modifica</button>
                    </div>
                    {children}
                </div>

            </div>
        </div>
    )
}