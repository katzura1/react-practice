import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function BlogDetail(){
    const navigate = useNavigate();
    const params = useParams();
    const [getArticle, setArticle] = useState({});
    const [getLoading, setLoading] = useState(true);

    useEffect(()=>{
        async function getArticleFromAPI(){
            const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.blogId}`);
            if(!request.ok){
                setLoading(false);
                return navigate('/error404');
            }
            const response = await request.json();
            setArticle(response);
            setLoading(false);
            document.title = response.title+" | Blog";
        }
        getArticleFromAPI();
    },[params, navigate]);

    return (
        <section className='section'>
            {
                getLoading ? 
                (
                    <>
                    <p>Loading ...</p>
                    </>
                )
                :
                <article>
                    <h4 className='section-title'>{getArticle.title}</h4>
                    <p>Published : {new Date(getArticle.publishedAt).toLocaleDateString()}</p>
                    <img className='article-image' src={getArticle.imageUrl} alt="thumbnail" />
                    <p className='article-content'>{getArticle.summary}</p>
                    <p>Source : <a href={getArticle.url}>{getArticle.newsSite}</a></p>
                </article>
            }
        </section>
    );
}