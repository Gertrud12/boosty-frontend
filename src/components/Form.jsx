import React, { useState } from 'react';


function MyForm() {
  const [formData, setFormData] = useState({
    address: '',
    budget: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.address]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    console.log(formData);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <p className="text-2xl font-semibold mb-4 text-right">Watin you wan use Solar do?</p>

      <form onSubmit={handleSubmit} className="space-y-10">

      <div className="mb-6 flex items-center pl-3 space-x-3 pt-10 pb-40px">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
          <label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-700">
            For my business
          </label>

          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
          <label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-700">
            For my home
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            What's is Your Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            What's Your Budget? (Naira)
          </label>
          <input
            type="budget"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        

        <div className="flex justify-end pt-20 pb-30">
          <button
            type="submit"
            className=" py-2 px-4 bg-black text-yellow-500 text-xs font-small rounded-2xl shadow-sm  focus:outline-none focus:ring-2 "
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}


export default MyForm;
