// mở / đóng modal
function openModal(id){ document.getElementById(id).classList.add('show'); }
function closeModal(id){ document.getElementById(id).classList.remove('show'); }

// xoá dòng
function deleteRow(btn){
  if(confirm("Bạn có chắc muốn xóa bản ghi này?")) btn.closest('tr').remove();
}

// demo sửa
function editRow(btn, type){
  alert("Demo cập nhật " + (type || "bản ghi") + ". Khi nộp bài bạn mô tả: nhấn Sửa sẽ mở form cập nhật.");
}

/* ====== ĐỘC GIẢ ====== */
function searchDG(){
  const key = document.getElementById('searchDG')?.value?.toLowerCase() || "";
  document.querySelectorAll('#tableDG tbody tr').forEach(r=>{
    r.style.display = r.innerText.toLowerCase().includes(key) ? '' : 'none';
  });
}

function filterDG(){
  const lop = document.getElementById('filterLop')?.value?.toLowerCase() || "";
  const cv = document.getElementById('filterCV')?.value?.toLowerCase() || "";
  document.querySelectorAll('#tableDG tbody tr').forEach(r=>{
    const lopVal = r.children[7].innerText.toLowerCase();
    const cvVal = r.children[8].innerText.toLowerCase();
    const okLop = !lop || lopVal === lop;
    const okCV = !cv || cvVal === cv;
    r.style.display = okLop && okCV ? '' : 'none';
  });
}

function addDocGia(){
  const ma = dg_ma.value || 'DGNEW';
  const ten = dg_ten.value || 'Chưa có tên';
  const gt = dg_gt.value;
  const ns = dg_ns.value;
  const dc = dg_dc.value;
  const sdt = dg_sdt.value;
  const cccd = dg_cccd.value;
  const lop = dg_lop.value || '—';
  const cv = dg_cv.value;

  const tbody = document.querySelector('#tableDG tbody');
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${ma}</td>
    <td>${ten}</td>
    <td>${gt}</td>
    <td>${ns}</td>
    <td>${dc}</td>
    <td>${sdt}</td>
    <td>${cccd}</td>
    <td>${lop}</td>
    <td>${cv}</td>
    <td class="actions">
      <button class="btn-icon btn-edit" onclick="editRow(this,'dg')"><i class="fa-solid fa-pen"></i></button>
      <button class="btn-icon btn-delete" onclick="deleteRow(this)"><i class="fa-solid fa-trash"></i></button>
    </td>
  `;
  tbody.appendChild(tr);
  closeModal('modalDG');
}

/* ====== SÁCH ====== */
function searchSach(){
  const key = document.getElementById('searchSach').value.toLowerCase();
  document.querySelectorAll('#tableSach tbody tr').forEach(r=>{
    r.style.display = r.innerText.toLowerCase().includes(key) ? '' : 'none';
  });
}

function filterSach(){
  const tl = document.getElementById('filterTL').value.toLowerCase();
  document.querySelectorAll('#tableSach tbody tr').forEach(r=>{
    const val = r.children[2].innerText.toLowerCase();
    r.style.display = !tl || val === tl ? '' : 'none';
  });
}

function addSach(){
  const ma = s_ma.value || 'SNEW';
  const ten = s_ten.value || 'Chưa đặt tên';
  const tl = s_tl.value || 'Khác';
  const nam = s_nam.value || '';
  const nxb = s_nxb.value || '';
  const tg = s_tg.value || '';
  const sl = s_sl.value || '0';

  const tbody = document.querySelector('#tableSach tbody');
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${ma}</td>
    <td>${ten}</td>
    <td>${tl}</td>
    <td>${nam}</td>
    <td>${nxb}</td>
    <td>${tg}</td>
    <td>${sl}</td>
    <td class="actions">
      <button class="btn-icon btn-edit" onclick="editRow(this,'sach')"><i class="fa-solid fa-pen"></i></button>
      <button class="btn-icon btn-delete" onclick="deleteRow(this)"><i class="fa-solid fa-trash"></i></button>
    </td>
  `;
  tbody.appendChild(tr);
  closeModal('modalSach');
}

/* ====== PHIẾU MƯỢN ====== */
function searchPM(){
  const key = document.getElementById('searchPM').value.toLowerCase();
  document.querySelectorAll('#tablePM tbody tr').forEach(r=>{
    r.style.display = r.innerText.toLowerCase().includes(key) ? '' : 'none';
  });
}

function filterPM(){
  const tt = document.getElementById('filterTT').value.toLowerCase();
  document.querySelectorAll('#tablePM tbody tr').forEach(r=>{
    const val = r.children[4].innerText.toLowerCase();
    r.style.display = !tt || val.includes(tt) ? '' : 'none';
  });
}

function addPM(){
  const ma = pm_ma.value || 'PMNEW';
  const dg = pm_dg.value || 'Không rõ';
  const nm = pm_nm.value || '';
  const ht = pm_ht.value || '';
  const tt = pm_tt.value;
  const gc = pm_gc.value || '';

  const tbody = document.querySelector('#tablePM tbody');
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${ma}</td>
    <td>${dg}</td>
    <td>${nm}</td>
    <td>${ht}</td>
    <td><span class="badge">${tt}</span></td>
    <td>${gc}</td>
    <td class="actions">
      <button class="btn-icon btn-edit" onclick="editRow(this,'pm')"><i class="fa-solid fa-pen"></i></button>
      <button class="btn-icon btn-delete" onclick="deleteRow(this)"><i class="fa-solid fa-trash"></i></button>
    </td>
  `;
  tbody.appendChild(tr);
  closeModal('modalPM');
}

/* ====== BÁO CÁO ====== */
function filterBC(){
  const type = document.getElementById('bc_loai').value;
  document.querySelectorAll('#tableBC tbody tr').forEach(r=>{
    const status = r.dataset.status;
    r.style.display = (type === 'all' || status === type) ? '' : 'none';
  });
}
