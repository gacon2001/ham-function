//!Quản lí tuyển sinh:


//!Tính tiền điện:
//Bảng giá:
const NAMMUOI_KW_DAU = 500;
const NAMMUOI_KW_KE = 650;
const MOTTRAM_KW_KE = 850;
const MOTTRAMNAMMUOI_KW_KE = 1100;
const CON_LAI = 1300;

document.getElementById("btnTinhdien").onclick= function () {
    var hoten= document.getElementById("hoten").value;
    var kw= document.getElementById("kw").value;
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


//!Tính tiền cáp:
