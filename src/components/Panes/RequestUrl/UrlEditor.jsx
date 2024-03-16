import { InfoCircleOutlined } from '@ant-design/icons';
import React from 'react';

const requestMethods = [
  {
    slug: 'get',
    method: 'GET',
  },
  {
    slug: 'post',
    method: 'POST',
  },
  {
    slug: 'put',
    method: 'PUT',
  },
  {
    slug: 'patch',
    method: 'PATCH',
  },
  {
    slug: 'delete',
    method: 'DELETE',
  },
];

export default function UrlEditor({
  url,
  setUrl,
  reqMethod,
  setReqMethod,
  onInputSend,
}) {
  return (
    <>
      <form className='flex'>
        <select
          className='px-4 py-2 border rounded-md border-gray-300  focus:outline-none bg-gray-100'
          value={reqMethod}
          onChange={(e) => setReqMethod(e.target.value)}
        >
          {requestMethods.map((option) => (
            <option key={option.slug} value={option.method}>
              {option.method}
            </option>
          ))}
        </select>
        <input
          className='ml-3 w-full px-4 py-2 border rounded-md border-gray-300 hover:border-major focus:outline-major'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          className='ml-3 px-6 py-2 rounded-md font-semibold text-white bg-major hover:bg-minor'
          type='button'
          onClick={(e) => onInputSend(e)}
        >
          Send
        </button>
      </form>

      <span className="bg-violet-100 rounded-lg flex px-3 py-3 mt-2 w-full">
      <InfoCircleOutlined className='text-violet-500' /> <p className=" text-gray-500 ml-2 text-xs font-semibold">Please dont forgot to add your Api Key to the Request Header and you fin it in your Dashboard <a href="https://santechapihubs.vercel.app/dashboard/apis" className="text-violet-500 underline">link</a>.</p>
      </span>
    </>
  );
}
