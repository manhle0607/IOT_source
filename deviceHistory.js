document.addEventListener('DOMContentLoaded', function () {
    const data = [];
    for (let i = 1; i <= 50; i++) {
        data.push({
            id: i,
            device: `Device ${i}`,  // Example device values
            action: i % 2 === 0 ? 'On' : 'Off',  // Example action values
            time: `${10 + Math.floor(i / 5)}:${(i * 5) % 60} AM` // Time in 5 minute intervals
        });
    }

    const rowsPerPage = 5;
    let currentPage = 1;

    function renderTable(data, page = 1) {
        currentPage = page;

        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const paginatedData = data.slice(start, end);

        const tableBody = document.getElementById('historyTableBody');
        tableBody.innerHTML = '';

        paginatedData.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.id}</td>
                <td>${row.device}</td>
                <td>${row.action}</td>
                <td>${row.time}</td>
            `;
            tableBody.appendChild(tr);
        });

        renderPagination(data.length, page);
    }

    function renderPagination(totalRows, page) {
        const totalPages = Math.ceil(totalRows / rowsPerPage);
        const maxPagesToShow = 3;  // Number of page links to show at a time
        const pagination = document.getElementById('historyPagination');
        pagination.innerHTML = '';

        // Previous button
        const prevButton = document.createElement('button');
        prevButton.textContent = '<';
        prevButton.disabled = page === 1;
        prevButton.addEventListener('click', () => renderTable(filteredData, page - 1));
        pagination.appendChild(prevButton);

        // Calculate start and end page numbers
        let startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

        if (endPage - startPage + 1 < maxPagesToShow) {
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }

        // Add first page and ellipsis if needed
        if (startPage > 1) {
            addPageButton(1);
            if (startPage > 2) {
                addEllipsis();
            }
        }

        // Add page buttons
        for (let i = startPage; i <= endPage; i++) {
            addPageButton(i);
        }

        // Add last page and ellipsis if needed
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                addEllipsis();
            }
            addPageButton(totalPages);
        }

        // Next button
        const nextButton = document.createElement('button');
        nextButton.textContent = '>';
        nextButton.disabled = page === totalPages;
        nextButton.addEventListener('click', () => renderTable(filteredData, page + 1));
        pagination.appendChild(nextButton);

        function addPageButton(pageNumber) {
            const button = document.createElement('button');
            button.textContent = pageNumber;
            button.className = pageNumber === page ? 'active' : '';
            button.addEventListener('click', () => renderTable(filteredData, pageNumber));
            pagination.appendChild(button);
        }

        function addEllipsis() {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            pagination.appendChild(ellipsis);
        }
    }

    const searchInput = document.getElementById('historySearchInput');
    let filteredData = data;

    searchInput.addEventListener('input', function () {
        const searchText = searchInput.value.toLowerCase();
        filteredData = data.filter(row =>
            String(row.time).toLowerCase().includes(searchText)
        );
        renderTable(filteredData, 1);
    });

    renderTable(data, currentPage);
});



