import React from 'react';

const CodeSnippet = ({ algorithm }) => {
  return (
    <div className="code-snippet">
      <div className="code-header">
        <span>{algorithm || 'Algorithm'}.java</span>
        <button>Copy</button>
      </div>
      <pre>
        {`public class ${algorithm || 'Algorithm'} {
  // Example code here based on the selected algorithm
}`}
      </pre>
    </div>
  );
};

export default CodeSnippet;
