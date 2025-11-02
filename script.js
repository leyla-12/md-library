// mở / đóng modal
function openModal(id) {
  document.getElementById(id).style.display = "flex";
}
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// xóa dòng
function deleteRow(btn) {
  if (confirm("Bạn chắc chắn muốn xóa dòng này?")) {
    btn.closest("tr").remove();
  }
}

// sửa dòng (demo: chỉ alert)
function editRow(btn) {
  alert("Đây là giao diện tĩnh demo. Khi làm thật bạn sẽ mở form sửa ở đây.");
}

// tìm kiếm theo ô input
function searchTable(tableId, inputId, colIndex) {
  const input = document.getElementById(inputId).value.toLowerCase();
  const rows = document.querySelectorAll(`#${tableId} tbody tr`);
  rows.forEach((row) => {
    const text =
      row.cells[0].innerText.toLowerCase() +
      " " +
      row.cells[colIndex].innerText.toLowerCase();
    row.style.display = text.includes(input) ? "" : "none";
  });
}

// lọc theo lớp (độc giả)
function filterByClass() {
  const val = document.getElementById("lopFilter").value;
  const rows = document.querySelectorAll("#docgiaTable tbody tr");
  rows.forEach((row) => {
    const lop = row.getAttribute("data-lop");
    row.style.display = val === "all" || lop === val ? "" : "none";
  });
}

// lọc theo thể loại (sách)
function filterByCategory() {
  const val = document.getElementById("theloaiFilter").value;
  const rows = document.querySelectorAll("#sachTable tbody tr");
  rows.forEach((row) => {
    const tl = row.getAttribute("data-tl");
    row.style.display = val === "all" || tl === val ? "" : "none";
  });
}

// lọc theo trạng thái (phiếu mượn)
function filterByStatus() {
  const val = document.getElementById("ttFilter").value;
  const rows = document.querySelectorAll("#pmTable tbody tr");
  rows.forEach((row) => {
    const tt = row.getAttribute("data-tt");
    row.style.display = val === "all" || tt === val ? "" : "none";
  });
}

// thêm độc giả demo
function addDocGia() {
  const mdg = document.getElementById("mdg").value || "DGNEW";
  const ht = document.getElementById("ht").value || "Độc giả mới";
  const lop = document.getElementById("lop").value || "9A1";

  const tbody = document.querySelector("#docgiaTable tbody");
  const tr = document.createElement("tr");
  tr.setAttribute("data-lop", lop);
  tr.innerHTML = `
    <td>${mdg}</td>
    <td>${ht}</td>
    <td>Nam</td>
    <td>2010-01-01</td>
    <td>--</td>
    <td>--</td>
    <td>--</td>
    <td>${lop}</td>
    <td>
      <button class="link-btn" onclick="editRow(this)">Sửa</button>
      <button class="link-btn danger" onclick="deleteRow(this)">Xóa</button>
    </td>
  `;
  tbody.appendChild(tr);
  closeModal("modalDocGia");
}

// thêm sách demo
function addSach() {
  const ms = document.getElementById("ms").value || "SNEW";
  const ts = document.getElementById("ts").value || "Sách mới";
  const tl = document.getElementById("tl").value || "Văn học";

  const tbody = document.querySelector("#sachTable tbody");
  const tr = document.createElement("tr");
  tr.setAttribute("data-tl", tl);
  tr.innerHTML = `
    <td>${ms}</td>
    <td>${ts}</td>
    <td>${tl}</td>
    <td>2025</td>
    <td>NXB</td>
    <td>Tác giả</td>
    <td>5</td>
    <td>
      <button class="link-btn" onclick="editRow(this)">Sửa</button>
      <button class="link-btn danger" onclick="deleteRow(this)">Xóa</button>
    </td>
  `;
  tbody.appendChild(tr);
  closeModal("modalSach");
}

// thêm phiếu mượn demo
function addPM() {
  const mp = document.getElementById("mp").value || "PMNEW";
  const dg = document.getElementById("dgpm").value || "Độc giả mới";
  const nm = document.getElementById("ngaymuon").value || "2025-11-02";
  const ht = document.getElementById("hantra").value || "2025-11-10";
  const sm = document.getElementById("sachmuon").value || "S001";

  const tbody = document.querySelector("#pmTable tbody");
  const tr = document.createElement("tr");
  tr.setAttribute("data-tt", "dangmuon");
  tr.innerHTML = `
    <td>${mp}</td>
    <td>${dg}</td>
    <td>${nm}</td>
    <td>${ht}</td>
    <td><span class="badge warning">Đang mượn</span></td>
    <td>${sm}</td>
    <td><button class="link-btn danger" onclick="deleteRow(this)">Xóa</button></td>
  `;
  tbody.appendChild(tr);
  closeModal("modalPM");
}
