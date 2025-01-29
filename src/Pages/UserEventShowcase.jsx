import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const UserEventShowcase = () => {
  const location = useLocation();
  
  // Get the responseData from location state
  const { responseData } = location.state;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Hospital Data</h1>

      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-4">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-blue-100">
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Time</th>
              <th className="border border-gray-300 px-4 py-2">District</th>
              <th className="border border-gray-300 px-4 py-2">Taluka</th>
              <th className="border border-gray-300 px-4 py-2">Address</th>
              <th className="border border-gray-300 px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {responseData.map((hospital, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{hospital.eventdate || 'N/A'}</td>
                <td className="border border-gray-300 px-4 py-2">{hospital.eventtime || 'N/A'} to {hospital.eventend}</td>
                <td className="border border-gray-300 px-4 py-2">{hospital.district || 'N/A'}</td>
                <td className="border border-gray-300 px-4 py-2">{hospital.taluka || 'N/A'}</td>
                <td className="border border-gray-300 px-4 py-2">{hospital.hname || 'N/A'}</td>
                <td className="border border-gray-300 px-4 py-2">{hospital.eventlocation || 'N/A'}</td>
                <td className="border border-gray-300 px-4 py-2"><Link to="/profileform">In</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    // <div>
    //   <h1>Event Details</h1>
      
    //   {/* Render the response data as needed */}
    //   <div>
    //     <h2>Event Name: {responseData.eventname}</h2>
    //     <p><strong>Event Date:</strong> {responseData.eventdate}</p>
    //     <p><strong>Event Time:</strong> {responseData.eventtime} - {responseData.eventend}</p>
    //     <p><strong>Location:</strong> {responseData.eventlocation}</p>
    //     <p><strong>Description:</strong> {responseData.eventdescription}</p>
    //     <p><strong>State:</strong> {responseData.state}</p>
    //     <p><strong>District:</strong> {responseData.district}</p>
    //     <p><strong>Taluka:</strong> {responseData.taluka}</p>
    //     <p><strong>Hospital Name:</strong> {responseData.hname}</p>
    //   </div>
    // </div>
  );
};

// import { useLocation } from 'react-router-dom';

// export const UserEventShowcase = () => {
//   const location = useLocation();
  
//   // Get the responseData from location state
//   const { responseData } = location.state;

//   // Now you can use responseData in your component
//   console.log(responseData);

//   return (
//     <div>
//       {/* Render the response data as needed */}
//       <h1>Response Data</h1>
//       <pre>{JSON.stringify(responseData, null, 2)}</pre>
//     </div>
//   );
// };
