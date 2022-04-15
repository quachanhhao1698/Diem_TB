$(document).ready( function(){

    //Khai báo đối tượng testScore
    let testScore = {
    name:       "",
    math:       0,
    physical:   0,
    chemistry:  0
    };

    let tenHs    = $(".input-name");
    let diemToan = $(".input-math");
    let diemLy   = $(".input-physical");
    let diemHoa  = $(".input-chemistry");
    let btnNhap  = $(".btn-add");
    let btnDTB   = $(".btn-DTB");
    let btnHSG   = $(".btn-HSG");
    let btnXoa   = $(".btn-xoa");

    

    btnNhap.click(addRow);
    btnDTB.click(tinhDTB);
    btnHSG.click(xacDinhhsg);
    btnXoa.click(xoaHS);
    
    let stt=1;

    //Hàm thêm dữ liệu vào bảng
    function addRow(){

        nameStudent = tenHs.val().trim();
        scoreMath=diemToan.val().trim();
        scorePhysical=diemLy.val().trim();
        scoreChemistry=diemHoa.val().trim();
        
        
        //Thông tin không được bỏ trống
        if(scoreMath =="" || scorePhysical =="" || diemLy =="" || scoreChemistry =="" ){    
            alert("Bạn phải nhập đủ thông tin !");        
                
        }
        //Điểm phải là số
        else if(isNaN(scoreMath)==true || isNaN(scorePhysical)==true || isNaN(scoreChemistry)==true){

      
        alert(" Điểm phải là số , không chứa kí tự !");
        
        }
        // Điểm từ 0 đến 10
        else if(scoreMath > 10 || scoreMath < 0 || scorePhysical > 10 || scorePhysical < 0 || scoreChemistry > 10 || scoreChemistry < 0){
        
        alert("Điểm số phải là thang điểm 10 ( Từ 0 - 10 ) !");
        }

        else{

            // Gán dữ liệu cho đối tượng
            testScore.name = nameStudent;
            testScore.math = parseFloat(scoreMath);
            testScore.physical = parseFloat(scorePhysical);
            testScore.chemistry = parseFloat(scoreChemistry);
        

            //Thêm một dòng mới cho bảng
            markup = "<tr><td>"+ stt + "</td> <td>"+ testScore.name +"</td> <td>"+ testScore.math +"</td> <td>"+ testScore.physical +"</td> <td>"+ testScore.chemistry +"</td> <td>?</td><td><input type='checkbox' name='select'></td></tr>"
            tableBody= $("#scoreTable tbody");
            tableBody.append(markup);

            stt++;//stt tự động tăng             

            //Gọi hàm làm trống form
           clearForm();

         }
    }
    

    //Hàm tính điểm trung bình
    function tinhDTB(){
        $("tr").each(function(){
            let toan = parseFloat($(this).find("td").eq(2).text());
            let ly = parseFloat($(this).find("td").eq(3).text());
            let hoa = parseFloat($(this).find("td").eq(4).text());
            let dtb = (toan + ly + hoa)/3;

            $(this).find("td").eq(5).html(dtb.toFixed(1));
        });
    }

    //Hàm xác định học sinh giỏi
    function xacDinhhsg(){
        $("tr").each(function(){
            let dtb = parseFloat($(this).find("td").eq(5).text());
            if(dtb >= 8.0){
                $(this).css({
                    "background-color":"red",
                    "font-weight":"bold",
                    "color":"white"
                });
               
            }
        });
    }
    
    //Hàm làm trống form
    function clearForm(){
        tenHs.val("");
        diemToan.val("");
        diemLy.val("");
        diemHoa.val("");
    }

    
    //Hàm xóa học sinh
    function xoaHS(){
        $("#scoreTable tbody").find('input[name="select"]').each(function(){ //tìm thẻ input có name là select
            if($(this).is(":checked")){ // Kiểm tra checbox đã check 
                $(this).parents("tr").remove(); //Tiến hành xóa thẻ 'tr'
            }
        });
    }
  



});