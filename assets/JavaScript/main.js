//thiet ke hieu ung co hai nut dich ngon ngu =>  tham khao Chat
let buttons = document.querySelectorAll(".language_choose");
buttons.forEach(button => {
    button.addEventListener("click", function () {
        // Xóa class "active" khỏi tất cả các nút trước khi thêm vào nút được chọn
        buttons.forEach(btn => btn.classList.remove("active"));

        // Thêm class "active" vào nút được nhấn
        this.classList.add("active");
    });
});
//thiet ke an hien phan dieu khien tren ban mobile
let menu_button = document.getElementById("menu_click");
let left_content = document.getElementById("left_content");
menu_button.addEventListener("click", function () {
    left_content.classList.toggle("appear");
    menu_button.classList.toggle("appear");
});