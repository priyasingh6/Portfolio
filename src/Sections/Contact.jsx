// import { useState, useRef } from 'react';
// import emailjs from '@emailjs/browser';
//
// const Contact = () => {
//     const formRef = useRef();
//     const [loading, setLoading] = useState(false);
//     const [form, setForm] = useState({
//         name: '',
//         email: '',
//         message: '',
//     });
//
//     const handleChange = ({ target: { name, value } }) => {
//         setForm({ ...form, [name]: value });
//     };
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//
//         try {
//             await emailjs.send(
//                 'service_8n0qtsq',
//                 'template_wcgwy08',
//                 {
//                     from_name: form.name,
//                     to_name: 'Priya',
//                     from_email: form.email,
//                     to_email: 'ps9986219@gmail.com',
//                     message: form.message,
//                 },
//                 'cxuxVWeM9peGmiIE7'
//
//
//             );
//
//             alert('Your message has been sent!');
//             setForm({ name: '', email: '', message: '' }); // Reset form
//         } catch (error) {
//             console.error("Error sending email:", error.text || error);
//             alert('Something went wrong! Please try again later.');
//         }
//
//         setLoading(false);
//     };
//
//     return (
//         <section className="c-space my-20">
//             <div className="relative min-h-screen flex items-center justify-center flex-col">
//                 <img src="/assets/terminal.png" alt="terminal-background" className="absolute inset-0 min-h-screen" />
//
//                 <div className="contact-container">
//                     <h3 className="head-text">Let's talk</h3>
//                     <p className="text-lg text-white-600 mt-3">
//                         Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help.
//                     </p>
//
//                     <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
//                         <label className="space-y-3">
//                             <span className="field-label">Full Name</span>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 value={form.name}
//                                 onChange={handleChange}
//                                 required
//                                 placeholder="Enter your name"
//                                 className="field-input"
//                             />
//                         </label>
//
//                         <label className="space-y-3">
//                             <span className="field-label">Email</span>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={form.email}
//                                 onChange={handleChange}
//                                 required
//                                 placeholder="Enter your Email (johndoe@gmail.com)"
//                                 className="field-input"
//                             />
//                         </label>
//
//                         <label className="space-y-3">
//                             <span className="field-label">Your message</span>
//                             <textarea
//                                 name="message"
//                                 value={form.message}
//                                 onChange={handleChange}
//                                 required
//                                 rows={4}
//                                 placeholder="Write your message here... (e.g., I’d like to discuss a project with you!)"
//                                 className="field-input"
//                             />
//                         </label>
//
//                         <button
//                             className={`field-btn ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
//                             type="submit"
//                             disabled={loading}
//                         >
//                             {loading ? 'Sending...' : 'Send Message'}
//                             <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };
//
// export default Contact;
//



import  {useState , useRef} from 'react'
import emailjs from '@emailjs/browser'
const Contact = () => {
    const formRef =useRef();
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name :'',
        email :'',
        message :'',
    });
const handleChange=({target:{name, value}})=>{
    setForm({...form,[name]:value})
}


// service_8n0qtsq

const handleSubmit= async (e)=>{
    e.preventDefault();
    setLoading(true)

    try {
       await emailjs.send(
            'service_8n0qtsq',
            'template_gf9ub7o',
            {
                from_name : form.name,
                to_name :'Priya',
                from_email:form.email,
                to_email:'ps9986219@gmail.com',
                message :form.message

            },
           'cxuxVWeM9peGmiIE7')

alert('Your message has been sent !')
    }catch (error){
        setLoading(false)
        console.log(error)
        alert('Something went wrong !')
    }

}
    return (
        <section className="c-space my-20" id="contact">
            <div className=" relative min-h-screen flex items-center justify-center flex-col ">
   {/*<img src="/assets/terminal.png" alt="terminal-backgroud" className="absolute inset-0 min-h-screen   "/>*/}
            <div className="contact-container">
            <h3 className="head-text">
               Let's talk
            </h3>
                <p className="text-lg text-white-600 mt-3">
           whether you're looking to build a new website, improve your existing platform, or bring a unique project to life , i'm here to help.
                </p>
   <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
<label className="space-y-3 ">
    <span className="field-label">
 Full Name
    </span>
    <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
        placeholder= "Enter your name"
        className="field-input"
    />

</label><label className="space-y-3 ">
    <span className="field-label">
Email
    </span>
    <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
        placeholder= "Enter your Email (johndoe@gmail.com)"
        className="field-input"
    />

</label><label className="space-y-3 ">
    <span className="field-label">
Your message
    </span>

        <textarea

        name="message"
        value={form.message}
        onChange={handleChange}
        required
        rows={3.9}
        placeholder= "Hey, I wanna give you a job..."
        className="field-input "

    />

</label>
       <button className="field-btn" type="submit" disabled={loading}>
           {loading?'sending..' :'send message'}
           <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
       </button>
   </form>
            </div>
            </div>
        </section>

    )
}
export default Contact
