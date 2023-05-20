// Class repeat
const footerCol = "flex flex-col gap-6";
const colStyle = "mb-3 text-secondary-500 text-xl font-semibold";

const Footer = () => {
  return (
    <footer className="max-w-[1640px] max-auto px-8 py-3.5 md:px-16 md:py-16 flex flex-col md:flex-row justify-between gap-10 bg-white shadow-sm">
      {/* Left side */}
      <div>
        <h4 className="font-bold text-3xl text-primary-500 mb-5">MORENT</h4>
        <p className="line-clamp-2 md:w-3/5 font-medium text-base text-gray-400">
          Our vision is to provide convenience and help increase your sales
          business.
        </p>
      </div>
      {/* Right side */}
      <div className="md:w-2/5 flex gap-4 justify-between md:justify-around flex-wrap md:flex-nowrap">
        <div className={`${footerCol} elementFooter`}>
          <h6 className={colStyle}>About</h6>
          <span>How it works</span>
          <span>Featured</span>
          <span>Partnership</span>
          <span>Business Relation</span>
        </div>
        <div className={`${footerCol} elementFooter`}>
          <h6 className={colStyle}>Community</h6>
          <span>Events</span>
          <span>Blog</span>
          <span>Podcast</span>
          <span>Invite a friend</span>
        </div>
        <div className={`${footerCol} elementFooter`}>
          <h6 className={colStyle}>Socials</h6>
          <span>Discord</span>
          <span>Instagram</span>
          <span>Twitter</span>
          <span>Facebook</span>
        </div>
      </div>
     
    </footer>
  );
};

export default Footer;
