class CountdownTimer {
  constructor(sel, date) {
    this.selector = sel;
    this.targetDate = new Date(date);
    this.refs = {
      days: document.getElementById(`${this.selector}`).firstElementChild
        .firstElementChild,
      hours: document.getElementById(`${this.selector}`).firstElementChild
        .nextElementSibling.firstElementChild,
      minutes: document.getElementById(`${this.selector}`).lastElementChild
        .previousElementSibling.firstElementChild,
      seconds: document.getElementById(`${this.selector}`).lastElementChild
        .firstElementChild,
    };
  }
}

const startTimer = obj => {
  setInterval(() => {
    let time = obj.targetDate - new Date();
    let timerArr = [];
    timerArr[0] = Math.floor(time / (1000 * 60 * 60 * 24));
    timerArr[1] = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    timerArr[2] = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    timerArr[3] = Math.floor((time % (1000 * 60)) / 1000);
    const fixedArr = timerArr.map(el => (el < 10 ? '0' + el : el));
    obj.refs.days.textContent = fixedArr[0];
    obj.refs.hours.textContent = fixedArr[1];
    obj.refs.minutes.textContent = fixedArr[2];
    obj.refs.seconds.textContent = fixedArr[3];
  }, 1000);
};

const timerNew = new CountdownTimer('timer-1', 'May 11, 2020');
startTimer(timerNew);
const timerOther = new CountdownTimer('timer-2', 'June 01, 2020');
startTimer(timerOther);

// const startTimer = obj => {
//     setInterval(() => {
//       let time = obj.targetDate - new Date();
//       let timerArr = [];
//       const days = Math.floor(time / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//       const secs = Math.floor((time % (1000 * 60)) / 1000);
//       obj.refs.days.textContent = days;
//       obj.refs.hours.textContent = hours;
//       obj.refs.minutes.textContent = mins;
//       obj.refs.seconds.textContent = secs;
//     }, 1000);
//   };
