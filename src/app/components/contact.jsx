export default function Contact() {
  return (
    <>

      
      <form action="" className='contactContainer'>
        <h2 className='contactTitle'>Contact Me</h2>
        <div className='textInput'>
          <label htmlFor="name">Name</label> <input type="text" id="name" />
        </div>
        <div className='textInput'>
          
          <label htmlFor="name">Email</label> <input type="text" id="name" />
        </div>
        <div className='textArea'>
          
          <label htmlFor="name">Message</label>
          <textarea ></textarea>
        </div>

        <button className='contactButton'>Send</button>
      </form>
    
    </>
      
  );
}
