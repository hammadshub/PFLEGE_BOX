import React, { useEffect } from "react";

const Contact = () => {

let isLoading= true;

  let API = "http://hn.algolia.com/api/v1/search?query=html";

  const fetchApi = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
        isLoading= false;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchApi(API);
  }, []);

if(isLoading){
  return<>
  <h1>Loading...</h1>
  </>
}


  return (
    <>
      <h2>The Tech News!</h2>
      
    </>
  );
};

export default Contact;
