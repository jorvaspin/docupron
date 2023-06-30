import React, { useState, useRef } from 'react';
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"


export default function methodTwo() {
  const form = useRef();
  const methodRef = useRef();
  const urlRef = useRef('');
  // creamos la variable para el error
  const [error, setError] = useState(null);
  // creamos la variable para el loading
  const [loading, setLoading] = useState(false);
  // iniciamos el llamado
  const [llamado, setLlamado] = useState(false);
  // creamos la variable para el metodo
  const [method, setMethod] = useState("GET");
  // creamos la variable para la url
  const [url, setUrl] = useState("https://sandbox.insospa.com/api/payment/methods/BRL");

  // json metodo uno
  const [metodoUnoJson, setMetodoUnoJson] = useState(
    [
        {
            "name": "PIX",
            "method": "pix_payment",
            "currency": "BRL"
        },
        {
            "name": "SafetyPay Direct BR",
            "method": "safetypay_payment_direct",
            "currency": "BRL"
        }
    ]
  );

  // creamos la funcion para el submit
  const handleSubmit = (e) => {
    // prevenimos el comportamiento por defecto
    e.preventDefault();
    // creamos la variable para el header
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "Bearer 88bb027f5d010bfc36f3d7ac466436fb"
    }

    // creamos la llamada a la api
    axios({
      method: method,
      url: url,
      headers: headers,
      data: body
    })
      // si todo sale bien
      .then((response) => {
        // guardamos la data en la variable
        setData(response.data);
        // cambiamos el loading a false
        setLoading(false);
      }
      )
      // si hay un error
      .catch((error) => {
        const jsonRequestBody = document.querySelector("[data-json-request-body]")
        // formateamos el json en el request body
        const jsonRequestBodyFormatted = JSON.stringify(JSON.parse(jsonRequestBody.value), null, 2) 
        // guardamos el error en la variable
        setError(error);
        // cambiamos el loading a false
        setLoading(false);
      }
      )

  };

  const sendRequest = (e) => {
    e.preventDefault();
    // variable loading true
    setLoading(true);
    setLlamado(false);
    // traemos el ref del form
    const method_form = methodRef.current.value
    const url_form = urlRef.current.value
    // creamos la variable para el header
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "Bearer 88bb027f5d010bfc36f3d7ac466436fb"
    }
    // creamos la llamada a la api
    axios({
      method: method_form,
      url: url,
      headers: headers
    })
      // si todo sale bien
      .then((response) => {
        console.log(response);
        // guardamos la data en la variable
        setData(response.data);
        // cambiamos el loading a false
        setLoading(false);
        setLlamado(false);
      }
      )
      // si hay un error
      .catch((error) => {;
        console.log(error);
        // guardamos el error en la variable
        setError(error);
        // cambiamos el loading a false
        setLoading(false);
        setLlamado(true);
      }
      )
    };

    
  return (
    <div>
          <div>
    <form ref={form} onSubmit={sendRequest}>
      <div className="input-group mb-4">
        <select className="form-select flex-grow-0 w-auto" ref={methodRef} name="method" data-method >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="PATCH">PATCH</option>
          <option value="DELETE">DELETE</option>
        </select>
        <input data-url required className="form-control" value={url} name="url" ref={urlRef} type="url" placeholder="https://example.com" />
        <button type="submit" className="btn btn-primary">Send</button>
      </div>

      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="json-tab" data-bs-toggle="tab" data-bs-target="#json" type="button" role="tab"
            aria-controls="json" aria-selected="false">JSON Response</button>
        </li>
      </ul>
    </form>
    
    {/* mostramos el json desde la api demo */}
    <div className="tab-content">
      {
        loading ? (
          <div className="d-flex justify-content-center align-items-center mt-4"> 
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          llamado ? (
          <pre>{JSON.stringify(metodoUnoJson, null, 4)}</pre>
          ) : null 
        )
      }
    </div>



    <div className="mt-5 d-none" data-response-section>
      <h3>Response</h3>
      <div className="d-flex my-2">
        <div className="me-3">
          Status: <span data-status></span>
        </div>
        <div className="me-3">
          Time: <span data-time></span>ms
        </div>
        <div className="me-3">
          Size: <span data-size></span>
        </div>
      </div>


      <ul className="nav nav-tabs" role="tablist">
        
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="body-tab" data-bs-toggle="tab" data-bs-target="#body" type="button"
            role="tab" aria-controls="body" aria-selected="true">Body</button>
        </li>
   
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="response-headers-tab" data-bs-toggle="tab" data-bs-target="#response-headers"
            type="button" role="tab" aria-controls="response-headers" aria-selected="false">Headers</button>
        </li>
      </ul>

      <div className="tab-content p-3 border-top-0 border">
        <div className="tab-pane fade show active" id="body" role="tabpanel" aria-labelledby="body-tab">
          <div data-json-response-body className="overflow-auto"></div>
        </div>
        <div className="tab-pane fade" id="response-headers" role="tabpanel" aria-labelledby="response-headers-tab">
          <div data-response-headers></div>
        </div>
      </div>
    </div>
  </div>

    
  <template data-key-value-template>
    <div className="input-group my-2" data-key-value-pair>
      <input type="text" data-key className="form-control" placeholder="Key" />
      <input type="text" data-value className="form-control" placeholder="Value" />
      <button type="button" data-remove-btn className="btn btn-outline-danger">Remove</button>
    </div>
  </template>
    </div>
  );
}