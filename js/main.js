// Yêu cầu: Nhập ngày tháng năm, tìm ngày mai và ngày hôm qua

/**
 *Khối 1: Dữ liệu đang có sẵn (Input)
 * ngày tháng năm
 *
 *Khối 2:Các bước xử lý code
 * B1: Tạo biến day,month,year
 * B2: Gan giá trị cho biến
 * B3: Lập công thức tính toán
 *    - Xác định số ngày trong mỗi tháng
 *    - Dùng switch cho các tháng, nhóm các tháng cùng ngày lại với nhau
 *    - Dựa vào số ngày của tháng để tính ngài mai, ngày hôm qua
 *    - Dung function namNhuan để biết có phải năm nhuận không, từ đó
 *      tính số ngày tháng 2 (28 hoặc 29)
 *
 * B4: Thông báo kết quả ở website
 *
 *Khối 3:Kết quả (Output)
 * document.getElementById('ketQua1').innerHTML
 */

namNhuan = (year) => {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
};

document.getElementById('btnNgayMai').onclick = () => {
  let day = Number(document.getElementById('nhapNgay').value),
    month = Number(document.getElementById('inputMonth').value),
    year = Number(document.getElementById('nhapNam').value),
    result = '';
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
      result =
        day > 0 && day < 31
          ? `${day + 1}/${month}/${year}`
          : 31 == day
          ? `1/${month + 1}/${year}`
          : 'Ngày không xác định';
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      result =
        day > 0 && day < 30
          ? `${day + 1}/${month}/${year}`
          : 30 == day
          ? `1/${month + 1}/${year}`
          : 'Ngày không xác định';
      break;
    case 12:
      result =
        day > 0 && day < 31
          ? `${day + 1}/${month}/${year}`
          : 31 == day
          ? `1/1/${year + 1}`
          : 'Ngày không xác định';
      break;
    case 2:
      result = namNhuan(year)
        ? day > 0 && day < 29
          ? `${day + 1}/${month}/${year}`
          : 29 == day
          ? `1/${month + 1}/${year}`
          : 'Ngày không xác định (năm nhuận?)'
        : day > 0 && day < 28
        ? `${day + 1}/${month}/${year}`
        : 28 == day
        ? `1/${month + 1}/${year}`
        : 'Ngày không xác định (năm nhuận?)';
      break;
    default:
      result = 'Tháng không xác định';
  }
  document.getElementById('ketQua1').innerHTML = result;
};

document.getElementById('btnHomQua').onclick = () => {
  let day = Number(document.getElementById('nhapNgay').value),
    month = Number(document.getElementById('inputMonth').value),
    year = Number(document.getElementById('nhapNam').value),
    result = '';
  switch (month) {
    case 1:
      result =
        day > 1 && day <= 31
          ? `${day - 1}/${month}/${year}`
          : 1 == day
          ? `31/12/${year - 1}`
          : 'Ngày không xác định';
      break;
    case 2:
      result = namNhuan(year)
        ? day > 1 && day <= 29
          ? `${day - 1}/${month}/${year}`
          : 1 == day
          ? `31/${month - 1}/${year}`
          : 'Ngày không xác định (năm nhuận?)'
        : day > 1 && day <= 28
        ? `${day - 1}/${month}/${year}`
        : 1 == day
        ? `31/${month - 1}/${year}`
        : 'Ngày không xác định (năm nhuận?)';
      break;
    case 3:
      result =
        day > 1 && day < 31
          ? `${day - 1}/${month}/${year}`
          : 1 == day
          ? namNhuan(year)
            ? `29/${month - 1}/${year}`
            : `28/${month - 1}/${year}`
          : 'Ngày không xác định';
      break;
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      result =
        day > 1 && day < 31
          ? `${day - 1}/${month}/${year}`
          : 1 == day
          ? `30/${month - 1}/${year}`
          : 'Ngày không xác định';
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      result =
        day > 1 && day <= 30
          ? `${day - 1}/${month}/${year}`
          : 1 == day
          ? `31/${month - 1}/${year}`
          : 'Ngày không xác định';
      break;
    default:
      result = 'Tháng không xác định';
  }
  document.getElementById('ketQua1').innerHTML = result;
};

// Yêu cầu: Tính số ngày trong tháng

/**
 *Khối 1: Dữ liệu đang có sẵn (Input)
 * năm, tháng
 *
 *Khối 2:Các bước xử lý code
 * B1: Tạo biến month, year
 * B2: Gan giá trị cho biến
 * B3: Lập công thức tính toán
 *     - Tháng 1,3,5,7,8,10,12 có 31 ngày
 *     - Tháng 2 có 28 hoặc 29 ngày, dùng function namNhuan để xác định
 *     - Các tháng còn lại có 30 ngày
 *     - Dùng switch theo biến month để tính số ngày
 *
 * B4: Thông báo kết quả ở website
 *
 *Khối 3:Kết quả (Output)
 * document.getElementById('ketQua2').innerHTML
 */

document.getElementById('btnTinhNgay').onclick = () => {
  let month = Number(document.getElementById('nhapThang2').value),
    year = Number(document.getElementById('nhapNam2').value),
    days;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    case 2:
      days = namNhuan(year) ? 29 : 28;
      break;
    default:
      days = 0;
  }
  document.getElementById(
    'ketQua2'
  ).innerHTML = `Tháng ${month} năm ${year} có ${days} ngày`;
};

// Yêu cầu: Đọc số 3 chữ số

/**
 *Khối 1: Dữ liệu đang có sẵn (Input)
 * số có 3 chữ số
 *
 *Khối 2:Các bước xử lý code
 * B1: Tạo biến hangTram, hangChuc, hangDonvi
 * B2: Gan giá trị cho biến count = 0, các biến còn lại lấy từ form
 * B3: Lập công thức tính toán
 *     - Lấy số hàng trăm bằng Math.floor(number / 100)
 *     - Lấy số hàng chục bằng Math.floor((number % 100) / 10)
 *     - Lấy số hàng đơn vị bằng (number % 100) % 10
 *     - switch case để đọc số từng hàng
 *
 *
 * B4: Thông báo kết quả ở website
 *
 *Khối 3:Kết quả (Output)
 * document.getElementById('ketQua3').innerHTML
 */

document.getElementById('btnDocSo').onclick = () => {
  let number = document.getElementById('nhapSo').value,
    hangTram = Math.floor(number / 100),
    hangChuc = Math.floor((number % 100) / 10),
    hangDonVi = (number % 100) % 10,
    result = '';
  switch (hangTram) {
    case 1:
      result += 'một trăm ';
      break;
    case 2:
      result += 'hai trăm ';
      break;
    case 3:
      result += 'ba trăm ';
      break;
    case 4:
      result += 'bốn trăm ';
      break;
    case 5:
      result += 'năm trăm ';
      break;
    case 6:
      result += 'sáu trăm ';
      break;
    case 7:
      result += 'bảy trăm ';
      break;
    case 8:
      result += 'tám trăm ';
      break;
    case 9:
      result += 'chín trăm ';
      break;
    default:
      alert('hãy nhập số có 3 chữ số');
  }
  switch (hangChuc) {
    case 0:
      hangDonVi == 0 ? (result += '') : (result += 'lẻ ');
      break;
    case 1:
      result += 'mười ';
      break;
    case 2:
      result += 'hai mươi ';
      break;
    case 3:
      result += 'ba mươi ';
      break;
    case 4:
      result += 'bốn mươi ';
      break;
    case 5:
      result += 'năm mươi ';
      break;
    case 6:
      result += 'sáu mươi ';
      break;
    case 7:
      result += 'bảy mươi ';
      break;
    case 8:
      result += 'tám mươi ';
      break;
    case 9:
      result += 'chín mươi ';
      break;
    default:
      alert('hãy nhập số có 3 chữ số');
  }
  switch (hangDonVi) {
    case 0:
      result += '';
      break;
    case 1:
      result += 'mốt';
      break;
    case 2:
      result += 'hai';
      break;
    case 3:
      result += 'ba';
      break;
    case 4:
      result += 'bốn';
      break;
    case 5:
      result += 'năm';
      break;
    case 6:
      result += 'sáu';
      break;
    case 7:
      result += 'bảy';
      break;
    case 8:
      result += 'tám';
      break;
    case 9:
      result += 'chín';
      break;
    default:
      alert('hãy nhập số có 3 chữ số');
  }
  document.getElementById('ketQua3').innerHTML = result;
};
// Yêu cầu: Xác định loại tam giác dựa trên chiều dài 3 cạnh

/**
 *Khối 1: Dữ liệu đang có sẵn (Input)
 * tên và tọa độ của 3 sinh viên và trường học
 *
 *Khối 2:Các bước xử lý code
 * B1: Tạo biến name, x ,y cho 3 sinh viên và trường học
 * B2: Gan giá trị cho biến
 * B3: Lập công thức tính toán
 *     - Tính khoảng cách bằng định lý pytago (khoảng cách là cạnh huyền)
 *     - so sánh tìm ra khoảng cách lớn nhất
 *
 * B4: Thông báo kết quả ở website
 *
 *Khối 3:Kết quả (Output)
 *  document.getElementById('ketQua').innerHTML
 */

document.getElementById('btnSearch').onclick = () => {
  let name1 = document.getElementById('sinhVien1').value,
    x1 = document.getElementById('toaDoX1').value,
    y1 = document.getElementById('toaDoY1').value,
    name2 = document.getElementById('sinhVien2').value,
    x2 = document.getElementById('toaDoX2').value,
    y2 = document.getElementById('toaDoY2').value,
    name3 = document.getElementById('sinhVien3').value,
    x3 = document.getElementById('toaDoX3').value,
    y3 = document.getElementById('toaDoY3').value,
    x4 = document.getElementById('toaDoX4').value,
    y4 = document.getElementById('toaDoY4').value;

  khoangCachSv1 = Math.sqrt(Math.pow(x4 - x1, 2) + Math.pow(y4 - y1, 2));

  khoangCachSv2 = Math.sqrt(Math.pow(x4 - x2, 2) + Math.pow(y4 - y2, 2));

  khoangCachSv3 = Math.sqrt(Math.pow(x4 - x3, 2) + Math.pow(y4 - y3, 2));

  document.getElementById('txtSearch').innerHTML =
    khoangCachSv1 > khoangCachSv2 && khoangCachSv1 > khoangCachSv3
      ? name1
      : khoangCachSv2 > khoangCachSv1 && khoangCachSv2 > khoangCachSv3
      ? name2
      : name3;
};
