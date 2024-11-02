// Chuyển đổi giữa đăng nhập và đăng ký
document
  .getElementById("show-register")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-box").style.display = "block";
  });// Chuyển đổi giữa đăng nhập và đăng ký
document.getElementById('show-register').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-box').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('register-box').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

// Xử lý sự kiện khi người dùng nhấn vào nút Đăng nhập
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Ngăn không cho trang reload

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Lấy danh sách người dùng từ localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Kiểm tra tài khoản
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Đăng nhập thành công!');
        // Ẩn bảng đăng nhập và hiển thị danh sách học sinh
        document.getElementById('login-box').style.display = 'none';
        document.getElementById('student-list').style.display = 'block';
        loadStudents(); // Tải danh sách học sinh
    } else {
        alert('Tài khoản hoặc mật khẩu không chính xác');
    }
});

// Xử lý đăng ký
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Ngăn không cho trang reload

    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Kiểm tra điều kiện đăng ký
    if (newPassword !== confirmPassword) {
        alert('Mật khẩu không khớp!');
        return;
    }

    // Lưu thông tin tài khoản mới
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.username === newUsername);

    if (existingUser) {
        alert('Tài khoản đã tồn tại!');
    } else {
        users.push({ username: newUsername, password: newPassword });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Đăng ký thành công! Bạn có thể đăng nhập ngay.');
        document.getElementById('register-box').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
    }
});

// Xử lý thêm học sinh
document.getElementById('add-student-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Ngăn không cho trang reload

    const studentName = document.getElementById('student-name').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const ethnicity = document.getElementById('ethnicity').value;
    const address = document.getElementById('address').value;

    // Lưu thông tin học sinh vào localStorage
    const students = JSON.parse(localStorage.getItem('students')) || [];
    students.push({ name: studentName, dob: dob, email: email, ethnicity: ethnicity, address: address });
    localStorage.setItem('students', JSON.stringify(students));

    // Cập nhật danh sách học sinh hiển thị
    loadStudents();
    document.getElementById('add-student-form').reset(); // Làm sạch biểu mẫu
});

// Tải danh sách học sinh
function loadStudents() {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const studentUl = document.getElementById('student-ul');
    studentUl.innerHTML = ''; // Làm sạch danh sách hiện tại

    students.forEach((student, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${student.name} - ${student.dob} - ${student.email} - ${student.ethnicity} - ${student.address}
            <button onclick="removeStudent(${index})">Xóa</button>
        `;
        studentUl.appendChild(li);
    });
}

// Xóa học sinh
function removeStudent(index) {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    students.splice(index, 1); // Xóa học sinh tại vị trí index
    localStorage.setItem('students', JSON.stringify(students)); // Lưu lại danh sách mới
    loadStudents(); // Tải lại danh sách học sinh
}


document.getElementById("show-login").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("register-box").style.display = "none";
  document.getElementById("login-form").style.display = "block";
});

// Xử lý sự kiện khi người dùng nhấn vào nút Đăng nhập
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Ngăn không cho trang reload

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Lấy danh sách người dùng từ localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Kiểm tra tài khoản
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    alert("Đăng nhập thành công!");
    // Ẩn bảng đăng nhập và hiển thị danh sách học sinh
    document.getElementById("login-box").style.display = "none";
    document.getElementById("student-list").style.display = "block";
    loadStudents(); // Tải danh sách học sinh
  } else {
    alert("Tài khoản hoặc mật khẩu không chính xác");
  }
});

// Xử lý đăng ký
document
  .getElementById("register-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn không cho trang reload

    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Kiểm tra điều kiện đăng ký
    if (newPassword !== confirmPassword) {
      alert("Mật khẩu không khớp!");
      return;
    }

    // Lưu thông tin tài khoản mới
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.username === newUsername);

    if (existingUser) {
      alert("Tài khoản đã tồn tại!");
    } else {
      users.push({ username: newUsername, password: newPassword });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Đăng ký thành công! Bạn có thể đăng nhập ngay.");
      document.getElementById("register-box").style.display = "none";
      document.getElementById("login-form").style.display = "block";
    }
  });

// Xử lý thêm học sinh
document
  .getElementById("add-student-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn không cho trang reload

    const studentName = document.getElementById("student-name").value;
    const dob = document.getElementById("dob").value;
    const email = document.getElementById("email").value;

    // Lưu thông tin học sinh vào localStorage
    const students = JSON.parse(localStorage.getItem("students")) || [];
    students.push({ name: studentName, dob: dob, email: email });
    localStorage.setItem("students", JSON.stringify(students));

    // Cập nhật danh sách học sinh hiển thị
    loadStudents();
    document.getElementById("add-student-form").reset(); // Làm sạch biểu mẫu
  });

// Tải danh sách học sinh
function loadStudents() {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  const studentUl = document.getElementById("student-ul");
  studentUl.innerHTML = ""; // Làm sạch danh sách hiện tại

  students.forEach((student, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${student.name} - ${student.dob} - ${student.email} <button onclick="removeStudent(${index})">Xóa</button>`;
    studentUl.appendChild(li);
  });
}

// Xóa học sinh
function removeStudent(index) {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  students.splice(index, 1); // Xóa học sinh tại vị trí index
  localStorage.setItem("students", JSON.stringify(students)); // Lưu lại danh sách mới
  loadStudents(); // Tải lại danh sách học sinh
}
