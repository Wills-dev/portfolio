import React from "react";

const Contact = () => {
  return (
    <section
      className="relative py-16 max-md:py-10 padding-x bg-primary-color flex-cols items-center justify-center"
      id="contact"
    >
      <div className="absolute z-10 bottom-6 left-16 ">
        <img
          src="/assets/groupDots.svg"
          alt="dots"
          className="object-contain max-w-12 max-h-12 max-md:max-w-10 max-md:max-h-10 max-md:hidden"
        />
      </div>
      <div className="absolute z-10 top-6 right-16">
        <img
          src="/assets/groupDots.svg"
          alt="dots"
          className="object-contain max-w-12 max-h-12 max-md:max-w-10 max-md:max-h-10  max-md:hidden"
        />
      </div>
      <h6 className="text-sm text-sec-color text-center">Work with me</h6>
      <h2 className="font-bold text-tert-colr text-center py-1 text-3xl">
        Ready to kickstart a new project?
      </h2>
      <p className="max-w-[660px] text-center text-tert-colr py-2">
        Currently seeking to join a dynamic team of developers. If you believe
        we're a perfect match, drop me a message on
        <a
          href="https://wa.me/+2347069361700"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400"
        >
          {" "}
          WhatsApp.
        </a>{" "}
        Let's make things happen! 🤙
      </p>
    </section>
  );
};

export default Contact;
