function Footer() {
  
  return(
    <div className="fixed bottom-0">
      <div className="footer flex w-screen items-start   bg-neutral-900">
        <div className="p-5">
          <h2 className="text-neutral-100 text-sm font-semibold">About Us</h2>
          <ul className="text-neutral-100 text-sm">
            <li>Mission Statement </li>
            <li>Our Anti-Wastage Policy </li>
            <li>Terms & Conditions </li>
            <li>Contact Us </li>
          </ul>
        </div>
        <div className="p-5">
          <h2 className="text-neutral-100 text-sm font-semibold">Get Inspired</h2>
          <ul className="text-neutral-100 text-sm">
            <li>Lookbook </li>
            <li>Natural Inspiration </li>
            <li>Our Creative Process </li>
          </ul>
        </div>
      </div>
    </div>
  )
};
export default Footer;
 