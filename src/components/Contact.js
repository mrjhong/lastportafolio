import React from 'react'

export const Contact = () => {
    return (
        <section className="container-page" id="contact">
            <h1 style={{ textAlign: "center", color: "white" }}><b>Contactame</b></h1>

            <div  style={{ justifyContent: "center", padding: "2.5rem" ,display:"flex"}} >
                <form style={{width:"54rem"}}> 
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-white text-sm font-medium mb-2">Name</label>
                        <input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-3 py-2 text-white bg-[#24292F] rounded-lg focus:outline-none focus:ring-4 focus:ring-[#24292F]/50" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-white text-sm font-medium mb-2">Email</label>
                        <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-3 py-2 text-white bg-[#24292F] rounded-lg focus:outline-none focus:ring-4 focus:ring-[#24292F]/50" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-white text-sm font-medium mb-2">Message</label>
                        <textarea name="message" id="message" placeholder="Your Message" className="w-full px-3 py-2 text-white bg-[#24292F] rounded-lg focus:outline-none focus:ring-4 focus:ring-[#24292F]/50" />
                    </div>
                    <button type="submit" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">Send</button>

                </form>

            </div>

        </section>
    )
}
