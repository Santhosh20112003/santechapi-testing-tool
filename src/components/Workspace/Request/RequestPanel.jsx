import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { convertKeyValueToObject } from '../../../utils/helpers';
import UrlEditor from '../../Panes/RequestUrl/UrlEditor';
import RequestTabGroup from '../../Tab-Groups/RequestTabGroup';
import { InfoCircleOutlined } from '@ant-design/icons';

const keyPairInitState = [
  {
    id: uuidv4(),
    keyItem: '',
    valueItem: '',
  },
];

export default function Request({ setResponse, setLoading, loading }) {
  const [url, setUrl] = useState('https://santechapi.vercel.app/weather/location/chennai');
  const [reqMethod, setReqMethod] = useState('GET');
  const [queryParams, setQueryParams] = useState(keyPairInitState);
  const [headers, setHeaders] = useState(keyPairInitState);
  const [body, setBody] = useState('{\n\t\n}');

  const handleOnInputSend = async (e) => {
    setLoading(true);

    e.preventDefault();
    const requestBody = body.toString();

    let data;
    try {
      data = JSON.parse(requestBody);
    } catch (e) {
      alert('Something is wrong with the JSON data.');
    }
    if (!url.includes("santechapi.vercel.app")) {
      setResponse({ data: "Request to this domain is allowed only for: https://santechapi.vercel.app/",headers:{
        "Error":"Only SanTech API URLs are supported"
      },status:400,customData:{
        time:0
      } });
      setLoading(false);
      return false;
    }
    try {
      const response = await axios({
        url: url,
        method: reqMethod,
        params: convertKeyValueToObject(queryParams),
        headers: convertKeyValueToObject(headers),
        data,
      });
      setResponse(response);
    } catch (e) {
      console.log(e);
      setResponse(e);
    }

    setLoading(false);
  };
  return (
    <>
      <UrlEditor
        url={url}
        setUrl={setUrl}
        reqMethod={reqMethod}
        setReqMethod={setReqMethod}
        onInputSend={handleOnInputSend}
      />
     
      <RequestTabGroup
        queryParams={queryParams}
        setQueryParams={setQueryParams}
        headers={headers}
        setHeaders={setHeaders}
        body={'{\n\t\n}'}
        setBody={setBody}
      />
    </>
  );
}
