// Data for courses
const courses = {
    cse: [
        "Data Structures",
        "Operating System",
        "Theory of Computation",
        "Computer Networks",
        "Cryptography & Security",
        "Compiler Design"
    ],
    programming: [
        "C Programming",
        "Java",
        "Python",
        "JavaScript",
        "C++",
        "PHP"
    ],
    electronics: [
        "Digital Electronics",
        "Microprocessors",
        "Communication Systems",
        "Embedded Systems"
    ],
    electrical: [
        "Power Systems",
        "Electrical Machines",
        "Control Systems"
    ],
    others: [
        "Mathematics",
        "Physics",
        "Chemistry"
    ]
};

// Handle category hover event
document.querySelectorAll(".category").forEach(category => {
    category.addEventListener("mouseenter", function () {
        const selectedCategory = this.getAttribute("data-category");
        const courseList = document.getElementById("course-list");

        // Clear previous courses
        courseList.innerHTML = "";

        // Populate new courses
        courses[selectedCategory].forEach(course => {
            const li = document.createElement("li");
            li.textContent = course;
            courseList.appendChild(li);
        });
    });
});
