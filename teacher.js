// Add teacher and subject rows dynamically
document.getElementById("addTeacher").addEventListener("click", () => {
    const container = document.getElementById("teacherSubjectPairs");
  
    const row = document.createElement("div");
    row.classList.add("teacher-row");
  
    const teacherSelect = document.createElement("select");
    teacherSelect.classList.add("teacher-select");
    teacherSelect.innerHTML = `
      <option value="">Select Teacher</option>
      <option value="Teacher 1">Teacher 1</option>
      <option value="Teacher 2">Teacher 2</option>
      <option value="Teacher 3">Teacher 3</option>
    `;
  
    const subjectSelect = document.createElement("select");
    subjectSelect.classList.add("subject-select");
    subjectSelect.innerHTML = `
      <option value="">Select Subject</option>
      <option value="Math">Math</option>
      <option value="Science">Science</option>
      <option value="History">History</option>
    `;
  
    row.appendChild(teacherSelect);
    row.appendChild(subjectSelect);
    container.appendChild(row);
  });
  
  // Handle form submission and navigate to student form
  document.getElementById("submitFirstForm").addEventListener("click", () => {
    const year = document.getElementById("year").value;
    const semester = document.getElementById("semester").value;
    const branch = document.getElementById("branch").value;
    const section = document.getElementById("section").value;
  
    if (!year || !semester || !branch || !section) {
      alert("Please fill out all fields.");
      return;
    }
  
    const teacherRows = document.querySelectorAll(".teacher-row");
    const teachers = [];
    teacherRows.forEach((row) => {
      const teacher = row.querySelector(".teacher-select").value;
      const subject = row.querySelector(".subject-select").value;
  
      if (teacher && subject) {
        teachers.push({ teacher, subject });
      }
    });
  
    if (teachers.length === 0) {
      alert("Please select at least one teacher and subject.");
      return;
    }
  
    // Save data to local storage and redirect
    localStorage.setItem("feedbackDetails", JSON.stringify({ year, semester, branch, section, teachers }));
    window.location.href = "student.html";
  });
  