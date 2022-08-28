import { useEffect } from "react";

export default function Profile(){
    useEffect(()=>{
        document.title = "Profile";
    },[])
    return (
        <section className="section">
            <h1 className="section-title">Profile Page</h1>
            <p className="section-content">Consequat cillum magna adipisicing enim et ullamco consequat deserunt anim nisi minim mollit nisi. Officia aliquip labore et incididunt reprehenderit enim non cupidatat proident magna sint consequat cupidatat. Laboris ad commodo minim id. Magna ut non sunt laborum ad consectetur eu magna enim dolor cupidatat culpa aliqua adipisicing. Laborum nisi magna duis fugiat ipsum id commodo mollit irure pariatur voluptate minim sint occaecat. Pariatur qui exercitation consequat deserunt aliquip velit.</p>
        </section>
    );
}