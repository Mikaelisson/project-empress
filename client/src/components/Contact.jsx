const Contact = () => {
  return (
    <div
      id="contact"
      className="d-flex flex-column align-items-center mt-5 pb-5 bg-dark"
    >
      <h1 className="bold text-white mt-3 mb-4">Contact</h1>

      <div className="w-75 d-flex flex-column flex-sm-row gap-5 justify-content-center">
        <form
          action="mailto:mikaelissongesuino@gmail.com"
          method="POST"
          className=""
        >
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label text-white"
            >
              Name
            </label>
            <input
              type="name"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Steve Rogers"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput2"
              className="form-label text-white"
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label text-white"
            >
              Example textarea
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <div className="mb-3 d-flex justify-content-end">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
        <div className="d-flex flex-column align-items-center mt-4">
          <a
            href="https://api.whatsapp.com/send?phone=5511971504799"
            className="btn btn-success w-100 mb-3"
            target="_blank"
          >
            Whatsapp
          </a>
          <a
            href="https://www.facebook.com/"
            className="btn btn-primary w-100 mb-3"
            target="_blank"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/"
            className="btn btn-secondary w-100 mb-3"
            target="_blank"
          >
            LinkedIn
          </a>
          <div className="w-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.782195005797!2d-46.83692552525246!3d-23.50435335949924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf017b8c1a5da9%3A0x22a277028d33acc!2sShopping%20Tambor%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1682648430031!5m2!1spt-BR!2sbr"
              style={{ width: "100%", height: "160px", border: "0" }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
