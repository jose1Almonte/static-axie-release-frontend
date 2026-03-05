import "./Footer.css";

type FooterProps = {
  page: number;
  // Mantenemos las props por si AxieList las sigue enviando, 
  // pero no las usaremos para que no haya acciones.
  setPage?: (page: number) => void;
};

function Footer({ page }: FooterProps) {
  return (
    <div className="footer-container">
      <button disabled title="Paginación deshabilitada">
        ◀ Prev
      </button>
      <span className="page-number">Page {page}</span>
      <button disabled title="Paginación deshabilitada">
        Next ▶
      </button>
    </div>
  );
}

export default Footer;
