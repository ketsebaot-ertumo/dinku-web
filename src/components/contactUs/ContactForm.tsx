import { useForm } from "@formspree/react";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Card } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Send } from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Here you can integrate API call
//     // console.log(formData);
//     setSubmitted(true);
//   };
    const [state, handleSubmit] = useForm("mzzppzop");

    useEffect(() => {
        if (state.succeeded) {
            setSubmitted(true);

            // Optionally clear form data:
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
                });
        }
        setSubmitted(false);
    }, [state.succeeded]);   

    return (
    //      <form
    //   onSubmit={handleSubmit}
    //   className="w-full max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-6"
    // >
    //   <h2 className="text-2xl font-semibold text-gray-700">Send Us a Message</h2>

    //   {/* Name */}
    //   <div>
    //           <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-600">
    //             Name
    //           </label>
    //           <input
    //             id="name"
    //             name="name"
    //             type="text"
    //             value={formData.name}
    //             onChange={handleChange}
    //             placeholder="Your Name"
    //             required
    //             className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
    //           />
    //         </div>

    //   {/* Email */}
    //   <div className="flex flex-col">
    //     <label htmlFor="email" className="mb-2 text-gray-600 font-medium">
    //       Email <span className="text-red-500">*</span>
    //     </label>
    //     <input
    //       id="email"
    //       type="email"
    //       name="email"
    //       value={formData.email}
    //       onChange={handleChange}
    //       required
    //       className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
    //     />
    //   </div>

    //   {/* Subject */}
    //   <div className="flex flex-col">
    //     <label htmlFor="subject" className="mb-2 text-gray-600 font-medium">
    //       Subject
    //     </label>
    //     <input
    //       id="subject"
    //       type="text"
    //       name="subject"
    //       value={formData.subject}
    //       onChange={handleChange}
    //       className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
    //     />
    //   </div>

    //   {/* Message */}
    //   <div className="flex flex-col">
    //     <label htmlFor="message" className="mb-2 text-gray-600 font-medium">
    //       Message <span className="text-red-500">*</span>
    //     </label>
    //     <textarea
    //       id="message"
    //       name="message"
    //       value={formData.message}
    //       onChange={handleChange}
    //       required
    //       rows={5}
    //       className="p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
    //     />
    //   </div>

    //   {/* Submit */}
    //   <button
    //     type="submit"
    //     disabled={state.submitting}
    //     className="w-full bg-blue-600 text-white font-semibold py-4 rounded-xl hover:bg-blue-700 transition-transform transform hover:scale-105"
    //   >
    //     {state.submitting ? "Sending..." : "Send Message"}
    //   </button>

    //   {submitted && (
    //     <p className="text-green-600 font-medium mt-2 animate-pulse">
    //       Message sent successfully!
    //     </p>
    //   )}
    // </form>

          <div>
            <Card className="p-8 border-border bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className='border-border'
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className='border-border'
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className='border-border'
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or question..."
                    // rows={6}
                    required
                    className="border-border h-28"
                  />
                </div>

                <Button
                  type="submit" 
                  size="lg" 
                  className="w-full gradient-primary hover-scale flex items-center gap-2 className='border-border'"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

  );
}
