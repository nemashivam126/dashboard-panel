import { useMemo } from 'react';
import { useTable, useGlobalFilter } from 'react-table';
import './Table.css'

const Table = ({ data }) => {
  const columns = useMemo(
    () => [
      { Header: 'Product Name', accessor: 'productName' },
      { Header: 'Stock', accessor: 'stock' },
      { Header: 'Price', accessor: 'price' },
      { Header: 'Total Sales', accessor: 'totalSales' }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter
  );

  const { globalFilter } = state;

  return (
    <div className="table-container">
      <div className='table-top'>
        <div><h5><b>Product Sell</b></h5></div>
        <div>
          <input
            className='input-search me-3'
            type="search"
            placeholder="🔍 Search"
            value={globalFilter || ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
          <select className='input-search me-4' onClick={() => setGlobalFilter('')}>
            <option>Last 30 Days</option>
          </select>
        </div>
      </div>
      <div className="table-responsive">
        <table {...getTableProps()} className="table" style={{ borderCollapse: 'collapse' }}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} style={{ borderBottom: '1px solid #ddd' }}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      padding: '20px 16px',
                      textAlign: 'left',
                      width: index === 0 ? '900px' : 'auto',
                    }}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>
                  {row.cells.map((cell, index) => (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '20px 16px',
                        textAlign: 'left',
                        fontWeight: index === 0 || index === 2 ? 'bold' : 'normal',
                        width: index === 0 ? '900px' : 'auto',
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
