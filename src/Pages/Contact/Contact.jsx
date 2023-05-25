import React from 'react';

const pageReload=()=>{
  location.reload();
}

const Contact = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mx-auto mb-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Contact Us</h1>
      <p className="py-6 font-bold">We Try our best to response as soon as possible.😇</p>
      <h2 className='text-2xl font-bold'>Feedback</h2>
      <div className="rating rating-lg rating-half">
  <input type="radio" name="rating-10" className="rating-hidden" />
  <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-1" checked />
  <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
  <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
  <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
</div>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message:</span>
          </label>
          <textarea type="text" placeholder="write here..." className="input input-bordered" />
        </div>
        <div className="form-control">
          <button onClick={pageReload} className="btn btn-warning text-2xl font-bold text-white">Send</button>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Contact;