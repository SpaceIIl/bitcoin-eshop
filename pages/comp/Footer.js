const Footer = () => {
  return (
    <footer className="bg-fuckin-gray text-center h-40 text-x1 font-medium">
    <div className="pt-6">
    Copyright <span></span>{' '}
      {new Date().getFullYear()}
    </div>
      <h4 className="pt-6">Karel Hudera</h4>
      <h4 className="pt-3">Jan Hruška</h4>
    </footer>
  );
};

export default Footer;