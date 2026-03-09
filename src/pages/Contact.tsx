function Contact() {
  return (
    <div>
      <h1 className="mb-4">Contact Us</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address mo</label>
          <input type="email" className="form-control" id="email" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message mo ko</label>
          <textarea className="form-control" id="message" rows={3}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Mag Send</button>
      </form>
      <p className="mt-3">Or call us at: 0999999999999</p>
    </div>
  );
}

export default Contact;