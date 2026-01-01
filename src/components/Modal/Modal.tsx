import React, { useEffect, useRef } from 'react';
import styles from './Modal.module.css';
import { useMobile } from '../../hooks';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const isMobile = useMobile();
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  // Handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  // Focus management
  useEffect(() => {
    if (!isOpen) return;

    // Store the previously active element
    previousActiveElementRef.current = document.activeElement as HTMLElement;

    // Move focus to close button when modal opens
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 100);

    return () => {
      clearTimeout(timer);
      // Return focus to the previously active element
      if (previousActiveElementRef.current) {
        previousActiveElementRef.current.focus();
      }
    };
  }, [isOpen]);

  // Focus trap - simple Tab key trap for close button
  useEffect(() => {
    if (!isOpen) return;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const closeButton = closeButtonRef.current;
      if (!closeButton) return;

      const activeElement = document.activeElement;

      // If focus is on close button, prevent Tab from moving focus away
      if (activeElement === closeButton) {
        e.preventDefault();
        // Keep focus on close button (it cycles back to itself)
        closeButton.focus();
      } else {
        // If focus is elsewhere, redirect to close button
        e.preventDefault();
        closeButton.focus();
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div
        ref={modalRef}
        className={styles.modal}
        onClick={(e) => (isMobile ? onClose() : e.stopPropagation())}
        role="dialog"
        aria-modal="true"
        aria-label="Image modal"
      >
        <button
          ref={closeButtonRef}
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
