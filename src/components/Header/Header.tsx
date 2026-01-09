import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

interface SubLink {
  label: string;
  anchor: string;
}

interface NavLink {
  path: string;
  label: string;
  subLinks?: SubLink[];
}

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks: NavLink[] = [
    { path: '/', label: 'Início' },
    {
      path: '/atrativos',
      label: 'Atrativos',
      subLinks: [
        { label: 'Nossos Espaços', anchor: 'espacos' },
        { label: 'Destaques', anchor: 'destaques' },
      ],
    },
    {
      path: '/visite',
      label: 'Visite',
      subLinks: [
        { label: 'Localização', anchor: 'localizacao' },
        { label: 'Como Chegar', anchor: 'como-chegar' },
        { label: 'Taxas', anchor: 'taxas' },
        { label: 'Reservas', anchor: 'reservas' },
      ],
    },
    {
      path: '/fe-cultura',
      label: 'Fé & Cultura',
      subLinks: [
        { label: 'Turismo Religioso', anchor: 'turismo-religioso' },
        { label: 'Turismo Cultural', anchor: 'turismo-cultural' },
        { label: 'Calendário Piaga', anchor: 'calendario' },
      ],
    },
    {
      path: '/eventos',
      label: 'Eventos',
      subLinks: [
        { label: 'Calendário 2026', anchor: 'calendario' },
        { label: 'Próximos Eventos', anchor: 'proximos' },
      ],
    },
    {
      path: '/circulo-piaga',
      label: 'Círculo Piaga',
      subLinks: [
        { label: 'História', anchor: 'historia' },
        { label: 'Piaganismo', anchor: 'piaganismo' },
        { label: 'Fundador', anchor: 'fundador' },
        { label: 'Faça Parte', anchor: 'faca-parte' },
      ],
    },
    {
      path: '/apoie',
      label: 'Apoie',
      subLinks: [
        { label: 'Por que Apoiar', anchor: 'por-que' },
        { label: 'Formas de Apoiar', anchor: 'formas' },
        { label: 'Fazer Doação', anchor: 'doar' },
      ],
    },
    {
      path: '/monte-piaga',
      label: 'Habitar',
      subLinks: [
        { label: 'Sobre o Monte Piaga', anchor: 'sobre' },
        { label: 'Quem Pode Integrar', anchor: 'quem-pode' },
        { label: 'Estrutura', anchor: 'estrutura' },
        { label: 'Localização', anchor: 'localizacao' },
      ],
    },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setActiveDropdown(null);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownEnter = (path: string) => {
    setActiveDropdown(path);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const handleSubLinkClick = (path: string, anchor: string) => {
    closeMenu();

    // Se já está na página correta, apenas rola para o anchor
    if (location.pathname === path) {
      const element = document.getElementById(anchor);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - headerHeight,
          behavior: 'smooth'
        });
      }
    } else {
      // Navega para a página e depois rola para o anchor
      navigate(path);
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - headerHeight,
            behavior: 'smooth'
          });
        }
      }, 300);
    }
  };

  const toggleMobileDropdown = (path: string) => {
    setActiveDropdown(activeDropdown === path ? null : path);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/images/SELO VILA PAGÃ GREEN PNG.webp" alt="Vila Pagã" />
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li
                key={link.path}
                className={link.subLinks ? 'has-dropdown' : ''}
                onMouseEnter={() => link.subLinks && handleDropdownEnter(link.path)}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="nav-link-wrapper">
                  <Link
                    to={link.path}
                    className={location.pathname === link.path ? 'active' : ''}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                  {link.subLinks && (
                    <button
                      className="dropdown-toggle-mobile"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleMobileDropdown(link.path);
                      }}
                      aria-label="Expandir submenu"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={activeDropdown === link.path ? 'rotated' : ''}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                  )}
                </div>

                {link.subLinks && (
                  <ul className={`dropdown ${activeDropdown === link.path ? 'active' : ''}`}>
                    {link.subLinks.map((subLink) => (
                      <li key={subLink.anchor}>
                        <button
                          onClick={() => handleSubLinkClick(link.path, subLink.anchor)}
                          className="dropdown-link"
                        >
                          {subLink.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
