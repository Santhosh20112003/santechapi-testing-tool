import React, { useEffect, useState } from 'react';

export default function KeyValueEditor({
  keyPair,
  setKeyPair,
  onKeyPairRemove,
  tokenValue,
  keyValueid
}) {
  const [keyValue, setKeyValue] = useState(keyPair);
  const [debouncedKeyValue, setDebouncedKeyValue] = useState(keyValue);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedKeyValue(keyValue);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [keyValue]);

  useEffect(() => {
    console.log(tokenValue)
  }, [])

  useEffect(() => {
    setKeyPair(debouncedKeyValue);
    // eslint-disable-next-line
  }, [debouncedKeyValue]);

  const handleOnChange = (e) => {
    setKeyValue((prevState) => ({
      ...prevState,
      id: keyValue.id,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <div className='flex mb-3'>
        <input
          className="px-4 py-1.5 w-full border border-gray-300 rounded-md  hover:border-violet-500 focus:outline-violet-500"
          placeholder='Key'
          defaultValue={keyValueid}
          name='keyItem'
          onChange={(e) => handleOnChange(e)}
        />
        <input
          className="ml-3 px-4 py-1.5 w-full border border-gray-300 rounded-md hover:border-violet-500 focus:outline-violet-500"
          placeholder='Value'
          defaultValue={tokenValue}
          name='valueItem'
          onChange={(e) => handleOnChange(e)}
        />
        <button
          className="ml-4 px-4 rounded-md text-red-500 border border-red-300 hover:lg:bg-red-100 md:bg-transparent"
          onClick={() => onKeyPairRemove(keyPair)}><i className='fas fa-trash-can' ></i></button>
      </div>
    </>
  );
}
