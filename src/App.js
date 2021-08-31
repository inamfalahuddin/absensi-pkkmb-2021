import React, { useState, useEffect } from "react";
import IconUMBY from "./assets/images/Logo_umcy 1.png";
import IconFTI from "./assets/images/1629882016617 1.png";
import IconHMPSTI from "./assets/images/WhatsApp_Image_2021-08-02_at_19.16 1.png";
import IconHMPSSI from "./assets/images/WhatsApp_Image_2021-08S-02_at_19.16 1.png";
import ImageBersama from "./assets/images/bg-foto-bersama.png";
import Form from "./Components/Form";
import Alert from "./Components/Alert";

function App() {
  const [formDisplay, setFormDisplay] = useState(true);
  const [loading, setLoading] = useState(true);

  const [input, setInput] = useState({
    nim: "",
    nama: "",
    email: "",
  });

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <section>
      {loading ? <span className="bg-bar"></span> : ""}

      <div className="container d-flex justify-content-center">
        <div
          className={`card py-5 px-4 ${
            window.screen.availHeight >= 831 ? "h-100" : ""
          } `}
        >
          <div className="card-header uppercase text-center">
            <div className="card-header-title mb-4">
              <h2>absensi kehadiran</h2>
              <h2>pkkmb fti 2021</h2>
              <h2>umby</h2>
            </div>
            <div className="card-header-logos">
              <img className="mx-2" src={IconUMBY} alt="" />
              <img className="mx-2" src={IconFTI} alt="" />
              <img className="mx-2" src={IconHMPSTI} alt="" />
              <img className="mx-2" src={IconHMPSSI} alt="" />
            </div>
            <div className="card-header-images">
              <img src={ImageBersama} alt="Foto Bersama" className="fadeIn" />
            </div>
          </div>
          <div className="card-body text-center my-4 w-100">
            {formDisplay ? (
              <Form
                input={input}
                setInput={setInput}
                setFormDisplay={setFormDisplay}
                loading={loading}
                setLoading={setLoading}
              />
            ) : (
              <Alert nama={input.nama} />
            )}
          </div>
          <div className="card-footer">
            <div className="card-form-group text-center">
              <h5>
                PKKMB 2021 <br /> Fakultas Teknologi Informasi Universitas Mercu
                Buana Yogyakarta
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
