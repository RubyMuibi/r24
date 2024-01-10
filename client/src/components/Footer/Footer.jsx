import footerStyles from "./footer.module.css"

export default function Footer () {
  return (
    <>
      <footer className={footerStyles.container} >

      <div className={footerStyles.left} > 
      <p> &copy; 2024 R24 </p> 
      <p> TWITTER </p> 
      <p> GITHUB </p>
      </div>

      <div className={ footerStyles.right } > 
      <p> ABOUT </p>
      <p> CONTACT </p>
      <p> TERMS & CONDITIONS </p>
      </div>


      </footer>
    </>
  );
};
