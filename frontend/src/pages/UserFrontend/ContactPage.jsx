import React from 'react'
import axios from 'axios'

const ContactPage = () => {
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmial] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [message, setMessage] = React.useState('')
    const [error, setError] = React.useState('')
    
    const HandleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/create/contactus', {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
            message: message
        })
        .then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
                <form onSubmit={HandleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="firstName" className="block text-gray-700 font-medium">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="John"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-gray-700 font-medium">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Doe"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="johndoe@hello.com"
                            value={email}
                            onChange={(e) => setEmial(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium">Phone</label>
                        <input
                            type="number"
                            name="phone"
                            placeholder="1234567890"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
                        <textarea
                            name="message"
                            placeholder="Type your message here"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 mt-4 text-white bg-yellow-500 rounded-md hover:bg-white hover:text-yellow-500 border-2 border-yellow-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage
