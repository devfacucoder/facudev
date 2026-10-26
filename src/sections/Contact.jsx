import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import socialData from "../data/social.json";

const FORM_ENDPOINT = "https://formspree.io/f/mldplqjw";

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
};

const socials = socialData
  .map((social) => ({ ...social, Icon: socialIcons[social.id] }))
  .filter((social) => social.Icon);

const fieldClasses =
  "w-full border border-white/15 bg-black px-3 py-3 text-sm text-white placeholder:text-neutral-600 transition-colors focus:border-red-500 focus:outline-none";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "name";
  }

  if (!values.email.trim()) {
    errors.email = "emailRequired";
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "emailInvalid";
  }

  if (!values.message.trim()) {
    errors.message = "message";
  }

  return errors;
}

function Contact({ t }) {
  const contact = t.contact;
  const messages = contact.form.errors;

  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [formError, setFormError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));

    if (status !== "idle") {
      setStatus("idle");
    }

    if (formError) {
      setFormError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      setFormError("");
      return;
    }

    setStatus("sending");
    setFormError("");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("request-failed");
      }

      setValues({ name: "", email: "", message: "" });
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setFormError(error instanceof TypeError ? "network" : "default");
    }
  };

  return (
    <section
      id="contacto"
      className="relative isolate w-full overflow-hidden border-t border-white/15 bg-black py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage: "url('/imgs/texture-fondo.jpg')",
          backgroundSize: "420px auto",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-black/30 via-black/70 to-black"
      />

      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="flex items-center gap-4">
          <p className="jetbrains-mono-uniquifier flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-neutral-400">
            <span aria-hidden="true" className="h-2 w-2 bg-red-500" />
            {contact.eyebrow}
          </p>
          <span aria-hidden="true" className="h-px flex-1 bg-white/15" />
        </div>

        <h2 className="kumar-one-outline-regular mt-6 text-4xl leading-none text-blue-500 sm:text-5xl">
          {contact.title}
        </h2>
        <p className="caveat-uniquifier mt-2 text-3xl leading-none text-red-500">
          {contact.subtitle}
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <p className="max-w-md text-sm leading-6 text-neutral-400 sm:text-base">
              {contact.description}
            </p>

            <ol className="mt-8 grid grid-cols-1 gap-px border border-white/15 bg-white/15">
              {contact.steps.map((step, index) => (
                <li
                  key={step}
                  className="flex items-baseline gap-3 bg-black p-3"
                >
                  <span className="jetbrains-mono-uniquifier text-[10px] text-red-500">
                    0{index + 1}
                  </span>
                  <span className="jetbrains-mono-uniquifier text-xs text-neutral-300">
                    {step}
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-8">
              <div className="flex items-center gap-4">
                <h3 className="jetbrains-mono-uniquifier text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                  {contact.socialsTitle}
                </h3>
                <span aria-hidden="true" className="h-px flex-1 bg-white/15" />
              </div>

              <ul className="mt-3 grid grid-cols-3 gap-px border border-white/15 bg-white/15">
                {socials.map(({ id, name, href, Icon }) => (
                  <li key={id}>
                    <a
                      href={href}
                      aria-label={name}
                      className="group flex h-full flex-col items-start gap-4 bg-black p-4 transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                    >
                      <Icon
                        aria-hidden="true"
                        className="text-2xl text-neutral-400 transition-colors group-hover:text-white"
                      />
                      <span className="jetbrains-mono-uniquifier text-[10px] uppercase tracking-widest text-neutral-400 transition-colors group-hover:text-white">
                        {name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form
            noValidate
            onSubmit={handleSubmit}
            className="border border-white/15 bg-white/15"
          >
            <div className="grid gap-px sm:grid-cols-2">
              <div className="flex flex-col gap-2 bg-black p-4 sm:p-5">
                <label
                  htmlFor="nombre"
                  className="jetbrains-mono-uniquifier text-[10px] uppercase tracking-[0.3em] text-neutral-400"
                >
                  {contact.form.name}
                </label>
                <input
                  onChange={handleChange}
                  value={values.name}
                  id="nombre"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder={contact.form.namePlaceholder}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "nombre-error" : undefined}
                  className={`${fieldClasses} ${errors.name ? "border-red-500" : ""}`}
                />
                {errors.name ? (
                  <p
                    id="nombre-error"
                    role="alert"
                    className="jetbrains-mono-uniquifier text-[10px] uppercase tracking-widest text-red-500"
                  >
                    {messages[errors.name]}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col gap-2 bg-black p-4 sm:p-5">
                <label
                  htmlFor="email"
                  className="jetbrains-mono-uniquifier text-[10px] uppercase tracking-[0.3em] text-neutral-400"
                >
                  {contact.form.email}
                </label>
                <input
                  onChange={handleChange}
                  value={values.email}
                  id="email"
                  name="email"
                  type="text"
                  inputMode="email"
                  autoComplete="email"
                  placeholder={contact.form.emailPlaceholder}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`${fieldClasses} ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email ? (
                  <p
                    id="email-error"
                    role="alert"
                    className="jetbrains-mono-uniquifier text-[10px] uppercase tracking-widest text-red-500"
                  >
                    {messages[errors.email]}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="mt-px flex flex-col gap-2 bg-black p-4 sm:p-5">
              <label
                htmlFor="mensaje"
                className="jetbrains-mono-uniquifier text-[10px] uppercase tracking-[0.3em] text-neutral-400"
              >
                {contact.form.message}
              </label>
              <textarea
                onChange={handleChange}
                value={values.message}
                id="mensaje"
                name="message"
                rows="5"
                placeholder={contact.form.messagePlaceholder}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? "mensaje-error" : undefined
                }
                className={`${fieldClasses} resize-none ${errors.message ? "border-red-500" : ""}`}
              />
              {errors.message ? (
                <p
                  id="mensaje-error"
                  role="alert"
                  className="jetbrains-mono-uniquifier text-[10px] uppercase tracking-widest text-red-500"
                >
                    {messages[errors.message]}
                </p>
              ) : null}
            </div>

            <div className="mt-px flex flex-col gap-4 bg-black p-4 sm:p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="jetbrains-mono-uniquifier text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  {contact.form.requiredNote}
                </p>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="jetbrains-mono-uniquifier inline-flex items-center justify-center gap-3 border-2 border-red-500 bg-red-500 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-black hover:text-red-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-red-500 disabled:hover:text-white"
                >
                  {status === "sending"
                    ? contact.form.sending
                    : contact.form.submit}
                  {status === "sending" ? null : (
                    <span aria-hidden="true">→</span>
                  )}
                </button>
              </div>

              {status === "success" ? (
                <p
                  role="status"
                  className="jetbrains-mono-uniquifier text-[10px] uppercase tracking-widest text-green-500"
                >
                  {contact.form.success}
                </p>
              ) : null}

              {status === "error" ? (
                <p
                  role="alert"
                  className="jetbrains-mono-uniquifier text-[10px] uppercase tracking-widest text-red-500"
                >
                  {messages[formError]}
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
