import { FaFileExcel } from "react-icons/fa";
import { useState } from "react";
import * as XLSX from "xlsx";

function UserAccount() {
  const [searchTerm, setSearchTerm] = useState(""); // it saves what user will type
  const [accounts, setAccounts] = useState([
    // Sample data for 6 pages
    ...Array(30).fill(null).map((_, i) => ({
      name: `User${i + 1}`,
      email: `user${i + 1}@example.com`,
      phone: `123456789${i}`,
      website: `http://example${i}.com`,
      industry: `Industry ${i % 5}`,
      status: i % 2 === 0 ? "true" : "false",
      remark: `Remark for user ${i + 1}`,
    })),
  ]);

  const [editMode, setEditMode] = useState(false);
  const [editedAccounts, setEditedAccounts] = useState([...accounts]); // Giving user ability to edit all data
  const [originalAccounts, setOriginalAccounts] = useState([...accounts]); // Store original data before editing
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const rowsPerPage = 5;
  const totalPages = Math.ceil(accounts.length / rowsPerPage);

  // Filter accounts based on search term
  const filteredAccounts = editedAccounts.filter((account) =>
    account.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get accounts for the current page
  const paginatedAccounts = filteredAccounts.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Export table data to Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(accounts);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Accounts");
    XLSX.writeFile(workbook, "Accounts.xlsx");
  };

  // Handling edits
  const handleChange = (index, field, value) => {
    const updatedAccounts = [...editedAccounts];
    updatedAccounts[(currentPage - 1) * rowsPerPage + index][field] = value;
    setEditedAccounts(updatedAccounts);
  };

  // Enable edit mode
  const enableEditMode = () => {
    setOriginalAccounts([...accounts]); // Save original state before editing
    setEditMode(true);
    setEditedAccounts([...accounts]);
  };

  // Save edits
  const saveChanges = () => {
    setAccounts(editedAccounts);
    setEditMode(false);
  };

  // Cancel edit mode
  const cancelEdit = () => {
    setEditMode(false);
    setEditedAccounts([...originalAccounts]);
  };

  // Add new row
  const addRow = () => {
    const newRow = Object.keys(editedAccounts[0]).reduce((acc, key) => {
      acc[key] = "";
      return acc;
    }, {});
    setEditedAccounts([...editedAccounts, newRow]);
  };

  // Add new column
  const addColumn = () => {
    const newColumn = prompt("Enter column name:");
    if (newColumn) {
      setEditedAccounts(editedAccounts.map((account) => ({ ...account, [newColumn]: "" })));
    }
  };

  // Handle previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="bg-base-100 h-full p-4">
      <div className="bg-base-100 pb-4">
        <button className="btn" onClick={cancelEdit}>Account</button>
        <button className="btn" onClick={enableEditMode}>Edit</button>
        {editMode && (
          <>
            <button className="btn bg-green-400" onClick={saveChanges}>Save</button>
            <button className="btn bg-red-400" onClick={cancelEdit}>Cancel</button>
            <button className="btn bg-blue-400" onClick={addRow}>Add Row</button>
            <button className="btn bg-yellow-400" onClick={addColumn}>Add Column</button>
          </>
        )}
      </div>

      <div className="flex justify-between pb-4">
        <div className="text-3xl font-bold">Account List</div>
        <div className="flex gap-4">
          <button className="btn" onClick={exportToExcel}>
            <FaFileExcel className="text-green-500 text-xl" /> Export
          </button>
          <input
            type="text"
            className="input input-bordered"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="overflow-x-auto w-full mt-4">
        <table className="table table-zebra w-full">
          <thead className="bg-blue-300">
            <tr>
              {Object.keys(editedAccounts[0] || {}).map((key, idx) => (
                <th key={idx}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedAccounts.map((account, index) => (
              <tr key={index}>
                {Object.keys(account).map((field, idx) => (
                  <td key={idx}>
                    {editMode ? (
                      <input
                        type="text"
                        value={account[field]}
                        className="input input-sm input-bordered"
                        onChange={(e) => handleChange(index, field, e.target.value)}
                      />
                    ) : (
                      account[field]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex space-x-4 justify-self-end mt-4">
        <div>Page {currentPage} of {totalPages}</div>
        <kbd className={`kbd cursor-pointer ${currentPage === 1 ? "opacity-50" : ""}`} onClick={prevPage}>◀︎</kbd>
        <kbd className={`kbd cursor-pointer ${currentPage === totalPages ? "opacity-50" : ""}`} onClick={nextPage}>▶︎</kbd>
      </div>
    </div>
  );
}

export default UserAccount;
