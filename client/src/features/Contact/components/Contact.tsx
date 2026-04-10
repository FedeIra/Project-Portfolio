import { useRef, useState, useEffect, type FC, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { sendEmailAsync, resetEmailState } from '../state/emailSlice';
import { showToast } from '../../../utils/toast';

const Contact: FC = () => {
  const dispatch = useAppDispatch();
  const form = useRef<HTMLFormElement>(null);
  const { loading, error, success } = useAppSelector((state) => state.email);
  const [submitted, setSubmitted] = useState(false);

  const isMobile = window.innerWidth < 769;
  const boxVariants = isMobile
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1 } } }
    : { hidden: { opacity: 0, x: 1000 }, visible: { opacity: 1, x: 0, transition: { duration: 1 } } };

  useEffect(() => {
    if (submitted && !loading) {
      if (success) {
        showToast({ title: 'Email sent.', description: 'I appreciate your email and will respond soon.', status: 'success' });
      } else if (error) {
        showToast({ title: 'Error.', description: 'There was an error sending the email. Please try again.', status: 'error' });
      }
      setSubmitted(false);
      dispatch(resetEmailState());
    }
  }, [loading, success, error, submitted, dispatch]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    showToast({ title: 'Loading.', description: 'Sending email...', status: 'loading', duration: 2000 });
    setSubmitted(true);

    const formData = {
      user_name: (target.elements.namedItem('user_name') as HTMLInputElement).value,
      user_email: (target.elements.namedItem('user_email') as HTMLInputElement).value,
      subject: (target.elements.namedItem('subject') as HTMLInputElement).value,
      message: (target.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    await dispatch(sendEmailAsync(formData));
    target.reset();
  };

  return (
    <div id="getInTouch" className="w-full h-[70vh] max-md:h-auto">
      <motion.h2
        className="section-heading"
        initial={isMobile ? 'visible' : 'hidden'}
        whileInView="visible"
        viewport={{ once: true }}
        variants={boxVariants}
      >
        Get in touch
      </motion.h2>

      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center p-4">
          <h6 className="text-white font-bold text-2xl max-md:text-xl">
            Have a question or want to work together?
          </h6>
          <br />
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} ref={form} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="user_name"
                required
                placeholder="Name"
                className="bg-primary-light border border-white/25 focus:border-accent-green text-white px-4 py-3 placeholder-gray-400/60 outline-none transition-colors col-span-1"
              />
              <input
                type="email"
                name="user_email"
                required
                placeholder="Your email"
                className="bg-primary-light border border-white/25 focus:border-accent-green text-white px-4 py-3 placeholder-gray-400/60 outline-none transition-colors col-span-1"
              />
              <input
                type="text"
                name="subject"
                required
                placeholder="Enter subject"
                className="bg-primary-light border border-white/25 focus:border-accent-green text-white px-4 py-3 placeholder-gray-400/60 outline-none transition-colors md:col-span-2"
              />
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Your Message"
                className="bg-primary-light border border-white/25 focus:border-accent-green text-white px-4 py-3 placeholder-gray-400/60 outline-none transition-colors md:col-span-2 resize-none max-h-[230px] overflow-auto custom-scrollbar"
              />
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-primary-light border-[3px] border-white text-white text-lg py-3 hover:bg-primary-dark transition"
                >
                  Send Email
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
