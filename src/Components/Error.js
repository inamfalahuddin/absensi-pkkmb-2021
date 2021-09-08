import React from "react";

function Error(error) {
  return (
    <div className="card-alert fadeIn  my-5 py-5 ">
      <h4>Terjadi Keslahan !</h4>
      <p>Silahkan Periksa Jaringan Anda.</p>
    </div>
  );
}

export default Error;
