import react from 'react'

export default function Contact(){
    return(
        <section className='emailContact'>
               <form className="email email1" action="https://formsubmit.co/ezreemy@gmail.com" method ="POST">
                    <h1 className='topic topic1' id='contact'>Contact Me</h1>
                    <label className='paragraph paragraph1'>Name*:</label>
                    <input type = "text" className = "entry" id = "name" name = "name" max-length = '50' required/>
                    <label className='paragraph paragraph1'>E-mail*:</label>
                    <input type = "email" className = "entry" id = "email" name = "email" max-length = '50' required/>
                    <label className='paragraph paragraph1'>Title:</label>
                    <input type = "text" className = "entry" id = "title" name = "title" max-length = '50' />
                    <label className='paragraph paragraph1'>Message:</label>
                    <textarea name = "message"></textarea>
		    <button type="submit" className='submit submit1'>Submit</button>
                    <p className='paragraph paragraph1'>* Required</p>
               </form>
        </section>
    )
}