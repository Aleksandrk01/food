// src/components/Header.jsx
import React, { useState, useContext, useEffect, useRef } from 'react';
import '../css/Header.css'; // Импортируем стили
import Logo from '../assets/images/logo.png';
import word from '../assets/images/white.png';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext'; // Правильный путь
import Cart from './Cart'; // Правильный путь
import { MagnifyingGlassIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'; // Импорт иконки бургер-меню
import debounce from 'lodash.debounce';

const Header = ({ onSearch }) => { // Принимаем onSearch как проп
  const [isCartOpen, setIsCartOpen] = useState(false); // Состояние для управления видимостью корзины
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Состояние для управления видимостью поиска на мобильных
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для управления бургер-меню
  const { cartItems } = useContext(CartContext);
  const cartRef = useRef();
  const searchRef = useRef();
  const menuRef = useRef();

  // Дебаунсинг поиска
  const debouncedSearch = useRef(
    debounce((query) => {
      onSearch(query);
    }, 300)
  ).current;

  // Обработчик изменения ввода в поиске
  const handleInputChange = (e) => {
    const query = e.target.value;
    debouncedSearch(query);
  };

  // Отмена дебаунсинга при размонтировании компонента
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  // Обработчик для закрытия корзины при клике вне её области
  useEffect(() => {
    const handleClickOutsideCart = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    if (isCartOpen) {
      document.addEventListener('mousedown', handleClickOutsideCart);
    } else {
      document.removeEventListener('mousedown', handleClickOutsideCart);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideCart);
    };
  }, [isCartOpen]);

  // Обработчик для закрытия поиска при клике вне его области
  useEffect(() => {
    const handleClickOutsideSearch = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutsideSearch);
    } else {
      document.removeEventListener('mousedown', handleClickOutsideSearch);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideSearch);
    };
  }, [isSearchOpen]);

  // Обработчик нажатия клавиши Esc для закрытия поиска
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('keydown', handleEsc);
    } else {
      document.removeEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isSearchOpen]);

  // Обработчик для закрытия меню при клике вне его области
  useEffect(() => {
    const handleClickOutsideMenu = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutsideMenu);
    } else {
      document.removeEventListener('mousedown', handleClickOutsideMenu);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideMenu);
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-primary-dark fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-desktop mx-auto flex items-center justify-between h-20 px-5 lg:px-10">
        {/* Логотипы */}
        <div className="flex-shrink-0 flex items-center">
          <Link to="/">
            <img src={word} alt="Food Brother Logo" className="h-10 w-auto mr-2" />
          </Link>
          <Link to="/">
            <img src={Logo} alt="Food Brother Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Поисковая строка для десктопа */}
        <div className="flex-1 mx-5 hidden sm:block relative">
          <input
            type="text"
            name="search_product"
            placeholder="Gericht suchen"
            className="w-full h-10 pl-3 pr-10 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={handleInputChange} // Добавляем обработчик
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            {/* Иконка поиска */}
            <MagnifyingGlassIcon className="w-5 h-5" />
          </div>
        </div>

        {/* Поисковая иконка для мобильных устройств */}
        <div className="flex-1 mx-5 sm:hidden relative flex justify-end">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="text-gray-300 hover:text-primary transition-colors focus:outline-none"
            aria-label="Suche öffnen"
          >
            <MagnifyingGlassIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300 hover:text-primary transition-colors focus:outline-none ml-4"
            aria-label="Меню навигации"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
          {/* Меню */}
          {isMenuOpen && (
            <div ref={menuRef} className="absolute right-0 mt-2 w-48 bg-primary-dark rounded-md shadow-lg py-2">
              <a href="#beef-burger" className="block px-4 py-2 text-gray-300 hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>
                Beef Burger
              </a>
              <a href="#chicken-burger" className="block px-4 py-2 text-gray-300 hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>
                Chicken Burger
              </a>
              <a href="#veggie-burger" className="block px-4 py-2 text-gray-300 hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>
                Veggie Burger
              </a>
            </div>
          )}
        </div>

        {/* Кнопка корзины */}
        <div className="ml-4 relative">
          <button
            className="flex items-center text-gray-300 hover:text-primary transition-colors focus:outline-none"
            onClick={() => setIsCartOpen(!isCartOpen)} // Переключение состояния корзины
            aria-label="Warenkorb anzeigen"
          >
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="28.000000pt"
              height="28.000000pt"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#e5e7eb"
                stroke="none"
              >
                <path d="M232 4887 c-21 -22 -22 -32 -22 -179 0 -138 2 -158 19 -179 l19 -24
                374 -5 373 -5 311 -1448 c171 -797 318 -1464 327 -1482 25 -53 86 -114 141
                -143 l51 -27 1327 -3 1326 -2 21 26 c19 24 21 40 21 179 0 136 -2 155 -19 176
                l-19 24 -1246 3 c-685 1 -1246 4 -1246 7 0 4 -64 305 -75 353 l-5 22 1283 0
                c1038 0 1287 2 1301 13 25 18 422 1859 409 1897 -5 13 -20 30 -33 37 -20 10
                -376 13 -1702 13 -1588 0 -1677 1 -1682 18 -3 9 -30 134 -61 277 -30 143 -64
                278 -76 301 -27 56 -80 109 -142 142 l-52 27 -450 3 -451 3 -22 -24z m918
                -139 c33 -17 51 -35 68 -68 16 -31 117 -486 338 -1514 212 -992 320 -1476 331
                -1488 15 -17 71 -18 1255 -18 l1238 0 0 -65 0 -65 -1250 0 c-1040 0 -1256 2
                -1283 14 -56 24 -85 65 -106 151 -11 44 -155 715 -322 1490 -242 1131 -306
                1414 -322 1433 l-20 22 -364 0 -363 0 0 65 0 65 378 0 c372 0 378 0 422 -22z
                m1074 -780 c6 -35 46 -410 46 -428 0 -7 -108 -10 -325 -10 l-325 0 -5 23 c-12
                55 -95 439 -95 443 0 2 157 4 350 4 l349 0 5 -32z m844 -205 l2 -233 -330 0
                -330 0 0 23 c-1 12 -11 114 -24 227 -13 113 -21 208 -19 213 2 4 160 6 351 5
                l347 -3 3 -232z m842 230 c0 -5 -11 -109 -25 -232 -14 -124 -25 -226 -25 -228
                0 -2 -146 -3 -325 -3 l-325 0 0 235 0 235 350 0 c193 0 350 -3 350 -7z m840
                -5 c0 -7 -22 -112 -48 -233 l-48 -220 -328 -3 -327 -2 6 42 c6 48 45 406 45
                419 0 5 158 9 350 9 273 0 350 -3 350 -12z m-2459 -620 c0 -13 10 -115 23
                -228 12 -113 21 -208 19 -212 -4 -7 -583 -12 -583 -5 0 3 -87 410 -95 445 l-5
                22 320 0 320 0 1 -22z m777 -210 l-3 -233 -292 -3 -292 -2 -5 32 c-6 37 -46
                406 -46 426 0 9 71 12 320 12 l320 0 -2 -232z m771 195 c0 -21 -10 -126 -22
                -233 l-22 -195 -292 -3 -293 -2 0 235 0 235 315 0 315 0 -1 -37z m780 25 c0
                -7 -22 -112 -48 -233 l-48 -220 -291 -3 c-273 -2 -292 -1 -292 15 0 26 41 426
                46 441 5 18 634 18 633 0z m-2264 -630 c5 -35 45 -399 45 -417 0 -8 -82 -11
                -259 -11 -239 0 -260 1 -265 18 -3 9 -23 105 -46 212 -23 107 -43 203 -46 213
                -5 16 13 17 280 17 l285 0 6 -32z m715 -198 l0 -230 -265 0 c-216 0 -265 2
                -265 14 0 20 -39 387 -45 419 l-4 27 289 0 290 0 0 -230z m706 188 c-3 -24
                -13 -108 -21 -188 -8 -80 -18 -164 -21 -187 l-5 -43 -260 0 -259 0 0 230 0
                230 286 0 285 0 -5 -42z m709 10 c-4 -18 -25 -121 -48 -228 l-42 -195 -263 -3
                -263 -2 6 42 c5 37 45 404 45 414 0 2 128 4 285 4 l286 0 -6 -32z"/>
                <path d="M1898 1171 c-207 -66 -340 -250 -340 -471 -2 -439 541 -655 840 -335
                147 157 180 367 86 553 -87 176 -245 273 -443 271 -54 0 -107 -7 -143 -18z
                m276 -142 c113 -42 208 -166 222 -289 14 -124 -50 -258 -157 -329 -94 -63
                -189 -76 -303 -41 -88 27 -171 103 -211 191 -82 184 13 405 205 472 66 23 177
                21 244 -4z"/>
                <path d="M1990 931 c-116 -36 -192 -146 -177 -256 18 -126 112 -205 243 -205
                159 1 272 179 205 326 -47 103 -171 165 -271 135z m100 -146 c59 -30 68 -98
                21 -146 -78 -77 -200 14 -147 110 15 26 51 50 79 51 10 0 31 -7 47 -15z"/>
                <path d="M4068 1166 c-154 -54 -269 -175 -313 -330 -13 -43 -16 -85 -13 -160
                3 -92 7 -108 41 -179 94 -198 300 -311 513 -280 264 38 455 288 417 549 -13
                87 -63 199 -119 263 -122 141 -348 200 -526 137z m286 -137 c116 -43 209 -167
                222 -295 5 -48 2 -77 -14 -130 -82 -265 -407 -339 -592 -137 -146 160 -112
                422 70 531 71 42 99 50 187 51 50 1 89 -5 127 -20z"/>
                <path d="M4170 931 c-110 -34 -174 -119 -175 -231 0 -53 5 -73 28 -112 122
                -207 436 -126 437 113 0 68 -37 148 -86 185 -57 44 -144 63 -204 45z m100
                -146 c56 -29 67 -93 24 -144 -51 -61 -148 -30 -161 51 -5 33 -2 41 30 73 38
                38 63 43 107 20z"/>
              </g>
            </svg>
            
            <span className="ml-1 text-sm font-semibold">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          </button>
          {/* Отображение корзины */}
          {isCartOpen && (
            <div ref={cartRef}>
              <Cart closeCart={() => setIsCartOpen(false)} />
            </div>
          )}
        </div>
      </div>

      {/* Поисковая строка для мобильных устройств */}
      {isSearchOpen && (
        <div className="absolute top-20 left-0 w-full sm:w-auto sm:left-auto sm:right-0 sm:top-0 sm:absolute bg-primary-dark sm:bg-transparent p-4 sm:p-0">
          <div ref={searchRef} className="flex items-center max-w-lg mx-auto">
            <input
              type="text"
              name="search_product_mobile"
              placeholder="Gericht suchen"
              className="w-full h-10 pl-3 pr-10 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              onChange={handleInputChange} // Добавляем обработчик
              autoFocus
            />
            <button
              onClick={() => setIsSearchOpen(false)}
              className="ml-2 text-gray-300 hover:text-primary transition-colors focus:outline-none"
              aria-label="Suche schließen"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
