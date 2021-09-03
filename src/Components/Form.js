import React, { useState } from "react";

function Form({ setFormDisplay, loading, setLoading, input, setInput }) {
  const option = ["Prodi", "Informatika", "Sistem Informasi"];
  const [prodi, setProdi] = useState("");

  const { nim, nama, email } = input;
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const selectProdi = (e) => {
    setProdi(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzB87q7d5j2jgXmNfQTxvUtlk3f0dmn7jCujZ-VnRdjMr_eKDC37Cg4jVYiG5bmcCRc/exec";

    const data = new FormData();
    data.append("nim", nim);
    data.append("nama", nama);
    data.append("email", email);
    data.append("prodi", prodi);

    fetch(scriptURL, {
      method: "POST",
      body: data,
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setFormDisplay(false);
        setLoading(false);
      })
      .catch((err) => {
        setFormDisplay(true);
        setError([true, err.message]);
      });
  };

  return error ? (
    <>
      <h4>Maaf Terjadi Kesalahan !</h4>
      <p>Periksa koneksi anda dan coba kembali</p>
    </>
  ) : (
    <form
      className="w-100"
      onSubmit={submitHandler}
      action=""
      name="pkkmb-fti-absensi"
    >
      <h3 className="mb-2">Silahkan Isi Data Dibawah Ini</h3>
      <div className="form-group my-3 text-start">
        <label className="capitalize" htmlFor="nim">
          nim
        </label>
        <input
          id="nim"
          type="text"
          name="nim"
          value={nim}
          onChange={handleChange}
        />
      </div>
      <div
        className="
      form-group
      my-3
      text-start
      d-flex
      justify-content-beetwen
    "
      >
        <label className="capitalize" htmlFor="nama">
          nama
        </label>
        <input
          id="nama"
          type="text"
          name="nama"
          value={nama}
          onChange={handleChange}
        />
      </div>
      <div className="form-group my-3 text-start">
        <label className="capitalize" htmlFor="email">
          email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group my-3 text-start">
        <select onChange={(e) => selectProdi(e)} name="prodi" id="prodi">
          {option.map((e, i) => (
            <option key={i} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>
      {loading ? <button>Loading</button> : <button>Submit</button>}
    </form>
  );
}

export default Form;
