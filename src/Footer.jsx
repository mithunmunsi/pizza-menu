const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 24;
  const closeHour = 6;
  const isOpen = hour >= openHour || hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We are open until {closeHour}:00. </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We are open between {openHour}:00 and {closeHour}:00{' '}
        </p>
      )}
    </footer>
  );
};

export default Footer;
