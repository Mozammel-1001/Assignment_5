// Background change button
document.getElementById('bg-change-btn').addEventListener('click', function () {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, 0.4)`;
});

// Complete button
let count = 0
document.getElementById('complete-btn-1').addEventListener('click', function () {
    completeBtn('complete-btn-1');
    history('task-1');
});
document.getElementById('complete-btn-2').addEventListener('click', function () {
    completeBtn('complete-btn-2');
    history('task-2');
});
document.getElementById('complete-btn-3').addEventListener('click', function () {
    completeBtn('complete-btn-3');
    history('task-3');
});
document.getElementById('complete-btn-4').addEventListener('click', function () {
    completeBtn('complete-btn-4');
    history('task-4');
});
document.getElementById('complete-btn-5').addEventListener('click', function () {
    completeBtn('complete-btn-5');
    history('task-5');
});
document.getElementById('complete-btn-6').addEventListener('click', function () {
    completeBtn('complete-btn-6');
    history('task-6');
});

function completeBtn(id) {
    alert();
    const btnComplete = document.getElementById(id);
    btnComplete.setAttribute('disabled', true);
    btnComplete.style.backgroundColor = `rgba(55, 82, 253, 0.2)`;

    const task = document.getElementById('task').innerText;
    const convertedTask = parseInt(task);
    const allTask = document.getElementById('all-task').innerText;
    const convertedAllTask = parseInt(allTask);

    const sum1 = convertedTask - 1;
    const sum2 = convertedAllTask - 1;
    document.getElementById('task').innerText = sum1;
    document.getElementById('all-task').innerText = sum2;

    const historyBox = document.getElementById('history-box')

    count++;
    if (count === 6) {
        alert();
    }
}

function history(id) {
    const historyBox = document.getElementById('history-box');
    const taskName = document.getElementById(id).innerText;
    const p = document.createElement('p');
    p.classList.add("text-black", "text-opacity-70");
    p.classList.add("mt-6", "bg-[#F4F7FF]");
    p.classList.add("rounded-lg", "p-2");
    p.innerText = `You have Completed The Task ${taskName} at 12:48:15 PM`;
    historyBox.appendChild(p);
}

// History button
document.getElementById('history-btn').addEventListener('click', function () {
    document.getElementById('history-box').replaceChildren();
});

// Discover something new today
document.getElementById('discover').addEventListener('click', function () {
    window.location.href = "./main.html";
});
