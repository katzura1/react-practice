import { useEffect } from "react";

export default function Home(){
    useEffect(()=>{
        document.title = "Home";
    },[]);
    return (
        <section className="section">
            <h1 className="section-title">Welcome to My Web Page</h1>

            <p className="section-content">Velit amet eu cupidatat velit in. Irure cillum et nulla ea id sunt sit proident voluptate. Tempor do ut reprehenderit consequat laboris nisi veniam esse pariatur Lorem in ex. Aliquip quis dolor aliquip officia sunt irure ullamco aute pariatur officia minim excepteur aliquip voluptate. In aute proident esse anim labore ex ad enim in cillum. Et in et Lorem est. Eiusmod ea nulla nostrud adipisicing ad deserunt officia.</p>
        </section>
    );
}