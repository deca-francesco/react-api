import { useState, useEffect } from 'react';

import ArticleCard from './ArticleCard.jsx';
import ArticleList from './ArticleList.jsx';
import Form from './Form.jsx';


export default function AppMain() {

    const initialFormData = {
        title: "",
        content: "",
        image: "",
        tags: [],
    };

    const api_server = "http://localhost:3001"
    const end_point = "/posts"

    const [articles, setArticles] = useState([]);
    const [newArticle, setNewArticle] = useState("");
    const [modifyArticle, setModifyArticle] = useState("");
    const [currentIndex, setCurrentIndex] = useState(null);
    const [formData, setFormData] = useState(initialFormData);

    const [postsData, setPostsData] = useState([])


    function fetchData(url = `${api_server}${end_point}`) {
        fetch(url)

            .then(res => res.json())

            .then(data => {

                console.log(data);

                setPostsData(data)

            }).catch(err => {
                console.error(err.message);
            })
    }

    // esegue subito al caricamento della pagina, ma una volta sola perché non ha dipendenze
    useEffect(fetchData, [])


    // function addArticle(e) {

    //   e.preventDefault()

    //   const newArticles = [...articles, newArticle]

    //   setArticles(newArticles)

    //   setNewArticle("")

    //   console.log(newArticles);

    // }

    function handleFormField(e) {
        const { name, value, checked, type } = e.target;

        const newValue = type === 'checkbox' ? checked : value;

        if (name === 'tags') {
            const tags = formData.tags.includes(value)
                ? formData.tags.filter(tag => tag !== value)
                : [...formData.tags, value];
            setFormData({ ...formData, tags });
        } else {
            setFormData({
                ...formData,
                [name]: newValue
            });
        }
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        const newItem = { id: Date.now(), ...formData };
        setArticles([newItem, ...articles]);
        setFormData(initialFormData);
    }

    function handleSaveClick(e) {
        e.preventDefault();
        const newArticles = articles.map((article, index) =>
            index === currentIndex ? modifyArticle : article
        );
        setArticles(newArticles);
        setModifyArticle('');
        setCurrentIndex(null);
    }




    return (
        <main>
            <div className="container">
                <Form formData={formData} handleFormField={handleFormField} handleFormSubmit={handleFormSubmit} />

                <ArticleList>
                    {postsData.data ? postsData.data.map((post, index) => (
                        <ArticleCard key={index} data={post} index={index} api_server={api_server} >
                        </ArticleCard>
                    )) : <p>No data found</p>
                    }
                </ArticleList>
            </div>
        </main>
    )
}