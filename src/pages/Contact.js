import { useEffect } from "react";

export default function Contact(){

    useEffect(()=>{
        document.title = "Contact";
    },[])

    return (
        <section className="section">
            <h1 className="section-title">Contact Page</h1>
            <div className="section-content">
                <p>Contact me at</p>
                <ul>
                    <li>Email :</li>
                    <li>Whatsapp : </li>
                </ul>
            </div>
        </section>
    );
}