document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/api/device_history')
        .then(response => response.json())
        .then(data => {
            const idCol = document.querySelector('.id.tso');
            const tbiCol = document.querySelector('.tbi.tso');
            const hdCol = document.querySelector('.hd.tso');
            const tgCol = document.querySelector('.tg.tso');
  
            // Xóa nội dung cũ nếu cần
            idCol.innerHTML = '';
            tbiCol.innerHTML = '';
            hdCol.innerHTML = '';
            tgCol.innerHTML = '';
  
            // Duyệt qua từng hàng dữ liệu và chèn vào cột tương ứng
            data.forEach(row => {
                const idDiv = document.createElement('p');
                idDiv.textContent = row.id;
                idCol.appendChild(idDiv);
  
                const tbiDiv = document.createElement('p');
                tbiDiv.textContent = row.device;
                tbiCol.appendChild(tbiDiv);
  
                const hdDiv = document.createElement('p');
                hdDiv.textContent = row.action;
                hdCol.appendChild(hdDiv);
  
                const tgDiv = document.createElement('p');
                tgDiv.textContent = row.time;
                tgCol.appendChild(tgDiv);
            });
        })
        .catch(error => console.error('Error:', error));
  });

document.addEventListener('DOMContentLoaded', function() {
    let currentPage = 1;
    const rowsPerPage = 4;
    
    fetch('http://localhost:3000/api/device_history')
        .then(response => response.json())
        .then(data => {
            const idCol = document.querySelector('.id.tso');
            const deviceCol = document.querySelector('.tbi.tso');
            const actionCol = document.querySelector('.hd.tso');
            const timeCol = document.querySelector('.tg.tso');

            function renderPage(page) {
                // Xóa toàn bộ nội dung cũ trong các cột
                idCol.innerHTML = '';
                deviceCol.innerHTML = '';
                actionCol.innerHTML = '';
                timeCol.innerHTML = '';

                // Tính toán chỉ mục bắt đầu và kết thúc cho trang hiện tại
                const start = (page - 1) * rowsPerPage;
                const end = page * rowsPerPage;

                // Trích xuất và thêm dữ liệu vào các cột
                const pageData = data.slice(start, end);
                pageData.forEach(row => {
                    const idDiv = document.createElement('p');
                    idDiv.textContent = row.id;
                    idCol.appendChild(idDiv);

                    const deviceDiv = document.createElement('p');
                    deviceDiv.textContent = row.device;
                    deviceCol.appendChild(deviceDiv);

                    const actionDiv = document.createElement('p');
                    actionDiv.textContent = row.action;
                    actionCol.appendChild(actionDiv);

                    const timeDiv = document.createElement('p');
                    const date = new Date(row.time);
                    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
                    const formattedTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
                    timeDiv.textContent = `${formattedDate} ${formattedTime}`;
                    timeCol.appendChild(timeDiv);
                });
            }

            function updatePagination() {
                const pagination = document.querySelector('.phan_trang.kc-device');
                pagination.innerHTML = ''; // Xóa phân trang cũ

                const totalPages = Math.ceil(data.length / rowsPerPage);

                // Thêm nút mũi tên trái nếu không phải trang đầu tiên
                if (currentPage > 1) {
                    const prevArrow = document.createElement('li');
                    prevArrow.textContent = '<'; // Mũi tên trái
                    prevArrow.classList.add('phan_trang_item', 'prev-arrow');
                    prevArrow.addEventListener('click', () => changePage(currentPage - 1));
                    pagination.appendChild(prevArrow);
                }

                // Thêm các số trang
                for (let i = 1; i <= totalPages; i++) {
                    const pageItem = document.createElement('li');
                    pageItem.textContent = i;
                    pageItem.classList.add('phan_trang_item');
                    if (i === currentPage) {
                        pageItem.classList.add('active');
                    }
                    pageItem.addEventListener('click', () => changePage(i));
                    pagination.appendChild(pageItem);
                }

                // Thêm nút mũi tên phải nếu không phải trang cuối cùng
                if (currentPage < totalPages) {
                    const nextArrow = document.createElement('li');
                    nextArrow.textContent = '>'; // Mũi tên phải
                    nextArrow.classList.add('phan_trang_item', 'next-arrow');
                    nextArrow.addEventListener('click', () => changePage(currentPage + 1));
                    pagination.appendChild(nextArrow);
                }
            }

            function changePage(page) {
                currentPage = page;
                renderPage(currentPage);
                updatePagination();
            }

            // Hiển thị trang đầu tiên khi tải trang
            renderPage(currentPage);

            // Hiển thị phân trang lần đầu
            updatePagination();
        })
        .catch(error => console.error('Error:', error));
});


