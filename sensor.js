document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/api/sensor_data')
      .then(response => response.json())
      .then(data => {
        const idCol = document.querySelector('.id.ts');
        const tempCol = document.querySelector('.temp.ts');
        const humidCol = document.querySelector('.humid.ts');
        const lightCol = document.querySelector('.light.ts');
        const timeCol = document.querySelector('.tg.ts');
  
        // Xóa toàn bộ nội dung cũ trong các cột
        idCol.innerHTML = '';
        tempCol.innerHTML = '';
        humidCol.innerHTML = '';
        lightCol.innerHTML = '';
        timeCol.innerHTML = '';
  
        // Thêm dữ liệu vào các cột đã được làm trống
        data.slice(0, 4).forEach(row => {
          // Thêm ID vào cột ID
          const idDiv = document.createElement('p');
          idDiv.textContent = row.id;
          idCol.appendChild(idDiv);
  
          // Thêm nhiệt độ vào cột Nhiệt độ
          const tempDiv = document.createElement('p');
          tempDiv.textContent = row.temp;
          tempCol.appendChild(tempDiv);
  
          // Thêm độ ẩm vào cột Độ ẩm
          const humidDiv = document.createElement('p');
          humidDiv.textContent = row.humid;
          humidCol.appendChild(humidDiv);
  
          // Thêm ánh sáng vào cột Ánh sáng
          const lightDiv = document.createElement('p');
          lightDiv.textContent = row.light;
          lightCol.appendChild(lightDiv);
  
          // Thêm thời gian vào cột Thời gian
          const timeDiv = document.createElement('p');
          timeDiv.textContent = row.time;
          timeCol.appendChild(timeDiv);
        });
      })
      .catch(error => console.error('Error:', error));
  });
  
  // ham phan trang cua bang dieu khien
  
  document.addEventListener('DOMContentLoaded', function() {
    let currentPage = 1;
    const rowsPerPage = 4;
    
    fetch('http://localhost:3000/api/sensor_data')
      .then(response => response.json())
      .then(data => {
        const idCol = document.querySelector('.id.ts');
        const tempCol = document.querySelector('.temp.ts');
        const humidCol = document.querySelector('.humid.ts');
        const lightCol = document.querySelector('.light.ts');
        const timeCol = document.querySelector('.tg.ts');
  
        function renderPage(page) {
          // Xóa toàn bộ nội dung cũ trong các cột
          idCol.innerHTML = '';
          tempCol.innerHTML = '';
          humidCol.innerHTML = '';
          lightCol.innerHTML = '';
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
  
            const tempDiv = document.createElement('p');
            tempDiv.textContent = row.temp;
            tempCol.appendChild(tempDiv);
  
            const humidDiv = document.createElement('p');
            humidDiv.textContent = row.humid;
            humidCol.appendChild(humidDiv);
  
            const lightDiv = document.createElement('p');
            lightDiv.textContent = row.light;
            lightCol.appendChild(lightDiv);
  
            const timeDiv = document.createElement('p');
            timeDiv.textContent = row.time;
            timeCol.appendChild(timeDiv);
          });
        }
  
        // Hiển thị trang đầu tiên khi tải trang
        renderPage(currentPage);
  
        // Hàm cập nhật phân trang
        function updatePagination() {
          const pagination = document.querySelector('.phan_trang');
          pagination.innerHTML = ''; // Xóa phân trang cũ
  
          const totalPages = Math.ceil(data.length / rowsPerPage);
  
          // Thêm nút mũi tên trái nếu không phải trang đầu tiên
          if (currentPage > 1) {
            const prevArrow = document.createElement('li');
            prevArrow.innerHTML = '<i class="fa-solid fa-angle-left"></i>';
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
            nextArrow.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
            nextArrow.classList.add('phan_trang_item', 'next-arrow');
            nextArrow.addEventListener('click', () => changePage(currentPage + 1));
            pagination.appendChild(nextArrow);
          }
        }
  
        // Hàm thay đổi trang
        function changePage(page) {
          currentPage = page;
          renderPage(currentPage);
          updatePagination();
        }
  
        // Hiển thị phân trang lần đầu
        updatePagination();
      })
      .catch(error => console.error('Error:', error));
  });



  
  