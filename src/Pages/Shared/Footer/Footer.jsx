import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-500 px-20 text-center">
      <div className="mx-auto py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm">Thai and Chinese cuisine are both known for their unique flavors and ingredients. Thai food is characterized by its use of herbs and spices like lemongrass and kaffir lime leaves, while Chinese cuisine features regional diversity and savory flavors from ingredients such as soy sauce and five spice powder. Both types of cuisine are popular worldwide for their delicious and diverse dishes.</p>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="list-none">
              <li className="mb-2"><a href="tel:+123456789" className="hover:text-white">+880 178 258 4571</a></li>
              <li className="mb-2"><a href="mailto:info@example.com" className="hover:text-white">shishir@gmail.com</a></li>
              <li className="mb-2"><a href="https://goo.gl/maps/rus5PsmaKz7pXSwN8?coh=178573&entry=tt" className="hover:text-white">Our Location</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <ul className="list-none">
              <li className="mb-2"><a href="https://www.facebook.com/shesir.islam.5" className="hover:text-white">Facebook</a></li>
              <li className="mb-2"><a href="https://www.linkedin.com/in/golam-murshed-shishir-194874226/" className="hover:text-white">Linkedin</a></li>
              <li className="mb-2"><a href="https://www.instagram.com/prince_sheshir/" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-center">
          <p className="text-sm">&copy; 2023 My Website. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    );
};

export default Footer;