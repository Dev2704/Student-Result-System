const PASS_MARK = 35;
const TOTAL_MARKS = 100;

const subjects = ["maths", "physics", "cs", "civil", "mechanical"];

const students = [
    {
        name : "Dev",
        roll : 101,
        scores : { maths:78, physics: 82, cs: 90, civil: 65, mechanical: 70 }
    },
    {
        name : "Riya",
        roll : 102,
        scores : { maths: 85, physics: 90, cs: 95, civil: 80, mechanical: 88 }
    },
    {
        name : "Amit",
        roll : 103,
        scores : { maths: 60, physics: 55, cs: 70, civil: 50, mechanical: 65 }
    },
    {
        name : "Sara",
        roll : 104,
        scores : { maths: 92, physics: 88, cs: 94, civil: 90, mechanical: 91 }
    },
    {
        name : "Rahul",
        roll : 105,
        scores : { maths: 40, physics: 45, cs: 50, civil: 35, mechanical: 38 }
    }
];


function calculateAvg(scores) {
    const values = Object.values(scores);
    const total = values.reduce((sum, score) => sum + score, 0);
    return Math.round(total / values.length);
}

function getGrade(avg) {
    if (avg >= 90) return "A+";
    if (avg >= 80) return "A";
    if (avg >= 70) return "B";
    if (avg >= 60) return "C";
    if (avg >= 50) return "D";
    if (avg >= PASS_MARK) return "E";
    return "F";
}

function getRemarks(avg) {
    if (avg >= 90) return "Excellent";
    if (avg >= 80) return "Very Good";
    if (avg >= 70) return "Good";
    if (avg >= 60) return "Average";
    if (avg >= 50) return "Needs Improvement";
    return "Failed -  Back";
}

function hasPassed(scores) {
    return Object.values(scores).every(score => score >= PASS_MARK);
}

function getBestSubject(scores) {
    let best = null;
    let bestScore = -Infinity;
    for (const [subject, score] of Object.entries(scores)) {
        if (score > bestScore) {
            bestScore = score;
            best = subject;
        }
    }
    return {subject: best, score: bestScore};
}

function getWeakSubject(scores) {
    let weak = null;
    let weakScore = Infinity;
    for (const [subject, score] of Object.entries(scores)) {
        if (score < weakScore) {
            weakScore = score;
            weak = subject;
        }
    }
    return {subject: weak, score: weakScore};
}

function getSubjectToppers(studentList) {
    const toppers = {};
    for (const subject of subjects) {
        let topName = null;
        let topScore = -Infinity;
        for (const student of studentList) {
            if (student.scores[subject] > topScore) {
                topScore = student.scores[subject];
                topName = student.name;
            }
        }
        toppers[subject] = { name: topName, score: topScore};

    }
    return toppers;
}

// Display  Results

function printDivider(char = '-', length = 45) {
    console.log(char.repeat(length));
}

function printScoreBar(score) {
    const filled = "█".repeat(Math.floor(score / 10));
    const empty = "░".repeat(10 - Math.floor(score / 10));
    return filled + empty;
}

function printReportCard(student) {
    const avg = calculateAvg(student.scores);
    const grade = getGrade(avg);
    const remarks = getRemarks(avg);
    const passed = hasPassed(student.scores);
    const best = getBestSubject(student.scores);
    const weak = getWeakSubject(student.scores);

    printDivider();
    console.log(`  REPORT CARD`);
    console.log(`  Name : ${student.name.padEnd(14)} Roll No: ${student.roll}`);
    printDivider();
     
    for (const subject of subjects) {
    const score  = student.scores[subject];
    const bar    = printScoreBar(score);
    const status = score >= PASS_MARK ? "PASS" : "FAIL";
    console.log(`  ${subject.toUpperCase().padEnd(12)} ${String(score).padStart(3)}%  ${bar}  ${status}`);
    }
     
    printDivider();
    console.log(`  Average   :  ${avg}%`);
    console.log(`  Grade     :  ${grade}`);
    console.log(`  Remarks   :  ${remarks}`);
    console.log(`  Result    :  ${passed ? "PASSED" : "FAILED"}`);
    console.log(`  Strongest :  ${best.subject.toUpperCase()} (${best.score}%)`);
    console.log(`  Weakest   :  ${weak.subject.toUpperCase()} (${weak.score}%)`);
    printDivider();
    console.log();
}


// Main Program

const processedStudents = students.map(student => ({
    ...student,
    average: calculateAvg(student.scores),
    grade: getGrade(calculateAvg(student.scores)),
    passed: hasPassed(student.scores)
}));

const rankedStudents = [...processedStudents].sort((a, b) => b.average - a.average);

console.log("\n" + "=".repeat(44));
console.log("   SEMESTER RESULTS - CLASS REPORT");
console.log("=".repeat(44) + "\n");

for (const student of students) {
    printReportCard(student);
}
