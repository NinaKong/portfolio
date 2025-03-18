import { FC, FormEvent } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  const notify = () => {
    toast("📩  Message sent successfully.");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
  };

  return (
    <div id="contact" className="Contact mt-16">
      <div className="bg-white dark:bg-gray-800 px-6">
        <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight dark:text-white">Let's Talk</h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-500">Got a question, or just want
            to say hello? Go ahead.</p>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20 pb-4">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm text-left dark:text-yellow-500 font-semibold leading-6 text-gray-900">Name</label>
            <div className="mt-2.5">
              <input required type="text" name="name" id="name" autoComplete="given-name" placeholder="Your Name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-left dark:text-yellow-500 font-semibold leading-6 text-gray-900">Email</label>
            <div className="mt-2.5">
              <input required type="email" name="email" id="email" autoComplete="email" placeholder="Your Email Address" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm text-left font-semibold leading-6 text-gray-900 dark:text-yellow-500">Message</label>
            <div className="mt-2.5">
              <textarea name="message" id="message" rows={4} placeholder="Share your thoughts..." className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"></textarea>
            </div>
          </div>
        </div>
          <div className="mt-10 float-right">
            <button onClick={notify}
              className="btn relative inline-flex items-start justify-end overflow-hidden px-4 py-2 font-medium transition-all bg-indigo-800 text-white rounded-lg hover:bg-white group">
              <span className="w-56 h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left transition-colors duration-300 ease-in-out group-hover:text-white">Submit →</span>
            </button>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
