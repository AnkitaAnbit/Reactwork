import React, {useState, useEffect} from 'react'

function Form() {
    const [visible, setVisible]=useState(false);
    const [show, setshow]=useState(false);

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [ number, setNumber] = useState('');
    const [ address, setAddress] = useState('');


function onChangeFirstname(e) {
       setFirstname(e.target.value)
   }
   function onChangeLastname(e) {
       setLastname(e.target.value)
   }
   function onChangeEmail(e) {
    setEmail(e.target.value)
}
function onChangeNumber(e) {
    setNumber(e.target.value)
}
function onChangeAddress(e) {
    setAddress(e.target.value)
}



function onSubmit(e) {
        e.preventDefault()
        localStorage.setItem('firstname', firstname);
        localStorage.setItem('lastname', lastname);
        localStorage.setItem('email', email);
        localStorage.setItem('number', number);
        localStorage.setItem('address', address);
    }

    function getData() {
        console.log(localStorage.getItem('firstname'));
        console.log(localStorage.getItem('lastname'));
        console.log(localStorage.getItem('email'));
        console.log(localStorage.getItem('number'));
        console.log(localStorage.getItem('address'));

    }
  return (
    <div>
        <form onSubmit={onSubmit}>
         <div>
        <div class="form-floating mb-3">
  <input type="text" class="form-control" value={firstname} onChange={onChangeFirstname} placeholder="name@example.com" />
  <label for="floatingInput">First name</label>
</div>
<div class="form-floating mb-3">
  <input type="text" class="form-control" value={lastname} onChange={onChangeLastname} placeholder="name@example.com" />
  <label for="floatingInput">Last name</label>
</div>
<div class="form-floating mb-3">
  <input type="email" class="form-control" value={email} onChange={onChangeEmail} placeholder="name@example.com" />
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating mb-3">
  <input type="number" class="form-control" id="floatingInput" value={number} onChange={onChangeNumber} placeholder="name@example.com" />
  <label for="floatingInput">Mobile Number</label>
</div>

<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDisabled" onClick={ ()=>setVisible(true)} id="flexRadioDisabled"/>
  <label class="form-check-label" for="flexRadioDisabled">
   option 1
  </label>
</div>


<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDisabled" onClick={ ()=>setshow(true)} id="flexRadioCheckedDisabled" />
  <label class="form-check-label" for="flexRadioCheckedDisabled">
   option 2
  </label>
</div>


{ visible &&

<div>
<div class="form-floating mb-3">
  <input type="text"  class="form-control" value={address} onChange={onChangeAddress} placeholder="name@example.com" />
  <label for="floatingInput">Address 1</label>
</div>
<div class="form-floating mb-3">
  <input type="text" class="form-control" placeholder="name@example.com" />
  <label for="floatingInput">Address 2</label>
</div>
<div class="form-floating mb-3">
  <input type="text" class="form-control"placeholder="name@example.com" />
  <label for="floatingInput">City</label>
</div>
</div>
}

{ show &&
<div>
<div class="form-floating mb-3">
  <input type="number" class="form-control" id="floatingInput" placeholder="name@example.com" />
  <label for="floatingInput">Card Number</label>
</div>
<div class="form-floating mb-3">
  <input type="text" class="form-control"placeholder="name@example.com" />
  <label for="floatingInput">Name on card</label>
</div>
</div>
}


    </div>

    <button type="submit">Submit</button>
    <button type="button" onClick={getData}>Get Data</button>
    </form>
    </div>
  )
}

export default Form