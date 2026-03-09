import React from 'react';
import app from '../firebase/firebase.config';
import { doc, getFirestore, setDoc } from "firebase/firestore";

const NewsLetter = () => {
    const handleNewsLetter = async (e) => {
        e.preventDefault();
        console.log("clicked")
        const db = getFirestore(app);

        const name = e.target.name.value;
        const email = e.target.email.value;
        await setDoc(doc(db, "newsLetter", email), {
            name: name,
            email: email
        })
        console.log("successful")
        e.target.reset();
    }
    return (
        <div className='border rounded-xl p-4 w-full mx-auto'>
            <form onSubmit={handleNewsLetter}>
                <h1 className='text-center text-2xl font-bold'>Subscribe to our Newsletter</h1>
                <fieldset className="fieldset">

                    <legend className="fieldset-legend">Enter the name:</legend>
                    <input type="text" name="name" className="input w-full" placeholder="Name :" />

                    <legend className="fieldset-legend">Enter the email:</legend>
                    <input type="email" name="email" className="input w-full" placeholder="Email :" />

                    <button type='submit' className='btn btn-primary my-4'>Subscribe</button>
                </fieldset>
            </form>
        </div>
    );
};

export default NewsLetter;