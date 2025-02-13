

function UserAccount(){
    return(
        <>
        <div className=" bg-base-100 h-full">
        
        <div className=" bg-base-100 pb-4">
          <button className="btn bg-base-300 hover:bg-white hover:rounded-lg rounded-none">Personal</button>
          <button className="btn bg-base-300 hover:bg-white hover:rounded-lg  rounded-none">Education</button>
          <button className="btn bg-base-300 hover:bg-white hover:rounded-lg  rounded-none">Expirence</button>
          <button className="btn bg-base-300 hover:bg-white hover:rounded-lg  rounded-none">Other</button>
        </div>
        <div className="hero bg-base-200 h-full">
          <h1 className=" text-xl font-bold">Account List</h1>
        </div>
       
        </div>
        </>
    )
}
export default UserAccount;