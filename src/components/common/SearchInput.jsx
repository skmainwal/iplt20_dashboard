import React from 'react';
import {
  SEARCH_INPUT_SIZES,
  SEARCH_INPUT_VARIANTS,
  SEARCH_INPUT_SIZE_CLASSES,
  SEARCH_INPUT_VARIANT_CLASSES
} from '../../utils/constants/filterOptions';

const SearchInput = ({
  value,
  onChange,
  placeholder = 'Search',
  className = '',
  disabled = false,
  onClear,
  showClearButton = true,
  size = SEARCH_INPUT_SIZES.DEFAULT,
  variant = SEARCH_INPUT_VARIANTS.DEFAULT,
}) => {
  // Base input classes
  const inputClasses = `
    w-full
    ${SEARCH_INPUT_SIZE_CLASSES[size]}
    ${SEARCH_INPUT_VARIANT_CLASSES[variant]}
    rounded-lg
    focus:outline-none
    focus:ring-2
    focus:ring-indigo-500
    focus:border-transparent
    pl-10
    pr-${showClearButton ? '10' : '4'}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `.trim();

  return (
    <div className="relative flex-1">
      {/* Search Input */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={inputClasses}
        disabled={disabled}
      />

      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg 
          className={`h-5 w-5 ${disabled ? 'text-gray-300' : 'text-gray-400'}`}
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" 
            clipRule="evenodd" 
          />
        </svg>
      </div>

      {/* Clear Button */}
      {showClearButton && value && !disabled && (
        <button
          type="button"
          onClick={() => {
            onChange('');
            onClear?.();
          }}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchInput; 