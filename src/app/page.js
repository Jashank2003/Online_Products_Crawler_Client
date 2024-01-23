"use client"
import Card from './components/Card';
import Navbar from './components/Navbar';
import Loader from './components/Loading';
import { useEffect, useState } from 'react';

const Home = () => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [scrapedData, setScrapedData] = useState([]);
  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/home/amazon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_name: productName,
          product_category: productCategory,
        }),
      });

      const data = await response.json();
      console.log('Received data:', data);
  
      setScrapedData(data.data || []);
      setResponseMessage(data.message || '');
      setLoading(false);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  // Add a useEffect hook to run on the client side
  useEffect(() => {
    // Your client-side logic can go here
  }, []);

  return (
    <>

      <Navbar/>
    <h1 className="text-3xl font-bold mb-0 text-center mt-24 text-white">CrawlNCompare:</h1>
    <h1 className="text-2xl font-bold mb-8  mx-auto px-8 text-center mt-2 text-white"> Navigating the Shopping Seas for Your Ultimate Comparison Experience</h1>
    <div className="border-2 rounded-md  border-solid border-r-white  container mx-auto p-8 pb-3 max-w-2xl mb-8 bg-black overflow-x-hidden">
    <h1 className="text-2xl font-bold mb-4 text-center mt-2 text-white">Give The products detail</h1>
    <form onSubmit={handleSubmit} className=" mx-auto mb-8 flex flex-wrap flex-col">
      <label className="block  mb-4 text-white">
        Product Name:
        <input
          className="border border-gray-300 p-2 w-full text-black"
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          />
      </label>
      <label className="block mb-4 text-white">
        Product Category:
        <input
          className="border border-gray-300 p-2 w-full text-black"
          type="text"
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          />
      </label>
      <button
        type="submit"
        className="bg-green-500 mx-auto w-28 items-center text-white py-2 px-4 rounded duration-200 hover:bg-green-700 "
        >
        Scrape
      </button>
    <p className="mt-3 mx-auto text-center text-green-500">{loading ? <Loader /> : responseMessage}</p>
    </form>

  </div>

  <div className="flex flex-wrap -mx-2 ">
      {scrapedData.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          price={item.price}
          imageLink={item.image_link}
          linkToProduct={item.link_to_product}
        />
      ))}
    </div>
        </>
  );
};

export default Home;
