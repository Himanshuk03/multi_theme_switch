import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="mt-24 px-6 sm:px-6 lg:px-10 text-[var(--text-color)]">
      <h2 className="text-3xl font-bold text-center mb-10">📖 About Us</h2>

      <div className="text-center max-w-4xl mx-auto mb-10">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Welcome to <strong>ShopTime</strong>, your number one source for all things fashion, electronics, and lifestyle.
          We're dedicated to giving you the very best products, with a focus on quality, affordability, and customer support.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-10">
        {[
          {
            title: '🌟 Our Mission',
            description:
              'To deliver quality products at the best prices with an unmatched customer experience.',
          },
          {
            title: '💼 Our Team',
            description:
              'We are a team of passionate individuals driven by innovation, quality, and service.',
          },
          {
            title: '📦 Our Services',
            description:
              'Fast shipping, easy returns, secure payments, and 24/7 customer support.',
          },
        ].map((item, i) => (
          <div key={i} data-aos="fade-right" className="bg-white dark:bg-gray-800 w-[300px] p-5 rounded-lg shadow-md transform transition-transform duration-[1500ms] ease-in-out hover:scale-105 hover:shadow-xl mr-[30px]">
            <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Google Map Section */}
      <div className="mt-20 px-4 sm:px-10">
        <h3 className="text-2xl font-semibold mb-6 text-[var(--text-color)] text-center">
          📍 Our Location
        </h3>
        <div className="mx-auto border-4 border-yellow-400 rounded-xl shadow-xl overflow-hidden w-[800px] h-[600px] mb-[30px]">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.410839390489!2d75.82213467531094!3d26.789288776717547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6fd5f8a52c7%3A0x8a84da9010f3a98c!2sRajasthan%20Technical%20University%2C%20Kota!5e0!3m2!1sen!2sin!4v1722410493100!5m2!1sen!2sin"
            width="800"
            height="600"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
