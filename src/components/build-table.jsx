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
    return data.map((row, index) => (
      <tr key={index}>
        {Object.values(row).map((value, i) => (
          <td key={i}>{value}</td>
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
