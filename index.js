// Welcome Message Function
const welcomeMessage = () => {
    console.log('this script is running')
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

// Display Workout Routine Function
const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

// Add New Goal Function with Duplicate Check
const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value.trim();
    const goalList = document.querySelector('#goalList');
    const existingGoals = Array.from(goalList.getElementsByTagName('li'));

    // Check for duplicates
    const isDuplicate = existingGoals.some(goal => goal.textContent.toLowerCase() === goalInput.toLowerCase());

    if (isDuplicate) {
        alert('This goal has already been added! Please enter a different goal.');
    } else if (goalInput) {
        const newGoal = document.createElement('li');
        newGoal.textContent = goalInput;
        goalList.appendChild(newGoal);
    } else {
        alert('Please enter a valid goal.');
    }
};

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

// Water Intake Update Function
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

// Update Progress Charts Function
const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

// Toggle Theme Function
const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

// Submit Meal Plan Function
const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);

