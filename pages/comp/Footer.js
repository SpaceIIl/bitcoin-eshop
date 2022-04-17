const Footer = () => {
  return (
    <footer className="bg-fuckin-gray text-center h-40 mt-20 text-x1 font-medium">
    <div className="pt-5">
    Copyright <span>Bitcoin</span>{' '}
      {new Date().getFullYear()}
    </div>

      <h1 className="pt-5">Karel Hudera</h1>
      <h1 className="pt-3">Jan Hruška</h1>
    </footer>
  );
};

export default Footer;

/*const Footer = () => {
    return (
      <footer>
        Copyright <span>Bitcoin</span>{' '}
        {new Date().getFullYear()}
      </footer>
    );
  };

  export default Footer;*/