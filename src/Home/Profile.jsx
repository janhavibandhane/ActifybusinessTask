import ProfileInputs from "../HomeReusableComponent/ProfileInputes";


function Profile() {
  return (
    <>
      <div className=" bg-base-100 h-full">
        
        {/* buttons */}
        <div className=" bg-base-100 pb-4">
        <button className="btn bg-base-300 hover:bg-white hover:rounded-lg rounded-none">Personal</button>
        <button className="btn bg-base-300 hover:bg-white hover:rounded-lg  rounded-none">Education</button>
        <button className="btn bg-base-300 hover:bg-white hover:rounded-lg  rounded-none">Expirence</button>
        <button className="btn bg-base-300 hover:bg-white hover:rounded-lg  rounded-none">Other</button>
        </div>

        {/* Navbar with gradient background */}
        <div className="navbar bg-gradient-to-r from-pink-500 to-blue-500 rounded-t-lg h-20 px-6 flex flex-col justify-center text-white">
          <h1 className="text-xl md:text-2xl font-bold ">Personal Details</h1>
          <h2 className="text-sm md:text-base">
            Make changes to your Profile Account here.{" "}
            <span className="text-red-500 font-bold">Click save when you're done.</span>
          </h2>
        </div>

        {/* Input fields */}    
        <div className="p-6 space-y-6 bg-base-100">
         <div className="flex gap-6">
            <ProfileInputs item1={"First Name *"} className="flex-1" />
            <ProfileInputs item1={"Middle Name"} className="flex-1" />
            <ProfileInputs item1={"Last Name *"} className="flex-1" />
          </div>

          <div className="flex gap-6">
            <ProfileInputs item1={"Email *"} className="flex-1" />
            <ProfileInputs item1={"Phone *"} className="flex-1" />
          </div>

          <ProfileInputs item1={"Address *"} className="w-full" />

          <div className="flex gap-6">
            <ProfileInputs item1={"Pin Code"} className="flex-1" />
            <ProfileInputs item1={"Country"} className="flex-1" />
          </div>

          <div className="flex gap-6">
            <ProfileInputs item1={"State *"} className="flex-1" />
            <ProfileInputs item1={"City *"} className="flex-1" />
          </div>
        </div>

        {/* button */}
        <div className=" flex justify-center mt-10 ">
        <button className="btn btn-wide bg-gray-300 ">Submit</button>
        </div>
      </div>
    </>
  );
}

export default Profile;