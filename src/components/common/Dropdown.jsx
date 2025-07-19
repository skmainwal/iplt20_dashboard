import React, { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';

const Dropdown = ({
  value,
  onChange,
  options,
  disabled = false,
  placeholder = 'Select an option',
  labelKey = 'name',
  valueKey = 'id',
  className = '',
}) => {
  const getDisplayValue = () => {
    if (!value || !options) return placeholder;
    const selectedOption = options.find(option => option[valueKey] === value);
    return selectedOption ? selectedOption[labelKey] : placeholder;
  };

  return (
    <div className={`relative w-72 ${className}`}>
      <Listbox value={value} onChange={onChange} disabled={disabled}>
        <div className="relative mt-1">
          <Listbox.Button 
            className={`relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left border focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-300 ${
              disabled ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <span className="block truncate">{getDisplayValue()}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <span className="text-gray-400 text-lg">▼</span>
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none z-50">
              {options && options.length > 0 ? (
                options.map((option) => (
                  <Listbox.Option
                    key={option[valueKey]}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-indigo-100 text-indigo-900' : 'text-gray-900'
                      }`
                    }
                    value={option[valueKey]}
                  >
                    {({ selected }) => (
                      <>
                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                          {option[labelKey]}
                        </span>
                        {selected && (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                            ✓
                          </span>
                        )}
                      </>
                    )}
                  </Listbox.Option>
                ))
              ) : (
                <div className="relative cursor-default select-none py-2 pl-10 pr-4 text-gray-700 bg-white">
                  No options available
                </div>
              )}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Dropdown; 