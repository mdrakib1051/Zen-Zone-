// script.js

// ঘড়ি আপডেট করার ফাংশন
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        clockElement.innerText = `${hours}:${minutes}:${seconds}`;
    }
}

// প্রতি সেকেন্ডে ঘড়ি চলবে
setInterval(updateClock, 1000);
updateClock();

// সাউন্ড কন্ট্রোল করার ফাংশন
function toggleSound(id, btn) {
    const sound = document.getElementById(id);
    
    if (!sound) return; // অডিও এলিমেন্ট না থাকলে ফিরে যাবে

    if (sound.paused) {
        // সাউন্ড প্লে করার চেষ্টা
        sound.play().then(() => {
            btn.classList.add('active');
            console.log(id + " playing...");
        }).catch(error => {
            console.error("Playback failed:", error);
            alert("সাউন্ড শুনতে হলে আগে স্ক্রিনে যেকোনো জায়গায় ক্লিক করুন!");
        });
    } else {
        // সাউন্ড বন্ধ করা
        sound.pause();
        btn.classList.remove('active');
    }
}
