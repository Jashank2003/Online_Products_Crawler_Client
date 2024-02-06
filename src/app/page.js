"use client"
import Card from './components/Card';
import Navbar from './components/Navbar';
import Loader from './components/Loading';
import { useEffect, useState } from 'react';

const Home = () => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState(''); 

  const [scrapedData1, setScrapedData1] = useState([]); 
  const [scrapedData2, setScrapedData2] = useState([]);
  const [currentScrapedData, setCurrentScrapedData] = useState([]);

  const [responseMessage1, setResponseMessage1] = useState('');
  const [responseMessage2, setResponseMessage2] = useState('');
  const [loading, setLoading] = useState(false);
  const [source ,setSource] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response1 = await fetch('http://localhost:5000/api/home/amazon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_name: productName,
          product_category: productCategory,
        }),
      });

      const data1 = await response1.json();
      console.log('Received data:', data1);
  
      setScrapedData1(data1.data || []);
      setResponseMessage1(data1.message || '');
      setLoading(false);
    } catch (error) {
      console.error('Error submitting data1:', error);
    }

    // FoR FLIPKART 
    try {
      setLoading(true);
      const response2 = await fetch('http://localhost:5000/api/home/flipkart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_name: productName,
          product_category: productCategory,
        }),
      });

      const data2 = await response2.json();
      console.log('Received data:', data2);
  
      setScrapedData2(data2.data || []);
      setResponseMessage2(data2.message || '');
      setLoading(false);
    } catch (error) {
      console.error('Error submitting data2:', error);
    }

  };

  const handleDisplayAmazonData = () => {
    setCurrentScrapedData(scrapedData1);
    setSource("amazon");
  };

  const handleDisplayFlipkartData = () => {
    setCurrentScrapedData(scrapedData2);
    setSource("flipkart");
  };

  // // Add a useEffect hook to run on the client side
  // useEffect(() => {
  //   // Your client-side logic can go here
  // }, []);

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
    <p className="mt-3 mx-auto text-center text-green-500">{loading ? <Loader /> : responseMessage1}</p>
    </form>

  </div>

  <div className="flex flex-wrap justify-center mb-4 ">
        <button onClick={handleDisplayAmazonData} className="bg-none hover:border-b-2 border-solid border-blue-500 duration-100 text-white font-bold py-2 px-20 rounded mx-0 focus:bg-blue-600">
           Amazon 
        </button>
        <button onClick={handleDisplayFlipkartData} className="bg-none active: hover:border-b-2 border-solid border-yellow-500 duration-100 text-white font-bold py-2 px-20 rounded mx-0 focus:bg-yellow-600 ">
           Flipkart 
        </button>
      </div>
    <div className="max-w-screen-2xl  my-4 mx-4">
      <div className="flex flex-wrap justify-center">
        {currentScrapedData.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            price={item.price}
            imageLink={item.image_link}
            linkToProduct={item.link_to_product}
            Source={source}
          />
        ))}
      </div>
    </div>

        </>
  );
};

export default Home;
