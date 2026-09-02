import { useState } from 'react';

export default function ContactExe({ onSubmit }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const submit = (event) => {
    event.preventDefault();
    onSubmit();
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="wrap" id="contact">
      <div className="contact-grid">
        <article className="contact-copy"><div className="panel-head"><span>contact.exe</span><span>no spam detected</span></div><div className="panel-body"><h2>send a<br />signal.</h2><p>Tell me what you’re building, the kind of engineer you need, and why it matters. I’m open to internship opportunities from Sep 2026 to Jun 2027.</p></div></article>
        <form className="contact-form" onSubmit={submit}><div className="panel-head"><span>kelly_wang.get_info()</span><span>stdin → email</span></div><div className="panel-body">
          <div className="field"><label htmlFor="name">your_name</label><input id="name" name="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required placeholder="Ada Lovelace" /></div>
          <div className="field"><label htmlFor="email">your_email</label><input id="email" name="email" type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required placeholder="ada@company.com" /></div>
          <div className="field"><label htmlFor="message">job_info</label><textarea id="message" name="message" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} required placeholder="We’re hiring a SWE who loves..." /></div>
          <button className="button" type="submit">send_message() ↗</button><p className="form-note">Prototype mode: connect Formspree, Resend, or your own API route before launch. Fallback mail target: kellywang@u.nus.edu</p>
        </div></form>
      </div>
    </section>
  );
}
