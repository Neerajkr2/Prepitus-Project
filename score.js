// DOM elements
const rw1Slider = document.getElementById('rw1-slider');
const rw2Slider = document.getElementById('rw2-slider');
const math1Slider = document.getElementById('math1-slider');
const math2Slider = document.getElementById('math2-slider');
const adaptiveToggle = document.getElementById('adaptive-toggle');

const rw1Value = document.getElementById('rw1-value');
const rw2Value = document.getElementById('rw2-value');
const math1Value = document.getElementById('math1-value');
const math2Value = document.getElementById('math2-value');

const totalScore = document.getElementById('total-score');
const rwScore = document.getElementById('rw-score');
const mathScore = document.getElementById('math-score');

const rw1Breakdown = document.getElementById('rw1-breakdown');
const rw2Breakdown = document.getElementById('rw2-breakdown');
const math1Breakdown = document.getElementById('math1-breakdown');
const math2Breakdown = document.getElementById('math2-breakdown');

const rw1ModuleScore = document.getElementById('rw1-module-score');
const rw2ModuleScore = document.getElementById('rw2-module-score');
const math1ModuleScore = document.getElementById('math1-module-score');
const math2ModuleScore = document.getElementById('math2-module-score');

// College matching elements
const collegeResults = document.getElementById('college-results');
const pagination = document.getElementById('pagination');
const displayStart = document.getElementById('display-start');
const displayEnd = document.getElementById('display-end');
const totalColleges = document.getElementById('total-colleges');
const sortBy = document.getElementById('sort-by');
const matchFilter = document.getElementById('match-filter');

// Auth modal elements
const authModal = document.getElementById('auth-modal');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const closeModal = document.getElementById('close-modal');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mainNav = document.getElementById('main-nav');

// Background animation elements
let backgroundAnimationId = null;

// College data (sample data based on your Excel file)
const collegeData = [
    { name: "Princeton University", combined: "1510 - 1560", reading: "740 - 780", math: "770 - 800" },
    { name: "MIT", combined: "1520 - 1570", reading: "750 - 790", math: "770 - 800" },
    { name: "Harvard University", combined: "1500 - 1580", reading: "730 - 780", math: "760 - 800" },
    { name: "Stanford University", combined: "1500 - 1560", reading: "730 - 770", math: "770 - 800" },
    { name: "Yale University", combined: "1500 - 1560", reading: "730 - 780", math: "760 - 800" },
    { name: "University of Chicago", combined: "1500 - 1570", reading: "740 - 780", math: "760 - 800" },
    { name: "Duke University", combined: "1510 - 1560", reading: "730 - 770", math: "770 - 800" },
    { name: "Johns Hopkins University", combined: "1480 - 1570", reading: "730 - 770", math: "750 - 800" },
    { name: "Northwestern University", combined: "1500 - 1560", reading: "740 - 770", math: "760 - 800" },
    { name: "University of Pennsylvania", combined: "1450 - 1570", reading: "710 - 760", math: "740 - 800" },
    { name: "Caltech", combined: "1530 - 1580", reading: "760 - 790", math: "780 - 800" },
    { name: "Brown University", combined: "1440 - 1570", reading: "710 - 760", math: "740 - 800" },
    { name: "Columbia University", combined: "1470 - 1570", reading: "730 - 770", math: "740 - 800" },
    { name: "Dartmouth College", combined: "1440 - 1560", reading: "710 - 760", math: "740 - 800" },
    { name: "Cornell University", combined: "1510 - 1560", reading: "730 - 770", math: "770 - 800" },
    { name: "Rice University", combined: "1460 - 1570", reading: "720 - 770", math: "740 - 800" },
    { name: "Vanderbilt University", combined: "1460 - 1560", reading: "720 - 760", math: "740 - 800" },
    { name: "WashU", combined: "1500 - 1570", reading: "730 - 770", math: "770 - 800" },
    { name: "UCLA", combined: "1490 - 1570", reading: "720 - 760", math: "760 - 800" },
    { name: "UC Berkeley", combined: "1490 - 1570", reading: "720 - 770", math: "760 - 800" },
    { name: "Carnegie Mellon", combined: "1460 - 1560", reading: "720 - 760", math: "740 - 800" },
    { name: "Notre Dame", combined: "1440 - 1540", reading: "710 - 750", math: "730 - 790" },
    { name: "Emory University", combined: "1470 - 1540", reading: "720 - 750", math: "730 - 790" },
    { name: "Georgetown University", combined: "1410 - 1530", reading: "700 - 740", math: "720 - 790" },
    { name: "UVA", combined: "1400 - 1540", reading: "690 - 750", math: "710 - 790" },
    { name: "University of Michigan", combined: "1340 - 1530", reading: "660 - 730", math: "680 - 800" },
    { name: "USC", combined: "1440 - 1540", reading: "710 - 750", math: "730 - 790" },
    { name: "NYU", combined: "1420 - 1530", reading: "700 - 740", math: "720 - 790" },
    { name: "Tufts University", combined: "1400 - 1540", reading: "690 - 750", math: "710 - 790" },
    { name: "UC San Diego", combined: "1350 - 1520", reading: "670 - 740", math: "680 - 780" },
    { name: "UNC Chapel Hill", combined: "1350 - 1500", reading: "670 - 730", math: "680 - 770" },
    { name: "Boston College", combined: "1400 - 1520", reading: "690 - 740", math: "710 - 780" },
    { name: "Brandeis University", combined: "1390 - 1510", reading: "680 - 730", math: "710 - 780" },
    { name: "UC Davis", combined: "1290 - 1480", reading: "640 - 720", math: "650 - 760" },
    { name: "Georgia Tech", combined: "1400 - 1530", reading: "690 - 740", math: "710 - 790" },
    { name: "Wake Forest University", combined: "1350 - 1480", reading: "660 - 720", math: "670 - 760" },
    { name: "UIUC", combined: "1370 - 1520", reading: "680 - 730", math: "700 - 780" },
    { name: "Wisconsin-Madison", combined: "1310 - 1490", reading: "650 - 730", math: "660 - 760" },
    { name: "Boston University", combined: "1370 - 1510", reading: "670 - 730", math: "690 - 780" },
    { name: "Penn State", combined: "1220 - 1450", reading: "610 - 720", math: "630 - 740" },
    { name: "Purdue University", combined: "1230 - 1440", reading: "610 - 710", math: "620 - 730" },
    { name: "UT Austin", combined: "1230 - 1450", reading: "610 - 720", math: "620 - 730" },
    { name: "Michigan State University", combined: "1100 - 1330", reading: "550 - 670", math: "560 - 690" },
    { name: "Ohio State University", combined: "1200 - 1440", reading: "600 - 710", math: "620 - 730" },
    { name: "University of Florida", combined: "1290 - 1450", reading: "640 - 730", math: "650 - 740" },
    { name: "RPI", combined: "1370 - 1500", reading: "680 - 730", math: "690 - 770" },
    { name: "Case Western Reserve", combined: "1400 - 1520", reading: "690 - 740", math: "710 - 780" },
    { name: "Syracuse University", combined: "1200 - 1380", reading: "600 - 690", math: "610 - 700" },
    { name: "University of Maryland", combined: "1300 - 1480", reading: "650 - 730", math: "660 - 750" },
    { name: "University of Washington", combined: "1220 - 1450", reading: "610 - 720", math: "620 - 730" },
    { name: "Alverno College", combined: "770 - 1050", reading: "405 - 560", math: "365 - 490" },
    { name: "Five Towns College", combined: "770 - 1000", reading: "400 - 550", math: "380 - 520" },
    { name: "Central State University", combined: "770 - 950", reading: "370 - 480", math: "400 - 470" },
    { name: "Gallaudet University", combined: "760 - 1080", reading: "380 - 510", math: "380 - 570" },
    { name: "California State University - Dominguez Hills", combined: "760 - 940", reading: "370 - 460", math: "370 - 470" }
];

// Pagination variables
let currentPage = 1;
const collegesPerPage = 8;
let filteredColleges = [...collegeData];

// Mobile menu functionality
mobileMenuBtn.addEventListener('click', function() {
    mainNav.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#main-nav a').forEach(link => {
    link.addEventListener('click', function() {
        mainNav.classList.remove('active');
    });
});

// Auth modal functionality
loginBtn.addEventListener('click', function (e) {
    e.preventDefault();
    authModal.classList.add('active');
    showPage('login-page');
});

signupBtn.addEventListener('click', function (e) {
    e.preventDefault();
    authModal.classList.add('active');
    showPage('register-page');
});

closeModal.addEventListener('click', function () {
    authModal.classList.remove('active');
});

// Close modal when clicking outside
authModal.addEventListener('click', function (e) {
    if (e.target === authModal) {
        authModal.classList.remove('active');
    }
});

// Auth page functions
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show the requested page
    document.getElementById(pageId).classList.add('active');
}

function selectUserType(element) {
    // Remove selected class from all user types
    document.querySelectorAll('.user-type').forEach(type => {
        type.classList.remove('selected');
    });

    // Add selected class to clicked user type
    element.classList.add('selected');
}

// Background animation setup
function initBackgroundAnimation() {
    // Create background elements if they don't exist
    if (!document.getElementById('bg-circle-1')) {
        const bgCircle1 = document.createElement('div');
        bgCircle1.id = 'bg-circle-1';
        bgCircle1.className = 'bg-circle';
        document.body.appendChild(bgCircle1);
        
        const bgCircle2 = document.createElement('div');
        bgCircle2.id = 'bg-circle-2';
        bgCircle2.className = 'bg-circle';
        document.body.appendChild(bgCircle2);
    }
    
    // Start background animation
    animateBackground();
}

// Background animation function
function animateBackground() {
    const circle1 = document.getElementById('bg-circle-1');
    const circle2 = document.getElementById('bg-circle-2');
    
    if (!circle1 || !circle2) return;
    
    let time = 0;
    
    function updateBackground() {
        time += 0.01;
        
        // Gentle floating animation
        const move1X = Math.sin(time * 0.5) * 10;
        const move1Y = Math.cos(time * 0.3) * 15;
        const move2X = Math.cos(time * 0.4) * 15;
        const move2Y = Math.sin(time * 0.6) * 10;
        
        // Gentle pulsing animation
        const pulse1 = 1 + Math.sin(time * 0.2) * 0.05;
        const pulse2 = 1 + Math.cos(time * 0.3) * 0.03;
        
        circle1.style.transform = `translate(${move1X}px, ${move1Y}px) scale(${pulse1})`;
        circle2.style.transform = `translate(${move2X}px, ${move2Y}px) scale(${pulse2})`;
        
        backgroundAnimationId = requestAnimationFrame(updateBackground);
    }
    
    updateBackground();
}

// Stop background animation
function stopBackgroundAnimation() {
    if (backgroundAnimationId) {
        cancelAnimationFrame(backgroundAnimationId);
        backgroundAnimationId = null;
    }
}

// Function to calculate scores based on correct answers
function calculateScores() {
    // Get values from sliders
    const rw1Correct = parseInt(rw1Slider.value);
    const rw2Correct = parseInt(rw2Slider.value);
    const math1Correct = parseInt(math1Slider.value);
    const math2Correct = parseInt(math2Slider.value);
    const isAdaptive = adaptiveToggle.checked;
    
    // Store previous scores for animation
    const prevTotalScore = parseInt(totalScore.textContent);
    
    // Update display values
    rw1Value.textContent = rw1Correct;
    rw2Value.textContent = rw2Correct;
    math1Value.textContent = math1Correct;
    math2Value.textContent = math2Correct;
    
    // Update breakdown table
    rw1Breakdown.textContent = `${rw1Correct}/27`;
    rw2Breakdown.textContent = `${rw2Correct}/27`;
    math1Breakdown.textContent = `${math1Correct}/22`;
    math2Breakdown.textContent = `${math2Correct}/22`;
    
    // Calculate module scores (fixed algorithm to reach 1600)
    let rw1Score, rw2Score, math1Score, math2Score;
    
    if (isAdaptive) {
        // Adaptive scoring - module 2 score depends on module 1 performance
        // Fixed to properly scale to 800 per section (400 per module)
        rw1Score = Math.round((rw1Correct / 27) * 400);
        rw2Score = Math.round((rw2Correct / 27) * 400);
        
        math1Score = Math.round((math1Correct / 22) * 400);
        math2Score = Math.round((math2Correct / 22) * 400);
    } else {
        // Non-adaptive scoring
        rw1Score = Math.round((rw1Correct / 27) * 400);
        rw2Score = Math.round((rw2Correct / 27) * 400);
        
        math1Score = Math.round((math1Correct / 22) * 400);
        math2Score = Math.round((math2Correct / 22) * 400);
    }
    
    // Ensure scores are within valid ranges
    rw1Score = Math.max(0, Math.min(400, rw1Score));
    rw2Score = Math.max(0, Math.min(400, rw2Score));
    math1Score = Math.max(0, Math.min(400, math1Score));
    math2Score = Math.max(0, Math.min(400, math2Score));
    
    // Calculate section scores (sum of two modules)
    const rwSectionScore = rw1Score + rw2Score;
    const mathSectionScore = math1Score + math2Score;
    
    // Calculate total score
    const total = rwSectionScore + mathSectionScore;
    
    // Update display
    rw1ModuleScore.textContent = rw1Score;
    rw2ModuleScore.textContent = rw2Score;
    math1ModuleScore.textContent = math1Score;
    math2ModuleScore.textContent = math2Score;
    
    rwScore.textContent = rwSectionScore;
    mathScore.textContent = mathSectionScore;
    totalScore.textContent = total;
    
    // Add visual feedback based on score change
    const scoreChange = Math.abs(total - prevTotalScore);
    if (scoreChange > 100) {
        totalScore.classList.add('score-change-high');
    } else if (scoreChange > 50) {
        totalScore.classList.add('score-change-medium');
    } else if (scoreChange > 0) {
        totalScore.classList.add('score-change-low');
    }
    
    // Remove animation classes after animation completes
    setTimeout(() => {
        totalScore.classList.remove('score-change-high', 'score-change-medium', 'score-change-low');
    }, 1000);
    
    // Update background based on score
    updateBackgroundBasedOnScore(total);
    
    // Update college matches
    updateCollegeMatches(total);
}

// Function to update background based on score
function updateBackgroundBasedOnScore(score) {
    const circle1 = document.getElementById('bg-circle-1');
    const circle2 = document.getElementById('bg-circle-2');
    
    if (!circle1 || !circle2) return;
    
    // Calculate intensity based on score (400-1600 range)
    const intensity = (score - 400) / 1200; // 0 to 1 scale
    
    // Update background colors based on score
    const primaryOpacity = 0.1 + (intensity * 0.1); // 0.1 to 0.2
    const secondaryOpacity = 0.05 + (intensity * 0.05); // 0.05 to 0.1
    
    circle1.style.background = `linear-gradient(135deg, rgba(67, 97, 238, ${primaryOpacity}) 0%, rgba(247, 37, 133, ${primaryOpacity}) 100%)`;
    circle2.style.background = `linear-gradient(135deg, rgba(247, 37, 133, ${secondaryOpacity}) 0%, rgba(67, 97, 238, ${secondaryOpacity}) 100%)`;
}

// Function to determine match level
function getMatchLevel(studentScore, collegeRange) {
    const [min, max] = collegeRange.split(' - ').map(Number);
    const score = parseInt(studentScore);
    
    if (score >= min && score <= max) {
        return 'high';
    } else if (score >= min - 50 && score <= max + 50) {
        return 'medium';
    } else {
        return 'low';
    }
}

// Function to update college matches based on score
function updateCollegeMatches(studentScore) {
    // Add match level to each college
    filteredColleges = collegeData.map(college => {
        const matchLevel = getMatchLevel(studentScore, college.combined);
        return { ...college, matchLevel };
    });
    
    // Apply filters and sort
    applyFiltersAndSort();
    
    // Reset to first page
    currentPage = 1;
    displayColleges();
}

// Function to apply filters and sorting
function applyFiltersAndSort() {
    // Apply match filter
    if (matchFilter.value !== 'all') {
        filteredColleges = filteredColleges.filter(college => college.matchLevel === matchFilter.value);
    }
    
    // Apply sorting
    switch(sortBy.value) {
        case 'name':
            filteredColleges.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'score-high':
            filteredColleges.sort((a, b) => {
                const aMax = parseInt(a.combined.split(' - ')[1]);
                const bMax = parseInt(b.combined.split(' - ')[1]);
                return bMax - aMax;
            });
            break;
        case 'score-low':
            filteredColleges.sort((a, b) => {
                const aMin = parseInt(a.combined.split(' - ')[0]);
                const bMin = parseInt(b.combined.split(' - ')[0]);
                return aMin - bMin;
            });
            break;
        case 'match':
        default:
            // Sort by match level (high > medium > low)
            const matchOrder = { high: 3, medium: 2, low: 1 };
            filteredColleges.sort((a, b) => matchOrder[b.matchLevel] - matchOrder[a.matchLevel]);
            break;
    }
}

// Function to display colleges for current page
function displayColleges() {
    const startIndex = (currentPage - 1) * collegesPerPage;
    const endIndex = Math.min(startIndex + collegesPerPage, filteredColleges.length);
    const pageColleges = filteredColleges.slice(startIndex, endIndex);
    
    // Update display counters
    displayStart.textContent = startIndex + 1;
    displayEnd.textContent = endIndex;
    totalColleges.textContent = filteredColleges.length;
    
    // Clear current results
    collegeResults.innerHTML = '';
    
    // Add colleges to table
    pageColleges.forEach((college, index) => {
        const row = document.createElement('tr');
        
        // Create logo cell with uniform icon
        const logoCell = document.createElement('td');
        const logoDiv = document.createElement('div');
        logoDiv.className = 'college-logo';
        // Use a building icon instead of the first letter
        logoDiv.innerHTML = '🏫'; // University building emoji
        logoCell.appendChild(logoDiv);
        row.appendChild(logoCell);
        
        // Name cell
        const nameCell = document.createElement('td');
        nameCell.textContent = college.name;
        row.appendChild(nameCell);
        
        // Combined SAT cell
        const combinedCell = document.createElement('td');
        combinedCell.textContent = college.combined;
        row.appendChild(combinedCell);
        
        // Reading & Writing cell
        const readingCell = document.createElement('td');
        readingCell.textContent = college.reading;
        row.appendChild(readingCell);
        
        // Math cell
        const mathCell = document.createElement('td');
        mathCell.textContent = college.math;
        row.appendChild(mathCell);
        
        // Match cell
        const matchCell = document.createElement('td');
        const matchSpan = document.createElement('span');
        matchSpan.className = `match-indicator match-${college.matchLevel}`;
        // matchSpan.textContent = college.matchLevel.charAt(0).toUpperCase() + college.matchLevel.slice(1) + ' Chance';
        matchSpan.textContent = college.matchLevel.charAt(0).toUpperCase() + college.matchLevel.slice(1);
        matchCell.appendChild(matchSpan);
        row.appendChild(matchCell);
        
        collegeResults.appendChild(row);
    });
    
    // Update pagination
    updatePagination();
}

// Function to update pagination buttons
function updatePagination() {
    const totalPages = Math.ceil(filteredColleges.length / collegesPerPage);
    
    // Clear current pagination
    pagination.innerHTML = '';
    
    // Previous button
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayColleges();
        }
    });
    pagination.appendChild(prevButton);
    
    // Page buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.className = i === currentPage ? 'active' : '';
        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayColleges();
        });
        pagination.appendChild(pageButton);
    }
    
    // Next button
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayColleges();
        }
    });
    pagination.appendChild(nextButton);
}

// Add event listeners to all sliders and the adaptive toggle
rw1Slider.addEventListener('input', calculateScores);
rw2Slider.addEventListener('input', calculateScores);
math1Slider.addEventListener('input', calculateScores);
math2Slider.addEventListener('input', calculateScores);
adaptiveToggle.addEventListener('change', calculateScores);

// Add event listeners to filters
sortBy.addEventListener('change', () => {
    applyFiltersAndSort();
    currentPage = 1;
    displayColleges();
});

matchFilter.addEventListener('change', () => {
    applyFiltersAndSort();
    currentPage = 1;
    displayColleges();
});

// Initialize the calculator and college matches when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize background animation
    initBackgroundAnimation();
    
    // Initialize calculator
    calculateScores();
});

// Clean up animation when page is unloaded
window.addEventListener('beforeunload', stopBackgroundAnimation);