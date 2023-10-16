import { useState } from 'react';
import '../sidebar/Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rotatedArrow, setRotatedArrow] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (item) => {
    setRotatedArrow(rotatedArrow === item ? null : item);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        ☰
      </button>
      <a className='item' href="/"><h3 className='bi bi-nut text-light' style={{padding:"30px"}}> Dashboard</h3></a>
      <ul>
        <li><a className='item' href="/" onClick={(e)=>e.preventDefault()} ><span className='bi bi-speedometer2'> Dashboard</span></a></li>
        <li onClick={() => toggleDropdown('product')}>
          <a className='item' href="/" onClick={(e)=>e.preventDefault()}><span className='bi bi-box'> Product</span> <span className={`toggle-arrow ${rotatedArrow === 'product' ? 'down' : ''}`}>&#8250;</span></a>
          {rotatedArrow === 'product' && (
            <ul>
              <li>Submenu 1</li>
              <li>Submenu 2</li>
            </ul>
          )}
        </li>
        <li onClick={() => toggleDropdown('customers')}>
          <a className='item' href='/' onClick={(e)=>e.preventDefault()}><span className='bi bi-person-square'> Customers</span><span className={`toggle-arrow ${rotatedArrow === 'customers' ? 'down' : ''}`}>&#8250;</span></a>
          {rotatedArrow === 'customers' && (
            <ul>
              <li>Submenu 1</li>
              <li>Submenu 2</li>
            </ul>
          )}
        </li>
        <li onClick={() => toggleDropdown('income')}>
        <a className='item' href='/' onClick={(e)=>e.preventDefault()}><span className='bi bi-wallet2'> Income</span> <span className={`toggle-arrow ${rotatedArrow === 'income' ? 'down' : ''}`}>&#8250;</span></a>
          {rotatedArrow === 'income' && (
            <ul>
              <li>Submenu 1</li>
              <li>Submenu 2</li>
            </ul>
          )}
        </li>
        <li onClick={() => toggleDropdown('promote')}>
        <a className='item' href='/' onClick={(e)=>e.preventDefault()}><span className='bi bi-patch-check'> Promote</span> <span className={`toggle-arrow ${rotatedArrow === 'promote' ? 'down' : ''}`}>&#8250;</span></a>
          {rotatedArrow === 'promote' && (
            <ul>
              <li>Submenu 1</li>
              <li>Submenu 2</li>
            </ul>
          )}
        </li>
        <li onClick={() => toggleDropdown('help')}>
        <a className='item' href='/' onClick={(e)=>e.preventDefault()}><span className='bi bi-question-square'> Help</span> <span className={`toggle-arrow ${rotatedArrow === 'help' ? 'down' : ''}`}>&#8250;</span></a>
          {rotatedArrow === 'help' && (
            <ul>
              <li>Submenu 1</li>
              <li>Submenu 2</li>
            </ul>
          )}
        </li>
      </ul>
      <ul className="bottom-section">
        <li className="username">
          <a className='item downItem' href='/' onClick={(e)=>e.preventDefault()}>
            <img className='propic' src='https://img.freepik.com/premium-vector/businessman-profile-cartoon_18591-58481.jpg?w=826' alt='profile pic'/>
            <div>
              <p className='evano'>Evano</p>
              <p className='pm'>Project Manager</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
