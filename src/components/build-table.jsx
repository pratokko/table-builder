const BuildTable = ({ settings, data }) => {
  const renderTableHeaders = () => {
    return (
      <tr>
        {settings.headers.map((header) => (
          <th key={header}>{header}</th>
        ))}
      </tr>
    );
  };

  // Render table rows with data
  const renderTableRows = () => {
    return data.map((user, index) => (
      <tr key={index}>
        {Object.keys(user).map((key, i) => (
           <td key={i}>{typeof user[key] === 'object' ? JSON.stringify(user[key]) : user[key]}</td>
        ))}
      </tr>
    ));
  };

  if (!settings || !data || !settings.headers || data.length === 0) {
    return <div>No data to display</div>;
  }

  return (
    <div>
      <table className="table table-striped">
        <thead>{renderTableHeaders()}</thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
    </div>
  );
};

export default BuildTable;
