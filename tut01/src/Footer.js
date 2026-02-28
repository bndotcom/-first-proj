function Footer(){
    const currentDate = new Date();
    return(
        <div className="BottomFooter">
         
         <footer className="fotterBotton">
            <p>Copyright &copy; { currentDate.getFullYear()}</p>
         </footer>
        </div>
    );
}

export default Footer;