const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 22;
  const closeHour = 6;
  const isOpen = hour >= openHour || hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>We are open until {closeHour}:00. </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
