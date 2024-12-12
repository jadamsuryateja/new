const marks = {
    "P": 6,
    "A": 7,
    "S": 8,
    "G": 9,
    "E": 10,
  };
  
  const feedbackDetails = JSON.parse(localStorage.getItem("feedbackDetails"));
  
  if (feedbackDetails) {
    const { year, semester, branch, section, teachers } = feedbackDetails;
  
    document.getElementById("formDetails").innerText = `Year: ${year}, Semester: ${semester}, Branch: ${branch}, Section: ${section}`;
  
    const tableHeader = document.querySelector("thead tr");
    teachers.forEach((teacher) => {
      const headerCell = document.createElement("th");
      headerCell.textContent = `${teacher.teacher} (${teacher.subject})`;
      tableHeader.appendChild(headerCell);
    });
  
    const questions = [
      "How would you rate the teacher's knowledge of the subject?",
      "How effectively does the teacher explain concepts?",
      "How well does the teacher handle student queries?",
      "How punctual is the teacher for the classes?",
      "How would you rate the teacher’s interaction with students?",
    ];
  
    const tableBody = document.getElementById("feedbackTableBody");
    questions.forEach((question, qIndex) => {
      const row = document.createElement("tr");
  
      const questionCell = document.createElement("td");
      questionCell.textContent = question;
      row.appendChild(questionCell);
  
      teachers.forEach((_, tIndex) => {
        const cell = document.createElement("td");
  
        ["P", "A", "S", "G", "E"].forEach((option) => {
          const label = document.createElement("label");
          const radio = document.createElement("input");
          radio.type = "radio";
          radio.name = `q${qIndex}_teacher${tIndex}`;
          radio.value = option;
  
          label.appendChild(radio);
          label.appendChild(document.createTextNode(option));
          label.style.marginRight = "10px";
          cell.appendChild(label);
        });
  
        row.appendChild(cell);
      });
  
      tableBody.appendChild(row);
    });
  }
  
  // Handle feedback submission
  document.getElementById("submitFeedbackForm").addEventListener("click", () => {
    alert("Feedback submitted successfully!");
  });
  