

export default function ArticleCard({ data, children, api_server }) {



    return (
        <div className="col">
            <div className="card mb-5">
                <img src={api_server + data.image} className="object-fit-cover card-img-top" height={300} />
                <div className="card-body">
                    <h3>{data.title}</h3>
                    <p>{data.content}</p>
                    <p>Tags: {data.tags.join(", ")}</p>
                    {children}
                </div>
            </div>
        </div>
    )
}