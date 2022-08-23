// =============== selection section ==================

const selectBtns = document.getElementsByClassName("select-btn")
for (const selectBtn of selectBtns) {
    selectBtn.addEventListener("click", function (e) {
        const targetBtn = e.target;
        const parent = targetBtn.parentNode.parentNode
        const targetEventPlayer = parent.querySelector("h2")
        const targetEventPlayerName = targetEventPlayer.innerText
        const counter = (document.getElementById("ol").childNodes.length) - 1;
        console.log(counter)
        if (counter >= 5) {
            alert("You Can't Select More Then 5 Player")
        }
        else {
            createNewLi(targetEventPlayerName)

            targetBtn.disabled = true;

            targetBtn.classList.add("bg-secondary");
            
        }
    })
}

function createNewLi(text) {
    const li = document.createElement("li")
    li.innerText = text;
    const ol = document.getElementById("ol")
    ol.appendChild(li)
}


// ================= total cost section ==============

// ------------- comon function ---------------
function inputValueById(targetedElementId) {
    const inputFeildElement = document.getElementById(targetedElementId);
    const inputFeildValue = inputFeildElement.value;
    const inputValue = parseFloat(inputFeildValue);
    return inputValue;
}


const playerExpensiveCalculate = document.getElementById('calculate-player-expenxive-js')
playerExpensiveCalculate.addEventListener('click', function () {
    const perPlayerExpensive = inputValueById('per-player-expensive-js')
    if (perPlayerExpensive >= 0)
    
    {
        const totalPlayer = parseInt((document.getElementById("ol").childNodes.length) - 1);

        const calculate = totalPlayer * perPlayerExpensive;
        const totalPlayerExpensive = document.getElementById('total-player-expensive-js');
        totalPlayerExpensive.innerText = calculate;
    }
    else {
        alert('please fill input fiels!!!')
    }
})


const calculateTotal = document.getElementById('calculate-total-js')
calculateTotal.addEventListener('click', function () {
    const totalPlayerExepensess = document.getElementById('total-player-expensive-js').innerText;
    const managerCost = inputValueById('manager-expensive-js')
    const coachCost = inputValueById('coach-expensive-js')
    const totalPlayerCost = parseFloat(totalPlayerExepensess)
    if ((managerCost >= 0) && (coachCost >= 0)) {
        const totalCost = totalPlayerCost + managerCost + coachCost;
        document.getElementById('total-expensive-js').innerText = totalCost;
    }
    else {
        alert('please fill input field')
    }
})
