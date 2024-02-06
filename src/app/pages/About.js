// pages/about.js

import Link from 'next/link';

const About = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae semper nisi.
        Mauris vitae magna enim. Fusce volutpat quam a libero sagittis, eu porttitor urna
        volutpat. Sed in odio et est commodo interdum nec id lorem.
      </p>
      <p className="text-lg mb-4">
        Sed aliquet quam nec enim aliquam, nec molestie lectus molestie. Integer maximus
        urna nec eros maximus, at posuere lacus tempus. Donec auctor, mi vel egestas
        commodo, est urna lacinia nulla, vel vehicula neque nisi eget libero.
      </p>
      <p className="text-lg mb-8">
        Nulla facilisi. Fusce eu ex justo. Aenean vel ipsum eget turpis fermentum
        rhoncus a nec libero. Cras consequat, leo ut blandit tristique, leo sem
        consectetur sem, non pharetra leo tellus et risus.
      </p>
      <Link href="/">
        <a className="text-blue-500 hover:underline">Back to Home</a>
      </Link>
    </div>
  );
};

export default About;
