const Dropdown = ({ submenus }) => {
  return (
    <ul className="dropdown">
      {submenus.map((submenu, index) => (
          <li key={index} className="menu-items">
            <a href={submenu.url}>{submenu.name}</a>
          </li>
        ))}
    </ul>
  );
};

export default Dropdown;