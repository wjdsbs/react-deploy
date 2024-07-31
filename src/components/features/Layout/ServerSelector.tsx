import { Select } from '@chakra-ui/react';
import React, { useState } from 'react';

import { servers } from '@/api/constants';
import { setBaseURL } from '@/api/instance';

const SESSION_STORAGE_KEY = 'selectedServer';

export const ServerSelector = () => {
  const [selectedServer, setSelectedServer] = useState<string>(() => {
    const savedServerKey = sessionStorage.getItem(SESSION_STORAGE_KEY);
    return savedServerKey ? savedServerKey : Object.keys(servers)[0];
  });

  const handleServerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newServerKey = event.target.value;
    const newBaseURL = servers[newServerKey];

    setSelectedServer(newServerKey);
    setBaseURL(newBaseURL);
    sessionStorage.setItem(SESSION_STORAGE_KEY, newServerKey);

    window.location.reload();
  };

  return (
    <Select value={selectedServer} onChange={handleServerChange} width={200}>
      {Object.keys(servers).map((key) => (
        <option key={key} value={key}>
          {key}
        </option>
      ))}
    </Select>
  );
};
