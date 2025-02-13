function ProfileInputs({ item1, className }) {
    return (
      <label className={`form-control ${className}`}>
        <div className="label">
          <span className="label-text font-medium">{item1}</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </label>
    );
  }
  
  export default ProfileInputs;