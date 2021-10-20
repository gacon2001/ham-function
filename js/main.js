//!Quản lí tuyển sinh:
const DIEM_UUTIEN_KHUVUC_A = 2;
const DIEM_UUTIEN_KHUVUC_B = 1.5;
const DIEM_UUTIEN_KHUVUC_C = 0.5;
const DIEM_UUTIEN_DOITUONG_1 = 2.5;
const DIEM_UUTIEN_DOITUONG_2 = 1.5;
const DIEM_UUTIEN_DOITUONG_3 = 1;

document.getElementById("btnResult").onclick= function () {
    var diemchuan= document.getElementById("diemchuan").value;
    var mon1= Number(document.getElementById("mon1").value);
    var mon2= Number(document.getElementById("mon2").value);
    var mon3= Number(document.getElementById("mon3").value);
    var areaValue= document.getElementById("area").value;
    var objectValue= document.getElementById("object").value;
    console.log(diemchuan, mon1, mon2, mon3, areaValue, objectValue );

    var sum= tongdiem(mon1, mon2, mon3, areaValue, objectValue);

    if (mon1 === 0|| mon2 ===0 ||mon3===0) {
        document.getElementById("txtResult").innerHTML= "Bạn đã rớt. Do có điểm liệt";
    } else {
        if (sum >= diemchuan) {
            document.getElementById("txtResult").innerHTML= "Bạn đã đậu với số điểm " + sum;
        } else {
            document.getElementById("txtResult").innerHTML= "Bạn đã rớt.";
        }
    }
}

function tongdiem(mon1, mon2, mon3, areaValue, objectValue) {
    var diemUuTien = 0;
    if (areaValue !== "") {
        if (areaValue === "a") {
            diemUuTien += DIEM_UUTIEN_KHUVUC_A;
        }else if (areaValue === "b") {
            diemUuTien += DIEM_UUTIEN_KHUVUC_B;
        }
        else if (areaValue === "c") {
            diemUuTien += DIEM_UUTIEN_KHUVUC_C;
        }
    }
    if (objectValue !== "") {
        if (objectValue === "mot") {
            diemUuTien += DIEM_UUTIEN_DOITUONG_1;
        }
        else if (objectValue === "hai") {
            diemUuTien += DIEM_UUTIEN_DOITUONG_2;
        }
        else if (objectValue === "ba") {
            diemUuTien += DIEM_UUTIEN_DOITUONG_3;
        }
    }
    return mon1 + mon2 + mon3 + diemUuTien;
}


//!Tính tiền điện:
const NAMMUOI_KW_DAU = 500;
const NAMMUOI_KW_KE = 650;
const MOTTRAM_KW_KE = 850;
const MOTTRAMNAMMUOI_KW_KE = 1100;
const CON_LAI = 1300;

document.getElementById("btnTinhdien").onclick= function () {
    var hoten= document.getElementById("hoten").value;
    var kw= document.getElementById("sokw").value;
    console.log(hoten, kw);

    var total= 0;
    total= tinhTheoKW(kw,NAMMUOI_KW_DAU,NAMMUOI_KW_KE, MOTTRAM_KW_KE,MOTTRAMNAMMUOI_KW_KE, CON_LAI);

    document.getElementById("txtTinhdien").innerHTML= "Họ tên: " + hoten + "; "+ "Tiền điện: " + new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total);
}

function tinhTheoKW (kw, namuoi_kw_dau, nammuoi_kw_ke, mottram_kw_ke, mottramnammuoi_kw_ke, con_lai){
    var total= 0;
    if (0< kw && kw<= 50) {
        total= kw * namuoi_kw_dau;
    }else  if (50< kw && kw <=100){
        total= 50*namuoi_kw_dau + (kw-50)*nammuoi_kw_ke;
    }else if (100< kw && kw <=200){
        total= 50*namuoi_kw_dau + 50*nammuoi_kw_ke + (kw-100)*mottram_kw_ke;
    }else if (200< kw && kw <=350){
        total= 50*namuoi_kw_dau + 50*nammuoi_kw_ke + 100*mottram_kw_ke + (kw-200)*mottramnammuoi_kw_ke;
    }else if (350< kw) {
        total= 50*namuoi_kw_dau + 50*nammuoi_kw_ke + 100*mottram_kw_ke + 150*mottramnammuoi_kw_ke + (kw-350)*con_lai;
    }
    return total;
}


//!Tính thuế thu nhập cá nhân:
document.getElementById("btnTinhthue").onclick= function(){
    var nhaphoten= document.getElementById("nhaphoten").value;
    var thunhapnam= +document.getElementById("thunhapnam").value;
    var people= document.getElementById("nguoiphuthuoc").value;
    console.log(nhaphoten, thunhapnam, people);
    
    var tienthue= tienThue(thunhapnam, people);
    document.getElementById("txtTinhthue").innerHTML= "Họ tên: "+nhaphoten+ "; "+ "Tiền thuế: "+ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tienthue);
}

function tienThue (thunhapnam, people) {
    var thunhapChiuThue = thunhapnam - (4e+6) - (1.6e+6)*people;

    var tienthue= 0;
    if (0< thunhapChiuThue && thunhapChiuThue <=60e+6){
        tienthue= thunhapChiuThue*0.05;
    } else if (60e+6< thunhapChiuThue && thunhapChiuThue<=120e+6) {
        tienthue= (60e+6)*0.05 + (thunhapChiuThue-(60e+6))*0.1;
    } else if (120e+6< thunhapChiuThue && thunhapChiuThue<=210e+6){
        tienthue= (60e+6)*0.05 + (60e+6)*0.1 +(thunhapChiuThue-(120e+6))*0.15;
    }else if (210e+6< thunhapChiuThue && thunhapChiuThue<=384e+6){
        tienthue= (60e+6)*0.05 + (60e+6)*0.1 + (90e+6)*0.15 + (thunhapChiuThue-(210e+6))*0.2;
    }else if (384e+6< thunhapChiuThue && thunhapChiuThue<=624e+6){
        tienthue= (60e+6)*0.05 + (60e+6)*0.1 + (90e+6)*0.15 + (174e+6)*0.2 + (thunhapChiuThue-(384e+6))*0.25;
    }else if (624e+6< thunhapChiuThue && thunhapChiuThue<=960e+6){
        tienthue= (60e+6)*0.05 + (60e+6)*0.1 + (90e+6)*0.15 + (174e+6)*0.2 + (240e+6)*0.25 + (thunhapChiuThue-(624e+6))*0.3;
    }else if (960e+6< thunhapChiuThue){
        tienthue= (60e+6)*0.05 + (60e+6)*0.1 + (90e+6)*0.15 + (174e+6)*0.2 + (240e+6)*0.25 + (336e+6)*0.3 + (thunhapChiuThue-(960e+6))*0.35;
    }
    return tienthue;
}


//!Tính tiền cáp:
const PHIXULI_HOADON_NHADAN= 4.5;
const PHIDICHVU_COBAN_NHADAN= 20.5;
const THUE1KENH_CAOCAP_NHADAN= 7.5;
const PHIXULI_HOADON_DOANHNGHIEP= 15;
const PHIDICHVU_COBAN_10KETNOI_DOANHNGHIEP= 75;
const THUE1KENH_CAOCAP_DOANHNGHIEP= 50;

document.getElementById("btnTinhcap").onclick= function () {
    const loaiKhachHang= document.getElementById("select").value;
    const makhachhang= document.getElementById("makhachhang").value;
    const sokenh= +document.getElementById("sokenh").value; 
    const soketnoi= +document.getElementById("soketnoi").value;
    console.log(loaiKhachHang,makhachhang,sokenh,soketnoi);
    
    var tiencap = tienCap(loaiKhachHang,sokenh, soketnoi);
    console.log(tiencap);

    document.getElementById("txtTinhcap").innerHTML= "Mã khách hàng: "+ makhachhang + "; " +"Tiền cáp: "+ "$"+ tiencap;
}

document.getElementById("select").onchange = function() {
    var loaiKhachHang = document.getElementById("select").value;
    if (loaiKhachHang === "nhadan") {
        document.getElementById("soketnoi").disabled= true;  
    }else if (loaiKhachHang === "doanhnghiep") {
        document.getElementById("soketnoi").disabled= false;
    }
}

function tienCap(loaiKhachHang, sokenh, soketnoi) {
    var tiencap= 0;
    if(loaiKhachHang === "nhadan"){
        tiencap= PHIXULI_HOADON_NHADAN + PHIDICHVU_COBAN_NHADAN + THUE1KENH_CAOCAP_NHADAN * sokenh;
    } else if (loaiKhachHang ==="doanhnghiep" && 0<soketnoi && soketnoi<=10) {
        tiencap= PHIXULI_HOADON_DOANHNGHIEP + PHIDICHVU_COBAN_10KETNOI_DOANHNGHIEP + THUE1KENH_CAOCAP_DOANHNGHIEP  * sokenh;
    } else if (loaiKhachHang ==="doanhnghiep" && 11 <=soketnoi) {
        tiencap= PHIXULI_HOADON_DOANHNGHIEP + (75+ (soketnoi-10)*5) + THUE1KENH_CAOCAP_DOANHNGHIEP * sokenh;
    }
    return tiencap;
}