
/*VAR:
    - var không có tính "Block Scope" (Phạm vi khối): Biến khai báo bằng var chỉ bị giới hạn trong một hàm (function). 
    Nó không bị giới hạn trong các khối lệnh { } như câu lệnh if, vòng lặp for, hay while.
    - Hoisting (cơ chế nâng): js sẽ tự động đưa các khai báo var lên đầu phạm vi của nó, 
    nhưng nó chỉ đưa phần khai báo, không đưa phần gán giá trị.
    - có thể khai báo lại một biến var nhiều lần trong cùng một phạm vi mà không bị báo lỗi
 */

/*LET:
    - có tính Block Scope (Phạm vi khối)
    - Không được khai báo lại
    - Được phép gán lại (thay đổi) giá trị
    - Hoisting nhưng nằm trong "Vùng chết" (Temporal Dead Zone):
    cũng đưa khai báo let lên đầu phạm vi của nó, chỉ đưa phần khai bảo, không đưa phần gán giá trị (chưa được khởi tạo) như var, 
    và khoảng thời gian từ lúc "đưa tên lên đầu" đến dòng code khai báo thực sự chính là Vùng chết (TDZ). Nếu chạm vào lúc này -> Lỗi
 */
/*CONST (Constant - Hằng số):

 */
/*
            +---------------+--------------------+-------------------+----------------------+
            |Đặc tính	    |      var (Cũ)	     |     let (Mới)	 |     const (Mới)      |
            +---------------+--------------------+-------------------+----------------------+
            |Phạm vi(Scope)	|Function Scope (Hàm)|	Block Scope {}	 |    Block Scope {}    |
            |Gán lại giá trị|	     Có	         |         Có	     |       Không          |
            |Khai báo lại	|        Có	         |       Không	     |       Không          |
            |Hoisting	    |Có (là undefined)	 |Có (nhưng dính TDZ)|  Có (nhưng dính TDZ) |
            |Yc gán ngay    |       Không	     |       Không	     |         Có           |
            +---------------+--------------------+-------------------+----------------------+
 */
/*------------------------------------------------------------------------------------------------------------------------ */

//var a;
//let b;
const a = 10;
const b =5;

//Các hàng function +, -, *, /, max, min. 

function sum(a, b) {
    
    return a + b;
}

function diff(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {

    if (b === 0) {
        return "Lỗi: Không thể chia cho 0";
    }
    return a / b;
}

function max(a, b) {
    if(a>b){
        return a;
    }
    return b;
}

function min(a, b) {
    if(a<b){
        return a;
    } 
    return b;
}

console.log("Tổng: " + sum(a, b));   
console.log("Hiệu: " + diff(a, b));    
console.log("Tích: " + mul(a, b));     
console.log("Thương: " + div(a, b));   
console.log("Max: " + max(a, b));     
console.log("Min: " + min(a, b));