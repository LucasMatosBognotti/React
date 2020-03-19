import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null); // Ter acesso ao valor do campo input
  const { fieldName, registerField, defaultValue, error } = useField(name); // Conectar o Input com o Unform
  
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField]);

  return (
    <input ref={inputRef} {...rest} /> // Esse input tem que fazer parte do Formulario
  );
}