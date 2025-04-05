
let elmts = ['Tìm cnt hcn có S max', 
    'Tìm n cnt hcn S max sx S giảm', 
    'Tìm cnt hv có nền đen nhất', 
    'Tìm n cnt hv đen nhất sxếp giảm',
    'Tìm bubble đen nhất', 
    'Tìm bubble lạt nhất', 
    'Sắp xếp các bubble theo x,y', 
    'Sxếp bubs ra 4k, 30d/k, 4b/d',
    'Nắn lại ảnh PTN'];

let selectb1 = document.getElementById('chonPhieuTn');    
// ham nay dua lít tren vao menu
function layVaoMenu1() {
    for (let i = 0; i < elmts.length; i++) {
        let optn = elmts[i];
        let elm = document.createElement("option");
        elm.textContent = optn;
        elm.value = optn;
        selectb1.appendChild(elm);
    }
}

layVaoMenu1();

let elmts2 = ['PTN 10 câu', 'PTN 20 câu', 'PTN 30 câu', 'PTN 40 câu',
    'PTN 50 câu', 'PTN 60 câu', 'PTN 80 câu', 'PTN 100 câu', 
    'PTN 120 câu'];

let selectb2 = document.getElementById('taoPhieuTn');    
// ham nay dua lít tren vao menu
function layVaoMenu2() {
    for (let i = 0; i < elmts2.length; i++) {
        let optn = elmts2[i];
        let elm = document.createElement("option");
        elm.textContent = optn;
        elm.value = optn;
        selectb2.appendChild(elm);
    }
}

layVaoMenu2();

function taoPhieuTnF(){
    if (selectb2.selectedIndex===9){
    // Tạo các phần tử và style bằng JS
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.fontFamily = "Arial, sans-serif";
    document.body.style.textAlign = "center";

    // Tạo <style> nội bộ cho CSS @page và class
    const style = document.createElement("style");
    style.textContent = `
    @page {
        size: A4;
        margin: 1cm;
    }
    body {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    
    .container {
        width: 21cm;
        height: 29.7cm;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        page-break-after: always;
    }
    h2 {
        margin-bottom: 10px;
    }
    .answer-sheet {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2px;
        width: 80%;
        padding: 5px;
        border: 1px solid black;
    }
    .question {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 13px;
        padding: 4px;
        text-align: center;
        border-left: 1px solid black;
    }
    .options {
        display: flex;
        gap: 10px;
        margin-right: 4px;
    }
    .circle-option {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 1px solid black;
        font-size: 12px;
        cursor: pointer;
        user-select: none;
    }
    .print-button {
        margin: 20px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
    }
    .print-button:hover {
        background-color: #0056b3;
    }
    span {
        font-weight: bold;
    }
    `;
    document.head.appendChild(style);

    // Tạo container
    const container = document.createElement("div");
    container.className = "container";

    const title = document.createElement("h2");
    title.textContent = "PHIẾU TRẢ LỜI TRẮC NGHIỆM";
    container.appendChild(title);

    // Tạo 6 answer-sheet div
    for (let i = 1; i <= 6; i++) {
    const answerSheet = document.createElement("div");
    answerSheet.className = "answer-sheet";
    answerSheet.id = "answerSheet" + i;
    container.appendChild(answerSheet);
    }
    document.body.appendChild(container);

    // Tạo nút in
    const printButton = document.createElement("button");
    printButton.className = "print-button";
    printButton.textContent = "In Phiếu";
    printButton.onclick = () => window.print();
    document.body.appendChild(printButton);

    // Hàm tạo nội dung câu hỏi
    function generateAnswerSheet(sheetso, j_start, j_cuoi) {
    const answerSheet = document.getElementById("answerSheet" + sheetso);

    for (let i = j_start; i < j_cuoi; i++) {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        const questionNumber = document.createElement("span");
        questionNumber.textContent = Math.floor((i - 1) / 4) + 30 * ((i - 1) % 4) + 1;

        const optionsDiv = document.createElement("div");
        optionsDiv.classList.add("options");

        ["A", "B", "C", "D"].forEach(choice => {
        const circle = document.createElement("div");
        circle.classList.add("circle-option");
        circle.textContent = choice;
        optionsDiv.appendChild(circle);
        });

        questionDiv.appendChild(questionNumber);
        questionDiv.appendChild(optionsDiv);
        answerSheet.appendChild(questionDiv);
    } 
    }

    // Gọi 6 lần để tạo 120 câu chia thành 6 nhóm (20 câu/nhóm)
    for (let j = 0; j < 6; j++) {
    const j_start = 20 * j + 1;
    const j_cuoi = j_start + 20;
    generateAnswerSheet(j + 1, j_start, j_cuoi);
    }
    }else {
        alert('Chưa có !');
        return;
    }
}
function timTrenPhieuTnF(){
    alert('Chua lam !');
}