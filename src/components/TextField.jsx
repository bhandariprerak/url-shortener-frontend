import React from 'react';

const TextField = ({
  label,
  id,
  type = 'text',
  errors = {},
  register,
  required = false,
  message,
  className = '',
  min,
  value,
  placeholder,
}) => {
  // Define validation rules based on type
  const validationRules = {
    required: required ? message || 'This field is required' : false,
  };

  if (type === 'email') {
    validationRules.pattern = {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: message || 'Please enter a valid email address',
    };
  } else if (type === 'url') {
    validationRules.pattern = {
      value: /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/,
      message: message || 'Please enter a valid URL',
    };
  }

  if (min !== undefined) {
    validationRules.min = {
      value: min,
      message: message || `Minimum value is ${min}`,
    };
  }

  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      {label && (
        <label htmlFor={id} className="mb-1 font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        defaultValue={value}
        placeholder={placeholder}
        className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          errors[id] ? 'border-red-500' : 'border-gray-300'
        }`}
        {...register(id, validationRules)}
      />
      {errors[id] && (
        <p className="mt-1 text-sm text-red-600">{errors[id].message}</p>
      )}
    </div>
  );
};

export default TextField;
