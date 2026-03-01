const Contact = () => {
  return (
    <section className="pt-24 min-h-screen bg-black text-white px-6">
      <h1 className="text-4xl font-bold text-green-400 mb-4">
        Contact Us
      </h1>
      <p className="text-gray-300 mb-6">
        Get in touch with us for collaboration or queries.
      </p>

      <form className="max-w-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-gray-900 text-white outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded bg-gray-900 text-white outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 rounded bg-gray-900 text-white outline-none"
        ></textarea>

        <button className="bg-green-500 text-black px-6 py-3 rounded hover:bg-green-400 transition">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
