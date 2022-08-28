import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

export default function Blog(){
    const [getArticles, setArticles] = useState([]);
    const [getLoading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadArticleFromAPI(){
            const request = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
            const response = await request.json();
            setArticles(response);
            setLoading(false);
        }

        loadArticleFromAPI();
        document.title = "Blog";
    },[])

    return (
        <section className="section">
            <h1 className="section-title">Blog Page</h1>
            {
                (
                    getLoading?
                    <div>Loading</div>
                    :
                    <div  className="section-content">
                        {
                            getArticles.map((value) => {
                                // console.log(value);
                                return (
                                    <article key={value.id}>
                                        <h2><Link to={`/blog/${value.id}`}>{value.title}</Link></h2>
                                        <p>{new Date(value.publishedAt).toLocaleDateString()}</p>
                                        <p className="article-content">{value.summary}</p>

                                        <a href={value.url} target="_blank" rel="noreferrer">Source News</a>
                                    </article>

                                )
                            })
                        }
                    </div>
                )
            }
        </section>
    );
}