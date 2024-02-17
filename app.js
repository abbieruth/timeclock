// I'm tired of calculating my pay myself and I don't want to pay for a fancy app

// I need this program to...

// 1. Track/log my time

// 2. Allow me to input time

// 3. Allow me to input hourly wage

// 4. On command, calculate wage based on hours worked since last calculation

// 5. Log paid hours separately from unpaid hours to prevent confusion

// Stopwatch function from class 22; this is just a starting point, will change
// function Stopwatch() {
//     let startTime, endTime, duration = 0;
//     let running = false;

//     this.start = function() {
//         if (running) {
//             throw new Error('Stopwatch is already running')
//         }
//         running = true;

//         startTime = new Date();
//     }
//     this.stop = function() {
//         if (!running) {
//             throw new Error('Stopwatch is already not running')
//         }
//         running = false;
//         endTime = new Date();
//         const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//         duration += seconds;
//     };
//     this.reset = function() {
//         startTime = null;
//         endTime = null;
//         running = false;
//         duration = 0;
//     };

//     Object.defineProperty(this, 'duration', {
//         get: function() {
//             return duration;
//         }
//     });
// }

// const sw = new Stopwatch()
// Check Codepen for stopwatch ideas

function punchIn() {
    // runs stopwatch
    // transfer stopwatch() code here
}

function punchOut() {
    // stop stopwatch, update log, calculate paycheck, update paycheck
}

function checkPunch() {
    // Will check to see if punched in or out, run punchIn or punchOut as needed
}

document.querySelector('#clock').onClick(checkPunch());