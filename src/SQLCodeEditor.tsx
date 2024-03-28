import React, { useState } from 'react';
import { format } from 'sql-formatter';

const SqlFormatterComponent = () => {
  const [sqlQuery, setSqlQuery] = useState('');

  const handleInputChange = (event:any) => {
    setSqlQuery(event.target.value);
  };

  const formatSql = () => {
    
    setSqlQuery(format('SELECT * FROM tbl', { language: 'mysql' }));
  };

  return (
    <div>
      <textarea
        rows={10}
        cols={50}
        value={sqlQuery}
        onChange={handleInputChange}
        placeholder="Enter your SQL query here..."
      />
      <br />
      <button onClick={formatSql}>Format SQL</button>
    </div>
  );
};

export default SqlFormatterComponent;
