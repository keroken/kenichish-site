import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import styles from './MainNav.module.css';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface MainNavProps {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
}

export const MainNav = ({ menuOpen, setMenuOpen }: MainNavProps) => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null);
  const menuItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const handleHamburgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleHamburgerKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleHamburgerClick();
    }
  };

  // Handle arrow key navigation for desktop menu
  const handleMenuItemKeyDown = (
    e: React.KeyboardEvent<HTMLAnchorElement>,
    index: number
  ) => {
    if (isMobile) return; // Only handle for desktop

    const menuItems = menuItemRefs.current.filter(
      Boolean
    ) as HTMLAnchorElement[];
    if (menuItems.length === 0) return;

    let targetIndex = index;

    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        targetIndex = (index + 1) % menuItems.length;
        menuItems[targetIndex]?.focus();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        targetIndex = index - 1 < 0 ? menuItems.length - 1 : index - 1;
        menuItems[targetIndex]?.focus();
        break;
      case 'Home':
        e.preventDefault();
        menuItems[0]?.focus();
        break;
      case 'End':
        e.preventDefault();
        menuItems[menuItems.length - 1]?.focus();
        break;
    }
  };

  // Close menu when switching from mobile to desktop
  useEffect(() => {
    if (!isMobile && menuOpen) {
      setMenuOpen(false);
    }
  }, [isMobile, menuOpen, setMenuOpen]);

  // Handle Escape key to close menu
  useEffect(() => {
    if (!isMobile || !menuOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobile, menuOpen, setMenuOpen]);

  // Focus management for mobile menu
  useEffect(() => {
    if (!isMobile) return;

    if (menuOpen) {
      // Move focus to first menu item when menu opens
      const timer = setTimeout(() => {
        firstMenuItemRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    } else {
      // Return focus to hamburger button when menu closes
      hamburgerRef.current?.focus();
    }
  }, [menuOpen, isMobile]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isMobile || !menuOpen) return;

    const menu = menuRef.current;
    if (!menu) return;

    const getFocusableElements = (): HTMLElement[] => {
      const selector = 'a, button, [href], [tabindex]:not([tabindex="-1"])';
      return Array.from(menu.querySelectorAll(selector)) as HTMLElement[];
    };

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [isMobile, menuOpen]);

  return (
    <nav className={styles.mainNavContainer}>
      {isMobile && (
        <button
          ref={hamburgerRef}
          className={styles.hamburger + (menuOpen ? ' ' + styles.open : '')}
          aria-label={
            menuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-expanded={menuOpen}
          onClick={handleHamburgerClick}
          onKeyDown={handleHamburgerKeyDown}
        >
          <span className={styles.hamburgerBar}></span>
          <span className={styles.hamburgerBar}></span>
          <span className={styles.hamburgerBar}></span>
        </button>
      )}
      {(menuOpen || !isMobile) && (
        <ul
          ref={menuRef}
          className={styles.mainNav + (isMobile ? ' ' + styles.mobileMenu : '')}
          role={isMobile ? 'menu' : 'menubar'}
        >
          <li role={isMobile ? 'menuitem' : 'none'}>
            <Link
              ref={(el) => {
                if (isMobile) {
                  firstMenuItemRef.current = el;
                }
                menuItemRefs.current[0] = el;
              }}
              to="/architecture"
              onClick={() => setMenuOpen(false)}
              onKeyDown={(e) => handleMenuItemKeyDown(e, 0)}
            >
              Architecture
            </Link>
          </li>
          <li role={isMobile ? 'menuitem' : 'none'}>
            <Link
              ref={(el) => {
                menuItemRefs.current[1] = el;
              }}
              to="/web"
              onClick={() => setMenuOpen(false)}
              onKeyDown={(e) => handleMenuItemKeyDown(e, 1)}
            >
              Web/IOT
            </Link>
          </li>
          <li role={isMobile ? 'menuitem' : 'none'}>
            <Link
              ref={(el) => {
                menuItemRefs.current[2] = el;
              }}
              to="/interactive"
              onClick={() => setMenuOpen(false)}
              onKeyDown={(e) => handleMenuItemKeyDown(e, 2)}
            >
              Interactive
            </Link>
          </li>
          <li role={isMobile ? 'menuitem' : 'none'}>
            <Link
              ref={(el) => {
                menuItemRefs.current[3] = el;
              }}
              to="/graphic"
              onClick={() => setMenuOpen(false)}
              onKeyDown={(e) => handleMenuItemKeyDown(e, 3)}
            >
              Graphic
            </Link>
          </li>
          <li role={isMobile ? 'menuitem' : 'none'}>
            <Link
              ref={(el) => {
                menuItemRefs.current[4] = el;
              }}
              to="/others"
              onClick={() => setMenuOpen(false)}
              onKeyDown={(e) => handleMenuItemKeyDown(e, 4)}
            >
              Others
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};
