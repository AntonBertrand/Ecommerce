import './checkout.css';

const Checkout = () => {
  return (
    <div className='checkout'>
      <form action="" className='checkout__form'>
        <h2>Shipping Address</h2>
        <input type="text" placeholder='Country/Region'/>
        <div className='checkout__form__name'>
          <input type="text" className='check__form__firstname' placeholder='First Name'/>
          <input type="text" className='check__form__lastname' placeholder='First Name'/>
        </div>
        

      </form>
    </div>
  )
}

export default Checkout