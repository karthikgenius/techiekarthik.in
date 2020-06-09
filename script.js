const COMMANDS = {
  id:
    'uid=0(root) gid=0(root) groups=0(root)',
  proj:
    "<a href='http://gui.techiekarthik.in/work-post-1.html' class='success link'>Pivoting Automation (cybersecurity)</a>, <br> \
    <a href='http://gui.techiekarthik.in/work-post-2.html' class='success link'>Jell (cybersecurity)</a>, <br> \
    <a href='http://gui.techiekarthik.in/work-post-3.html' class='success link'>EvilTwin AP (cybersecurity)</a>, <br> \
    <a href='http://gui.techiekarthik.in/work-post-4.html' class='success link'>WiFi Deauther (IoT + cybersecurity)</a>, <br> \
    <a href='http://gui.techiekarthik.in/work-post-5.html' class='success link'>RenderStudioWeb (web platform)</a>, <br>",
  help:
    'Commands: <span class="code">about</span>, <span class="code">exper</span>, <span class="code">edu</span>, <span class="code">skills</span>, <span class="code">proj</span>, <span class="code">contact</span>',
  about:
    "Hey! 👋<br>I'm Karthik. I live for challenging adventures with the intent of making myself productive and also gaining inexperienced experience in this advanced cybersecurity world.",
  skills:
    '<span class="code">Languages:</span> Python, Java, C, Ruby(beginner)<br><span class="code">Technical:</span> Network Pentesting, Kali Linux, System Administration, Vulnerability Assessment, Bash Scripting<br><span class="code">Tools:</span> Aircrack-ng, Metasploit Framework, Nmap, Burpsuite, Nessus, MSFVenom, Wireshark.',
  edu:
    "VR Siddhartha Engineering College - Computer Science, 2018-2021<br> Andhra Polytechnic - Computer Engineering, 2015-2018",
  // resume:
  //   "<a href='./resume.pdf' class='success link'>resume.pdf</a>",
  exper:
    "Security researcher since 2017, doing always insane things. <br>Worked as a security trainer at Securium Fox tech, Feb 2020-July 2020<br>Done Intership as Pentester at Securium Fox Technologies Pvt. Ltd., Jan 2019-June 2019 ",
  contact:
    "You can contact me on any of following links:<br><a href='https://www.linkedin.com/in/karthiksainadh' class='success link'>LinkedIn</a> ,<a href='https://www.instagram.com/karthik_sidhu_official/' class='success link'>Instagram</a>, <a href='https://twitter.com/Karthikgenius19' class='success link'>Twitter</a>"
};
let userInput, terminalOutput;

let prevInputs = [];
let lenUp = -1;

const app = () => {
    userInput = document.getElementById("userInput");
    terminalOutput = document.getElementById("terminalOutput");
    document.getElementById("dummyKeyboard").focus();
    console.log("Application loaded");
};

const execute = function executeCommand(input) {
    let output;
    input = input.toLowerCase();
    if (input.length === 0) {
        return;
    }
    output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
    if (!COMMANDS.hasOwnProperty(input)) {
        output += `<div class="terminal-line">no such command: ${input}</div>`;
        console.log("Oops! no such command");
    } else {
        output += COMMANDS[input];
    }

    terminalOutput.innerHTML = `${
        terminalOutput.innerHTML
        }<div class="terminal-line">${output}</div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
    userInput.innerHTML = input;
    prevInputs.push(input);
    lenUp = prevInputs.length - 1;
    document.getElementById('dummyKeyboard').value = ''
};

const key = function keyEvent(e) {

    const input = document.getElementById('dummyKeyboard').value;
    if (e.key === "Enter") {
        execute(input);
        userInput.innerHTML = "";
    }


};

const backspace = function backSpaceKeyEvent(e) {

    if (e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'ArrowUp' && e.key !== 'ArrowDown') {
        return;
    }

    if (e.key === 'ArrowUp' && lenUp !== -1) {
        document.getElementById('dummyKeyboard').value = prevInputs[lenUp];
        lenUp--;
        if (lenUp < 0)
            lenUp = prevInputs.length - 1;

        return;
    } else if (e.key === 'ArrowDown' && lenUp !== -1) {

        lenUp++;
        if(lenUp===prevInputs.length)
            lenUp=0;

        document.getElementById('dummyKeyboard').value = prevInputs[lenUp];

        return;

    }
    userInput.innerHTML = userInput.innerHTML.slice(
        0,
        userInput.innerHTML.length - 1
    );
};


document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
