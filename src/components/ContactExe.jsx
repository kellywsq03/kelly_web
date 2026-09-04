import { useEffect, useState } from 'react';
import { ValidationError, useForm } from '@formspree/react';
import '../styles/ContactExe.css';

const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;

export default function ContactExe({ onSuccess }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [configurationError, setConfigurationError] = useState(false);
  const [state, submitToFormspree, resetSubmission] = useForm(formId || 'contact-form-not-configured');

  const submit = (event) => {
    if (!formId) {
      event.preventDefault();
      setConfigurationError(true);
      return;
    }

    setConfigurationError(false);
    submitToFormspree(event);
  };

  useEffect(() => {
    if (!state.succeeded) return;

    setForm({ name: '', email: '', message: '' });
    onSuccess();
    resetSubmission();
  }, [onSuccess, resetSubmission, state.succeeded]);

  return (
    <section className="wrap" id="contact">
      <div className="contact-grid">
        <article className="contact-copy" data-reveal><div className="panel-head"><span>contact.exe</span><span>no spam detected</span></div><div className="panel-body"><h2>send a<br />message.</h2><p>I’m open to work! Drop me a message and let’s talk about how we can build something amazing together.</p></div></article>
        <form className="contact-form" onSubmit={submit} data-reveal style={{ '--reveal-delay': '180ms' }}><div className="panel-head"><span>kelly_wang.get_info()</span><span>stdin → email</span></div><div className="panel-body">
          <div className="field"><label htmlFor="name">your_name</label><input id="name" name="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required placeholder="Ada Lovelace" /></div>
          <div className="field"><label htmlFor="email">your_email</label><input id="email" name="email" type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required placeholder="ada@company.com" /><ValidationError className="form-error" prefix="Email" field="email" errors={state.errors} /></div>
          <div className="field"><label htmlFor="message">job_info</label><textarea id="message" name="message" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} required placeholder="We’re hiring a SWE who loves..." /><ValidationError className="form-error" prefix="Message" field="message" errors={state.errors} /></div>
          <div className="contact-honeypot" aria-hidden="true"><label htmlFor="contact-website">website</label><input id="contact-website" name="_gotcha" type="text" tabIndex="-1" autoComplete="off" /></div>
          <button className="button" type="submit" disabled={state.submitting}>{state.submitting ? 'sending...' : 'send_message() ↗'}</button>
          {configurationError && <p className="form-error" role="alert">Email delivery is not configured yet.</p>}
          {state.errors && <ValidationError className="form-error" prefix="Send failed:" errors={state.errors} />}
          <p className="form-note">Your message will be delivered securely to my inbox. I’ll reply to the email address you provide.</p>
        </div></form>
      </div>
    </section>
  );
}
