const Footer = ({ text }) => {
  return (
    <footer style={styles.footer}>
      <div className="container text-center">
        <p style={styles.text}>{text}</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#34373e',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 0',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
  },
  text: {
    margin: 0,
    fontSize: '14px',
  },
};

export default Footer;