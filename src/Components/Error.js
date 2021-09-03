import React from "react";

function Error(error) {
  return (
    <div className="card-alert fadeIn">
      <h4>Terjadi Keslahan !</h4>
      <p>Silahkan Periksa Jaringan Anda.</p>
    </div>
  );
}

export default Error;
