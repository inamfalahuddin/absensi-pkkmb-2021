import React from "react";

function Alert({ nama }) {
  return (
    <div className="card-alert fadeIn my-5 py-5 ">
      <h4>Halo, {nama}</h4>
      <p className="fw-bold">
        Data Anda Berhasil Kami Terima. Terimakasih Atas Partisipasinya Dalam
        PKKMB FTI 2021
      </p>
    </div>
  );
}

export default Alert;
