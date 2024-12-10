// Dữ liệu
const rewards = [
   
    "chúc bạn done full medium pico ❤️",
    "chúc bạn Tài Lộc Quá Lớn 🎉",
    "chúc bạn Mã Đáo Thành Công ❤️",
    "chúc bạn tỏ tình crush Thành Công ❤️",
    "chúc bạn Vạn sự như ý❤️",
    "chúc bạn done full medium pico ❤️",
    "chúc bạn đạt được thành công mảng bạn theo đuổi ❤️",
    "chúc bạn may mắn lần sau 😅",
    "chúc bạn An khang thịnh vượng 🍀",
    "chúc bạn done mọi bài ctf 😘",
    "chúc bạn Xuân về phú quý 🐉",
    "chúc bạn ngủ ngonnnn 😴😴😴",
    "chúc bạn Bình An Hạnh Phúc ",
    "chúc bạn sớm có ny😊 ",
    "chúc bạn tiền ra như nước",
    "chúc bạn đậu vào clb KSSC",
    "chúc bạn tốt nghiệp bằng xuất sắc"
    


  ];
//   function playMusic() {
//     var audio = new Audio('music.mp3');
//     audio.loop = true;  // Phát nhạc liên tục
//     audio.play().catch(function(error) {
//         console.log("Không thể phát nhạc tự động: " + error);
//     });
// }
  
  let participants = {}; // Lưu kết quả theo tên người chơi
  
  // Tạo các bao lì xì
  function startGame() {
    const username = document.getElementById("username").value.trim();
    if (!username) {
      alert("Vui lòng nhập tên trước khi bắt đầu!");
      return;
    }
    if (participants[username]) {
      alert("Bạn đã rút bao lì xì rồi!");
      return;
    }
  
    // Hiển thị các bao lì xì
    const container = document.getElementById("envelopes-container");
    container.innerHTML = ""; // Xóa các bao lì xì cũ
  
    for (let i = 0; i < 7; i++) {
      const envelope = document.createElement("div");
      envelope.classList.add("envelope");
      envelope.setAttribute("onclick", `openEnvelope(this, '${username}')`);
      container.appendChild(envelope);
    }
  }
  
  // Xử lý khi mở bao lì xì
  function openEnvelope(element, username) {
    if (element.classList.contains("opened")) return; // Đã mở thì không mở nữa
    if (participants[username]) {
      alert("Bạn chỉ được rút một bao lì xì!");
      return;
    }
  
    // Chọn phần thưởng ngẫu nhiên
    const reward = rewards[Math.floor(Math.random() * rewards.length)];
    element.innerHTML = `<p>${reward}</p>`; // Hiển thị phần thưởng
    element.classList.add("opened");
  
    // Lưu kết quả và hiển thị lịch sử
    participants[username] = reward;
    updateHistory(username, reward);
  
    // Vô hiệu hóa các bao lì xì khác
    const envelopes = document.querySelectorAll(".envelope");
    envelopes.forEach(env => env.classList.add("opened"));
  }
  
  // Hiển thị lịch sử rút
  function updateHistory(username, reward) {
    const history = document.getElementById("history");
    const item = document.createElement("div");
    item.classList.add("history-item");
    item.textContent = `${username} đã nhận: ${reward}`;
    history.appendChild(item);
  }

//   let nhacDaPhat = false; // Cờ để theo dõi nếu nhạc đã được phát
//   const playMusic =()=>{
// const music = document.getElementById('backgroundMusic');  
// if(!nhacDaPhat) {
//   music.play().catch(error => {  
//           // Thông báo lỗi khi không thể phát nhạc  
//           console.error("Lỗi khi phát nhạc:", error);  
//           alert("Không thể phát nhạc. Vui lòng kiểm tra file nhạc hoặc trình duyệt của bạn.");  
//       });  
//       nhacDaPhat = true;// Đặt cờ thành true sau khi phát nhạc
// }
      
// }



  
